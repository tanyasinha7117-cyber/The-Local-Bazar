import { useState } from 'react';
import { MapPin, Navigation, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { useLanguage } from '@/context/LanguageContext';
import { products } from '@/data/products';
import ProductCard from '@/components/ProductCard';

const Location = () => {
  const [userLocation, setUserLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [locationName, setLocationName] = useState<string>('');
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);
  const { toast } = useToast();
  const { t } = useLanguage();

  const getLocation = () => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ lat: latitude, lng: longitude });
          
          // Reverse geocoding to get location name
          fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`)
            .then(res => res.json())
            .then(data => {
              setLocationName(data.display_name || 'Location found');
              toast({
                title: 'Location detected',
                description: 'Your location has been successfully detected.',
              });
            })
            .catch(() => {
              setLocationName(`${latitude.toFixed(4)}, ${longitude.toFixed(4)}`);
            });
        },
        (error) => {
          toast({
            title: 'Location error',
            description: 'Unable to detect your location. Please enable location services.',
            variant: 'destructive',
          });
        }
      );
    } else {
      toast({
        title: 'Not supported',
        description: 'Geolocation is not supported by your browser.',
        variant: 'destructive',
      });
    }
  };

  const artisanLocations = [
    { name: 'Kancharapara', artisans: 5, lat: 22.9447, lng: 88.4346 },
    { name: 'Kalyani', artisans: 8, lat: 22.9750, lng: 88.4344 },
    { name: 'Patna', artisans: 12, lat: 25.5941, lng: 85.1376 },
    { name: 'Badaun', artisans: 6, lat: 28.0339, lng: 79.1251 },
  ];

  const locationProducts = selectedLocation 
    ? products.filter(p => p.location === selectedLocation)
    : [];

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">{t('artisanLocations')}</h1>
      

      <div className="grid lg:grid-cols-3 gap-8 mb-12">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                {t('findArtisans')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Button onClick={getLocation} className="mb-4">
                <Navigation className="mr-2 h-4 w-4" />
                {t('getMyLocation')}
              </Button>
              
              {userLocation && (
                <div className="p-4 bg-accent rounded-lg">
                  <p className="text-sm font-semibold mb-1">Your Location:</p>
                  <p className="text-sm text-muted-foreground">{locationName}</p>
                  <p className="text-xs text-muted-foreground mt-2">
                    Coordinates: {userLocation.lat.toFixed(4)}, {userLocation.lng.toFixed(4)}
                  </p>
                </div>
              )}

              {userLocation ? (
                <div className="mt-6 rounded-lg overflow-hidden aspect-video border">
                  <iframe
                    className="w-full h-full"
                    src={`https://www.google.com/maps?q=${userLocation.lat},${userLocation.lng}&z=14&output=embed`}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Google Map - Your Location"
                  />
                </div>
              ) : (
                <div className="mt-6 p-6 bg-muted rounded-lg aspect-video flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-16 w-16 text-primary mx-auto mb-4" />
                    <p className="text-muted-foreground">Interactive map will display here after detecting your location</p>
                    <p className="text-sm text-muted-foreground mt-2">
                      Click "{t('getMyLocation')}" to show your current location
                    </p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle>{t('activeLocations')}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {artisanLocations.map((location) => (
                  <div key={location.name} className="border-b pb-3 last:border-0">
                    <div className="flex items-start gap-2">
                      <MapPin className="h-4 w-4 text-primary mt-1" />
                      <div>
                        <p className="font-semibold">{location.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {location.artisans} active artisans
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {artisanLocations.map((location) => (
          <Card key={location.name} className="cursor-pointer hover:shadow-lg transition-shadow" onClick={() => setSelectedLocation(location.name)}>
            <CardContent className="p-6">
              <MapPin className="h-8 w-8 text-primary mb-3" />
              <h3 className="font-bold text-lg mb-2">{location.name}</h3>
              <p className="text-sm text-muted-foreground mb-3">
                {location.artisans} Artisans
              </p>
              <Button variant="outline" size="sm" className="w-full">
                {t('viewProducts')}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {selectedLocation && (
        <div className="mt-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold">Products from {selectedLocation}</h2>
            <Button variant="ghost" onClick={() => setSelectedLocation(null)}>
              <X className="h-4 w-4 mr-2" />
              Clear Filter
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {locationProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Location;
