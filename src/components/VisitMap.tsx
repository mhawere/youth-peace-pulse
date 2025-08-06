import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { DivIcon, LatLngExpression } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Users, Eye } from 'lucide-react';

interface VisitData {
  country: string;
  city: string;
  region: string;
  latitude: number;
  longitude: number;
  visit_count: number;
  latest_visit: string;
}

const VisitMap = () => {
  const [visitData, setVisitData] = useState<VisitData[]>([]);
  const [totalVisits, setTotalVisits] = useState(0);
  const [loading, setLoading] = useState(true);

  // Load visit data
  const loadVisitData = async () => {
    try {
      const { data, error } = await supabase.rpc('get_visit_stats_by_location');
      
      if (error) {
        console.error('Error fetching visit data:', error);
        return;
      }

      setVisitData(data || []);
      const total = data?.reduce((sum: number, item: VisitData) => sum + item.visit_count, 0) || 0;
      setTotalVisits(total);
    } catch (error) {
      console.error('Error loading visit data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadVisitData();
  }, []);

  // Create custom marker icon
  const createCustomIcon = (visitCount: number): DivIcon => {
    const size = Math.min(15 + visitCount * 3, 40);
    return new DivIcon({
      html: `<div style="
        width: ${size}px;
        height: ${size}px;
        background-color: #3b82f6;
        border: 2px solid white;
        border-radius: 50%;
        box-shadow: 0 2px 8px rgba(0,0,0,0.3);
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-size: ${Math.max(10, size * 0.3)}px;
        font-weight: bold;
      ">${visitCount}</div>`,
      className: 'custom-marker',
      iconSize: [size, size],
      iconAnchor: [size / 2, size / 2],
    });
  };

  if (loading) {
    return (
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center justify-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-4">
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Eye className="h-5 w-5 text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">Total Visits</p>
                <p className="text-2xl font-bold">{totalVisits.toLocaleString()}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <MapPin className="h-5 w-5 text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">Unique Locations</p>
                <p className="text-2xl font-bold">{visitData.length}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Users className="h-5 w-5 text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">Countries</p>
                <p className="text-2xl font-bold">
                  {new Set(visitData.map(v => v.country)).size}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Map */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <MapPin className="h-5 w-5" />
            <span>Global Visitor Map</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="w-full h-96 rounded-lg overflow-hidden border">
              <MapContainer
                center={[20, 0] as LatLngExpression}
                zoom={2}
                style={{ height: '100%', width: '100%' }}
                scrollWheelZoom={true}
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {visitData.map((visit, index) => (
                  visit.latitude && visit.longitude ? (
                    <Marker
                      key={`${visit.country}-${visit.city}-${index}`}
                      position={[visit.latitude, visit.longitude] as LatLngExpression}
                      icon={createCustomIcon(visit.visit_count)}
                    >
                      <Popup>
                        <div className="text-center">
                          <h3 className="font-bold text-lg mb-2">
                            {visit.city}, {visit.country}
                          </h3>
                          <div className="flex items-center justify-center gap-2 mb-1">
                            <Users className="h-4 w-4" />
                            <span>
                              {visit.visit_count} visit{visit.visit_count !== 1 ? 's' : ''}
                            </span>
                          </div>
                          <div className="text-sm text-muted-foreground">
                            Latest: {new Date(visit.latest_visit).toLocaleDateString()}
                          </div>
                        </div>
                      </Popup>
                    </Marker>
                  ) : null
                ))}
              </MapContainer>
            </div>
            
            {/* Top Locations */}
            <div>
              <h3 className="font-semibold mb-3">Top Locations</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                {visitData.slice(0, 6).map((visit, index) => (
                  <div 
                    key={`${visit.country}-${visit.city}`}
                    className="flex items-center justify-between p-2 bg-muted rounded-lg"
                  >
                    <div className="flex-1">
                      <p className="font-medium text-sm">
                        {visit.city}, {visit.country}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {new Date(visit.latest_visit).toLocaleDateString()}
                      </p>
                    </div>
                    <Badge variant="secondary">
                      {visit.visit_count}
                    </Badge>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default VisitMap;