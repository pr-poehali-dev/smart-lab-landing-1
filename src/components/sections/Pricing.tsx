import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface PricingProps {
  onCTAClick: () => void;
}

const Pricing = ({ onCTAClick }: PricingProps) => {
  const plans = [
    {
      name: 'Разовая',
      price: '199',
      description: 'Одна расшифровка',
      features: ['1 расшифровка', 'Полный отчёт', 'План действий'],
      popular: false
    },
    {
      name: 'Пакет',
      price: '249',
      description: 'Три расшифровки',
      features: ['3 расшифровки', 'Полный отчёт', 'План действий', 'Выгода 30%'],
      popular: true
    },
    {
      name: 'Безлимит',
      price: '399',
      description: 'На месяц',
      features: ['Безлимит на месяц', 'Полный отчёт', 'План действий', 'Максимум экономии'],
      popular: false
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
          Тарифы
        </h2>
        <p className="text-xl text-center text-muted-foreground mb-16">
          Выберите подходящий вариант
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card 
              key={index}
              className={`relative border-2 transition-all duration-300 hover:shadow-2xl ${
                plan.popular 
                  ? 'border-primary shadow-xl scale-105' 
                  : 'border-primary/10 hover:border-primary/30'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-secondary text-white px-6 py-1 rounded-full text-sm font-bold shadow-lg">
                  Популярный
                </div>
              )}
              <CardHeader className="text-center pt-8">
                <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                <CardDescription className="text-base">{plan.description}</CardDescription>
                <div className="mt-6">
                  <span className="text-5xl font-bold text-foreground">{plan.price}</span>
                  <span className="text-xl text-muted-foreground ml-2">₽</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <Icon name="Check" className="text-primary flex-shrink-0" size={20} />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
                <Button 
                  onClick={onCTAClick}
                  className={`w-full mt-6 font-bold rounded-full transition-all duration-300 ${
                    plan.popular
                      ? 'bg-primary hover:bg-secondary text-white shadow-lg hover:shadow-xl'
                      : 'bg-accent hover:bg-primary/10 text-primary border-2 border-primary/20'
                  }`}
                  size="lg"
                >
                  Выбрать тариф
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
