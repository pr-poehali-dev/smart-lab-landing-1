import Icon from '@/components/ui/icon';

const SUPPORT_URL = "https://t.me/SmartLab_AiBot?start=link_Lrznfun4b3";

const Footer = () => {
  return (
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
  );
};

export default Footer;
