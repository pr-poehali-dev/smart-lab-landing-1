import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const ReportExample = () => {
  return (
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
  );
};

export default ReportExample;
