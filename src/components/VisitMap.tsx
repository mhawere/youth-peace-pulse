import React, { useEffect, useState, useRef } from 'react';
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
  const [hoveredLocation, setHoveredLocation] = useState<VisitData | null>(null);

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

  // Simple coordinate to pixel conversion for world map
  const coordToPixel = (lat: number, lng: number, width: number, height: number) => {
    const x = ((lng + 180) / 360) * width;
    const y = ((90 - lat) / 180) * height;
    return { x, y };
  };

  const WorldMap = () => {
    const svgRef = useRef<SVGSVGElement>(null);
    const width = 800;
    const height = 400;

    return (
      <div className="relative bg-blue-50 rounded-lg overflow-hidden" style={{ width: '100%', height: '400px' }}>
        <svg 
          ref={svgRef}
          width="100%" 
          height="100%" 
          viewBox={`0 0 ${width} ${height}`}
          className="absolute inset-0"
        >
          {/* Simple world map background */}
          <rect width={width} height={height} fill="#e0f2fe" />
          
          {/* Continents (simplified shapes) */}
          <g fill="#10b981" opacity="0.3">
            {/* North America */}
            <path d="M50 80 L200 60 L220 120 L180 180 L100 160 Z" />
            {/* South America */}
            <path d="M150 200 L200 200 L180 320 L160 340 L140 300 Z" />
            {/* Europe */}
            <path d="M380 60 L450 70 L440 120 L400 110 Z" />
            {/* Africa */}
            <path d="M380 120 L450 130 L460 240 L400 250 L390 180 Z" />
            {/* Asia */}
            <path d="M450 50 L650 60 L680 150 L500 140 Z" />
            {/* Australia */}
            <path d="M580 280 L650 290 L640 320 L590 310 Z" />
          </g>

          {/* Visit markers */}
          {visitData.map((visit, index) => {
            if (!visit.latitude || !visit.longitude) return null;
            
            const { x, y } = coordToPixel(visit.latitude, visit.longitude, width, height);
            const size = Math.min(4 + visit.visit_count * 2, 20);
            
            return (
              <g key={`${visit.country}-${visit.city}-${index}`}>
                <circle
                  cx={x}
                  cy={y}
                  r={size}
                  fill="#3b82f6"
                  stroke="white"
                  strokeWidth="2"
                  className="cursor-pointer hover:fill-blue-600 transition-colors"
                  onMouseEnter={() => setHoveredLocation(visit)}
                  onMouseLeave={() => setHoveredLocation(null)}
                />
                <text
                  x={x}
                  y={y + 2}
                  textAnchor="middle"
                  fontSize={Math.max(8, size * 0.6)}
                  fill="white"
                  fontWeight="bold"
                  pointerEvents="none"
                >
                  {visit.visit_count}
                </text>
              </g>
            );
          })}
        </svg>

        {/* Tooltip */}
        {hoveredLocation && (
          <div className="absolute top-4 left-4 bg-white p-3 rounded-lg shadow-lg border z-10">
            <h3 className="font-bold text-sm">
              {hoveredLocation.city}, {hoveredLocation.country}
            </h3>
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <Users className="h-3 w-3" />
              <span>{hoveredLocation.visit_count} visit{hoveredLocation.visit_count !== 1 ? 's' : ''}</span>
            </div>
            <div className="text-xs text-muted-foreground">
              Latest: {new Date(hoveredLocation.latest_visit).toLocaleDateString()}
            </div>
          </div>
        )}
      </div>
    );
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
            <WorldMap />
            
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