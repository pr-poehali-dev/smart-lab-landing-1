import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const FounderQuote = () => {
  return (
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
  );
};

export default FounderQuote;
