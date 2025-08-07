import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

export default function Support() {
  const supportChannels = [
    {
      title: "Телефонная поддержка",
      description: "Круглосуточная горячая линия для экстренных случаев",
      icon: "Phone",
      contact: "+7 (495) 123-45-67",
      availability: "24/7",
      responseTime: "Мгновенно"
    },
    {
      title: "Email поддержка",
      description: "Подробные ответы на ваши вопросы",
      icon: "Mail",
      contact: "support@itcompany.ru",
      availability: "24/7",
      responseTime: "До 2 часов"
    },
    {
      title: "Онлайн чат",
      description: "Быстрые ответы в режиме реального времени",
      icon: "MessageCircle",
      contact: "Чат на сайте",
      availability: "9:00-18:00",
      responseTime: "До 5 минут"
    },
    {
      title: "Удаленная помощь",
      description: "Решение проблем через удаленный доступ",
      icon: "Monitor",
      contact: "По заявке",
      availability: "24/7",
      responseTime: "До 15 минут"
    }
  ];

  const faqCategories = [
    {
      category: "Общие вопросы",
      questions: [
        {
          question: "Как быстро вы реагируете на заявки?",
          answer: "Критические заявки обрабатываются в течение 15 минут, обычные - в течение 2 часов в рабочее время."
        },
        {
          question: "Работаете ли вы в выходные дни?",
          answer: "Да, наша служба поддержки работает круглосуточно 7 дней в неделю. В выходные дни доступна экстренная поддержка."
        },
        {
          question: "Предоставляете ли вы гарантию на работы?",
          answer: "Мы предоставляем гарантию от 30 дней до 1 года в зависимости от типа выполненных работ."
        }
      ]
    },
    {
      category: "Технические вопросы",
      questions: [
        {
          question: "Как получить удаленную помощь?",
          answer: "Обратитесь к нашим специалистам по телефону или через чат. Мы предоставим инструкции для подключения."
        },
        {
          question: "Что делать при сбое сервера?",
          answer: "Немедленно свяжитесь с нашей службой поддержки по телефону горячей линии. Мы начнем восстановление в течение 15 минут."
        },
        {
          question: "Как обновить программное обеспечение?",
          answer: "Наши специалисты помогут вам с обновлением ПО удаленно или предоставят подробные инструкции."
        }
      ]
    },
    {
      category: "Биллинг и оплата",
      questions: [
        {
          question: "Как изменить способ оплаты?",
          answer: "Обратитесь к вашему менеджеру или в службу поддержки для изменения реквизитов оплаты."
        },
        {
          question: "Можно ли получить детализацию услуг?",
          answer: "Да, детализация предоставляется ежемесячно. Также вы можете запросить её в любое время."
        },
        {
          question: "Есть ли скидки для постоянных клиентов?",
          answer: "Да, мы предоставляем скидки постоянным клиентам и при заключении долгосрочных контрактов."
        }
      ]
    }
  ];

  const knowledgeBase = [
    {
      title: "Настройка рабочих станций",
      description: "Пошаговые инструкции по настройке компьютеров",
      articles: 25,
      icon: "Monitor"
    },
    {
      title: "Работа с 1С",
      description: "Руководства по использованию 1С:Предприятие",
      articles: 40,
      icon: "Code"
    },
    {
      title: "Серверное администрирование",
      description: "Инструкции по управлению серверами",
      articles: 30,
      icon: "Server"
    },
    {
      title: "Безопасность",
      description: "Рекомендации по обеспечению безопасности",
      articles: 20,
      icon: "Shield"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <Badge variant="secondary" className="mb-4">Техническая поддержка</Badge>
            <h1 className="text-4xl font-bold mb-4">Мы всегда готовы помочь</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Наша служба поддержки работает круглосуточно, чтобы решить любые ваши вопросы 
              и обеспечить бесперебойную работу вашей ИТ-инфраструктуры
            </p>
          </div>
        </div>
      </div>

      {/* Support Channels */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {supportChannels.map((channel, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={channel.icon} size={32} className="text-primary" />
                </div>
                <CardTitle className="text-lg">{channel.title}</CardTitle>
                <CardDescription>{channel.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Контакт:</span>
                    <span className="font-semibold">{channel.contact}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Доступность:</span>
                    <span className="font-semibold">{channel.availability}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Ответ:</span>
                    <span className="font-semibold">{channel.responseTime}</span>
                  </div>
                </div>
                <Button className="w-full mt-4" size="sm">Связаться</Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Support Tabs */}
        <Tabs defaultValue="faq" className="w-full">
          <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto mb-12">
            <TabsTrigger value="faq">FAQ</TabsTrigger>
            <TabsTrigger value="ticket">Заявка</TabsTrigger>
            <TabsTrigger value="knowledge">База знаний</TabsTrigger>
          </TabsList>

          {/* FAQ */}
          <TabsContent value="faq">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-center mb-8">Часто задаваемые вопросы</h2>
              
              <div className="space-y-8">
                {faqCategories.map((category, categoryIndex) => (
                  <div key={categoryIndex}>
                    <h3 className="text-xl font-semibold mb-4 text-primary">{category.category}</h3>
                    <div className="space-y-4">
                      {category.questions.map((item, questionIndex) => (
                        <Card key={questionIndex}>
                          <CardHeader>
                            <CardTitle className="text-lg">{item.question}</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="text-gray-600">{item.answer}</p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Support Ticket */}
          <TabsContent value="ticket">
            <div className="max-w-2xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle>Создать заявку в службу поддержки</CardTitle>
                  <CardDescription>
                    Опишите вашу проблему, и наши специалисты свяжутся с вами в ближайшее время
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
                        <label className="block text-sm font-medium mb-2">Телефон *</label>
                        <Input placeholder="+7 (xxx) xxx-xx-xx" />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Email *</label>
                      <Input type="email" placeholder="your@email.com" />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Приоритет</label>
                      <select className="w-full p-3 border border-gray-300 rounded-lg">
                        <option>Низкий</option>
                        <option>Средний</option>
                        <option>Высокий</option>
                        <option>Критический</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Тема обращения *</label>
                      <Input placeholder="Кратко опишите проблему" />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Подробное описание *</label>
                      <Textarea 
                        rows={6}
                        placeholder="Подробно опишите проблему, укажите шаги для воспроизведения, приложите скриншоты если необходимо..."
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Прикрепить файлы</label>
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                        <Icon name="Upload" size={32} className="mx-auto text-gray-400 mb-2" />
                        <p className="text-gray-600">Перетащите файлы сюда или нажмите для выбора</p>
                        <p className="text-sm text-gray-500 mt-1">Максимальный размер файла: 10 МБ</p>
                      </div>
                    </div>
                    
                    <Button className="w-full" size="lg">
                      <Icon name="Send" size={20} className="mr-2" />
                      Отправить заявку
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Knowledge Base */}
          <TabsContent value="knowledge">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-center mb-8">База знаний</h2>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {knowledgeBase.map((section, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                    <CardHeader>
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                          <Icon name={section.icon} size={24} className="text-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">{section.title}</CardTitle>
                          <CardDescription>{section.description}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">{section.articles} статей</span>
                        <Icon name="ArrowRight" size={16} className="text-primary" />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <div className="text-center">
                <Button variant="outline" size="lg">
                  <Icon name="Search" size={20} className="mr-2" />
                  Поиск по базе знаний
                </Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Emergency Support */}
      <div className="bg-red-50 border-l-4 border-red-500 py-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Icon name="AlertTriangle" size={32} className="text-red-500" />
              <div>
                <h3 className="text-lg font-semibold text-red-800">Экстренная ситуация?</h3>
                <p className="text-red-700">При критических сбоях звоните по горячей линии</p>
              </div>
            </div>
            <Button variant="destructive" size="lg">
              <Icon name="Phone" size={20} className="mr-2" />
              +7 (495) 123-45-67
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}