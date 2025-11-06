import { Button } from '@/components/ui/button';

interface HeaderProps {
  isScrolled: boolean;
  onCTAClick: () => void;
}

const Header = ({ isScrolled, onCTAClick }: HeaderProps) => {
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img 
            src="https://cdn.poehali.dev/files/3e9d412e-2338-4611-8642-cb73b2b4d2e3.png" 
            alt="Смарт Лаб"
            className="h-10 w-10"
          />
          <span className="text-xl font-bold text-foreground">Смарт Лаб</span>
        </div>
        <Button 
          onClick={onCTAClick}
          className="bg-primary hover:bg-secondary text-white font-semibold px-6 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
        >
          Перейти в бот
        </Button>
      </div>
    </header>
  );
};

export default Header;
