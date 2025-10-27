import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const SellerRegister = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Registration submitted!',
      description: 'We will review your application and get back to you soon.',
    });
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-center">Become a Seller</h1>
        <p className="text-muted-foreground text-center mb-8">
          Join our community of artisans and start selling your handcrafted products
        </p>

        <Card>
          <CardHeader>
            <CardTitle>Seller Registration Form</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" required />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" required />
                </div>
              </div>

              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" required />
              </div>

              <div>
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" type="tel" required />
              </div>

              <div>
                <Label htmlFor="businessName">Business Name</Label>
                <Input id="businessName" required />
              </div>

              <div>
                <Label htmlFor="location">Location/City</Label>
                <Input id="location" required />
              </div>

              <div>
                <Label htmlFor="craftType">Type of Craft</Label>
                <Input id="craftType" placeholder="e.g., Pottery, Textiles, Wood Carving" required />
              </div>

              <div>
                <Label htmlFor="experience">Years of Experience</Label>
                <Input id="experience" type="number" required />
              </div>

              <div>
                <Label htmlFor="description">Tell us about your craft</Label>
                <Textarea 
                  id="description" 
                  rows={5}
                  placeholder="Describe your craft, techniques, and what makes your products unique"
                  required 
                />
              </div>

              <Button type="submit" className="w-full" size="lg">
                Submit Application
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SellerRegister;
