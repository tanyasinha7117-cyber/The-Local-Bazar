import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, Search, User } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';
import { useLanguage } from '@/context/LanguageContext';
import LanguageToggle from '@/components/LanguageToggle';
import VoiceAssistant from '@/components/VoiceAssistant';
import { useState } from 'react';
import logo from '@/assets/logo.png';

const Navbar = () => {
  const { totalItems } = useCart();
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (searchQuery.trim()) {
      navigate(`/?search=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const handleVoiceSearch = (text: string) => {
    setSearchQuery(text);
    navigate(`/?search=${encodeURIComponent(text)}`);
  };

  return (
    <nav className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="The Local Bazar" className="h-12 w-auto" />
          </Link>
          
          <div className="hidden md:flex items-center gap-6">
            <Link to="/" className="hover:text-primary transition-colors">{t('home')}</Link>
            <Link to="/about" className="hover:text-primary transition-colors">{t('about')}</Link>
            <Link to="/location" className="hover:text-primary transition-colors">{t('location')}</Link>
            <Link to="/contacts" className="hover:text-primary transition-colors">{t('contacts')}</Link>
          </div>

          <div className="flex items-center gap-3">
            <form onSubmit={handleSearch} className="hidden md:flex relative w-64">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => e.stopPropagation()}
                placeholder={t('search')}
                className="pl-10"
              />
            </form>
            <VoiceAssistant onVoiceInput={handleVoiceSearch} />

            <LanguageToggle />
            
            <Link to="/cart">
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </Button>
            </Link>
            
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
