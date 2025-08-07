import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";

export default function PCSupport() {
  const supportServices = [
    {
      title: "Диагностика и ремонт",
      description: "Полная диагностика компьютера и устранение неисправностей",
      icon: "Search",
      price: "от 1,500₽",
      duration: "1-3 дня",
      features: [
        "Диагностика аппаратных проблем",
        "Тестирование компонентов",
        "Замена неисправных деталей",
        "Проверка после ремонта",
        "Гарантия на работы"
      ]
    },
    {
      title: "Профилактическое обслуживание",
      description: "Регулярное обслуживание для предотвращения поломок",
      icon: "Wrench",
      price: "от 2,000₽",
      duration: "2-4 часа",
      features: [
        "Чистка от пыли",
        "Замена термопасты",
        "Проверка соединений",
        "Обновление драйверов",
        "Оптимизация системы"
      ]
    },
    {
      title: "Установка и настройка ПО",
      description: "Установка операционных систем и прикладного ПО",
      icon: "Download",
      price: "от 2,500₽",
      duration: "2-6 часов",
      features: [
        "Установка Windows/Linux",
        "Настройка драйверов",
        "Установка офисного ПО",
        "Настройка антивируса",
        "Перенос данных"
      ]
    },
    {
      title: "Модернизация компьютеров",
      description: "Улучшение производительности путем замены компонентов",
      icon: "Cpu",
      price: "от 3,000₽",
      duration: "1-2 дня",
      features: [
        "Анализ текущей конфигурации",
        "Подбор совместимых компонентов",
        "Установка новых деталей",
        "Тестирование производительности",
        "Настройка системы"
      ]
    },
    {
      title: "Восстановление данных",
      description: "Восстановление утерянных или поврежденных файлов",
      icon: "HardDrive",
      price: "от 5,000₽",
      duration: "1-5 дней",
      features: [
        "Диагностика носителя",
        "Восстановление файлов",
        "Ремонт файловой системы",
        "Клонирование диска",
        "Консультации по предотвращению"
      ]
    },
    {
      title: "Настройка сети",
      description: "Настройка локальной сети и интернет-подключения",
      icon: "Wifi",
      price: "от 3,000₽",
      duration: "2-8 часов",
      features: [
        "Настройка роутера",
        "Создание локальной сети",
        "Настройка Wi-Fi",
        "Общий доступ к ресурсам",
        "Настройка безопасности"
      ]
    }
  ];

  const supportPlans = [
    {
      name: "Базовый",
      price: "3,000₽",
      period: "/месяц",
      computers: "До 5 ПК",
      responseTime: "4 часа",
      features: [
        "Удаленная диагностика",
        "Консультации по телефону",
        "Базовая настройка ПО",
        "Email поддержка",
        "Рабочие дни 9:00-18:00"
      ]
    },
    {
      name: "Стандартный",
      price: "8,000₽",
      period: "/месяц",
      computers: "До 20 ПК",
      responseTime: "2 часа",
      features: [
        "Все из базового плана",
        "Выезд специалиста (2 раза/мес)",
        "Профилактическое обслуживание",
        "Приоритетная поддержка",
        "Расширенные часы работы"
      ]
    },
    {
      name: "Премиум",
      price: "15,000₽",
      period: "/месяц",
      computers: "До 50 ПК",
      responseTime: "1 час",
      features: [
        "Все из стандартного плана",
        "Неограниченные выезды",
        "Круглосуточная поддержка",
        "Выделенный специалист",
        "SLA гарантии"
      ]
    }
  ];

  const commonIssues = [
    {
      problem: "Компьютер не включается",
      causes: ["Проблемы с питанием", "Неисправность материнской платы", "Проблемы с RAM"],
      solutions: ["Проверка блока питания", "Диагностика компонентов", "Замена неисправных деталей"],
      urgency: "Высокая"
    },
    {
      problem: "Медленная работа системы",
      causes: ["Недостаток RAM", "Фрагментация диска", "Вирусы", "Много автозагрузки"],
      solutions: ["Увеличение RAM", "Дефрагментация", "Антивирусная проверка", "Оптимизация автозагрузки"],
      urgency: "Средняя"
    },
    {
      problem: "Синий экран смерти (BSOD)",
      causes: ["Проблемы с драйверами", "Неисправность RAM", "Перегрев", "Вирусы"],
      solutions: ["Обновление драйверов", "Тестирование RAM", "Чистка системы охлаждения", "Проверка на вирусы"],
      urgency: "Высокая"
    },
    {
      problem: "Нет доступа в интернет",
      causes: ["Проблемы с провайдером", "Настройки сети", "Неисправность роутера"],
      solutions: ["Проверка подключения", "Настройка сетевых параметров", "Перезагрузка оборудования"],
      urgency: "Средняя"
    }
  ];

  const preventiveMaintenance = [
    {
      task: "Чистка от пыли",
      frequency: "Каждые 6 месяцев",
      importance: "Высокая",
      description: "Предотвращает перегрев компонентов"
    },
    {
      task: "Обновление ПО",
      frequency: "Ежемесячно",
      importance: "Высокая",
      description: "Обеспечивает безопасность и стабильность"
    },
    {
      task: "Дефрагментация диска",
      frequency: "Каждые 3 месяца",
      importance: "Средняя",
      description: "Улучшает производительность HDD"
    },
    {
      task: "Проверка на вирусы",
      frequency: "Еженедельно",
      importance: "Высокая",
      description: "Защита от вредоносного ПО"
    },
    {
      task: "Резервное копирование",
      frequency: "Ежедневно",
      importance: "Критическая",
      description: "Защита от потери данных"
    },
    {
      task: "Проверка температуры",
      frequency: "Ежемесячно",
      importance: "Средняя",
      description: "Контроль перегрева компонентов"
    }
  ];

  const hardwareCategories = [
    {
      category: "Процессоры",
      brands: ["Intel", "AMD"],
      services: ["Замена", "Разгон", "Тестирование"],
      icon: "Cpu"
    },
    {
      category: "Оперативная память",
      brands: ["Kingston", "Corsair", "G.Skill"],
      services: ["Установка", "Тестирование", "Диагностика"],
      icon: "MemoryStick"
    },
    {
      category: "Жесткие диски",
      brands: ["Western Digital", "Seagate", "Samsung"],
      services: ["Замена", "Восстановление", "Клонирование"],
      icon: "HardDrive"
    },
    {
      category: "Видеокарты",
      brands: ["NVIDIA", "AMD"],
      services: ["Установка", "Настройка", "Ремонт"],
      icon: "Monitor"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <Badge variant="secondary" className="mb-4">Обслуживание ПК</Badge>
            <h1 className="text-4xl font-bold mb-4">Техническое обслуживание компьютеров</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Профессиональное обслуживание, ремонт и модернизация компьютерной техники. 
              Обеспечиваем стабильную работу вашего оборудования
            </p>
          </div>
        </div>
      </div>

      {/* Services */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Наши услуги</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Полный спектр услуг по обслуживанию компьютерной техники
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {supportServices.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Icon name={service.icon} size={32} className="text-primary" />
                </div>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-xl font-bold text-primary">{service.price}</span>
                  <Badge variant="outline">{service.duration}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Icon name="Check" size={16} className="text-green-500 mr-2" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full">Заказать услугу</Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Support Plans */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Планы технической поддержки</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {supportPlans.map((plan, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <CardTitle>{plan.name}</CardTitle>
                  <div className="text-3xl font-bold text-primary mt-2">
                    {plan.price}
                    <span className="text-sm font-normal text-gray-500">{plan.period}</span>
                  </div>
                  <div className="space-y-1 mt-3">
                    <Badge variant="outline">{plan.computers}</Badge>
                    <p className="text-sm text-gray-600">Время реакции: {plan.responseTime}</p>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <Icon name="Check" size={16} className="text-green-500 mr-2" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full">Выбрать план</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Detailed Information */}
        <Tabs defaultValue="issues" className="w-full">
          <TabsList className="grid w-full grid-cols-4 max-w-2xl mx-auto mb-8">
            <TabsTrigger value="issues">Проблемы</TabsTrigger>
            <TabsTrigger value="prevention">Профилактика</TabsTrigger>
            <TabsTrigger value="hardware">Железо</TabsTrigger>
            <TabsTrigger value="emergency">Экстренная помощь</TabsTrigger>
          </TabsList>

          <TabsContent value="issues">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-center mb-8">Частые проблемы и решения</h3>
              {commonIssues.map((issue, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{issue.problem}</CardTitle>
                      <Badge variant={
                        issue.urgency === "Высокая" ? "destructive" :
                        issue.urgency === "Средняя" ? "default" : "secondary"
                      }>
                        {issue.urgency} срочность
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-2 text-red-600">Возможные причины:</h4>
                        <ul className="space-y-1">
                          {issue.causes.map((cause, causeIndex) => (
                            <li key={causeIndex} className="flex items-start">
                              <Icon name="AlertCircle" size={14} className="text-red-500 mr-2 mt-0.5" />
                              <span className="text-sm">{cause}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2 text-green-600">Способы решения:</h4>
                        <ul className="space-y-1">
                          {issue.solutions.map((solution, solutionIndex) => (
                            <li key={solutionIndex} className="flex items-start">
                              <Icon name="CheckCircle" size={14} className="text-green-500 mr-2 mt-0.5" />
                              <span className="text-sm">{solution}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="prevention">
            <div>
              <h3 className="text-2xl font-bold text-center mb-8">График профилактического обслуживания</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {preventiveMaintenance.map((maintenance, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-lg">{maintenance.task}</CardTitle>
                      <div className="flex items-center justify-between">
                        <Badge variant="outline">{maintenance.frequency}</Badge>
                        <Badge variant={
                          maintenance.importance === "Критическая" ? "destructive" :
                          maintenance.importance === "Высокая" ? "default" : "secondary"
                        }>
                          {maintenance.importance}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 text-sm">{maintenance.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="hardware">
            <div>
              <h3 className="text-2xl font-bold text-center mb-8">Работа с компьютерным железом</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {hardwareCategories.map((category, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader className="text-center">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon name={category.icon} size={32} className="text-primary" />
                      </div>
                      <CardTitle className="text-lg">{category.category}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div>
                          <h4 className="font-semibold text-sm mb-1">Бренды:</h4>
                          <div className="flex flex-wrap gap-1">
                            {category.brands.map((brand, brandIndex) => (
                              <Badge key={brandIndex} variant="secondary" className="text-xs">
                                {brand}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold text-sm mb-1">Услуги:</h4>
                          <ul className="space-y-1">
                            {category.services.map((service, serviceIndex) => (
                              <li key={serviceIndex} className="text-xs text-gray-600">
                                • {service}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="emergency">
            <Card>
              <CardHeader>
                <CardTitle>Экстренная техническая помощь</CardTitle>
                <CardDescription>Круглосуточная поддержка при критических сбоях</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold mb-4">Когда обращаться за экстренной помощью:</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <Icon name="AlertTriangle" size={16} className="text-red-500 mr-2 mt-0.5" />
                        <span className="text-sm">Полный отказ критически важного оборудования</span>
                      </li>
                      <li className="flex items-start">
                        <Icon name="AlertTriangle" size={16} className="text-red-500 mr-2 mt-0.5" />
                        <span className="text-sm">Подозрение на вирусную атаку</span>
                      </li>
                      <li className="flex items-start">
                        <Icon name="AlertTriangle" size={16} className="text-red-500 mr-2 mt-0.5" />
                        <span className="text-sm">Потеря важных данных</span>
                      </li>
                      <li className="flex items-start">
                        <Icon name="AlertTriangle" size={16} className="text-red-500 mr-2 mt-0.5" />
                        <span className="text-sm">Сбои в работе серверов</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-4">Как получить экстренную помощь:</h4>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3 p-3 bg-red-50 rounded-lg">
                        <Icon name="Phone" size={20} className="text-red-600" />
                        <div>
                          <p className="font-semibold text-red-800">Горячая линия</p>
                          <p className="text-sm text-red-600">+7 (495) 123-45-67</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                        <Icon name="MessageCircle" size={20} className="text-blue-600" />
                        <div>
                          <p className="font-semibold text-blue-800">Telegram</p>
                          <p className="text-sm text-blue-600">@itcompany_support</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                        <Icon name="Mail" size={20} className="text-green-600" />
                        <div>
                          <p className="font-semibold text-green-800">Email</p>
                          <p className="text-sm text-green-600">emergency@itcompany.ru</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
                  <div className="flex items-start space-x-3">
                    <Icon name="Clock" size={20} className="text-yellow-600 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-yellow-800">Время реакции</h4>
                      <p className="text-sm text-yellow-700">
                        Критические заявки обрабатываются в течение 15 минут. 
                        При необходимости наш специалист выезжает на место в течение 2 часов.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      {/* Why Choose Us */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Почему выбирают нас</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Преимущества работы с нашей службой технической поддержки
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardHeader>
                <Icon name="Clock" size={32} className="text-primary mx-auto mb-3" />
                <CardTitle className="text-lg">Быстрое реагирование</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Время реакции на заявки от 15 минут до 4 часов в зависимости от тарифа
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Icon name="Users" size={32} className="text-primary mx-auto mb-3" />
                <CardTitle className="text-lg">Опытные специалисты</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Сертифицированные инженеры с опытом работы более 5 лет
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Icon name="Shield" size={32} className="text-primary mx-auto mb-3" />
                <CardTitle className="text-lg">Гарантия качества</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Гарантия на все виды работ от 30 дней до 1 года
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Icon name="MapPin" size={32} className="text-primary mx-auto mb-3" />
                <CardTitle className="text-lg">Выезд на место</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Выезд специалистов по Москве и области в удобное время
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Emergency Banner */}
      <div className="bg-red-50 border-l-4 border-red-500 py-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Icon name="AlertTriangle" size={32} className="text-red-500" />
              <div>
                <h3 className="text-lg font-semibold text-red-800">Компьютер не работает?</h3>
                <p className="text-red-700">Звоните прямо сейчас - поможем в течение 15 минут!</p>
              </div>
            </div>
            <Button variant="destructive" size="lg">
              <Icon name="Phone" size={20} className="mr-2" />
              +7 (495) 123-45-67
            </Button>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Нужна помощь с компьютером?</h2>
          <p className="text-xl mb-8">Получите бесплатную диагностику и консультацию наших специалистов</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg">
              <Icon name="Search" size={20} className="mr-2" />
              Бесплатная диагностика
            </Button>
            <Button variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white hover:text-primary">
              <Icon name="Calendar" size={20} className="mr-2" />
              Записаться на выезд
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}