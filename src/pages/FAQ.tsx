import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Icon from "@/components/ui/icon";

export default function FAQ() {
  const faqCategories = [
    {
      category: "Общие вопросы",
      icon: "HelpCircle",
      questions: [
        {
          question: "Какие услуги предоставляет ITCompany?",
          answer: "Мы предоставляем полный спектр ИТ-услуг: обслуживание компьютеров и серверов, программирование на 1С, аренду серверов, техническую поддержку, настройку сетей, системы безопасности и резервного копирования."
        },
        {
          question: "В каких городах вы работаете?",
          answer: "Наши офисы расположены в Москве, Санкт-Петербурге и Екатеринбурге. Также мы предоставляем удаленные услуги по всей России и странам СНГ."
        },
        {
          question: "Как быстро вы реагируете на заявки?",
          answer: "Критические заявки обрабатываются в течение 15 минут, обычные заявки - в течение 2 часов в рабочее время. Наша служба поддержки работает 24/7."
        },
        {
          question: "Предоставляете ли вы гарантию на выполненные работы?",
          answer: "Да, мы предоставляем гарантию от 30 дней до 1 года в зависимости от типа выполненных работ. На оборудование действует гарантия производителя."
        },
        {
          question: "Можно ли получить консультацию бесплатно?",
          answer: "Да, первичная консультация по телефону или в офисе предоставляется бесплатно. Мы поможем определить ваши потребности и предложим оптимальное решение."
        }
      ]
    },
    {
      category: "Техническая поддержка",
      icon: "Headphones",
      questions: [
        {
          question: "Как получить техническую поддержку?",
          answer: "Вы можете обратиться к нам по телефону +7 (495) 123-45-67, через email support@itcompany.ru, онлайн-чат на сайте или создать заявку в личном кабинете."
        },
        {
          question: "Работает ли поддержка в выходные дни?",
          answer: "Да, наша служба поддержки работает круглосуточно 7 дней в неделю. В выходные дни доступна экстренная поддержка для критических ситуаций."
        },
        {
          question: "Как получить удаленную помощь?",
          answer: "Обратитесь к нашим специалистам по телефону или через чат. Мы предоставим инструкции для установки программы удаленного доступа и решим вашу проблему дистанционно."
        },
        {
          question: "Что делать при сбое сервера?",
          answer: "Немедленно свяжитесь с нашей службой поддержки по телефону горячей линии. Мы начнем восстановление в течение 15 минут и будем держать вас в курсе процесса."
        },
        {
          question: "Входит ли обучение пользователей в услуги поддержки?",
          answer: "Базовое обучение пользователей входит в большинство тарифных планов. Расширенное обучение и проведение семинаров оплачивается отдельно."
        }
      ]
    },
    {
      category: "1С:Предприятие",
      icon: "Code",
      questions: [
        {
          question: "Какие конфигурации 1С вы поддерживаете?",
          answer: "Мы работаем со всеми популярными конфигурациями: 1С:Бухгалтерия, 1С:Управление торговлей, 1С:Зарплата и управление персоналом, 1С:CRM, 1С:Документооборот и другими."
        },
        {
          question: "Можете ли вы доработать типовую конфигурацию под наши нужды?",
          answer: "Да, мы специализируемся на доработке типовых конфигураций 1С под специфические требования бизнеса. Наши разработчики имеют большой опыт в этой области."
        },
        {
          question: "Как происходит обновление конфигураций 1С?",
          answer: "Мы выполняем обновления конфигураций с сохранением всех доработок. Процесс включает резервное копирование, тестирование и поэтапное внедрение обновлений."
        },
        {
          question: "Предоставляете ли вы обучение работе с 1С?",
          answer: "Да, мы проводим обучение пользователей работе с 1С как в наших учебных центрах, так и на территории клиента. Также доступно онлайн-обучение."
        },
        {
          question: "Можете ли вы интегрировать 1С с другими системами?",
          answer: "Да, мы выполняем интеграцию 1С с сайтами, CRM-системами, банковскими системами, системами электронного документооборота и другими внешними системами."
        }
      ]
    },
    {
      category: "Серверы и хостинг",
      icon: "Server",
      questions: [
        {
          question: "Какие типы серверов вы предоставляете?",
          answer: "Мы предлагаем виртуальные серверы (VPS), выделенные серверы, облачные решения и колокацию. Все серверы размещены в надежных дата-центрах с резервированием."
        },
        {
          question: "Какой уровень доступности (uptime) вы гарантируете?",
          answer: "Мы гарантируем uptime 99.9% для всех серверных решений. В случае превышения времени недоступности предоставляется компенсация согласно SLA."
        },
        {
          question: "Можно ли увеличить ресурсы сервера при необходимости?",
          answer: "Да, все наши серверные решения легко масштабируются. Вы можете увеличить CPU, RAM, дисковое пространство в любое время через панель управления или обратившись в поддержку."
        },
        {
          question: "Предоставляете ли вы резервное копирование?",
          answer: "Да, мы предоставляем автоматическое резервное копирование с различными схемами хранения. Также доступно создание снимков системы и восстановление на определенную дату."
        },
        {
          question: "Какие операционные системы поддерживаются?",
          answer: "Мы поддерживаем все популярные ОС: Windows Server (2016, 2019, 2022), различные дистрибутивы Linux (Ubuntu, CentOS, Debian), а также специализированные решения."
        }
      ]
    },
    {
      category: "Безопасность",
      icon: "Shield",
      questions: [
        {
          question: "Какие решения по безопасности вы предлагаете?",
          answer: "Мы предлагаем комплексные решения: антивирусную защиту, файрволы, системы предотвращения вторжений, DLP-системы, мониторинг безопасности и аудит уязвимостей."
        },
        {
          question: "Как часто нужно обновлять системы безопасности?",
          answer: "Антивирусные базы обновляются автоматически несколько раз в день. Системы безопасности требуют регулярного обновления - мы выполняем это в рамках технической поддержки."
        },
        {
          question: "Проводите ли вы аудит безопасности?",
          answer: "Да, мы проводим комплексный аудит информационной безопасности, включая анализ уязвимостей, тестирование на проникновение и оценку соответствия стандартам."
        },
        {
          question: "Что делать при подозрении на взлом?",
          answer: "Немедленно обратитесь в нашу службу безопасности по телефону экстренной связи. Мы проведем анализ инцидента, локализуем угрозу и восстановим безопасность системы."
        },
        {
          question: "Обучаете ли вы сотрудников основам кибербезопасности?",
          answer: "Да, мы проводим тренинги по информационной безопасности для сотрудников, включая защиту от фишинга, безопасную работу с email и социальную инженерию."
        }
      ]
    },
    {
      category: "Оплата и договоры",
      icon: "CreditCard",
      questions: [
        {
          question: "Какие способы оплаты вы принимаете?",
          answer: "Мы принимаем оплату по безналичному расчету, банковскими картами, через системы электронных платежей. Для юридических лиц - только безналичный расчет."
        },
        {
          question: "Можно ли изменить тарифный план?",
          answer: "Да, вы можете изменить тарифный план в любое время. При переходе на более дорогой план доплата рассчитывается пропорционально оставшемуся периоду."
        },
        {
          question: "Есть ли скидки при годовой оплате?",
          answer: "Да, при оплате за год предоставляется скидка 15% на все тарифные планы. Также действуют специальные предложения для новых клиентов и при заключении долгосрочных контрактов."
        },
        {
          question: "Как получить детализацию услуг?",
          answer: "Детализация предоставляется ежемесячно вместе со счетом. Также вы можете запросить детальный отчет в любое время через личный кабинет или у вашего менеджера."
        },
        {
          question: "Что происходит при просрочке платежа?",
          answer: "При просрочке платежа более 5 дней услуги могут быть приостановлены. Мы обязательно предупреждаем об этом заранее и предоставляем возможность погасить задолженность."
        }
      ]
    }
  ];

  const popularQuestions = [
    "Как быстро вы реагируете на заявки?",
    "Предоставляете ли вы гарантию на работы?",
    "Какие способы оплаты вы принимаете?",
    "Работает ли поддержка в выходные дни?",
    "Можно ли получить консультацию бесплатно?"
  ];

  const contactMethods = [
    {
      title: "Телефон",
      description: "Горячая линия 24/7",
      contact: "+7 (495) 123-45-67",
      icon: "Phone"
    },
    {
      title: "Email",
      description: "Ответ в течение 2 часов",
      contact: "support@itcompany.ru",
      icon: "Mail"
    },
    {
      title: "Онлайн чат",
      description: "Мгновенные ответы",
      contact: "Чат на сайте",
      icon: "MessageCircle"
    },
    {
      title: "Личный кабинет",
      description: "Создание заявок",
      contact: "cabinet.itcompany.ru",
      icon: "User"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <Badge variant="secondary" className="mb-4">FAQ</Badge>
            <h1 className="text-4xl font-bold mb-4">Часто задаваемые вопросы</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Ответы на самые популярные вопросы о наших услугах, 
              технической поддержке и условиях сотрудничества
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Search */}
            <Card className="mb-8">
              <CardContent className="p-6">
                <div className="flex space-x-3">
                  <Input 
                    placeholder="Поиск по вопросам..." 
                    className="flex-1"
                  />
                  <Button>
                    <Icon name="Search" size={20} />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* FAQ Categories */}
            <div className="space-y-8">
              {faqCategories.map((category, categoryIndex) => (
                <Card key={categoryIndex}>
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <Icon name={category.icon} size={24} className="text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{category.category}</CardTitle>
                        <CardDescription>{category.questions.length} вопросов</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Accordion type="single" collapsible className="w-full">
                      {category.questions.map((item, questionIndex) => (
                        <AccordionItem key={questionIndex} value={`${categoryIndex}-${questionIndex}`}>
                          <AccordionTrigger className="text-left">
                            {item.question}
                          </AccordionTrigger>
                          <AccordionContent className="text-gray-600">
                            {item.answer}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Popular Questions */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Популярные вопросы</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {popularQuestions.map((question, index) => (
                    <div key={index} className="p-3 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors">
                      <p className="text-sm font-medium">{question}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Contact */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Не нашли ответ?</CardTitle>
                <CardDescription>Свяжитесь с нами любым удобным способом</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {contactMethods.map((method, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                        <Icon name={method.icon} size={16} className="text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-sm">{method.title}</h4>
                        <p className="text-xs text-gray-500 mb-1">{method.description}</p>
                        <p className="text-sm font-medium text-primary">{method.contact}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <Button className="w-full mt-4" size="sm">
                  <Icon name="MessageCircle" size={16} className="mr-2" />
                  Задать вопрос
                </Button>
              </CardContent>
            </Card>

            {/* Categories Navigation */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Категории</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {faqCategories.map((category, index) => (
                    <div key={index} className="flex items-center justify-between py-2 hover:bg-gray-50 px-2 rounded cursor-pointer">
                      <div className="flex items-center space-x-2">
                        <Icon name={category.icon} size={16} className="text-primary" />
                        <span className="text-sm">{category.category}</span>
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {category.questions.length}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Help Resources */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Полезные ресурсы</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Button variant="outline" size="sm" className="w-full justify-start">
                    <Icon name="BookOpen" size={16} className="mr-2" />
                    База знаний
                  </Button>
                  <Button variant="outline" size="sm" className="w-full justify-start">
                    <Icon name="Video" size={16} className="mr-2" />
                    Видеоуроки
                  </Button>
                  <Button variant="outline" size="sm" className="w-full justify-start">
                    <Icon name="Download" size={16} className="mr-2" />
                    Документация
                  </Button>
                  <Button variant="outline" size="sm" className="w-full justify-start">
                    <Icon name="Users" size={16} className="mr-2" />
                    Форум сообщества
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Still Have Questions */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Остались вопросы?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Если вы не нашли ответ на свой вопрос, наши специалисты готовы помочь вам. 
            Обратитесь к нам любым удобным способом.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">
              <Icon name="Phone" size={20} className="mr-2" />
              Позвонить нам
            </Button>
            <Button variant="outline" size="lg">
              <Icon name="Mail" size={20} className="mr-2" />
              Написать email
            </Button>
            <Button variant="outline" size="lg">
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Открыть чат
            </Button>
          </div>
        </div>
      </div>

      {/* Feedback */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Помогла ли вам эта страница?</h2>
            <p className="text-gray-600 mb-8">
              Ваша обратная связь поможет нам улучшить качество информации
            </p>
            <div className="flex justify-center space-x-4">
              <Button variant="outline">
                <Icon name="ThumbsUp" size={20} className="mr-2" />
                Да, помогла
              </Button>
              <Button variant="outline">
                <Icon name="ThumbsDown" size={20} className="mr-2" />
                Нет, не помогла
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}