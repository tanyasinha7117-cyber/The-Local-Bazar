import { Mic, Volume2, VolumeX } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useVoiceAssistance } from '@/hooks/useVoiceAssistance';
import { useLanguage } from '@/context/LanguageContext';

interface VoiceAssistantProps {
  onVoiceInput?: (text: string) => void;
  textToSpeak?: string;
}

const VoiceAssistant = ({ onVoiceInput, textToSpeak }: VoiceAssistantProps) => {
  const { isListening, isSpeaking, speak, startListening, stopSpeaking } = useVoiceAssistance();
  const { t } = useLanguage();

  const handleMicClick = () => {
    if (onVoiceInput) {
      startListening(onVoiceInput);
    }
  };

  const handleSpeakClick = () => {
    if (isSpeaking) {
      stopSpeaking();
    } else if (textToSpeak) {
      speak(textToSpeak);
    }
  };

  return (
    <div className="flex gap-2">
      {onVoiceInput && (
        <Button
          type="button"
          variant="ghost"
          size="icon"
          onClick={handleMicClick}
          disabled={isListening}
          className={isListening ? 'text-primary animate-pulse' : ''}
        >
          <Mic className="h-5 w-5" />
        </Button>
      )}
      {textToSpeak && (
        <Button
          type="button"
          variant="ghost"
          size="icon"
          onClick={handleSpeakClick}
        >
          {isSpeaking ? (
            <VolumeX className="h-5 w-5" />
          ) : (
            <Volume2 className="h-5 w-5" />
          )}
        </Button>
      )}
    </div>
  );
};

export default VoiceAssistant;
