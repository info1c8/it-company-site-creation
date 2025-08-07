import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

export default function Contact() {
  const offices = [
    {
      city: "Москва (Главный офис)",
      address: "г. Москва, ул. Тверская, д. 1, офис 100",
      phone: "+7 (495) 123-45-67",
      email: "moscow@itcompany.ru",
      hours: "Пн-Пт: 9:00-18:00, Сб: 10:00-16:00",
      coordinates: { lat: 55.7558, lng: 37.6176 }
    },
    {
      city: "Санкт-Петербург",
      address: "г. Санкт-Петербург, Невский пр., д. 50, офис 200",
      phone: "+7 (812) 123-45-67",
      email: "spb@itcompany.ru",
      hours: "Пн-Пт: 9:00-18:00, Сб: 10:00-16:00",
      coordinates: { lat: 59.9311, lng: 30.3609 }
    },
    {
      city: "Екатеринбург",
      address: "г. Екатеринбург, ул. Ленина, д. 25, офис 300",
      phone: "+7 (343) 123-45-67",
      email: "ekb@itcompany.ru",
      hours: "Пн-Пт: 9:00-18:00",
      coordinates: { lat: 56.8431, lng: 60.6454 }
    }
  ];

  const contactMethods = [
    {
      title: "Общие вопросы",
      icon: "Mail",
      contact: "info@itcompany.ru",
      description: "Для общих вопросов о наших услугах"
    },
    {
      title: "Техническая поддержка",
      icon: "Headphones",
      contact: "support@itcompany.ru",
      description: "Круглосуточная техническая поддержка"
    },
    {
      title: "Отдел продаж",
      icon: "ShoppingCart",
      contact: "sales@itcompany.ru",
      description: "Вопросы по покупке услуг и тарифам"
    },
    {
      title: "Партнерство",
      icon: "Handshake",
      contact: "partners@itcompany.ru",
      description: "Предложения о сотрудничестве"
    }
  ];

  const socialLinks = [
    { name: "Telegram", icon: "MessageCircle", url: "https://t.me/itcompany" },
    { name: "WhatsApp", icon: "MessageSquare", url: "https://wa.me/79123456789" },
    { name: "VK", icon: "Users", url: "https://vk.com/itcompany" },
    { name: "LinkedIn", icon: "Linkedin", url: "https://linkedin.com/company/itcompany" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <Badge variant="secondary" className="mb-4">Контакты</Badge>
            <h1 className="text-4xl font-bold mb-4">Свяжитесь с нами</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Готовы обсудить ваши ИТ-потребности? Мы всегда на связи и готовы помочь 
              найти оптимальное решение для вашего бизнеса
            </p>
          </div>
        </div>
      </div>

      {/* Contact Methods */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactMethods.map((method, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={method.icon} size={32} className="text-primary" />
                </div>
                <CardTitle className="text-lg">{method.title}</CardTitle>
                <CardDescription>{method.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="font-semibold text-primary mb-4">{method.contact}</p>
                <Button size="sm" className="w-full">Написать</Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle>Оставить заявку</CardTitle>
              <CardDescription>
                Заполните форму, и мы свяжемся с вами в течение 30 минут
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Имя *</label>
                    <Input placeholder="Ваше имя" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Фамилия</label>
                    <Input placeholder="Ваша фамилия" />
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Телефон *</label>
                    <Input placeholder="+7 (xxx) xxx-xx-xx" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email *</label>
                    <Input type="email" placeholder="your@email.com" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Компания</label>
                  <Input placeholder="Название вашей компании" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Интересующая услуга</label>
                  <select className="w-full p-3 border border-gray-300 rounded-lg">
                    <option>Выберите услугу</option>
                    <option>Обслуживание ПК</option>
                    <option>Программирование 1С</option>
                    <option>Аренда серверов</option>
                    <option>Техническая поддержка</option>
                    <option>Другое</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Сообщение</label>
                  <Textarea 
                    rows={4}
                    placeholder="Расскажите подробнее о ваших потребностях..."
                  />
                </div>
                
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="consent" className="rounded" />
                  <label htmlFor="consent" className="text-sm text-gray-600">
                    Согласен на обработку персональных данных
                  </label>
                </div>
                
                <Button className="w-full" size="lg">
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Быстрая связь</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Icon name="Phone" size={20} className="text-primary" />
                    <div>
                      <p className="font-semibold">Горячая линия</p>
                      <p className="text-gray-600">+7 (800) 123-45-67 (бесплатно)</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Icon name="Mail" size={20} className="text-primary" />
                    <div>
                      <p className="font-semibold">Email</p>
                      <p className="text-gray-600">info@itcompany.ru</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Icon name="Clock" size={20} className="text-primary" />
                    <div>
                      <p className="font-semibold">Режим работы</p>
                      <p className="text-gray-600">Пн-Пт: 9:00-18:00</p>
                      <p className="text-gray-600">Сб-Вс: 10:00-16:00</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Социальные сети</CardTitle>
                <CardDescription>Следите за новостями и получайте полезные советы</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social, index) => (
                    <Button key={index} variant="outline" className="justify-start">
                      <Icon name={social.icon} size={16} className="mr-2" />
                      {social.name}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Экстренная поддержка</CardTitle>
                <CardDescription>При критических сбоях</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="destructive" className="w-full" size="lg">
                  <Icon name="AlertTriangle" size={20} className="mr-2" />
                  Экстренный вызов 24/7
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Offices */}
        <div>
          <h2 className="text-3xl font-bold text-center mb-12">Наши офисы</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{office.city}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <Icon name="MapPin" size={16} className="text-primary mt-1" />
                      <p className="text-sm text-gray-600">{office.address}</p>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Icon name="Phone" size={16} className="text-primary" />
                      <p className="text-sm font-semibold">{office.phone}</p>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Icon name="Mail" size={16} className="text-primary" />
                      <p className="text-sm text-gray-600">{office.email}</p>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <Icon name="Clock" size={16} className="text-primary mt-1" />
                      <p className="text-sm text-gray-600">{office.hours}</p>
                    </div>
                  </div>
                  
                  <Button className="w-full mt-4" variant="outline" size="sm">
                    <Icon name="Navigation" size={16} className="mr-2" />
                    Построить маршрут
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Как нас найти</h2>
          <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <Icon name="MapPin" size={48} className="text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600">Интерактивная карта с нашими офисами</p>
              <p className="text-sm text-gray-500 mt-2">
                Здесь будет размещена карта с отмеченными офисами
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Часто задаваемые вопросы</h2>
            
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Как быстро вы отвечаете на заявки?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Мы отвечаем на все заявки в течение 30 минут в рабочее время. 
                    Экстренные вопросы решаются немедленно по телефону горячей линии.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Можно ли получить консультацию бесплатно?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Да, первичная консультация по телефону или в офисе предоставляется бесплатно. 
                    Мы поможем определить ваши потребности и предложим оптимальное решение.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Выезжаете ли вы к клиентам?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Да, наши специалисты выезжают к клиентам в пределах города. 
                    Стоимость выезда зависит от удаленности и сложности работ.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}