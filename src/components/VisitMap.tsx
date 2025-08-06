import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
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
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [visitData, setVisitData] = useState<VisitData[]>([]);
  const [totalVisits, setTotalVisits] = useState(0);
  const [mapboxToken, setMapboxToken] = useState('');
  const [isTokenSet, setIsTokenSet] = useState(false);
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

  const initializeMap = () => {
    if (!mapContainer.current || !mapboxToken) return;

    mapboxgl.accessToken = mapboxToken;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v11',
      zoom: 2,
      center: [0, 20],
      projection: 'globe' as any,
    });

    // Add navigation controls
    map.current.addControl(
      new mapboxgl.NavigationControl({
        visualizePitch: true,
      }),
      'top-right'
    );

    // Add atmosphere and fog effects
    map.current.on('style.load', () => {
      map.current?.setFog({
        color: 'rgb(255, 255, 255)',
        'high-color': 'rgb(200, 200, 225)',
        'horizon-blend': 0.2,
      });

      // Add visit markers
      visitData.forEach((visit) => {
        if (visit.latitude && visit.longitude) {
          // Create custom marker element
          const markerElement = document.createElement('div');
          markerElement.className = 'visit-marker';
          markerElement.style.width = `${Math.min(10 + visit.visit_count * 2, 30)}px`;
          markerElement.style.height = `${Math.min(10 + visit.visit_count * 2, 30)}px`;
          markerElement.style.backgroundColor = '#3b82f6';
          markerElement.style.borderRadius = '50%';
          markerElement.style.border = '2px solid white';
          markerElement.style.cursor = 'pointer';
          markerElement.style.boxShadow = '0 2px 8px rgba(0,0,0,0.3)';

          // Create popup content
          const popup = new mapboxgl.Popup({ offset: 25 })
            .setHTML(`
              <div style="padding: 8px;">
                <h3 style="margin: 0 0 8px 0; font-weight: bold; color: #1f2937;">
                  ${visit.city}, ${visit.country}
                </h3>
                <div style="display: flex; align-items: center; gap: 4px; margin-bottom: 4px;">
                  <span style="font-size: 14px;">👥</span>
                  <span style="font-size: 14px; color: #6b7280;">
                    ${visit.visit_count} visit${visit.visit_count !== 1 ? 's' : ''}
                  </span>
                </div>
                <div style="display: flex; align-items: center; gap: 4px;">
                  <span style="font-size: 14px;">📅</span>
                  <span style="font-size: 12px; color: #9ca3af;">
                    Latest: ${new Date(visit.latest_visit).toLocaleDateString()}
                  </span>
                </div>
              </div>
            `);

          // Add marker to map
          new mapboxgl.Marker(markerElement)
            .setLngLat([visit.longitude, visit.latitude])
            .setPopup(popup)
            .addTo(map.current!);
        }
      });
    });
  };

  const handleTokenSubmit = () => {
    if (mapboxToken.trim()) {
      setIsTokenSet(true);
      localStorage.setItem('mapbox-token', mapboxToken);
      setTimeout(initializeMap, 100);
    }
  };

  useEffect(() => {
    // Check for saved token
    const savedToken = localStorage.getItem('mapbox-token');
    if (savedToken) {
      setMapboxToken(savedToken);
      setIsTokenSet(true);
      setTimeout(initializeMap, 100);
    }
  }, [visitData]);

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
          {!isTokenSet ? (
            <div className="space-y-4">
              <div className="bg-muted p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Mapbox Token Required</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  To display the interactive map, please enter your Mapbox public token. 
                  You can get one for free at{' '}
                  <a 
                    href="https://mapbox.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    mapbox.com
                  </a>
                </p>
                <div className="flex space-x-2">
                  <Input
                    type="text"
                    placeholder="pk.ey..."
                    value={mapboxToken}
                    onChange={(e) => setMapboxToken(e.target.value)}
                    className="flex-1"
                  />
                  <Button onClick={handleTokenSubmit}>
                    Set Token
                  </Button>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div ref={mapContainer} className="w-full h-96 rounded-lg" />
              
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
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default VisitMap;