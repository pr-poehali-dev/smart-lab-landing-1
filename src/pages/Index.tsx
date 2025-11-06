import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Icon from '@/components/ui/icon';

const BOT_URL = "https://t.me/SmartLab_AiBot?start=link_Xc67zLyivn";
const SUPPORT_URL = "https://t.me/SmartLab_AiBot?start=link_Lrznfun4b3";

const Index = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCTAClick = () => {
    window.open(BOT_URL, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-accent to-muted">
      {/* Fixed Header */}
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
            onClick={handleCTAClick}
            className="bg-primary hover:bg-secondary text-white font-semibold px-6 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Перейти в бот
          </Button>
        </div>
      </header>

      {/* Hero Section */}
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
                  onClick={handleCTAClick}
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

      {/* How It Works */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
            Как это работает
          </h2>
          <p className="text-xl text-center text-muted-foreground mb-16">
            Три простых шага до результата
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
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
            ].map((step, index) => (
              <Card 
                key={index}
                className={`border-2 border-primary/10 hover:border-primary/30 transition-all duration-300 cursor-pointer hover:shadow-xl ${
                  hoveredStep === index ? 'scale-105' : ''
                }`}
                onMouseEnter={() => setHoveredStep(index)}
                onMouseLeave={() => setHoveredStep(null)}
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

      {/* Founder Quote */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto max-w-5xl">
          <Card className="border-2 border-primary/20 shadow-2xl bg-white">
            <CardContent className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-shrink-0">
                  <img 
                    src="https://cdn.poehali.dev/files/2fa2b9e3-2f75-4717-9f53-d980adf346dd.jpg"
                    alt="Основатель"
                    className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-primary/20 shadow-lg"
                  />
                </div>
                <div className="flex-1 space-y-4">
                  <Icon name="Quote" className="text-primary/30" size={48} />
                  <p className="text-xl md:text-2xl text-foreground leading-relaxed italic">
                    «Когда я увидел анализы своего ребёнка, понял — родителям нужен простой и понятный инструмент, который даст ответы без паники и долгого ожидания. Так родился Смарт Лаб.»
                  </p>
                  <div className="pt-4">
                    <p className="font-bold text-foreground">Основатель Смарт Лаб</p>
                    <p className="text-muted-foreground">Врач и отец</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Report Example */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Пример отчёта
            </h2>
            <p className="text-xl text-muted-foreground">
              Вот как выглядит расшифровка анализа
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6 border-2 border-green-200">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-foreground">Общая оценка</h3>
                  <div className="bg-green-500 text-white px-4 py-2 rounded-full font-bold flex items-center gap-2">
                    <Icon name="CheckCircle2" size={20} />
                    Норма
                  </div>
                </div>
                <p className="text-muted-foreground">
                  Большинство показателей в пределах нормы. Требуется наблюдение за одним параметром.
                </p>
              </div>

              <Card className="border-2 border-primary/10">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Activity" className="text-primary" size={24} />
                    Детализация показателей
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-green-50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-foreground">Гемоглобин</span>
                      <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-bold">Норма</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">125 г/л (норма: 110-140 г/л)</p>
                    <p className="text-sm">Показатель в пределах нормы для возраста ребёнка. Переносчик кислорода в крови работает хорошо.</p>
                  </div>

                  <div className="bg-yellow-50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-foreground">Лейкоциты</span>
                      <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm font-bold">Внимание</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">12.5 × 10⁹/л (норма: 4-9 × 10⁹/л)</p>
                    <p className="text-sm">Незначительное повышение. Может указывать на лёгкий воспалительный процесс или недавнюю инфекцию.</p>
                  </div>

                  <div className="bg-green-50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-foreground">Тромбоциты</span>
                      <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-bold">Норма</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">280 × 10⁹/л (норма: 150-400 × 10⁹/л)</p>
                    <p className="text-sm">Нормальная свёртываемость крови. Опасности кровотечений нет.</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-white">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Stethoscope" className="text-blue-600" size={24} />
                    Вероятные состояния
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Icon name="AlertCircle" className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                    <div>
                      <p className="font-semibold text-foreground">Возможное ОРВИ</p>
                      <p className="text-sm text-muted-foreground">Повышение лейкоцитов может говорить о лёгкой вирусной инфекции</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="CheckCircle2" className="text-green-600 flex-shrink-0 mt-1" size={20} />
                    <div>
                      <p className="font-semibold text-foreground">Нет анемии</p>
                      <p className="text-sm text-muted-foreground">Гемоглобин в норме, дефицита железа не выявлено</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-white">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="ListChecks" className="text-primary" size={24} />
                    План действий
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ol className="space-y-4">
                    <li className="flex gap-3">
                      <span className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">1</span>
                      <div>
                        <p className="font-semibold text-foreground">Контрольный анализ</p>
                        <p className="text-sm text-muted-foreground">Сдать повторно через 7-10 дней для отслеживания динамики</p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <span className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">2</span>
                      <div>
                        <p className="font-semibold text-foreground">Наблюдение</p>
                        <p className="text-sm text-muted-foreground">Следить за температурой и общим состоянием ребёнка</p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <span className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">3</span>
                      <div>
                        <p className="font-semibold text-foreground">Консультация педиатра</p>
                        <p className="text-sm text-muted-foreground">При ухудшении самочувствия обратиться к врачу</p>
                      </div>
                    </li>
                  </ol>
                </CardContent>
              </Card>

              <div className="bg-amber-50 border-2 border-amber-200 rounded-xl p-4">
                <div className="flex items-start gap-3">
                  <Icon name="Info" className="text-amber-600 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <p className="font-semibold text-amber-900 mb-1">Важно</p>
                    <p className="text-sm text-amber-800">
                      Расшифровка не заменяет консультацию врача. При любых сомнениях обратитесь к педиатру.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Trust Us */}
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
                {[
                  { icon: 'Stethoscope', text: 'Разработано совместно с командой педиатров' },
                  { icon: 'GraduationCap', text: 'Алгоритм протестирован специалистами' },
                  { icon: 'Heart', text: 'Создано отцом для таких же родителей' },
                  { icon: 'Lock', text: 'Конфиденциальность и безопасность данных' }
                ].map((item, index) => (
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
                  <div className="flex items-start gap-3">
                    <Icon name="AlertCircle" className="text-primary flex-shrink-0 mt-1" size={20} />
                    <div>
                      <p className="font-semibold">Оценка критичности</p>
                      <p className="text-sm text-muted-foreground">Насколько срочно нужно действовать</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="FileText" className="text-primary flex-shrink-0 mt-1" size={20} />
                    <div>
                      <p className="font-semibold">Пояснение по показателям</p>
                      <p className="text-sm text-muted-foreground">Что означает каждый параметр</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Activity" className="text-primary flex-shrink-0 mt-1" size={20} />
                    <div>
                      <p className="font-semibold">Вероятные состояния</p>
                      <p className="text-sm text-muted-foreground">На что обратить внимание</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Clipboard" className="text-primary flex-shrink-0 mt-1" size={20} />
                    <div>
                      <p className="font-semibold">План действий</p>
                      <p className="text-sm text-muted-foreground">Чёткие шаги что делать дальше</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
            Тарифы
          </h2>
          <p className="text-xl text-center text-muted-foreground mb-16">
            Выберите подходящий вариант
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
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
            ].map((plan, index) => (
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
                    onClick={handleCTAClick}
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

      {/* FAQ */}
      <section className="py-20 px-4 bg-gradient-to-br from-muted to-accent">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
            Частые вопросы
          </h2>
          <p className="text-xl text-center text-muted-foreground mb-16">
            Ответы на популярные вопросы
          </p>
          <Accordion type="single" collapsible className="space-y-4">
            {[
              {
                question: 'Насколько точна расшифровка?',
                answer: 'Алгоритм разработан и протестирован командой врачей-педиатров. Расшифровка даёт понятное объяснение показателей и рекомендации, но не заменяет консультацию с врачом.'
              },
              {
                question: 'Сколько времени занимает расшифровка?',
                answer: 'В среднем 2 минуты. Вы загружаете фото анализа в Telegram-бот и практически сразу получаете подробный отчёт.'
              },
              {
                question: 'Какие анализы можно расшифровать?',
                answer: 'Сервис работает с основными детскими анализами: общий анализ крови, биохимия, анализ мочи и другие распространённые исследования.'
              },
              {
                question: 'Безопасны ли мои данные?',
                answer: 'Да, все данные передаются в зашифрованном виде и не передаются третьим лицам. Мы соблюдаем все требования по защите персональных данных.'
              },
              {
                question: 'Можно ли получить консультацию врача?',
                answer: 'Расшифровка даёт понятное объяснение и план действий. Для детальной консультации рекомендуем обратиться к вашему педиатру с полученным отчётом.'
              },
              {
                question: 'Что делать, если бот не распознал анализ?',
                answer: 'Попробуйте сделать фото более чётким и с хорошим освещением. Если проблема сохраняется, напишите в техподдержку — мы поможем.'
              }
            ].map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white border-2 border-primary/10 rounded-2xl px-6 hover:border-primary/30 transition-all"
              >
                <AccordionTrigger className="text-lg font-semibold text-foreground hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container mx-auto max-w-4xl text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold">
            Получите расшифровку анализа прямо сейчас
          </h2>
          <p className="text-xl opacity-90">
            Загрузите анализ в бот и получите подробный отчёт за 2 минуты
          </p>
          <Button 
            onClick={handleCTAClick}
            size="lg"
            className="bg-white text-primary hover:bg-white/90 font-bold px-12 py-6 text-lg rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105"
          >
            <Icon name="Send" className="mr-2" size={24} />
            Перейти в Telegram-бот
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-foreground text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img 
                  src="https://cdn.poehali.dev/files/3e9d412e-2338-4611-8642-cb73b2b4d2e3.png" 
                  alt="Смарт Лаб"
                  className="h-10 w-10"
                />
                <span className="text-xl font-bold">Смарт Лаб</span>
              </div>
              <p className="text-white/70">
                Онлайн-расшифровка детских анализов за 2 минуты
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-4 text-lg">Контакты</h3>
              <a 
                href={SUPPORT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors flex items-center gap-2"
              >
                <Icon name="MessageCircle" size={18} />
                Техподдержка
              </a>
            </div>
            <div>
              <h3 className="font-bold mb-4 text-lg">Документы</h3>
              <div className="space-y-2">
                <a 
                  href="https://smartdent68.ru/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white transition-colors block"
                >
                  Политика конфиденциальности
                </a>
                <a 
                  href="https://smartdent68.ru/ps"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white transition-colors block"
                >
                  Пользовательское соглашение
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-white/70">
            <p>© 2024 Смарт Лаб. Все права защищены.</p>
          </div>
        </div>
      </footer>

      {/* Floating CTA Button */}
      <div className="fixed bottom-[120px] right-8 z-50">
        <Button 
          onClick={handleCTAClick}
          size="lg"
          className="bg-gradient-to-r from-primary to-secondary text-white font-bold px-6 py-6 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105"
        >
          <Icon name="MessageCircle" className="mr-2" size={24} />
          Открыть бот
        </Button>
      </div>
    </div>
  );
};

export default Index;