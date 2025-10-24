import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'hi';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    home: 'Home',
    about: 'About us',
    location: 'Location',
    contacts: 'Contacts',
    search: 'Search products...',
    cart: 'Cart',
    shopNow: 'Shop Now',
    becomeSeller: 'Become a Seller',
    discoverAuthentic: 'Discover Authentic',
    handmadeTreasures: 'Handmade Treasures',
    heroDesc: 'Support local artisans and explore unique handcrafted products from across India. Every purchase tells a story of tradition and craftsmanship.',
    handcraftedProducts: 'Handcrafted Products',
    discoverUnique: 'Discover unique items from talented local artisans',
    allLocations: 'All Locations',
    viewDetails: 'View Details',
    backToProducts: 'Back to Products',
    description: 'Description',
    artisan: 'Artisan',
    madeIn: 'Made in',
    videoSection: 'Making Process Video',
    comingSoon: 'Coming Soon',
    addToCart: 'Add to Cart',
    buyNow: 'Buy Now',
    aboutUs: 'About The Local Bazar',
    ourMission: 'Our Mission',
    ourValues: 'Our Values',
    whyChooseUs: 'Why Choose Us?',
    joinCommunity: 'Join Our Community',
    aboutTheBazar: 'About The Local Bazar',
    aboutDescription: "The Local Bazar is more than just a marketplace—it's a celebration of India's rich heritage of handcrafted excellence. We connect talented artisans with customers who value authentic, handmade products.",
    missionDescription: "To create a sustainable ecosystem where traditional artisans can thrive by connecting them directly with customers who appreciate the value of handcrafted products. We aim to preserve India's cultural heritage while providing artisans with fair compensation and global reach.",
    supportingArtisans: 'Supporting Artisans',
    supportingArtisansDesc: 'We believe in fair trade and empowering local craftspeople by providing them a platform to reach customers directly.',
    communityFirst: 'Community First',
    communityFirstDesc: 'Building a strong community of artisans and customers who appreciate authentic handcrafted products.',
    preservingHeritage: 'Preserving Heritage',
    preservingHeritageDesc: 'Helping preserve traditional crafts and techniques that have been passed down through generations.',
    qualityGuaranteed: 'Quality Guaranteed',
    qualityGuaranteedDesc: 'Every product is carefully vetted to ensure the highest standards of craftsmanship and authenticity.',
    joinCommunityDesc: "Whether you're an artisan looking to showcase your craft or a customer seeking authentic handmade products, we'd love to have you as part of The Local Bazar family.",
    shopProducts: 'Shop Products',
    price: 'Price',
    rupees: 'rupees',
    madeBy: 'Made by',
    in: 'in',
    makingProcessVideo: 'Making Process Video',
    artisanLocations: 'Artisan Locations',
    findArtisans: 'Find Artisans Near You',
    getMyLocation: 'Get My Location',
    activeLocations: 'Active Locations',
    viewProducts: 'View Products',
    checkout: 'Checkout',
    paymentMethod: 'Payment Method',
    card: 'Card',
    upi: 'UPI',
    cod: 'Cash on Delivery',
    placeOrder: 'Place Order',
  },
  hi: {
    home: 'होम',
    about: 'हमारे बारे में',
    location: 'स्थान',
    contacts: 'संपर्क',
    search: 'उत्पाद खोजें...',
    cart: 'कार्ट',
    shopNow: 'अभी खरीदें',
    becomeSeller: 'विक्रेता बनें',
    discoverAuthentic: 'खोजें प्रामाणिक',
    handmadeTreasures: 'हस्तनिर्मित खजाने',
    heroDesc: 'स्थानीय कारीगरों का समर्थन करें और भारत भर से अनूठे हस्तनिर्मित उत्पादों का अन्वेषण करें। हर खरीद परंपरा और शिल्प कौशल की एक कहानी बताती है।',
    handcraftedProducts: 'हस्तनिर्मित उत्पाद',
    discoverUnique: 'प्रतिभाशाली स्थानीय कारीगरों से अनूठी वस्तुओं की खोज करें',
    allLocations: 'सभी स्थान',
    viewDetails: 'विवरण देखें',
    backToProducts: 'उत्पादों पर वापस जाएं',
    description: 'विवरण',
    artisan: 'कारीगर',
    madeIn: 'निर्माण स्थान',
    videoSection: 'निर्माण प्रक्रिया वीडियो',
    comingSoon: 'जल्द आ रहा है',
    addToCart: 'कार्ट में जोड़ें',
    buyNow: 'अभी खरीदें',
    aboutUs: 'द लोकल बाज़ार के बारे में',
    ourMission: 'हमारा मिशन',
    ourValues: 'हमारे मूल्य',
    whyChooseUs: 'हमें क्यों चुनें?',
    joinCommunity: 'हमारे समुदाय में शामिल हों',
    aboutTheBazar: 'द लोकल बाजार के बारे में',
    aboutDescription: 'द लोकल बाजार सिर्फ एक बाजार से कहीं अधिक है—यह भारत की समृद्ध हस्तशिल्प विरासत का उत्सव है। हम प्रतिभाशाली कारीगरों को उन ग्राहकों से जोड़ते हैं जो प्रामाणिक, हस्तनिर्मित उत्पादों को महत्व देते हैं।',
    missionDescription: 'एक स्थायी पारिस्थितिकी तंत्र बनाना जहां पारंपरिक कारीगर उन ग्राहकों से सीधे जुड़कर फल-फूल सकें जो हस्तनिर्मित उत्पादों के मूल्य की सराहना करते हैं।',
    supportingArtisans: 'कारीगरों का समर्थन',
    supportingArtisansDesc: 'हम निष्पक्ष व्यापार में विश्वास करते हैं और स्थानीय कारीगरों को सीधे ग्राहकों तक पहुंचने के लिए एक मंच प्रदान करते हैं।',
    communityFirst: 'समुदाय पहले',
    communityFirstDesc: 'कारीगरों और ग्राहकों का एक मजबूत समुदाय बनाना जो प्रामाणिक हस्तनिर्मित उत्पादों की सराहना करते हैं।',
    preservingHeritage: 'विरासत का संरक्षण',
    preservingHeritageDesc: 'पारंपरिक शिल्प और तकनीकों को संरक्षित करने में मदद करना जो पीढ़ियों से चली आ रही हैं।',
    qualityGuaranteed: 'गुणवत्ता की गारंटी',
    qualityGuaranteedDesc: 'हर उत्पाद को सावधानीपूर्वक जांचा जाता है।',
    joinCommunityDesc: 'चाहे आप अपनी कला को प्रदर्शित करने के इच्छुक कारीगर हों या प्रामाणिक हस्तनिर्मित उत्पादों की तलाश में ग्राहक।',
    shopProducts: 'उत्पाद खरीदें',
    price: 'कीमत',
    rupees: 'रुपये',
    madeBy: 'द्वारा निर्मित',
    in: 'में',
    makingProcessVideo: 'निर्माण प्रक्रिया वीडियो',
    artisanLocations: 'कारीगर स्थान',
    findArtisans: 'अपने पास कारीगर खोजें',
    getMyLocation: 'मेरा स्थान प्राप्त करें',
    activeLocations: 'सक्रिय स्थान',
    viewProducts: 'उत्पाद देखें',
    checkout: 'चेकआउट',
    paymentMethod: 'भुगतान विधि',
    card: 'कार्ड',
    upi: 'यूपीआई',
    cod: 'कैश ऑन डिलीवरी',
    placeOrder: 'ऑर्डर दें',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};
