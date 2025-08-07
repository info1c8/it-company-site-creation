import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";

export default function OneCDevelopment() {
  const services = [
    {
      title: "Разработка конфигураций",
      description: "Создание индивидуальных решений на платформе 1С:Предприятие",
      icon: "Code",
      price: "от 50,000₽",
      duration: "2-6 месяцев",
      features: [
        "Анализ бизнес-процессов",
        "Проектирование архитектуры",
        "Разработка и тестирование",
        "Внедрение и обучение",
        "Техническая поддержка"
      ]
    },
    {
      title: "Доработка типовых решений",
      description: "Адаптация стандартных конфигураций под специфику бизнеса",
      icon: "Settings",
      price: "от 15,000₽",
      duration: "1-3 месяца",
      features: [
        "Анализ требований",
        "Планирование доработок",
        "Программирование",
        "Тестирование",
        "Документирование"
      ]
    },
    {
      title: "Интеграция с внешними системами",
      description: "Подключение 1С к сайтам, CRM, банковским системам",
      icon: "Link",
      price: "от 25,000₽",
      duration: "1-2 месяца",
      features: [
        "Анализ систем",
        "Разработка API",
        "Настройка обмена",
        "Тестирование",
        "Мониторинг"
      ]
    },
    {
      title: "Обновление конфигураций",
      description: "Безопасное обновление с сохранением доработок",
      icon: "RefreshCw",
      price: "от 8,000₽",
      duration: "1-2 недели",
      features: [
        "Анализ доработок",
        "Планирование обновления",
        "Резервное копирование",
        "Обновление и тестирование",
        "Восстановление при сбоях"
      ]
    },
    {
      title: "Техническая поддержка 1С",
      description: "Круглосуточная поддержка пользователей 1С",
      icon: "Headphones",
      price: "от 5,000₽/мес",
      duration: "Постоянно",
      features: [
        "Консультации пользователей",
        "Решение технических проблем",
        "Обновления и патчи",
        "Мониторинг производительности",
        "Обучение персонала"
      ]
    },
    {
      title: "Обучение и сертификация",
      description: "Профессиональное обучение работе с 1С:Предприятие",
      icon: "GraduationCap",
      price: "от 3,000₽/час",
      duration: "По программе",
      features: [
        "Индивидуальные программы",
        "Групповое обучение",
        "Онлайн и офлайн формат",
        "Сертификация",
        "Методические материалы"
      ]
    }
  ];

  const configurations = [
    {
      name: "1С:Бухгалтерия",
      description: "Ведение бухгалтерского и налогового учета",
      users: "1-100 пользователей",
      price: "от 10,000₽",
      features: ["Учет доходов и расходов", "Налоговая отчетность", "Зарплата", "Основные средства"]
    },
    {
      name: "1С:Управление торговлей",
      description: "Автоматизация торговых операций",
      users: "1-500 пользователей",
      price: "от 25,000₽",
      features: ["Закупки и продажи", "Склад", "CRM", "Ценообразование"]
    },
    {
      name: "1С:Зарплата и управление персоналом",
      description: "Кадровый учет и расчет заработной платы",
      users: "1-1000 сотрудников",
      price: "от 15,000₽",
      features: ["Кадровый учет", "Расчет зарплаты", "Табель", "Отчетность в ПФР"]
    },
    {
      name: "1С:CRM",
      description: "Управление взаимоотношениями с клиентами",
      users: "1-200 пользователей",
      price: "от 20,000₽",
      features: ["База клиентов", "Воронка продаж", "Маркетинг", "Аналитика"]
    },
    {
      name: "1С:Документооборот",
      description: "Электронный документооборот и архив",
      users: "1-1000 пользователей",
      price: "от 30,000₽",
      features: ["Электронные документы", "Согласование", "Архив", "Поиск"]
    },
    {
      name: "1С:ERP",
      description: "Комплексная автоматизация предприятия",
      users: "50-5000 пользователей",
      price: "от 100,000₽",
      features: ["Все модули", "Производство", "Финансы", "Логистика"]
    }
  ];

  const developmentProcess = [
    {
      step: "1",
      title: "Анализ требований",
      description: "Изучаем бизнес-процессы и определяем требования к системе",
      duration: "1-2 недели"
    },
    {
      step: "2",
      title: "Проектирование",
      description: "Создаем техническое задание и архитектуру решения",
      duration: "1-2 недели"
    },
    {
      step: "3",
      title: "Разработка",
      description: "Программируем функциональность согласно техническому заданию",
      duration: "2-8 недель"
    },
    {
      step: "4",
      title: "Тестирование",
      description: "Проводим комплексное тестирование всех функций",
      duration: "1-2 недели"
    },
    {
      step: "5",
      title: "Внедрение",
      description: "Устанавливаем систему и переносим данные",
      duration: "1 неделя"
    },
    {
      step: "6",
      title: "Обучение и поддержка",
      description: "Обучаем пользователей и предоставляем техподдержку",
      duration: "Постоянно"
    }
  ];

  const caseStudies = [
    {
      title: "Автоматизация торговой сети",
      client: "Сеть магазинов 'Продукты+'",
      challenge: "Необходимость централизованного управления 15 магазинами",
      solution: "Внедрение 1С:Розница с интеграцией кассового оборудования",
      results: [
        "Сокращение времени на инвентаризацию на 70%",
        "Автоматизация отчетности",
        "Централизованное управление ассортиментом",
        "Интеграция с банковским эквайрингом"
      ],
      duration: "3 месяца",
      team: "4 специалиста"
    },
    {
      title: "CRM для агентства недвижимости",
      client: "Агентство 'Дом мечты'",
      challenge: "Отсутствие системы управления клиентской базой",
      solution: "Разработка CRM на базе 1С с интеграцией телефонии",
      results: [
        "Увеличение конверсии на 35%",
        "Автоматизация воронки продаж",
        "Интеграция с телефонией",
        "Детальная аналитика продаж"
      ],
      duration: "2 месяца",
      team: "3 специалиста"
    }
  ];

  const technologies = [
    { name: "1С:Предприятие 8.3", description: "Основная платформа разработки" },
    { name: "Язык запросов 1С", description: "Для работы с данными" },
    { name: "Модульность", description: "Создание переиспользуемых компонентов" },
    { name: "Web-сервисы", description: "Интеграция с внешними системами" },
    { name: "HTTP-сервисы", description: "REST API для мобильных приложений" },
    { name: "Регламентные задания", description: "Автоматизация фоновых процессов" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <Badge variant="secondary" className="mb-4">Программирование 1С</Badge>
            <h1 className="text-4xl font-bold mb-4">Разработка на 1С:Предприятие</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Профессиональная разработка и внедрение решений на платформе 1С:Предприятие. 
              Автоматизируем бизнес-процессы и повышаем эффективность вашей работы
            </p>
          </div>
        </div>
      </div>

      {/* Services */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Наши услуги по 1С</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Полный цикл работ от анализа требований до внедрения и поддержки
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
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

        {/* Configurations */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Популярные конфигурации 1С</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {configurations.map((config, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{config.name}</CardTitle>
                  <CardDescription>{config.description}</CardDescription>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-lg font-bold text-primary">{config.price}</span>
                    <Badge variant="outline">{config.users}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-4">
                    {config.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <Icon name="Check" size={14} className="text-green-500 mr-2" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button variant="outline" size="sm" className="w-full">
                    Подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Development Process */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Процесс разработки</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {developmentProcess.map((process, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                      {process.step}
                    </div>
                    <Badge variant="outline">{process.duration}</Badge>
                  </div>
                  <CardTitle className="text-lg">{process.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{process.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Technologies */}
        <div className="bg-white rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Технологии и инструменты</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologies.map((tech, index) => (
              <div key={index} className="flex items-start space-x-3">
                <Icon name="Code" size={20} className="text-primary mt-1" />
                <div>
                  <h4 className="font-semibold">{tech.name}</h4>
                  <p className="text-sm text-gray-600">{tech.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Case Studies */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Примеры проектов</h2>
          <div className="space-y-8">
            {caseStudies.map((study, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-xl">{study.title}</CardTitle>
                      <CardDescription>Клиент: {study.client}</CardDescription>
                    </div>
                    <div className="text-right">
                      <Badge variant="outline">{study.duration}</Badge>
                      <p className="text-sm text-gray-500 mt-1">{study.team}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <h4 className="font-semibold mb-2 text-red-600">Задача</h4>
                      <p className="text-sm text-gray-600">{study.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-blue-600">Решение</h4>
                      <p className="text-sm text-gray-600">{study.solution}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-green-600">Результаты</h4>
                      <ul className="space-y-1">
                        {study.results.map((result, resultIndex) => (
                          <li key={resultIndex} className="flex items-start">
                            <Icon name="Check" size={14} className="text-green-500 mr-2 mt-0.5" />
                            <span className="text-sm">{result}</span>
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

        {/* Expertise */}
        <Tabs defaultValue="expertise" className="w-full">
          <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto mb-8">
            <TabsTrigger value="expertise">Экспертиза</TabsTrigger>
            <TabsTrigger value="team">Команда</TabsTrigger>
            <TabsTrigger value="tools">Инструменты</TabsTrigger>
          </TabsList>

          <TabsContent value="expertise">
            <Card>
              <CardHeader>
                <CardTitle>Наша экспертиза в 1С</CardTitle>
                <CardDescription>Многолетний опыт работы с платформой 1С:Предприятие</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold mb-4">Статистика проектов</h4>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span>Реализованных проектов:</span>
                        <span className="font-bold text-primary">150+</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Лет опыта:</span>
                        <span className="font-bold text-primary">8</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Сертифицированных разработчиков:</span>
                        <span className="font-bold text-primary">12</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Довольных клиентов:</span>
                        <span className="font-bold text-primary">98%</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-4">Отрасли</h4>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <Icon name="ShoppingCart" size={16} className="text-primary mr-2" />
                        <span className="text-sm">Торговля и дистрибуция</span>
                      </div>
                      <div className="flex items-center">
                        <Icon name="Factory" size={16} className="text-primary mr-2" />
                        <span className="text-sm">Производство</span>
                      </div>
                      <div className="flex items-center">
                        <Icon name="Building" size={16} className="text-primary mr-2" />
                        <span className="text-sm">Строительство</span>
                      </div>
                      <div className="flex items-center">
                        <Icon name="Truck" size={16} className="text-primary mr-2" />
                        <span className="text-sm">Логистика</span>
                      </div>
                      <div className="flex items-center">
                        <Icon name="Heart" size={16} className="text-primary mr-2" />
                        <span className="text-sm">Медицина</span>
                      </div>
                      <div className="flex items-center">
                        <Icon name="GraduationCap" size={16} className="text-primary mr-2" />
                        <span className="text-sm">Образование</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="team">
            <Card>
              <CardHeader>
                <CardTitle>Команда разработчиков 1С</CardTitle>
                <CardDescription>Сертифицированные специалисты с глубокой экспертизой</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <img 
                      src="/img/31c5a312-3ceb-4d56-8c2d-f5fd25e3189f.jpg" 
                      alt="Мария Сидорова"
                      className="w-24 h-24 rounded-full mx-auto mb-3 object-cover"
                    />
                    <h4 className="font-semibold">Мария Сидорова</h4>
                    <p className="text-sm text-gray-600">Ведущий разработчик 1С</p>
                    <p className="text-xs text-gray-500">8 лет опыта</p>
                  </div>
                  
                  <div className="text-center">
                    <img 
                      src="/img/1834f1b9-6dca-4e52-8293-17b358cde3be.jpg" 
                      alt="Андрей Козлов"
                      className="w-24 h-24 rounded-full mx-auto mb-3 object-cover"
                    />
                    <h4 className="font-semibold">Андрей Козлов</h4>
                    <p className="text-sm text-gray-600">Архитектор решений</p>
                    <p className="text-xs text-gray-500">10 лет опыта</p>
                  </div>
                  
                  <div className="text-center">
                    <img 
                      src="/img/1411beba-e0be-43ae-ac50-644783012932.jpg" 
                      alt="Елена Волкова"
                      className="w-24 h-24 rounded-full mx-auto mb-3 object-cover"
                    />
                    <h4 className="font-semibold">Елена Волкова</h4>
                    <p className="text-sm text-gray-600">Консультант по внедрению</p>
                    <p className="text-xs text-gray-500">6 лет опыта</p>
                  </div>
                </div>
                
                <div className="mt-8 text-center">
                  <h4 className="font-semibold mb-4">Сертификации команды</h4>
                  <div className="flex flex-wrap justify-center gap-3">
                    <Badge variant="outline">1С:Профессионал</Badge>
                    <Badge variant="outline">1С:Специалист</Badge>
                    <Badge variant="outline">1С:Эксперт</Badge>
                    <Badge variant="outline">Центр компетенции 1С</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="tools">
            <Card>
              <CardHeader>
                <CardTitle>Инструменты разработки</CardTitle>
                <CardDescription>Современные средства для эффективной разработки</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold mb-4">Среда разработки</h4>
                    <ul className="space-y-3">
                      <li className="flex items-center">
                        <Icon name="Code" size={16} className="text-primary mr-2" />
                        <span className="text-sm">Конфигуратор 1С</span>
                      </li>
                      <li className="flex items-center">
                        <Icon name="Database" size={16} className="text-primary mr-2" />
                        <span className="text-sm">Консоль запросов</span>
                      </li>
                      <li className="flex items-center">
                        <Icon name="Bug" size={16} className="text-primary mr-2" />
                        <span className="text-sm">Отладчик</span>
                      </li>
                      <li className="flex items-center">
                        <Icon name="FileText" size={16} className="text-primary mr-2" />
                        <span className="text-sm">Генератор отчетов</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-4">Системы контроля версий</h4>
                    <ul className="space-y-3">
                      <li className="flex items-center">
                        <Icon name="GitBranch" size={16} className="text-primary mr-2" />
                        <span className="text-sm">Git для хранения исходников</span>
                      </li>
                      <li className="flex items-center">
                        <Icon name="Archive" size={16} className="text-primary mr-2" />
                        <span className="text-sm">Хранилище конфигураций 1С</span>
                      </li>
                      <li className="flex items-center">
                        <Icon name="Users" size={16} className="text-primary mr-2" />
                        <span className="text-sm">Командная разработка</span>
                      </li>
                      <li className="flex items-center">
                        <Icon name="History" size={16} className="text-primary mr-2" />
                        <span className="text-sm">История изменений</span>
                      </li>
                    </ul>
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
              Преимущества работы с нашей командой разработчиков 1С
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardHeader>
                <Icon name="Award" size={32} className="text-primary mx-auto mb-3" />
                <CardTitle className="text-lg">Центр компетенции 1С</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Официальный статус центра компетенции 1С с правом разработки и внедрения
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Icon name="Users" size={32} className="text-primary mx-auto mb-3" />
                <CardTitle className="text-lg">Опытная команда</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  12 сертифицированных разработчиков с опытом работы от 5 лет
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Icon name="Clock" size={32} className="text-primary mx-auto mb-3" />
                <CardTitle className="text-lg">Соблюдение сроков</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  98% проектов сдаются в срок благодаря отлаженным процессам
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Icon name="Headphones" size={32} className="text-primary mx-auto mb-3" />
                <CardTitle className="text-lg">Поддержка после внедрения</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Круглосуточная техническая поддержка и сопровождение решений
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Готовы автоматизировать бизнес?</h2>
          <p className="text-xl mb-8">Получите бесплатную консультацию по внедрению 1С в вашей компании</p>
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