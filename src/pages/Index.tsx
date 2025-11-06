import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const BOT_LINK = 'https://t.me/SmartLab_AiBot?start=link_Xc67zLyivn';
const SUPPORT_LINK = 'https://t.me/SmartLab_AiBot?start=link_Lrznfun4b3';

const Index = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handleCTAClick = () => {
    window.open(BOT_LINK, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-accent/20 to-background overflow-x-hidden">
      <header 
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/80 backdrop-blur-lg shadow-md' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src="https://cdn.poehali.dev/files/3e9d412e-2338-4611-8642-cb73b2b4d2e3.png" 
              alt="Смарт Лаб" 
              className="w-12 h-12"
            />
            <span className="text-2xl font-bold text-foreground">Смарт Лаб</span>
          </div>
          <Button 
            onClick={handleCTAClick}
            size="lg"
            className="bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <Icon name="Send" className="mr-2" size={20} />
            Перейти в бот
          </Button>
        </div>
      </header>

      <section className="pt-32 pb-20 px-4 relative">
        <div 
          className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
          }}
        />
        <div 
          className="absolute bottom-10 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse"
          style={{
            transform: `translate(${-mousePosition.x * 0.01}px, ${-mousePosition.y * 0.01}px)`
          }}
        />
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center space-y-8 animate-fade-in">
            <Badge className="text-lg px-6 py-2 bg-gradient-to-r from-primary/20 to-secondary/20 text-foreground border-primary/30">
              Расшифровка анализов за 2 минуты
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
              Разберитесь в анализах
              <br />
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                вашего ребёнка
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Загрузите фото анализа в Telegram-бот и получите понятную расшифровку с пошаговым планом действий от команды педиатров
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
              <Button 
                onClick={handleCTAClick}
                size="lg"
                className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-secondary text-primary-foreground font-bold shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105"
              >
                <Icon name="Zap" className="mr-2" size={24} />
                Начать сейчас
              </Button>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Icon name="Clock" size={20} />
                <span>Результат за 2 минуты</span>
              </div>
            </div>

            <div className="pt-8 flex flex-wrap gap-6 justify-center items-center text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Icon name="Shield" size={20} className="text-primary" />
                <span>Создано врачом</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Users" size={20} className="text-primary" />
                <span>Команда педиатров</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Lock" size={20} className="text-primary" />
                <span>Безопасно и конфиденциально</span>
              </div>
            </div>
          </div>

          <div 
            className="mt-16 relative"
            style={{
              transform: `perspective(1000px) rotateY(${mousePosition.x * 0.01 - 5}deg) rotateX(${-mousePosition.y * 0.01 + 5}deg)`
            }}
          >
            <div className="bg-gradient-to-br from-white to-accent/30 rounded-3xl p-8 shadow-2xl border border-primary/20">
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="p-6 text-center space-y-4 hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white/80 backdrop-blur-sm">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center">
                    <Icon name="Upload" size={32} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">Загрузите анализ</h3>
                  <p className="text-muted-foreground">Отправьте фото или данные анализа в Telegram-бот</p>
                </Card>

                <Card className="p-6 text-center space-y-4 hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white/80 backdrop-blur-sm">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center">
                    <Icon name="Brain" size={32} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">ИИ-анализ</h3>
                  <p className="text-muted-foreground">Система обработает данные за 2 минуты</p>
                </Card>

                <Card className="p-6 text-center space-y-4 hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white/80 backdrop-blur-sm">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center">
                    <Icon name="FileCheck" size={32} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">Получите отчёт</h3>
                  <p className="text-muted-foreground">Понятная расшифровка с планом действий</p>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-primary/10 text-primary border-primary/30">О создателе</Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                Создано врачом и отцом
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Сервис разработан практикующим врачом, который сам столкнулся с необходимостью быстро понимать анализы своего ребёнка. Вместе с командой педиатров мы создали инструмент, который помогает родителям получать ясные ответы без паники и долгого ожидания.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle2" className="text-primary mt-1 flex-shrink-0" size={24} />
                  <div>
                    <p className="font-semibold text-foreground">Медицинская экспертиза</p>
                    <p className="text-muted-foreground">Разработано командой педиатров</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle2" className="text-primary mt-1 flex-shrink-0" size={24} />
                  <div>
                    <p className="font-semibold text-foreground">Родительский опыт</p>
                    <p className="text-muted-foreground">Создано с пониманием ваших переживаний</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle2" className="text-primary mt-1 flex-shrink-0" size={24} />
                  <div>
                    <p className="font-semibold text-foreground">Постоянное развитие</p>
                    <p className="text-muted-foreground">Регулярные обновления и улучшения</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-2xl" />
              <img 
                src="https://cdn.poehali.dev/files/2fa2b9e3-2f75-4717-9f53-d980adf346dd.jpg"
                alt="Основатель Смарт Лаб"
                className="relative rounded-3xl shadow-2xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-6 mb-16">
            <Badge className="bg-primary/10 text-primary border-primary/30">Что вы получите</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Полный отчёт за 2 минуты
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Каждая расшифровка включает детальный анализ всех показателей с понятными объяснениями
            </p>
          </div>

          <Card className="p-8 md:p-12 bg-gradient-to-br from-white to-accent/20 border-primary/20 shadow-2xl">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                    <Icon name="AlertTriangle" size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Оценка критичности</h3>
                    <p className="text-muted-foreground">Сразу понятно, требуется ли срочное обращение к врачу</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                    <Icon name="Activity" size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Расшифровка показателей</h3>
                    <p className="text-muted-foreground">Каждое значение объяснено понятным языком</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                    <Icon name="Stethoscope" size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Вероятные состояния</h3>
                    <p className="text-muted-foreground">Возможные причины отклонений от нормы</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                    <Icon name="ListChecks" size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">План действий</h3>
                    <p className="text-muted-foreground">Чёткие рекомендации, что делать дальше</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg border border-primary/10">
                <div className="space-y-4">
                  <div className="bg-accent/50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-foreground">Гемоглобин</span>
                      <Badge className="bg-green-100 text-green-700">Норма</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">125 г/л (норма: 110-140 г/л)</p>
                    <p className="text-sm mt-2">Показатель в пределах нормы для возраста ребёнка</p>
                  </div>

                  <div className="bg-yellow-50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-foreground">Лейкоциты</span>
                      <Badge className="bg-yellow-100 text-yellow-700">Внимание</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">12.5 × 10⁹/л (норма: 4-9 × 10⁹/л)</p>
                    <p className="text-sm mt-2">Незначительное повышение. Может указывать на лёгкий воспалительный процесс</p>
                  </div>

                  <div className="bg-accent/50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-foreground">Тромбоциты</span>
                      <Badge className="bg-green-100 text-green-700">Норма</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">280 × 10⁹/л (норма: 150-400 × 10⁹/л)</p>
                    <p className="text-sm mt-2">Показатель в норме</p>
                  </div>

                  <div className="mt-6 p-4 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg">
                    <p className="text-sm font-semibold text-foreground mb-2">Рекомендация:</p>
                    <p className="text-sm text-muted-foreground">Контрольный анализ через 7-10 дней. При ухудшении самочувствия — обратиться к педиатру</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center space-y-6 mb-16">
            <Badge className="bg-primary/10 text-primary border-primary/30">Тарифы</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Выберите подходящий тариф
            </h2>
            <p className="text-xl text-muted-foreground">
              Прозрачные цены без скрытых платежей
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 space-y-6 hover:shadow-2xl transition-all duration-300 hover:scale-105 bg-white">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Разовая</h3>
                <p className="text-muted-foreground">Для одного анализа</p>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-bold text-foreground">199</span>
                <span className="text-2xl text-muted-foreground">₽</span>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-foreground">
                  <Icon name="Check" className="text-primary flex-shrink-0" size={20} />
                  <span>1 расшифровка анализа</span>
                </li>
                <li className="flex items-center gap-2 text-foreground">
                  <Icon name="Check" className="text-primary flex-shrink-0" size={20} />
                  <span>Результат за 2 минуты</span>
                </li>
                <li className="flex items-center gap-2 text-foreground">
                  <Icon name="Check" className="text-primary flex-shrink-0" size={20} />
                  <span>Детальный отчёт</span>
                </li>
              </ul>
              <Button 
                onClick={handleCTAClick}
                className="w-full bg-gradient-to-r from-primary to-secondary text-primary-foreground"
                size="lg"
              >
                Выбрать
              </Button>
            </Card>

            <Card className="p-8 space-y-6 hover:shadow-2xl transition-all duration-300 hover:scale-105 bg-white border-2 border-primary relative">
              <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-secondary text-white">
                Популярный
              </Badge>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Пакет 3</h3>
                <p className="text-muted-foreground">Выгоднее на 16%</p>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-bold text-foreground">249</span>
                <span className="text-2xl text-muted-foreground">₽</span>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-foreground">
                  <Icon name="Check" className="text-primary flex-shrink-0" size={20} />
                  <span>3 расшифровки анализов</span>
                </li>
                <li className="flex items-center gap-2 text-foreground">
                  <Icon name="Check" className="text-primary flex-shrink-0" size={20} />
                  <span>Результат за 2 минуты</span>
                </li>
                <li className="flex items-center gap-2 text-foreground">
                  <Icon name="Check" className="text-primary flex-shrink-0" size={20} />
                  <span>Детальные отчёты</span>
                </li>
                <li className="flex items-center gap-2 text-foreground">
                  <Icon name="Check" className="text-primary flex-shrink-0" size={20} />
                  <span>Экономия 348 ₽</span>
                </li>
              </ul>
              <Button 
                onClick={handleCTAClick}
                className="w-full bg-gradient-to-r from-primary to-secondary text-primary-foreground"
                size="lg"
              >
                Выбрать
              </Button>
            </Card>

            <Card className="p-8 space-y-6 hover:shadow-2xl transition-all duration-300 hover:scale-105 bg-white">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Безлимит</h3>
                <p className="text-muted-foreground">На месяц</p>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-bold text-foreground">399</span>
                <span className="text-2xl text-muted-foreground">₽</span>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-foreground">
                  <Icon name="Check" className="text-primary flex-shrink-0" size={20} />
                  <span>Неограниченные расшифровки</span>
                </li>
                <li className="flex items-center gap-2 text-foreground">
                  <Icon name="Check" className="text-primary flex-shrink-0" size={20} />
                  <span>Результат за 2 минуты</span>
                </li>
                <li className="flex items-center gap-2 text-foreground">
                  <Icon name="Check" className="text-primary flex-shrink-0" size={20} />
                  <span>Детальные отчёты</span>
                </li>
                <li className="flex items-center gap-2 text-foreground">
                  <Icon name="Check" className="text-primary flex-shrink-0" size={20} />
                  <span>Приоритетная поддержка</span>
                </li>
              </ul>
              <Button 
                onClick={handleCTAClick}
                className="w-full bg-gradient-to-r from-primary to-secondary text-primary-foreground"
                size="lg"
              >
                Выбрать
              </Button>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center space-y-6 mb-16">
            <Badge className="bg-primary/10 text-primary border-primary/30">Частые вопросы</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Ответы на вопросы
            </h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-white rounded-xl px-6 border border-primary/10">
              <AccordionTrigger className="text-lg font-semibold text-foreground hover:no-underline">
                Насколько точна расшифровка?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Расшифровка разработана командой педиатров и постоянно обновляется. Система анализирует показатели согласно актуальным медицинским протоколам. Однако это вспомогательный инструмент — окончательный диагноз ставит только врач.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-white rounded-xl px-6 border border-primary/10">
              <AccordionTrigger className="text-lg font-semibold text-foreground hover:no-underline">
                Безопасны ли мои данные?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Да, мы серьёзно относимся к конфиденциальности. Все данные передаются по защищённому соединению, анализы обрабатываются автоматически и не передаются третьим лицам. Мы соблюдаем требования по защите персональных данных.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-white rounded-xl px-6 border border-primary/10">
              <AccordionTrigger className="text-lg font-semibold text-foreground hover:no-underline">
                Какие анализы можно расшифровать?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Сервис работает с большинством стандартных анализов: общий анализ крови, биохимия крови, общий анализ мочи и другие. Если система не может обработать ваш анализ, вы получите уведомление и возврат средств.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-white rounded-xl px-6 border border-primary/10">
              <AccordionTrigger className="text-lg font-semibold text-foreground hover:no-underline">
                Что делать, если результат вызывает тревогу?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                В отчёте всегда указан уровень критичности. При выявлении серьёзных отклонений система рекомендует срочно обратиться к врачу. Расшифровка не заменяет визит к педиатру — это помощь в понимании анализов.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="bg-white rounded-xl px-6 border border-primary/10">
              <AccordionTrigger className="text-lg font-semibold text-foreground hover:no-underline">
                Как быстро приходит расшифровка?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                В среднем расшифровка готова за 2 минуты после загрузки анализа. В редких случаях обработка может занять до 5 минут при высокой нагрузке на сервис.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-primary via-secondary to-primary text-white relative overflow-hidden">
        <div 
          className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"
          style={{
            transform: `translate(${mousePosition.x * 0.03}px, ${mousePosition.y * 0.03}px)`
          }}
        />
        <div 
          className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"
          style={{
            transform: `translate(${-mousePosition.x * 0.02}px, ${-mousePosition.y * 0.02}px)`
          }}
        />
        
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Начните прямо сейчас
          </h2>
          <p className="text-xl md:text-2xl mb-10 opacity-90">
            Получите расшифровку анализа вашего ребёнка за 2 минуты
          </p>
          <Button 
            onClick={handleCTAClick}
            size="lg"
            className="text-lg px-10 py-7 bg-white text-primary font-bold shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105"
          >
            <Icon name="Send" className="mr-2" size={24} />
            Открыть Telegram-бот
          </Button>
          
          <div className="mt-12 flex flex-wrap gap-8 justify-center items-center opacity-80">
            <div className="flex items-center gap-2">
              <Icon name="Clock" size={24} />
              <span>2 минуты</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="Shield" size={24} />
              <span>Безопасно</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="CheckCircle2" size={24} />
              <span>Понятно</span>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-foreground/5 py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <img 
                  src="https://cdn.poehali.dev/files/3e9d412e-2338-4611-8642-cb73b2b4d2e3.png" 
                  alt="Смарт Лаб" 
                  className="w-10 h-10"
                />
                <span className="text-xl font-bold text-foreground">Смарт Лаб</span>
              </div>
              <p className="text-muted-foreground">
                Онлайн-расшифровка анализов детей за 2 минуты
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-4">Сервис</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a href={BOT_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                    Telegram-бот
                  </a>
                </li>
                <li>
                  <a href={SUPPORT_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                    Поддержка
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-4">Информация</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a href="https://smartdent68.ru/privacy" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                    Политика конфиденциальности
                  </a>
                </li>
                <li>
                  <a href="https://smartdent68.ru/ps" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                    Пользовательское соглашение
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-4">Контакты</h3>
              <Button 
                onClick={handleCTAClick}
                variant="outline"
                className="w-full"
              >
                <Icon name="Send" className="mr-2" size={16} />
                Написать в бот
              </Button>
            </div>
          </div>

          <div className="border-t border-border pt-8 text-center text-muted-foreground">
            <p>© 2024 Смарт Лаб. Все права защищены.</p>
            <p className="text-sm mt-2">Сервис не заменяет консультацию врача</p>
          </div>
        </div>
      </footer>

      <div className="fixed bottom-8 right-8 z-50">
        <Button 
          onClick={handleCTAClick}
          size="lg"
          className="bg-gradient-to-r from-primary to-secondary text-primary-foreground font-bold px-6 py-6 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 animate-pulse"
        >
          <Icon name="MessageCircle" className="mr-2" size={24} />
          Открыть бот
        </Button>
      </div>
    </div>
  );
};

export default Index;
