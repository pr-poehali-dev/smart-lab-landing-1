import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const WhyTrustUs = () => {
  const features = [
    { icon: 'Stethoscope', text: 'Разработано совместно с командой педиатров' },
    { icon: 'GraduationCap', text: 'Алгоритм протестирован специалистами' },
    { icon: 'Heart', text: 'Создано отцом для таких же родителей' },
    { icon: 'Lock', text: 'Конфиденциальность и безопасность данных' }
  ];

  const reportFeatures = [
    {
      icon: 'AlertCircle',
      title: 'Оценка критичности',
      description: 'Насколько срочно нужно действовать'
    },
    {
      icon: 'FileText',
      title: 'Пояснение по показателям',
      description: 'Что означает каждый параметр'
    },
    {
      icon: 'Activity',
      title: 'Вероятные состояния',
      description: 'На что обратить внимание'
    },
    {
      icon: 'Clipboard',
      title: 'План действий',
      description: 'Чёткие шаги что делать дальше'
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-accent to-muted">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Почему нам доверяют
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Сервис создан врачом, который сам столкнулся с необходимостью быстро понимать анализы своего ребёнка.
            </p>
            <div className="space-y-4">
              {features.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name={item.icon as any} size={20} className="text-white" />
                  </div>
                  <p className="text-lg text-foreground pt-1">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/30 to-primary/30 rounded-3xl blur-2xl"></div>
            <Card className="relative border-2 border-primary/20 shadow-2xl">
              <CardHeader>
                <CardTitle className="text-2xl">Что входит в отчёт</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {reportFeatures.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Icon name={item.icon as any} className="text-primary flex-shrink-0 mt-1" size={20} />
                    <div>
                      <p className="font-semibold">{item.title}</p>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyTrustUs;
