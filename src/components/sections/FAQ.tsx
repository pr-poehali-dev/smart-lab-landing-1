import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
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
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-muted to-accent">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
          Частые вопросы
        </h2>
        <p className="text-xl text-center text-muted-foreground mb-16">
          Ответы на популярные вопросы
        </p>
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
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
  );
};

export default FAQ;
