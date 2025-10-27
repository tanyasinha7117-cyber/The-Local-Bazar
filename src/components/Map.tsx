import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/context/LanguageContext';

interface MapProps {
  onLocationSelect?: (location: { lat: number; lng: number; name: string }) => void;
}

const Map = ({ onLocationSelect }: MapProps) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState('');
  const [tokenSet, setTokenSet] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    if (!mapContainer.current || !tokenSet || !mapboxToken) return;

    try {
      mapboxgl.accessToken = mapboxToken;
      
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v12',
        center: [78.9629, 20.5937], // Center of India
        zoom: 4,
      });

      map.current.addControl(
        new mapboxgl.NavigationControl({
          visualizePitch: true,
        }),
        'top-right'
      );

      // Add click handler to select locations
      map.current.on('click', (e) => {
        const { lng, lat } = e.lngLat;
        
        // Add a marker
        new mapboxgl.Marker({ color: '#d97706' })
          .setLngLat([lng, lat])
          .addTo(map.current!);

        // Reverse geocoding to get location name
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${lng},${lat}.json?access_token=${mapboxToken}`)
          .then(res => res.json())
          .then(data => {
            const placeName = data.features[0]?.place_name || 'Selected Location';
            onLocationSelect?.({ lat, lng, name: placeName });
          });
      });

      return () => {
        map.current?.remove();
      };
    } catch (error) {
      console.error('Error initializing map:', error);
    }
  }, [tokenSet, mapboxToken, onLocationSelect]);

  if (!tokenSet) {
    return (
      <div className="w-full h-[500px] bg-muted rounded-lg flex items-center justify-center p-8">
        <div className="max-w-md w-full space-y-4">
          <div className="text-center space-y-2">
            <h3 className="text-lg font-semibold">{t('mapboxTokenRequired')}</h3>
            <p className="text-sm text-muted-foreground">
              Please enter your Mapbox public token to display the interactive map.
              Get your token at{' '}
              <a 
                href="https://account.mapbox.com/access-tokens/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                mapbox.com
              </a>
            </p>
          </div>
          <div className="flex gap-2">
            <Input
              type="text"
              placeholder="pk.eyJ1..."
              value={mapboxToken}
              onChange={(e) => setMapboxToken(e.target.value)}
              className="flex-1"
            />
            <Button 
              onClick={() => setTokenSet(true)}
              disabled={!mapboxToken.trim()}
            >
              {t('setToken')}
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-[500px] rounded-lg overflow-hidden shadow-lg">
      <div ref={mapContainer} className="absolute inset-0" />
    </div>
  );
};

export default Map;
