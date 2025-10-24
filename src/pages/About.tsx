import { useLanguage } from '@/context/LanguageContext';
import { Heart, Users, Globe, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-muted py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('aboutTheBazar')}</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t('aboutDescription')}
            </p>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-card border rounded-lg p-8 md:p-12 shadow-sm">
            <h2 className="text-3xl font-bold mb-6 text-center">{t('ourMission')}</h2>
            <p className="text-lg text-muted-foreground leading-relaxed text-center">
              {t('missionDescription')}
            </p>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-muted py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">{t('ourValues')}</h2>
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
            <div className="bg-card rounded-lg p-8 shadow-sm border">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                <Heart className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{t('supportingArtisans')}</h3>
              <p className="text-muted-foreground">
                {t('supportingArtisansDesc')}
              </p>
            </div>

            <div className="bg-card rounded-lg p-8 shadow-sm border">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{t('communityFirst')}</h3>
              <p className="text-muted-foreground">
                {t('communityFirstDesc')}
              </p>
            </div>

            <div className="bg-card rounded-lg p-8 shadow-sm border">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                <Globe className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{t('preservingHeritage')}</h3>
              <p className="text-muted-foreground">
                {t('preservingHeritageDesc')}
              </p>
            </div>

            <div className="bg-card rounded-lg p-8 shadow-sm border">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                <Award className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{t('qualityGuaranteed')}</h3>
              <p className="text-muted-foreground">
                {t('qualityGuaranteedDesc')}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Join Community Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">{t('joinCommunity')}</h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            {t('joinCommunityDesc')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={() => navigate('/')}
              className="text-lg px-8"
            >
              {t('shopProducts')}
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => navigate('/seller-register')}
              className="text-lg px-8"
            >
              {t('becomeSeller')}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
