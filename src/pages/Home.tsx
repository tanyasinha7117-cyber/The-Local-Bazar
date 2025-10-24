import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { ArrowRight, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';
import heroImage from '@/assets/hero-background.jpg';
import { useLanguage } from '@/context/LanguageContext';
import EmojiSlider from '@/components/EmojiSlider';

const Home = () => {
  const [locationFilter, setLocationFilter] = useState<string>('all');
  const [searchParams] = useSearchParams();
  const { t } = useLanguage();
  const searchQuery = searchParams.get('search') || '';
  
  const locations = ['All Locations', ...new Set(products.map(p => p.location))];
  
  let filteredProducts = locationFilter === 'all' 
    ? products 
    : products.filter(p => p.location === locationFilter);

  if (searchQuery) {
    filteredProducts = filteredProducts.filter(p => 
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.location.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  const scrollToProducts = () => {
    document.getElementById('products-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Emoji Slider */}
      <EmojiSlider />
      
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center">
        {/* Background image with darker overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center brightness-90"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        {/* Text Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 text-blue-300 drop-shadow-lg">
              {t('discoverAuthentic')}
              <span className="block text-blue-200 drop-shadow-md">
                {t('handmadeTreasures')}
              </span>
            </h1>

            {/* Clean white description text */}
            <p className="text-lg font-medium text-white mb-8 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] leading-relaxed">
              {t('heroDesc')}
            </p>

            <div className="flex gap-4 justify-center">
              <Button size="lg" className="group" onClick={scrollToProducts}>
                {t('shopNow')}
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Link to="/seller-register">
                <Button size="lg" variant="outline">
                  {t('becomeSeller')}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products-section" className="container mx-auto px-4 py-16">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2">{t('handcraftedProducts')}</h2>
          <p className="text-muted-foreground">{t('discoverUnique')}</p>
        </div>

        <div className="flex justify-end mb-8">
          <Select value={locationFilter} onValueChange={setLocationFilter}>
            <SelectTrigger className="w-[200px]">
              <MapPin className="h-4 w-4 mr-2" />
              <SelectValue placeholder={t('allLocations')} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">{t('allLocations')}</SelectItem>
              {locations.slice(1).map((location) => (
                <SelectItem key={location} value={location}>
                  {location}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {searchQuery && (
          <p className="mb-4 text-muted-foreground">
            Search results for "{searchQuery}" - {filteredProducts.length} products found
          </p>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;


