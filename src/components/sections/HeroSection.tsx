import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface HeroSectionProps {
  onCTAClick: () => void;
}

const HeroSection = ({ onCTAClick }: HeroSectionProps) => {
  return (
    <section className="pt-32 pb-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight text-foreground">
              Расшифровка анализов вашего ребёнка <span className="text-primary">за 2 минуты</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Загрузите фото анализа ребёнка в Telegram-бот и получите понятную расшифровку с чётким планом действий от команды педиатров
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                onClick={onCTAClick}
                size="lg"
                className="bg-primary hover:bg-secondary text-white font-bold px-8 py-6 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <Icon name="Send" className="mr-2" size={24} />
                Попробовать бесплатно
              </Button>
            </div>
            <div className="flex items-center gap-4 pt-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Icon name="Clock" size={20} className="text-primary" />
                <span>2 минуты</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Shield" size={20} className="text-primary" />
                <span>Разработано врачами</span>
              </div>
            </div>
          </div>
          <div className="relative animate-scale-in">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-3xl"></div>
            <div className="relative bg-white rounded-3xl shadow-2xl p-8 border-2 border-primary/20">
              <img 
                src="https://cdn.poehali.dev/files/2fa2b9e3-2f75-4717-9f53-d980adf346dd.jpg"
                alt="Основатель Смарт Лаб"
                className="w-full h-auto rounded-2xl"
              />
              <div className="mt-6 text-center">
                <p className="text-sm font-semibold text-primary">Создатель сервиса</p>
                <p className="text-lg font-bold text-foreground mt-1">Врач и отец</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
