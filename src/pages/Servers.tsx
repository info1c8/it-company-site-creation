import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";

export default function Servers() {
  const serverPlans = [
    {
      name: "VPS Starter",
      type: "Виртуальный сервер",
      price: "2,500₽",
      period: "/месяц",
      popular: false,
      specs: {
        cpu: "2 vCPU",
        ram: "4 GB",
        storage: "50 GB SSD",
        bandwidth: "Безлимитный",
        ip: "1 IP адрес"
      },
      features: [
        "Панель управления",
        "Автоматические бэкапы",
        "Техподдержка 24/7",
        "Мониторинг",
        "SSL сертификат"
      ]
    },
    {
      name: "VPS Professional",
      type: "Виртуальный сервер",
      price: "5,000₽",
      period: "/месяц",
      popular: true,
      specs: {
        cpu: "4 vCPU",
        ram: "8 GB",
        storage: "100 GB SSD",
        bandwidth: "Безлимитный",
        ip: "2 IP адреса"
      },
      features: [
        "Все из Starter",
        "Приоритетная поддержка",
        "Расширенный мониторинг",
        "Дополнительные бэкапы",
        "DDoS защита"
      ]
    },
    {
      name: "VPS Enterprise",
      type: "Виртуальный сервер",
      price: "10,000₽",
      period: "/месяц",
      popular: false,
      specs: {
        cpu: "8 vCPU",
        ram: "16 GB",
        storage: "200 GB SSD",
        bandwidth: "Безлимитный",
        ip: "4 IP адреса"
      },
      features: [
        "Все из Professional",
        "Выделенный менеджер",
        "SLA 99.9%",
        "Персональные настройки",
        "Консультации архитектора"
      ]
    },
    {
      name: "Dedicated Server",
      type: "Выделенный сервер",
      price: "25,000₽",
      period: "/месяц",
      popular: false,
      specs: {
        cpu: "Intel Xeon E5-2620",
        ram: "32 GB DDR4",
        storage: "1 TB SSD",
        bandwidth: "Безлимитный",
        ip: "8 IP адресов"
      },
      features: [
        "Полный контроль",
        "Максимальная производительность",
        "Гибкая конфигурация",
        "Приоритетная поддержка",
        "Физический доступ"
      ]
    }
  ];

  const datacenters = [
    {
      name: "Москва DC1",
      location: "г. Москва, ул. Тверская",
      tier: "Tier III",
      uptime: "99.98%",
      servers: 450,
      features: ["Резервное питание", "Климат-контроль", "Физическая охрана", "Пожаротушение"]
    },
    {
      name: "СПб DC1",
      location: "г. Санкт-Петербург, Невский пр.",
      tier: "Tier III",
      uptime: "99.95%",
      servers: 280,
      features: ["Резервное питание", "Климат-контроль", "Физическая охрана", "Пожаротушение"]
    },
    {
      name: "Екатеринбург DC1",
      location: "г. Екатеринбург, ул. Ленина",
      tier: "Tier II",
      uptime: "99.90%",
      servers: 150,
      features: ["Резервное питание", "Климат-контроль", "Физическая охрана"]
    }
  ];

  const operatingSystems = [
    {
      name: "Ubuntu Server",
      version: "22.04 LTS",
      description: "Популярный дистрибутив Linux для серверов",
      icon: "Monitor",
      free: true
    },
    {
      name: "CentOS",
      version: "8 Stream",
      description: "Стабильная корпоративная ОС на базе Red Hat",
      icon: "Server",
      free: true
    },
    {
      name: "Windows Server",
      version: "2022",
      description: "Серверная ОС Microsoft с полной поддержкой",
      icon: "Windows",
      free: false,
      price: "+3,000₽/мес"
    },
    {
      name: "Debian",
      version: "12",
      description: "Надежная и безопасная ОС для серверов",
      icon: "Terminal",
      free: true
    }
  ];

  const additionalServices = [
    {
      name: "Управляемые базы данных",
      description: "PostgreSQL, MySQL, MongoDB с автоматическим обслуживанием",
      price: "от 2,000₽/мес",
      icon: "Database"
    },
    {
      name: "CDN и кэширование",
      description: "Ускорение загрузки сайтов по всему миру",
      price: "от 1,000₽/мес",
      icon: "Zap"
    },
    {
      name: "Load Balancer",
      description: "Распределение нагрузки между серверами",
      price: "от 3,000₽/мес",
      icon: "BarChart"
    },
    {
      name: "Мониторинг и алерты",
      description: "Круглосуточный мониторинг состояния серверов",
      price: "от 500₽/мес",
      icon: "Activity"
    },
    {
      name: "Автоматические бэкапы",
      description: "Ежедневные резервные копии с возможностью восстановления",
      price: "от 800₽/мес",
      icon: "Copy"
    },
    {
      name: "DDoS защита",
      description: "Защита от DDoS атак до 100 Гбит/с",
      price: "от 2,500₽/мес",
      icon: "Shield"
    }
  ];

  const serverFeatures = [
    {
      title: "Высокая производительность",
      description: "Современные процессоры Intel Xeon и быстрые SSD диски",
      icon: "Zap"
    },
    {
      title: "Надежность",
      description: "Uptime 99.9% с резервированием всех критических компонентов",
      icon: "Shield"
    },
    {
      title: "Масштабируемость",
      description: "Легкое увеличение ресурсов без перезагрузки сервера",
      icon: "TrendingUp"
    },
    {
      title: "Безопасность",
      description: "Многоуровневая защита и регулярные обновления безопасности",
      icon: "Lock"
    },
    {
      title: "Поддержка 24/7",
      description: "Круглосуточная техническая поддержка от экспертов",
      icon: "Headphones"
    },
    {
      title: "Простое управление",
      description: "Интуитивная панель управления для всех операций",
      icon: "Settings"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <Badge variant="secondary" className="mb-4">Серверные решения</Badge>
            <h1 className="text-4xl font-bold mb-4">Аренда серверов</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Надежные серверные решения для вашего бизнеса. VPS и выделенные серверы 
              с гарантией uptime 99.9% и круглосуточной технической поддержкой
            </p>
          </div>
        </div>
      </div>

      {/* Server Plans */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Тарифные планы</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Выберите оптимальную конфигурацию сервера для ваших задач
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {serverPlans.map((plan, index) => (
            <Card key={index} className={`hover:shadow-lg transition-shadow ${plan.popular ? 'border-primary border-2 relative' : ''}`}>
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-primary">Популярный</Badge>
                </div>
              )}
              <CardHeader className="text-center">
                <Badge variant="outline" className="w-fit mx-auto mb-2">{plan.type}</Badge>
                <CardTitle>{plan.name}</CardTitle>
                <div className="text-3xl font-bold text-primary mt-2">
                  {plan.price}
                  <span className="text-sm font-normal text-gray-500">{plan.period}</span>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600">CPU:</span>
                    <span className="font-semibold">{plan.specs.cpu}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">RAM:</span>
                    <span className="font-semibold">{plan.specs.ram}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Диск:</span>
                    <span className="font-semibold">{plan.specs.storage}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Трафик:</span>
                    <span className="font-semibold">{plan.specs.bandwidth}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">IP:</span>
                    <span className="font-semibold">{plan.specs.ip}</span>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold mb-2">Включено:</h4>
                  <ul className="space-y-1">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <Icon name="Check" size={14} className="text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Button className="w-full" variant={plan.popular ? "default" : "outline"}>
                  Заказать сервер
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Преимущества наших серверов</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serverFeatures.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={feature.icon} size={32} className="text-primary" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Server Management */}
        <Tabs defaultValue="monitoring" className="w-full mb-16">
          <TabsList className="grid w-full grid-cols-4 max-w-2xl mx-auto mb-8">
            <TabsTrigger value="monitoring">Мониторинг</TabsTrigger>
            <TabsTrigger value="os">ОС</TabsTrigger>
            <TabsTrigger value="datacenters">Дата-центры</TabsTrigger>
            <TabsTrigger value="additional">Доп. услуги</TabsTrigger>
          </TabsList>

          <TabsContent value="monitoring">
            <Card>
              <CardHeader>
                <CardTitle>Мониторинг серверов в реальном времени</CardTitle>
                <CardDescription>Отслеживание производительности и состояния ваших серверов</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold mb-4">Метрики производительности</h4>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Загрузка CPU</span>
                          <span>45%</span>
                        </div>
                        <Progress value={45} className="h-2" />
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Использование RAM</span>
                          <span>67%</span>
                        </div>
                        <Progress value={67} className="h-2" />
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Загрузка диска</span>
                          <span>34%</span>
                        </div>
                        <Progress value={34} className="h-2" />
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Сетевая активность</span>
                          <span>23%</span>
                        </div>
                        <Progress value={23} className="h-2" />
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-4">Возможности мониторинга</h4>
                    <ul className="space-y-3">
                      <li className="flex items-center">
                        <Icon name="Check" size={16} className="text-green-500 mr-2" />
                        Мониторинг в реальном времени
                      </li>
                      <li className="flex items-center">
                        <Icon name="Check" size={16} className="text-green-500 mr-2" />
                        Настраиваемые алерты
                      </li>
                      <li className="flex items-center">
                        <Icon name="Check" size={16} className="text-green-500 mr-2" />
                        Исторические данные
                      </li>
                      <li className="flex items-center">
                        <Icon name="Check" size={16} className="text-green-500 mr-2" />
                        Графики и отчеты
                      </li>
                      <li className="flex items-center">
                        <Icon name="Check" size={16} className="text-green-500 mr-2" />
                        API для интеграции
                      </li>
                      <li className="flex items-center">
                        <Icon name="Check" size={16} className="text-green-500 mr-2" />
                        Мобильные уведомления
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="os">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {operatingSystems.map((os, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon name={os.icon} size={32} className="text-primary" />
                    </div>
                    <CardTitle className="text-lg">{os.name}</CardTitle>
                    <Badge variant="outline">{os.version}</Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm mb-4">{os.description}</p>
                    <div className="text-center">
                      {os.free ? (
                        <Badge variant="default">Бесплатно</Badge>
                      ) : (
                        <Badge variant="secondary">{os.price}</Badge>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="datacenters">
            <div className="space-y-6">
              {datacenters.map((dc, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-xl">{dc.name}</CardTitle>
                        <CardDescription>{dc.location}</CardDescription>
                      </div>
                      <Badge variant="outline">{dc.tier}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-3 gap-6">
                      <div>
                        <h4 className="font-semibold mb-2">Характеристики</h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-gray-600">Uptime:</span>
                            <span className="font-semibold text-green-600">{dc.uptime}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Серверов:</span>
                            <span className="font-semibold">{dc.servers}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Уровень:</span>
                            <span className="font-semibold">{dc.tier}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="md:col-span-2">
                        <h4 className="font-semibold mb-2">Особенности</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {dc.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center">
                              <Icon name="Check" size={14} className="text-green-500 mr-2" />
                              <span className="text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="additional">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {additionalServices.map((service, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <Icon name={service.icon} size={24} className="text-primary" />
                    </div>
                    <CardTitle className="text-lg">{service.name}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-bold text-primary">{service.price}</span>
                      <Button size="sm">Подключить</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Calculator */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Калькулятор стоимости</h2>
            <p className="text-gray-600 mb-8">
              Рассчитайте стоимость сервера с учетом ваших требований
            </p>
            
            <Card>
              <CardContent className="p-8">
                <div className="grid grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">CPU (ядра)</label>
                    <select className="w-full p-3 border border-gray-300 rounded-lg">
                      <option>2 ядра</option>
                      <option>4 ядра</option>
                      <option>8 ядер</option>
                      <option>16 ядер</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">RAM (ГБ)</label>
                    <select className="w-full p-3 border border-gray-300 rounded-lg">
                      <option>4 GB</option>
                      <option>8 GB</option>
                      <option>16 GB</option>
                      <option>32 GB</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Диск (ГБ)</label>
                    <select className="w-full p-3 border border-gray-300 rounded-lg">
                      <option>50 GB SSD</option>
                      <option>100 GB SSD</option>
                      <option>200 GB SSD</option>
                      <option>500 GB SSD</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Операционная система</label>
                    <select className="w-full p-3 border border-gray-300 rounded-lg">
                      <option>Ubuntu (бесплатно)</option>
                      <option>CentOS (бесплатно)</option>
                      <option>Windows Server (+3,000₽)</option>
                      <option>Debian (бесплатно)</option>
                    </select>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold">Итоговая стоимость:</span>
                    <span className="text-2xl font-bold text-primary">5,000₽/мес</span>
                  </div>
                </div>
                
                <Button size="lg" className="w-full">
                  <Icon name="ShoppingCart" size={20} className="mr-2" />
                  Заказать сервер
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Support */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Техническая поддержка</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Наша команда экспертов готова помочь с настройкой, 
              оптимизацией и решением любых технических вопросов
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Icon name="Clock" size={32} className="text-primary mx-auto mb-3" />
                <CardTitle className="text-lg">24/7 Поддержка</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Круглосуточная техническая поддержка для решения любых вопросов
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Icon name="Zap" size={32} className="text-primary mx-auto mb-3" />
                <CardTitle className="text-lg">Быстрое реагирование</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Время реакции на критические заявки - не более 15 минут
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Icon name="Users" size={32} className="text-primary mx-auto mb-3" />
                <CardTitle className="text-lg">Команда экспертов</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Сертифицированные специалисты с многолетним опытом
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Готовы начать?</h2>
          <p className="text-xl mb-8">Получите бесплатную консультацию по выбору оптимального серверного решения</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg">
              <Icon name="Calculator" size={20} className="mr-2" />
              Рассчитать стоимость
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