import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface FloatingCTAProps {
  onCTAClick: () => void;
}

const FloatingCTA = ({ onCTAClick }: FloatingCTAProps) => {
  return (
    <div className="fixed bottom-[120px] right-8 z-50">
      <Button 
        onClick={onCTAClick}
        size="lg"
        className="bg-gradient-to-r from-primary to-secondary text-white font-bold px-6 py-6 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105"
      >
        <Icon name="MessageCircle" className="mr-2" size={24} />
        Открыть бот
      </Button>
    </div>
  );
};

export default FloatingCTA;
