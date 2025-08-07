import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";

export default function CloudSolutions() {
  const cloudServices = [
    {
      title: "Облачная инфраструктура",
      description: "Полностью управляемая облачная инфраструктура для вашего бизнеса",
      icon: "Cloud",
      price: "от 10,000₽/мес",
      features: [
        "Автоматическое масштабирование",
        "Высокая доступность",
        "Географическое резервирование",
        "Мониторинг 24/7",
        "Техническая поддержка"
      ]
    },
    {
      title: "Миграция в облако",
      description: "Безопасный перенос ваших систем и данных в облачную среду",
      icon: "Upload",
      price: "от 50,000₽",
      features: [
        "Анализ текущей инфраструктуры",
        "Планирование миграции",
        "Поэтапный перенос данных",
        "Тестирование и оптимизация",
        "Обучение персонала"
      ]
    },
    {
      title: "Облачные базы данных",
      description: "Управляемые базы данных с автоматическим резервированием",
      icon: "Database",
      price: "от 5,000₽/мес",
      features: [
        "PostgreSQL, MySQL, MongoDB",
        "Автоматические бэкапы",
        "Масштабирование по требованию",
        "Высокая производительность",
        "Мониторинг и алерты"
      ]
    },
    {
      title: "Облачная безопасность",
      description: "Комплексная защита облачной инфраструктуры",
      icon: "Shield",
      price: "от 8,000₽/мес",
      features: [
        "Файрвол и WAF",
        "DDoS защита",
        "Шифрование данных",
        "Контроль доступа",
        "Аудит безопасности"
      ]
    },
    {
      title: "Облачное хранилище",
      description: "Надежное хранение файлов с возможностью совместной работы",
      icon: "FolderOpen",
      price: "от 500₽/мес за 100GB",
      features: [
        "Синхронизация устройств",
        "Совместная работа",
        "Версионность файлов",
        "Корзина для восстановления",
        "Мобильные приложения"
      ]
    },
    {
      title: "Облачные рабочие места",
      description: "Виртуальные рабочие столы для удаленной работы",
      icon: "Monitor",
      price: "от 3,000₽/мес за место",
      features: [
        "Доступ из любой точки мира",
        "Предустановленное ПО",
        "Централизованное управление",
        "Безопасность данных",
        "Техническая поддержка"
      ]
    }
  ];

  const cloudBenefits = [
    {
      title: "Экономия затрат",
      description: "Снижение расходов на ИТ-инфраструктуру до 40%",
      icon: "DollarSign",
      details: [
        "Отсутствие капитальных затрат",
        "Оплата только за используемые ресурсы",
        "Снижение затрат на обслуживание",
        "Экономия на лицензиях ПО"
      ]
    },
    {
      title: "Масштабируемость",
      description: "Мгновенное увеличение или уменьшение ресурсов",
      icon: "TrendingUp",
      details: [
        "Автоматическое масштабирование",
        "Оплата по факту использования",
        "Быстрое развертывание",
        "Гибкость конфигураций"
      ]
    },
    {
      title: "Надежность",
      description: "Гарантированная доступность 99.9%",
      icon: "Shield",
      details: [
        "Резервирование данных",
        "Географическое распределение",
        "Автоматическое восстановление",
        "Мониторинг 24/7"
      ]
    },
    {
      title: "Безопасность",
      description: "Многоуровневая защита данных и приложений",
      icon: "Lock",
      details: [
        "Шифрование данных",
        "Контроль доступа",
        "Регулярные обновления",
        "Соответствие стандартам"
      ]
    }
  ];

  const migrationSteps = [
    {
      step: "1",
      title: "Аудит инфраструктуры",
      description: "Анализ текущих систем и определение стратегии миграции",
      duration: "1-2 недели"
    },
    {
      step: "2",
      title: "Планирование",
      description: "Создание детального плана миграции с минимизацией рисков",
      duration: "1 неделя"
    },
    {
      step: "3",
      title: "Подготовка облачной среды",
      description: "Настройка облачной инфраструктуры и сетевых подключений",
      duration: "1-2 недели"
    },
    {
      step: "4",
      title: "Тестовая миграция",
      description: "Перенос тестовых данных и проверка работоспособности",
      duration: "1 неделя"
    },
    {
      step: "5",
      title: "Основная миграция",
      description: "Поэтапный перенос производственных систем",
      duration: "2-4 недели"
    },
    {
      step: "6",
      title: "Оптимизация",
      description: "Настройка производительности и обучение персонала",
      duration: "1-2 недели"
    }
  ];

  const cloudProviders = [
    {
      name: "Amazon Web Services",
      logo: "/img/aa876076-6069-4811-aef5-dbcb0532bb4d.jpg",
      specialization: "Глобальная облачная платформа",
      services: ["EC2", "S3", "RDS", "Lambda"]
    },
    {
      name: "Microsoft Azure",
      logo: "/img/31c5a312-3ceb-4d56-8c2d-f5fd25e3189f.jpg",
      specialization: "Корпоративные облачные решения",
      services: ["Virtual Machines", "SQL Database", "Active Directory"]
    },
    {
      name: "Yandex Cloud",
      logo: "/img/1411beba-e0be-43ae-ac50-644783012932.jpg",
      specialization: "Российская облачная платформа",
      services: ["Compute Cloud", "Object Storage", "Managed Databases"]
    }
  ];

  const useCases = [
    {
      title: "Стартап",
      description: "Быстрый запуск без больших инвестиций в инфраструктуру",
      benefits: ["Низкие стартовые затраты", "Быстрое масштабирование", "Фокус на продукте"],
      icon: "Rocket"
    },
    {
      title: "Средний бизнес",
      description: "Оптимизация ИТ-затрат и повышение эффективности",
      benefits: ["Снижение ИТ-затрат", "Повышение надежности", "Упрощение управления"],
      icon: "Building"
    },
    {
      title: "Крупное предприятие",
      description: "Цифровая трансформация и модернизация ИТ",
      benefits: ["Гибридные решения", "Соответствие требованиям", "Глобальная доступность"],
      icon: "Globe"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <Badge variant="secondary" className="mb-4">Облачные решения</Badge>
            <h1 className="text-4xl font-bold mb-4">Облачные технологии</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Современные облачные решения для оптимизации ИТ-инфраструктуры. 
              Миграция в облако, управляемые сервисы и техническая поддержка
            </p>
          </div>
        </div>
      </div>

      {/* Cloud Benefits */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Преимущества облачных технологий</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Узнайте, как облачные решения могут трансформировать ваш бизнес
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {cloudBenefits.map((benefit, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={benefit.icon} size={32} className="text-primary" />
                </div>
                <CardTitle className="text-lg">{benefit.title}</CardTitle>
                <CardDescription>{benefit.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {benefit.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-center">
                      <Icon name="Check" size={14} className="text-green-500 mr-2" />
                      <span className="text-sm">{detail}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Cloud Services */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Наши облачные услуги</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cloudServices.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Icon name={service.icon} size={32} className="text-primary" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                  <div className="text-xl font-bold text-primary mt-2">{service.price}</div>
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
        </div>

        {/* Migration Process */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Процесс миграции в облако</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {migrationSteps.map((step, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                      {step.step}
                    </div>
                    <Badge variant="outline">{step.duration}</Badge>
                  </div>
                  <CardTitle className="text-lg">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Cloud Providers */}
        <div className="bg-white rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Облачные платформы</h2>
          <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
            Мы работаем с ведущими облачными провайдерами для обеспечения лучших решений
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {cloudProviders.map((provider, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <img 
                    src={provider.logo} 
                    alt={provider.name}
                    className="w-20 h-20 object-cover rounded-lg mx-auto mb-4"
                  />
                  <CardTitle className="text-lg">{provider.name}</CardTitle>
                  <CardDescription>{provider.specialization}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap justify-center gap-2">
                    {provider.services.map((service, serviceIndex) => (
                      <Badge key={serviceIndex} variant="secondary" className="text-xs">
                        {service}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Use Cases */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Кому подходят облачные решения</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={useCase.icon} size={32} className="text-primary" />
                  </div>
                  <CardTitle className="text-xl">{useCase.title}</CardTitle>
                  <CardDescription>{useCase.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {useCase.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center">
                        <Icon name="Check" size={16} className="text-green-500 mr-2" />
                        <span className="text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Cloud Dashboard */}
        <Tabs defaultValue="monitoring" className="w-full">
          <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto mb-8">
            <TabsTrigger value="monitoring">Мониторинг</TabsTrigger>
            <TabsTrigger value="costs">Затраты</TabsTrigger>
            <TabsTrigger value="security">Безопасность</TabsTrigger>
          </TabsList>

          <TabsContent value="monitoring">
            <Card>
              <CardHeader>
                <CardTitle>Мониторинг облачной инфраструктуры</CardTitle>
                <CardDescription>Отслеживание производительности и доступности в реальном времени</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold mb-4">Текущие метрики</h4>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Загрузка CPU</span>
                          <span>34%</span>
                        </div>
                        <Progress value={34} className="h-2" />
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Использование памяти</span>
                          <span>56%</span>
                        </div>
                        <Progress value={56} className="h-2" />
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Сетевой трафик</span>
                          <span>23%</span>
                        </div>
                        <Progress value={23} className="h-2" />
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Использование хранилища</span>
                          <span>67%</span>
                        </div>
                        <Progress value={67} className="h-2" />
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-4">Статус сервисов</h4>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                        <div className="flex items-center space-x-2">
                          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                          <span className="text-sm font-medium">Web Server</span>
                        </div>
                        <Badge variant="default">Работает</Badge>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                        <div className="flex items-center space-x-2">
                          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                          <span className="text-sm font-medium">Database</span>
                        </div>
                        <Badge variant="default">Работает</Badge>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                        <div className="flex items-center space-x-2">
                          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                          <span className="text-sm font-medium">Backup Service</span>
                        </div>
                        <Badge variant="secondary">Обслуживание</Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="costs">
            <Card>
              <CardHeader>
                <CardTitle>Анализ затрат на облачные ресурсы</CardTitle>
                <CardDescription>Детализация расходов и рекомендации по оптимизации</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold mb-4">Текущие затраты (месяц)</h4>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center p-3 border rounded-lg">
                        <span className="text-sm">Вычислительные ресурсы</span>
                        <span className="font-semibold">15,000₽</span>
                      </div>
                      <div className="flex justify-between items-center p-3 border rounded-lg">
                        <span className="text-sm">Хранилище данных</span>
                        <span className="font-semibold">3,500₽</span>
                      </div>
                      <div className="flex justify-between items-center p-3 border rounded-lg">
                        <span className="text-sm">Сетевой трафик</span>
                        <span className="font-semibold">1,200₽</span>
                      </div>
                      <div className="flex justify-between items-center p-3 border rounded-lg">
                        <span className="text-sm">Дополнительные сервисы</span>
                        <span className="font-semibold">2,800₽</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-primary/10 rounded-lg">
                        <span className="font-semibold">Итого</span>
                        <span className="font-bold text-primary">22,500₽</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-4">Рекомендации по оптимизации</h4>
                    <div className="space-y-3">
                      <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                        <div className="flex items-start space-x-2">
                          <Icon name="TrendingDown" size={16} className="text-green-600 mt-0.5" />
                          <div>
                            <p className="text-sm font-medium text-green-800">Экономия 20%</p>
                            <p className="text-xs text-green-600">Использование зарезервированных инстансов</p>
                          </div>
                        </div>
                      </div>
                      <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                        <div className="flex items-start space-x-2">
                          <Icon name="Zap" size={16} className="text-blue-600 mt-0.5" />
                          <div>
                            <p className="text-sm font-medium text-blue-800">Автомасштабирование</p>
                            <p className="text-xs text-blue-600">Оплата только за используемые ресурсы</p>
                          </div>
                        </div>
                      </div>
                      <div className="p-3 bg-purple-50 border border-purple-200 rounded-lg">
                        <div className="flex items-start space-x-2">
                          <Icon name="Archive" size={16} className="text-purple-600 mt-0.5" />
                          <div>
                            <p className="text-sm font-medium text-purple-800">Архивное хранилище</p>
                            <p className="text-xs text-purple-600">Перенос редко используемых данных</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="security">
            <Card>
              <CardHeader>
                <CardTitle>Безопасность облачной инфраструктуры</CardTitle>
                <CardDescription>Многоуровневая защита ваших данных и приложений</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold mb-4">Уровни защиты</h4>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3 p-3 border rounded-lg">
                        <Icon name="Shield" size={20} className="text-green-500" />
                        <div>
                          <p className="font-medium text-sm">Сетевая безопасность</p>
                          <p className="text-xs text-gray-600">Файрвол, VPN, DDoS защита</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3 p-3 border rounded-lg">
                        <Icon name="Lock" size={20} className="text-green-500" />
                        <div>
                          <p className="font-medium text-sm">Шифрование данных</p>
                          <p className="text-xs text-gray-600">AES-256 для данных в покое и передаче</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3 p-3 border rounded-lg">
                        <Icon name="Users" size={20} className="text-green-500" />
                        <div>
                          <p className="font-medium text-sm">Управление доступом</p>
                          <p className="text-xs text-gray-600">IAM, многофакторная аутентификация</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3 p-3 border rounded-lg">
                        <Icon name="Eye" size={20} className="text-green-500" />
                        <div>
                          <p className="font-medium text-sm">Мониторинг и аудит</p>
                          <p className="text-xs text-gray-600">Логирование всех действий</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-4">Соответствие стандартам</h4>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                        <span className="text-sm font-medium">ISO 27001</span>
                        <Badge variant="default">Соответствует</Badge>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                        <span className="text-sm font-medium">152-ФЗ (ПДн)</span>
                        <Badge variant="default">Соответствует</Badge>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                        <span className="text-sm font-medium">GDPR</span>
                        <Badge variant="default">Соответствует</Badge>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                        <span className="text-sm font-medium">SOC 2</span>
                        <Badge variant="secondary">В процессе</Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      {/* ROI Calculator */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Калькулятор экономии</h2>
            <p className="text-gray-600 mb-8">
              Рассчитайте потенциальную экономию от перехода в облако
            </p>
            
            <Card>
              <CardContent className="p-8">
                <div className="grid grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Количество серверов</label>
                    <select className="w-full p-3 border border-gray-300 rounded-lg">
                      <option>1-5 серверов</option>
                      <option>6-20 серверов</option>
                      <option>21-50 серверов</option>
                      <option>50+ серверов</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Количество пользователей</label>
                    <select className="w-full p-3 border border-gray-300 rounded-lg">
                      <option>1-50 пользователей</option>
                      <option>51-200 пользователей</option>
                      <option>201-500 пользователей</option>
                      <option>500+ пользователей</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Текущие ИТ-затраты</label>
                    <select className="w-full p-3 border border-gray-300 rounded-lg">
                      <option>До 100,000₽/мес</option>
                      <option>100,000-500,000₽/мес</option>
                      <option>500,000-1,000,000₽/мес</option>
                      <option>Более 1,000,000₽/мес</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Отрасль</label>
                    <select className="w-full p-3 border border-gray-300 rounded-lg">
                      <option>Торговля</option>
                      <option>Производство</option>
                      <option>Финансы</option>
                      <option>ИТ</option>
                      <option>Другое</option>
                    </select>
                  </div>
                </div>
                
                <div className="bg-green-50 p-6 rounded-lg mb-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">35%</div>
                    <p className="text-green-800 font-semibold">Потенциальная экономия</p>
                    <p className="text-sm text-green-600 mt-1">≈ 35,000₽/месяц</p>
                  </div>
                </div>
                
                <Button size="lg" className="w-full">
                  <Icon name="Calculator" size={20} className="mr-2" />
                  Получить детальный расчет
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Готовы к переходу в облако?</h2>
          <p className="text-xl mb-8">Получите бесплатную консультацию и план миграции от наших экспертов</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg">
              <Icon name="Cloud" size={20} className="mr-2" />
              Начать миграцию
            </Button>
            <Button variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white hover:text-primary">
              <Icon name="Phone" size={20} className="mr-2" />
              Получить консультацию
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}