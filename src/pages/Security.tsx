import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";

export default function Security() {
  const securityServices = [
    {
      title: "Антивирусная защита",
      description: "Комплексная защита от вирусов, троянов и других вредоносных программ",
      icon: "Shield",
      features: [
        "Защита в реальном времени",
        "Автоматические обновления",
        "Веб-защита",
        "Email-защита",
        "Централизованное управление"
      ],
      price: "от 500₽/мес за ПК"
    },
    {
      title: "Файрвол и сетевая безопасность",
      description: "Защита сетевой инфраструктуры от внешних и внутренних угроз",
      icon: "Wifi",
      features: [
        "Контроль трафика",
        "Предотвращение вторжений",
        "VPN подключения",
        "Фильтрация контента",
        "Мониторинг сети"
      ],
      price: "от 10,000₽/мес"
    },
    {
      title: "Резервное копирование",
      description: "Надежная система резервного копирования критически важных данных",
      icon: "HardDrive",
      features: [
        "Автоматическое копирование",
        "Облачное хранение",
        "Шифрование данных",
        "Быстрое восстановление",
        "Тестирование копий"
      ],
      price: "от 1,000₽/мес за 100GB"
    },
    {
      title: "Мониторинг безопасности",
      description: "Круглосуточный мониторинг ИТ-инфраструктуры и реагирование на инциденты",
      icon: "Eye",
      features: [
        "24/7 мониторинг",
        "Анализ логов",
        "Обнаружение аномалий",
        "Уведомления об угрозах",
        "Отчеты по безопасности"
      ],
      price: "от 5,000₽/мес"
    },
    {
      title: "Аудит безопасности",
      description: "Комплексная оценка уровня информационной безопасности организации",
      icon: "Search",
      features: [
        "Анализ уязвимостей",
        "Тестирование на проникновение",
        "Оценка рисков",
        "Рекомендации по улучшению",
        "Отчет с планом действий"
      ],
      price: "от 50,000₽ за аудит"
    },
    {
      title: "Обучение персонала",
      description: "Повышение осведомленности сотрудников в области кибербезопасности",
      icon: "GraduationCap",
      features: [
        "Семинары по безопасности",
        "Тренинги по фишингу",
        "Тестирование знаний",
        "Сертификация",
        "Регулярные обновления"
      ],
      price: "от 3,000₽ за сотрудника"
    }
  ];

  const threatLevels = [
    {
      threat: "Вирусы и вредоносное ПО",
      level: 85,
      status: "Высокий",
      description: "Постоянная угроза для всех типов организаций"
    },
    {
      threat: "Фишинг и социальная инженерия",
      level: 92,
      status: "Критический",
      description: "Основной способ компрометации учетных данных"
    },
    {
      threat: "Ransomware (шифровальщики)",
      level: 78,
      status: "Высокий",
      description: "Серьезная угроза для бизнес-данных"
    },
    {
      threat: "Утечки данных",
      level: 65,
      status: "Средний",
      description: "Риск компрометации конфиденциальной информации"
    },
    {
      threat: "DDoS атаки",
      level: 45,
      status: "Средний",
      description: "Угроза доступности онлайн-сервисов"
    }
  ];

  const securityTips = [
    {
      title: "Используйте сложные пароли",
      description: "Создавайте уникальные пароли длиной не менее 12 символов",
      icon: "Key"
    },
    {
      title: "Включите двухфакторную аутентификацию",
      description: "Дополнительный уровень защиты для важных аккаунтов",
      icon: "Smartphone"
    },
    {
      title: "Регулярно обновляйте ПО",
      description: "Устанавливайте обновления безопасности как можно быстрее",
      icon: "RefreshCw"
    },
    {
      title: "Будьте осторожны с email",
      description: "Не открывайте подозрительные вложения и ссылки",
      icon: "Mail"
    },
    {
      title: "Делайте резервные копии",
      description: "Регулярно создавайте копии важных данных",
      icon: "Copy"
    },
    {
      title: "Обучайте сотрудников",
      description: "Проводите тренинги по информационной безопасности",
      icon: "Users"
    }
  ];

  const securityNews = [
    {
      title: "Новая волна фишинговых атак на российские компании",
      date: "18.12.2024",
      severity: "Высокая",
      description: "Злоумышленники используют поддельные письма от банков"
    },
    {
      title: "Обнаружена критическая уязвимость в Windows",
      date: "15.12.2024",
      severity: "Критическая",
      description: "Microsoft выпустила экстренное обновление безопасности"
    },
    {
      title: "Рост числа атак на облачные сервисы",
      date: "12.12.2024",
      severity: "Средняя",
      description: "Рекомендуется усилить защиту облачных ресурсов"
    }
  ];

  const complianceStandards = [
    {
      name: "ГОСТ Р 57580.1-2017",
      description: "Безопасность финансовых услуг",
      status: "Соответствует"
    },
    {
      name: "152-ФЗ",
      description: "О персональных данных",
      status: "Соответствует"
    },
    {
      name: "ISO 27001",
      description: "Управление информационной безопасностью",
      status: "В процессе"
    },
    {
      name: "PCI DSS",
      description: "Стандарт безопасности платежных карт",
      status: "Соответствует"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <Badge variant="secondary" className="mb-4">Информационная безопасность</Badge>
            <h1 className="text-4xl font-bold mb-4">Кибербезопасность</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Комплексные решения для защиты вашей ИТ-инфраструктуры от современных киберугроз. 
              Обеспечиваем безопасность данных и непрерывность бизнес-процессов
            </p>
          </div>
        </div>
      </div>

      {/* Threat Dashboard */}
      <div className="container mx-auto px-4 py-16">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-4">Актуальные угрозы</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-8">
            Мониторинг текущего уровня киберугроз и рекомендации по защите
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {threatLevels.map((threat, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{threat.threat}</CardTitle>
                  <CardDescription>{threat.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Уровень угрозы:</span>
                      <Badge variant={
                        threat.status === "Критический" ? "destructive" :
                        threat.status === "Высокий" ? "default" : "secondary"
                      }>
                        {threat.status}
                      </Badge>
                    </div>
                    <Progress value={threat.level} className="h-3" />
                    <p className="text-xs text-gray-500">{threat.level}% от максимального уровня</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Security Services */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Наши решения по безопасности</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {securityServices.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Icon name={service.icon} size={32} className="text-primary" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                  <div className="text-xl font-bold text-primary">{service.price}</div>
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
                  <Button className="w-full">Заказать</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Security Dashboard */}
        <Tabs defaultValue="overview" className="w-full mb-16">
          <TabsList className="grid w-full grid-cols-4 max-w-2xl mx-auto mb-8">
            <TabsTrigger value="overview">Обзор</TabsTrigger>
            <TabsTrigger value="incidents">Инциденты</TabsTrigger>
            <TabsTrigger value="compliance">Соответствие</TabsTrigger>
            <TabsTrigger value="reports">Отчеты</TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <div className="grid lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Статус безопасности</CardTitle>
                  <CardDescription>Общий уровень защищенности системы</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center mb-6">
                    <div className="text-4xl font-bold text-green-500 mb-2">92%</div>
                    <p className="text-gray-600">Уровень защищенности</p>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Антивирусная защита</span>
                        <span>98%</span>
                      </div>
                      <Progress value={98} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Файрвол</span>
                        <span>95%</span>
                      </div>
                      <Progress value={95} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Обновления ПО</span>
                        <span>87%</span>
                      </div>
                      <Progress value={87} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Резервные копии</span>
                        <span>90%</span>
                      </div>
                      <Progress value={90} className="h-2" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Последние события</CardTitle>
                  <CardDescription>Недавние события безопасности</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                      <div>
                        <p className="text-sm font-medium">Успешное обновление антивируса</p>
                        <p className="text-xs text-gray-500">2 часа назад</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                      <div>
                        <p className="text-sm font-medium">Обнаружена подозрительная активность</p>
                        <p className="text-xs text-gray-500">6 часов назад</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                      <div>
                        <p className="text-sm font-medium">Завершено резервное копирование</p>
                        <p className="text-xs text-gray-500">12 часов назад</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                      <div>
                        <p className="text-sm font-medium">Заблокирована попытка вторжения</p>
                        <p className="text-xs text-gray-500">1 день назад</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="incidents">
            <Card>
              <CardHeader>
                <CardTitle>Инциденты безопасности</CardTitle>
                <CardDescription>История и статус инцидентов безопасности</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div>
                        <h4 className="font-semibold">Попытка несанкционированного доступа</h4>
                        <p className="text-sm text-gray-600">IP: 192.168.1.100 • 19.12.2024 14:30</p>
                      </div>
                    </div>
                    <Badge variant="destructive">Заблокировано</Badge>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div>
                        <h4 className="font-semibold">Подозрительная email активность</h4>
                        <p className="text-sm text-gray-600">Пользователь: user@company.com • 18.12.2024 09:15</p>
                      </div>
                    </div>
                    <Badge variant="default">Расследуется</Badge>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <div>
                        <h4 className="font-semibold">Успешное обновление безопасности</h4>
                        <p className="text-sm text-gray-600">Все системы • 17.12.2024 02:00</p>
                      </div>
                    </div>
                    <Badge variant="outline">Завершено</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="compliance">
            <Card>
              <CardHeader>
                <CardTitle>Соответствие стандартам</CardTitle>
                <CardDescription>Статус соответствия требованиям безопасности</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {complianceStandards.map((standard, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <h4 className="font-semibold">{standard.name}</h4>
                        <p className="text-sm text-gray-600">{standard.description}</p>
                      </div>
                      <Badge variant={
                        standard.status === "Соответствует" ? "default" :
                        standard.status === "В процессе" ? "secondary" : "destructive"
                      }>
                        {standard.status}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reports">
            <Card>
              <CardHeader>
                <CardTitle>Отчеты по безопасности</CardTitle>
                <CardDescription>Регулярные отчеты о состоянии безопасности</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Icon name="FileText" size={20} className="text-primary" />
                      <div>
                        <h4 className="font-semibold">Ежемесячный отчет - Декабрь 2024</h4>
                        <p className="text-sm text-gray-600">Сводка по безопасности за месяц</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      <Icon name="Download" size={16} className="mr-2" />
                      Скачать
                    </Button>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Icon name="FileText" size={20} className="text-primary" />
                      <div>
                        <h4 className="font-semibold">Аудит безопасности - Q4 2024</h4>
                        <p className="text-sm text-gray-600">Результаты квартального аудита</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      <Icon name="Download" size={16} className="mr-2" />
                      Скачать
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Security Tips */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Рекомендации по безопасности</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {securityTips.map((tip, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                    <Icon name={tip.icon} size={24} className="text-primary" />
                  </div>
                  <CardTitle className="text-lg">{tip.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{tip.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Security News */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Новости безопасности</h2>
          <div className="space-y-4">
            {securityNews.map((news, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="font-semibold text-lg">{news.title}</h3>
                        <Badge variant={
                          news.severity === "Критическая" ? "destructive" :
                          news.severity === "Высокая" ? "default" : "secondary"
                        }>
                          {news.severity}
                        </Badge>
                      </div>
                      <p className="text-gray-600 mb-2">{news.description}</p>
                      <p className="text-sm text-gray-500">{news.date}</p>
                    </div>
                    <Button variant="outline" size="sm">
                      Подробнее
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Emergency Contact */}
      <div className="bg-red-50 border-l-4 border-red-500 py-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Icon name="AlertTriangle" size={32} className="text-red-500" />
              <div>
                <h3 className="text-lg font-semibold text-red-800">Инцидент безопасности?</h3>
                <p className="text-red-700">При обнаружении угроз немедленно свяжитесь с нами</p>
              </div>
            </div>
            <Button variant="destructive" size="lg">
              <Icon name="Phone" size={20} className="mr-2" />
              Экстренная связь
            </Button>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Защитите свой бизнес сегодня</h2>
          <p className="text-xl mb-8">Получите бесплатную консультацию по информационной безопасности</p>
          <Button variant="secondary" size="lg">
            <Icon name="Shield" size={20} className="mr-2" />
            Получить консультацию
          </Button>
        </div>
      </div>
    </div>
  );
}