import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface FinalCTAProps {
  onCTAClick: () => void;
}

const FinalCTA = ({ onCTAClick }: FinalCTAProps) => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-primary to-secondary text-white">
      <div className="container mx-auto max-w-4xl text-center space-y-8">
        <h2 className="text-4xl md:text-5xl font-bold">
          Получите расшифровку анализа прямо сейчас
        </h2>
        <p className="text-xl opacity-90">
          Загрузите анализ в бот и получите подробный отчёт за 2 минуты
        </p>
        <Button 
          onClick={onCTAClick}
          size="lg"
          className="bg-white text-primary hover:bg-white/90 font-bold px-12 py-6 text-lg rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105"
        >
          <Icon name="Send" className="mr-2" size={24} />
          Перейти в Telegram-бот
        </Button>
      </div>
    </section>
  );
};

export default FinalCTA;
