import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";

export default function Pricing() {
  const supportPlans = [
    {
      name: "Базовый",
      price: "5,000₽",
      period: "/месяц",
      description: "Для небольших офисов до 10 компьютеров",
      features: [
        "Обслуживание до 10 ПК",
        "Техподдержка в рабочее время",
        "Удаленная диагностика",
        "Базовая настройка ПО",
        "Email поддержка"
      ],
      popular: false
    },
    {
      name: "Профессиональный",
      price: "15,000₽",
      period: "/месяц",
      description: "Оптимальный выбор для средних компаний",
      features: [
        "Обслуживание до 50 ПК",
        "Техподдержка 24/7",
        "Программирование на 1С",
        "Аренда VPS",
        "Приоритетная поддержка",
        "Выезд специалиста"
      ],
      popular: true
    },
    {
      name: "Корпоративный",
      price: "35,000₽",
      period: "/месяц",
      description: "Для крупных предприятий",
      features: [
        "Неограниченное количество ПК",
        "Выделенный менеджер",
        "Выделенные серверы",
        "Индивидуальные решения",
        "SLA 99.9%",
        "Круглосуточный мониторинг"
      ],
      popular: false
    }
  ];

  const oneTimeServices = [
    {
      category: "Обслуживание ПК",
      services: [
        { name: "Диагностика компьютера", price: "1,500₽" },
        { name: "Чистка от пыли", price: "1,000₽" },
        { name: "Установка Windows", price: "2,500₽" },
        { name: "Настройка сети", price: "3,000₽" },
        { name: "Восстановление данных", price: "от 5,000₽" }
      ]
    },
    {
      category: "Программирование 1С",
      services: [
        { name: "Доработка конфигурации", price: "от 10,000₽" },
        { name: "Создание отчета", price: "от 5,000₽" },
        { name: "Интеграция с сайтом", price: "от 25,000₽" },
        { name: "Обновление конфигурации", price: "от 8,000₽" },
        { name: "Обучение пользователей", price: "3,000₽/час" }
      ]
    },
    {
      category: "Серверные решения",
      services: [
        { name: "Настройка сервера", price: "от 15,000₽" },
        { name: "Миграция данных", price: "от 20,000₽" },
        { name: "Настройка резервного копирования", price: "от 10,000₽" },
        { name: "Аудит безопасности", price: "от 25,000₽" },
        { name: "Мониторинг системы", price: "от 5,000₽/мес" }
      ]
    }
  ];

  const serverPlans = [
    {
      name: "VPS Starter",
      price: "2,500₽",
      period: "/месяц",
      specs: {
        cpu: "2 vCPU",
        ram: "4 GB RAM",
        storage: "50 GB SSD",
        bandwidth: "Безлимитный трафик"
      }
    },
    {
      name: "VPS Professional",
      price: "5,000₽",
      period: "/месяц",
      specs: {
        cpu: "4 vCPU",
        ram: "8 GB RAM",
        storage: "100 GB SSD",
        bandwidth: "Безлимитный трафик"
      }
    },
    {
      name: "Выделенный сервер",
      price: "25,000₽",
      period: "/месяц",
      specs: {
        cpu: "Intel Xeon E5",
        ram: "32 GB RAM",
        storage: "1 TB SSD",
        bandwidth: "Безлимитный трафик"
      }
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <Badge variant="secondary" className="mb-4">Тарифы и цены</Badge>
            <h1 className="text-4xl font-bold mb-4">Прозрачное ценообразование</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Выберите оптимальный тарифный план для вашего бизнеса. 
              Все цены указаны с учетом НДС.
            </p>
          </div>
        </div>
      </div>

      {/* Pricing Tabs */}
      <div className="container mx-auto px-4 py-16">
        <Tabs defaultValue="support" className="w-full">
          <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto mb-12">
            <TabsTrigger value="support">Поддержка</TabsTrigger>
            <TabsTrigger value="servers">Серверы</TabsTrigger>
            <TabsTrigger value="services">Услуги</TabsTrigger>
          </TabsList>

          {/* Support Plans */}
          <TabsContent value="support">
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {supportPlans.map((plan, index) => (
                <Card key={index} className={`hover:shadow-lg transition-shadow ${plan.popular ? 'border-primary border-2 relative' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-primary">Популярный</Badge>
                    </div>
                  )}
                  <CardHeader className="text-center">
                    <CardTitle>{plan.name}</CardTitle>
                    <div className="text-3xl font-bold text-primary mt-2">
                      {plan.price}
                      <span className="text-sm font-normal text-gray-500">{plan.period}</span>
                    </div>
                    <CardDescription>{plan.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <Icon name="Check" size={16} className="text-green-500 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full" variant={plan.popular ? "default" : "outline"}>
                      Выбрать план
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Server Plans */}
          <TabsContent value="servers">
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {serverPlans.map((plan, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="text-center">
                    <CardTitle>{plan.name}</CardTitle>
                    <div className="text-3xl font-bold text-primary mt-2">
                      {plan.price}
                      <span className="text-sm font-normal text-gray-500">{plan.period}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 mb-6">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Процессор:</span>
                        <span className="font-semibold">{plan.specs.cpu}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Память:</span>
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
                    </div>
                    <Button className="w-full">Заказать сервер</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* One-time Services */}
          <TabsContent value="services">
            <div className="grid md:grid-cols-3 gap-8">
              {oneTimeServices.map((category, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle>{category.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {category.services.map((service, serviceIndex) => (
                        <div key={serviceIndex} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                          <span className="text-sm">{service.name}</span>
                          <span className="font-semibold text-primary">{service.price}</span>
                        </div>
                      ))}
                    </div>
                    <Button className="w-full mt-6" variant="outline">
                      Заказать услугу
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* FAQ Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Часто задаваемые вопросы</h2>
            
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Можно ли изменить тарифный план?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Да, вы можете изменить тарифный план в любое время. При переходе на более 
                    дорогой план доплата рассчитывается пропорционально оставшемуся периоду.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Есть ли скидки при годовой оплате?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    При оплате за год предоставляется скидка 15% на все тарифные планы. 
                    Также действуют специальные предложения для новых клиентов.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Что входит в техническую поддержку?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Техническая поддержка включает консультации по телефону и email, 
                    удаленную диагностику, решение программных проблем и помощь в настройке оборудования.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Не нашли подходящий тариф?</h2>
          <p className="text-xl mb-8">Мы создадим индивидуальное предложение специально для вас</p>
          <Button variant="secondary" size="lg">
            <Icon name="Calculator" size={20} className="mr-2" />
            Рассчитать стоимость
          </Button>
        </div>
      </div>
    </div>
  );
}