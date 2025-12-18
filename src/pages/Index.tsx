import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const products = [
    {
      id: 1,
      title: 'Венок из белых роз',
      price: 'от 5 000 ₽',
      image: 'https://cdn.poehali.dev/files/20251207_091903338_iOS.jpg',
      description: 'Элегантный венок из белых роз и лилий'
    },
    {
      id: 2,
      title: 'Траурная корзина',
      price: 'от 4 500 ₽',
      image: 'https://cdn.poehali.dev/projects/f742e5eb-6f58-4d46-b943-e9522be3e6b0/files/e3b772d2-5079-4484-86d9-a83e2d82877b.jpg',
      description: 'Композиция из красных и белых цветов'
    },
    {
      id: 3,
      title: 'Цветочная композиция',
      price: 'от 3 500 ₽',
      image: 'https://cdn.poehali.dev/projects/f742e5eb-6f58-4d46-b943-e9522be3e6b0/files/d71f8886-ac38-4227-bee4-413b412c5421.jpg',
      description: 'Нежная композиция в пастельных тонах'
    }
  ];

  const reviews = [
    {
      id: 1,
      name: 'Ирина М.',
      text: 'Спасибо за красивый венок и оперативную доставку в трудный момент. Всё было безупречно.',
      rating: 5
    },
    {
      id: 2,
      name: 'Сергей П.',
      text: 'Профессиональный подход, качественные цветы. Помогли с выбором, доставили точно вовремя.',
      rating: 5
    },
    {
      id: 3,
      name: 'Елена К.',
      text: 'Очень достойная работа флористов. Композиция была свежей и красивой. Рекомендую.',
      rating: 5
    }
  ];

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-muted/30 to-background">
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-primary">Ритуальная флористика</h1>
            <div className="hidden md:flex gap-6">
              {['home', 'catalog', 'gallery', 'about', 'delivery', 'reviews', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === section ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {section === 'home' && 'Главная'}
                  {section === 'catalog' && 'Каталог'}
                  {section === 'gallery' && 'Галерея'}
                  {section === 'about' && 'О нас'}
                  {section === 'delivery' && 'Доставка'}
                  {section === 'reviews' && 'Отзывы'}
                  {section === 'contact' && 'Контакты'}
                </button>
              ))}
            </div>
            <a href="tel:+78632791310" className="flex items-center gap-2 text-primary font-semibold">
              <Icon name="Phone" size={20} />
              <span className="hidden sm:inline">+7 (863) 279-13-10</span>
            </a>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-5xl md:text-6xl font-bold text-primary mb-6 leading-tight">
                Траурная флористика в Ростове-на-Дону
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Венки из живых цветов, похоронные корзины и композиции с быстрой доставкой. 
                Профессиональное оформление в трудный момент.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button onClick={() => scrollToSection('catalog')} size="lg" className="text-lg px-8">
                  Смотреть каталог
                </Button>
                <Button onClick={() => scrollToSection('contact')} size="lg" variant="outline" className="text-lg px-8">
                  Связаться с нами
                </Button>
              </div>
            </div>
            <div className="animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/projects/f742e5eb-6f58-4d46-b943-e9522be3e6b0/files/4393d073-8dac-4958-a0db-c51337d7b6c2.jpg" 
                alt="Венок из живых цветов" 
                className="rounded-2xl shadow-2xl w-full object-cover aspect-square"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mt-20">
            {[
              { icon: 'Clock', title: 'Быстрая доставка', desc: 'В течение 2-3 часов' },
              { icon: 'Flower2', title: 'Свежие цветы', desc: 'Только качественные материалы' },
              { icon: 'Heart', title: 'С заботой', desc: 'Внимательный подход' },
              { icon: 'CheckCircle', title: 'Опыт', desc: 'Более 10 лет работы' }
            ].map((feature, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow bg-card/50 backdrop-blur">
                <Icon name={feature.icon} size={40} className="mx-auto mb-4 text-primary" />
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="catalog" className="py-20 px-4 bg-muted/20">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-4 text-primary">Каталог</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">Выберите подходящую композицию</p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Card key={product.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
                  <p className="text-muted-foreground mb-4">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">{product.price}</span>
                    <Button onClick={() => scrollToSection('contact')}>Заказать</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-4 text-primary">Галерея работ</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">Наши композиции из живых цветов</p>
          
          <div className="grid md:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <div key={index} className="group relative overflow-hidden rounded-xl aspect-square animate-scale-in cursor-pointer" style={{ animationDelay: `${index * 100}ms` }}>
                <img 
                  src={product.image} 
                  alt={`Работа ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <p className="text-white font-semibold">{product.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-muted/20">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6 text-primary">О нас</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Мы занимаемся ритуальной флористикой более 10 лет в Ростове-на-Дону. Наша команда опытных флористов 
            создает траурные композиции с заботой и уважением к вашим чувствам.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Мы используем только свежие живые цветы высокого качества и гарантируем быструю доставку в любую точку города. 
            Наша цель — помочь вам достойно выразить скорбь и уважение к ушедшим.
          </p>
        </div>
      </section>

      <section id="delivery" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-primary">Доставка</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8">
              <Icon name="MapPin" size={48} className="text-primary mb-4" />
              <h3 className="text-2xl font-semibold mb-4">Зона доставки</h3>
              <p className="text-muted-foreground mb-4">
                Осуществляем доставку по всему Ростову-на-Дону и ближайшим районам.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Icon name="Check" size={20} className="text-primary" />
                  Центральный район
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Check" size={20} className="text-primary" />
                  Северный район
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Check" size={20} className="text-primary" />
                  Западный район
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Check" size={20} className="text-primary" />
                  Пригороды (по договоренности)
                </li>
              </ul>
            </Card>

            <Card className="p-8">
              <Icon name="Clock" size={48} className="text-primary mb-4" />
              <h3 className="text-2xl font-semibold mb-4">Сроки доставки</h3>
              <p className="text-muted-foreground mb-4">
                Мы понимаем важность времени и гарантируем оперативную доставку.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Icon name="Check" size={20} className="text-primary" />
                  Срочная доставка — 2-3 часа
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Check" size={20} className="text-primary" />
                  Стандартная — в течение дня
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Check" size={20} className="text-primary" />
                  Доставка к определенному времени
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Check" size={20} className="text-primary" />
                  Работаем без выходных
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 px-4 bg-muted/20">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-primary">Отзывы</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review) => (
              <Card key={review.id} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Icon key={i} name="Star" size={20} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">"{review.text}"</p>
                <p className="font-semibold">{review.name}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-4 text-primary">Контакты</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">Свяжитесь с нами удобным способом</p>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Оформить заказ</h3>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <Input placeholder="Ваше имя" className="h-12" />
                </div>
                <div>
                  <Input type="tel" placeholder="Телефон" className="h-12" />
                </div>
                <div>
                  <Textarea placeholder="Комментарий к заказу" rows={5} />
                </div>
                <Button type="submit" className="w-full h-12 text-lg">
                  Отправить заявку
                </Button>
              </form>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6">Наши контакты</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Icon name="Phone" size={24} className="text-primary mt-1" />
                  <div>
                    <p className="font-semibold mb-1">Телефон</p>
                    <a href="tel:+78632791310" className="text-muted-foreground hover:text-primary">
                      +7 (863) 279-13-10
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Icon name="Mail" size={24} className="text-primary mt-1" />
                  <div>
                    <p className="font-semibold mb-1">Email</p>
                    <a href="mailto:info@rostov-buket.ru" className="text-muted-foreground hover:text-primary">
                      info@rostov-buket.ru
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Icon name="MapPin" size={24} className="text-primary mt-1" />
                  <div>
                    <p className="font-semibold mb-1">Адрес</p>
                    <p className="text-muted-foreground">
                      г. Ростов-на-Дону,<br />
                      ул. Тургеневская, 46/17
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Icon name="Clock" size={24} className="text-primary mt-1" />
                  <div>
                    <p className="font-semibold mb-1">Время работы</p>
                    <p className="text-muted-foreground">
                      Ежедневно, с 8:00 до 20:00
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-8 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <p className="text-lg font-semibold mb-2">Ритуальная флористика</p>
          <p className="text-sm opacity-80">Ростов-на-Дону | Венки и цветы на похороны с доставкой</p>
          <p className="text-sm opacity-60 mt-4">© 2024 Все права защищены</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;