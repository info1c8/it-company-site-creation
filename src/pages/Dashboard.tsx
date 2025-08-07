import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";

export default function Dashboard() {
  const stats = [
    {
      title: "Активные услуги",
      value: "12",
      change: "+2",
      changeType: "positive",
      icon: "Activity"
    },
    {
      title: "Открытые заявки",
      value: "3",
      change: "-1",
      changeType: "positive",
      icon: "Ticket"
    },
    {
      title: "Использование серверов",
      value: "78%",
      change: "+5%",
      changeType: "neutral",
      icon: "Server"
    },
    {
      title: "Баланс",
      value: "25,430₽",
      change: "-3,200₽",
      changeType: "negative",
      icon: "Wallet"
    }
  ];

  const services = [
    {
      name: "Техническая поддержка",
      status: "Активна",
      plan: "Профессиональный",
      nextPayment: "15.01.2025",
      amount: "15,000₽"
    },
    {
      name: "VPS Server #1",
      status: "Активна",
      plan: "4 CPU, 8GB RAM",
      nextPayment: "20.01.2025",
      amount: "5,000₽"
    },
    {
      name: "1С:Предприятие",
      status: "Активна",
      plan: "Базовая лицензия",
      nextPayment: "10.01.2025",
      amount: "8,000₽"
    },
    {
      name: "Резервное копирование",
      status: "Приостановлена",
      plan: "100GB",
      nextPayment: "Просрочен",
      amount: "1,500₽"
    }
  ];

  const tickets = [
    {
      id: "#12345",
      title: "Проблема с доступом к серверу",
      status: "В работе",
      priority: "Высокий",
      created: "19.12.2024",
      updated: "20.12.2024"
    },
    {
      id: "#12344",
      title: "Настройка почтового сервера",
      status: "Ожидает ответа",
      priority: "Средний",
      created: "18.12.2024",
      updated: "19.12.2024"
    },
    {
      id: "#12343",
      title: "Обновление 1С конфигурации",
      status: "Закрыта",
      priority: "Низкий",
      created: "15.12.2024",
      updated: "17.12.2024"
    }
  ];

  const serverMetrics = [
    {
      name: "VPS-1 (Web Server)",
      cpu: 45,
      memory: 67,
      disk: 34,
      status: "online"
    },
    {
      name: "VPS-2 (Database)",
      cpu: 78,
      memory: 82,
      disk: 56,
      status: "online"
    },
    {
      name: "VPS-3 (Backup)",
      cpu: 12,
      memory: 23,
      disk: 89,
      status: "warning"
    }
  ];

  const recentActivity = [
    {
      action: "Создана заявка #12345",
      time: "2 часа назад",
      icon: "Plus"
    },
    {
      action: "Оплачен счет №1234",
      time: "1 день назад",
      icon: "CreditCard"
    },
    {
      action: "Обновлен сервер VPS-1",
      time: "2 дня назад",
      icon: "Ref"
    },
    {
      action: "Завершена заявка #12340",
      time: "3 дня назад",
      icon: "CheckCircle"
    }
  ];

  const notifications = [
    {
      title: "Требуется оплата",
      message: "Счет №1235 на сумму 15,000₽ ожидает оплаты",
      type: "warning",
      time: "1 час назад"
    },
    {
      title: "Сервер обновлен",
      message: "VPS-1 успешно обновлен до последней версии",
      type: "success",
      time: "6 часов назад"
    },
    {
      title: "Новая функция",
      message: "Доступна новая функция мониторинга в реальном времени",
      type: "info",
      time: "1 день назад"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">Личный кабинет</h1>
              <p className="text-gray-600">Добро пожаловать, Иван Петров</p>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Icon name="Bell" size={16} className="mr-2" />
                Уведомления
              </Button>
              <Button size="sm">
                <Icon name="Plus" size={16} className="mr-2" />
                Заказать услугу
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                    <p className="text-2xl font-bold">{stat.value}</p>
                    <p className={`text-sm ${
                      stat.changeType === 'positive' ? 'text-green-600' : 
                      stat.changeType === 'negative' ? 'text-red-600' : 'text-gray-600'
                    }`}>
                      {stat.change} за месяц
                    </p>
                  </div>
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name={stat.icon} size={24} className="text-primary" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Dashboard */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Services Overview */}
            <Card>
              <CardHeader>
                <CardTitle>Мои услуги</CardTitle>
                <CardDescription>Обзор подключенных услуг и их статус</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {services.map((service, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex-1">
                        <h4 className="font-semibold">{service.name}</h4>
                        <p className="text-sm text-gray-600">{service.plan}</p>
                      </div>
                      <div className="text-center mx-4">
                        <Badge variant={service.status === "Активна" ? "default" : "destructive"}>
                          {service.status}
                        </Badge>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold">{service.amount}</p>
                        <p className="text-sm text-gray-600">{service.nextPayment}</p>
                      </div>
                      <Button variant="outline" size="sm" className="ml-4">
                        <Icon name="Settings" size={16} />
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Server Monitoring */}
            <Card>
              <CardHeader>
                <CardTitle>Мониторинг серверов</CardTitle>
                <CardDescription>Текущее состояние ваших серверов</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {serverMetrics.map((server, index) => (
                    <div key={index} className="p-4 border rounded-lg">
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="font-semibold">{server.name}</h4>
                        <Badge variant={server.status === "online" ? "default" : "destructive"}>
                          {server.status === "online" ? "Онлайн" : "Предупреждение"}
                        </Badge>
                      </div>
                      <div className="grid grid-cols-3 gap-4">
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span>CPU</span>
                            <span>{server.cpu}%</span>
                          </div>
                          <Progress value={server.cpu} className="h-2" />
                        </div>
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span>RAM</span>
                            <span>{server.memory}%</span>
                          </div>
                          <Progress value={server.memory} className="h-2" />
                        </div>
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span>Диск</span>
                            <span>{server.disk}%</span>
                          </div>
                          <Progress value={server.disk} className="h-2" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Support Tickets */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Мои заявки</CardTitle>
                    <CardDescription>История обращений в техподдержку</CardDescription>
                  </div>
                  <Button size="sm">
                    <Icon name="Plus" size={16} className="mr-2" />
                    Создать заявку
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {tickets.map((ticket, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <span className="font-semibold text-primary">{ticket.id}</span>
                          <Badge variant={
                            ticket.priority === "Высокий" ? "destructive" :
                            ticket.priority === "Средний" ? "default" : "secondary"
                          }>
                            {ticket.priority}
                          </Badge>
                        </div>
                        <h4 className="font-medium">{ticket.title}</h4>
                        <p className="text-sm text-gray-600">
                          Создана: {ticket.created} • Обновлена: {ticket.updated}
                        </p>
                      </div>
                      <div className="text-center">
                        <Badge variant={
                          ticket.status === "В работе" ? "default" :
                          ticket.status === "Ожидает ответа" ? "secondary" : "outline"
                        }>
                          {ticket.status}
                        </Badge>
                      </div>
                      <Button variant="outline" size="sm" className="ml-4">
                        Открыть
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Быстрые действия</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Button className="w-full justify-start">
                    <Icon name="Plus" size={16} className="mr-2" />
                    Создать заявку
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Icon name="CreditCard" size={16} className="mr-2" />
                    Пополнить баланс
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Icon name="Download" size={16} className="mr-2" />
                    Скачать счета
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Icon name="Settings" size={16} className="mr-2" />
                    Настройки
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Notifications */}
            <Card>
              <CardHeader>
                <CardTitle>Уведомления</CardTitle>
                <CardDescription>Последние обновления</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {notifications.map((notification, index) => (
                    <div key={index} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                      <div className={`w-2 h-2 rounded-full mt-2 ${
                        notification.type === 'warning' ? 'bg-yellow-500' :
                        notification.type === 'success' ? 'bg-green-500' : 'bg-blue-500'
                      }`}></div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-sm">{notification.title}</h4>
                        <p className="text-xs text-gray-600 mb-1">{notification.message}</p>
                        <p className="text-xs text-gray-400">{notification.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <Button variant="outline" size="sm" className="w-full mt-4">
                  Все уведомления
                </Button>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle>Последняя активность</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                        <Icon name={activity.icon} size={16} className="text-primary" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">{activity.action}</p>
                        <p className="text-xs text-gray-500">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Support Contact */}
            <Card>
              <CardHeader>
                <CardTitle>Нужна помощь?</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Button variant="outline" size="sm" className="w-full justify-start">
                    <Icon name="Phone" size={16} className="mr-2" />
                    +7 (495) 123-45-67
                  </Button>
                  <Button variant="outline" size="sm" className="w-full justify-start">
                    <Icon name="Mail" size={16} className="mr-2" />
                    support@itcompany.ru
                  </Button>
                  <Button variant="outline" size="sm" className="w-full justify-start">
                    <Icon name="MessageCircle" size={16} className="mr-2" />
                    Онлайн чат
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-white py-8">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="billing" className="w-full">
            <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto mb-8">
              <TabsTrigger value="billing">Биллинг</TabsTrigger>
              <TabsTrigger value="usage">Использование</TabsTrigger>
              <TabsTrigger value="settings">Настройки</TabsTrigger>
            </TabsList>

            <TabsContent value="billing">
              <Card>
                <CardHeader>
                  <CardTitle>История платежей</CardTitle>
                  <CardDescription>Последние операции по вашему аккаунту</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <p className="font-semibold">Счет №1234</p>
                        <p className="text-sm text-gray-600">Техническая поддержка - Декабрь 2024</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold">15,000₽</p>
                        <Badge variant="default">Оплачен</Badge>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <p className="font-semibold">Счет №1235</p>
                        <p className="text-sm text-gray-600">VPS Server - Январь 2025</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold">5,000₽</p>
                        <Badge variant="destructive">К оплате</Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="usage">
              <Card>
                <CardHeader>
                  <CardTitle>Статистика использования</CardTitle>
                  <CardDescription>Детальная информация об использовании ресурсов</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-3">Использование серверов за месяц</h4>
                      <div className="space-y-3">
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span>CPU время</span>
                            <span>156 часов</span>
                          </div>
                          <Progress value={65} className="h-2" />
                        </div>
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span>Трафик</span>
                            <span>2.3 TB</span>
                          </div>
                          <Progress value={45} className="h-2" />
                        </div>
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span>Хранилище</span>
                            <span>450 GB</span>
                          </div>
                          <Progress value={78} className="h-2" />
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="settings">
              <Card>
                <CardHeader>
                  <CardTitle>Настройки аккаунта</CardTitle>
                  <CardDescription>Управление профилем и уведомлениями</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-3">Профиль</h4>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-1">Имя</label>
                          <p className="text-sm text-gray-600">Иван Петров</p>
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-1">Email</label>
                          <p className="text-sm text-gray-600">ivan@company.com</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm" className="mt-3">
                        Редактировать профиль
                      </Button>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-3">Уведомления</h4>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Email уведомления</span>
                          <input type="checkbox" defaultChecked className="rounded" />
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm">SMS уведомления</span>
                          <input type="checkbox" className="rounded" />
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Уведомления о счетах</span>
                          <input type="checkbox" defaultChecked className="rounded" />
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}