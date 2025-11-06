import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface HowItWorksProps {
  hoveredStep: number | null;
  onStepHover: (index: number | null) => void;
}

const HowItWorks = ({ hoveredStep, onStepHover }: HowItWorksProps) => {
  const steps = [
    {
      icon: 'Upload',
      title: 'Загрузите анализ',
      description: 'Сфотографируйте или загрузите файл с результатами анализов в Telegram-бот'
    },
    {
      icon: 'Sparkles',
      title: 'Получите расшифровку',
      description: 'Через 2 минуты бот пришлёт подробный отчёт с пояснениями по каждому показателю'
    },
    {
      icon: 'CheckCircle2',
      title: 'Действуйте спокойно',
      description: 'Узнайте степень критичности, вероятные состояния и чёткий план действий'
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
          Как это работает
        </h2>
        <p className="text-xl text-center text-muted-foreground mb-16">
          Три простых шага до результата
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <Card 
              key={index}
              className={`border-2 border-primary/10 hover:border-primary/30 transition-all duration-300 cursor-pointer hover:shadow-xl ${
                hoveredStep === index ? 'scale-105' : ''
              }`}
              onMouseEnter={() => onStepHover(index)}
              onMouseLeave={() => onStepHover(null)}
            >
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                  <Icon name={step.icon as any} size={32} className="text-white" />
                </div>
                <CardTitle className="text-2xl">{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-muted-foreground">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
