import { Product } from '@/types/product';
import productBasket from '@/assets/product-basket.jpg';
import productPottery from '@/assets/product-pottery.jpg';
import productTextile from '@/assets/product-textile.jpg';
import productWooden from '@/assets/product-wooden.jpg';
import makingVideo from '@/assets/making-video.mp4';
import Wooden from '@/assets/Wooden.mp4';
import Jute from '@/assets/Jute.mp4';
import Pot from '@/assets/pot.mp4';

export const products: Product[] = [
  {
    id: 1,
    name: 'Handwoven Jute Basket',
    name_hi: 'हाथ से बुनी जूट की टोकरी',
    description: 'Beautiful handwoven basket made from natural jute fibers. Perfect for storage and decoration.',
    description_hi: 'प्राकृतिक जूट रेशों से बनी सुंदर हाथ से बुनी टोकरी। भंडारण और सजावट के लिए उत्तम।',
    price: 399,
    image: productBasket,
    video: Jute,
    location: 'Kancharapara',
    artisan: 'Radha Devi',
    artisan_hi: 'राधा देवी'
  },
  {
    id: 2,
    name: 'Terracotta Pottery Vase',
    name_hi: 'टेराकोटा मिट्टी का फूलदान',
    description: 'Traditional terracotta vase with intricate hand-carved patterns. Made using age-old pottery techniques.',
    description_hi: 'पारंपरिक टेराकोटा फूलदान जिसमें बारीक हाथ से उकेरे गए पैटर्न हैं। प्राचीन कुम्हार तकनीकों से बनाया गया।',
    price: 499,
    image: productPottery,
    video: Pot,
    location: 'Kalyani',
    artisan: 'Mohan Kumar',
    artisan_hi: 'मोहन कुमार'
  },
  {
    id: 3,
    name: 'Block Print Cotton Textile',
    name_hi: 'ब्लॉक प्रिंट कॉटन टेक्सटाइल',
    description: 'Vibrant handwoven cotton textile featuring traditional block print designs with natural dyes.',
    description_hi: 'प्राकृतिक रंगों के साथ पारंपरिक ब्लॉक प्रिंट डिज़ाइन वाला जीवंत हाथ से बुना कॉटन कपड़ा।',
    price: 227,
    image: productTextile,
    video: makingVideo,
    location: 'Patna',
    artisan: 'Anita Sharma',
    artisan_hi: 'अनिता शर्मा'
  },
  {
    id: 4,
    name: 'Carved Wooden Decorative Panel',
    name_hi: 'नक्काशीदार लकड़ी का सजावटी पैनल',
    description: 'Exquisite hand-carved wooden panel featuring traditional Indian motifs. A perfect wall decoration piece.',
    description_hi: 'पारंपरिक भारतीय रूपांकनों वाला बेहतरीन हाथ से नक्काशी किया गया लकड़ी का पैनल। दीवार सजावट के लिए उत्तम।',
    price: 699,
    image: productWooden,
    video: Wooden,
    location: 'Badaun',
    artisan: 'Ravi Verma',
    artisan_hi: 'रवि वर्मा'
  }
];
