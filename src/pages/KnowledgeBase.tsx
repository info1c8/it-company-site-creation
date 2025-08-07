import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";

export default function KnowledgeBase() {
  const categories = [
    {
      title: "Настройка рабочих станций",
      description: "Пошаговые инструкции по настройке компьютеров и рабочих мест",
      icon: "Monitor",
      articles: 25,
      color: "bg-blue-500"
    },
    {
      title: "Работа с 1С:Предприятие",
      description: "Руководства по использованию и настройке 1С",
      icon: "Code",
      articles: 40,
      color: "bg-green-500"
    },
    {
      title: "Серверное администрирование",
      description: "Инструкции по управлению серверами и сетевой инфраструктурой",
      icon: "Server",
      articles: 30,
      color: "bg-purple-500"
    },
    {
      title: "Информационная безопасность",
      description: "Рекомендации по обеспечению безопасности ИТ-систем",
      icon: "Shield",
      articles: 20,
      color: "bg-red-500"
    },
    {
      title: "Резервное копирование",
      description: "Настройка и управление системами резервного копирования",
      icon: "HardDrive",
      articles: 15,
      color: "bg-orange-500"
    },
    {
      title: "Устранение неполадок",
      description: "Решение типичных проблем и ошибок",
      icon: "Wrench",
      articles: 35,
      color: "bg-yellow-500"
    }
  ];

  const popularArticles = [
    {
      title: "Как настроить VPN подключение в Windows 10",
      category: "Настройка рабочих станций",
      views: 1250,
      rating: 4.8,
      lastUpdated: "15.12.2024"
    },
    {
      title: "Создание отчета в 1С:Предприятие 8.3",
      category: "Работа с 1С:Предприятие",
      views: 980,
      rating: 4.9,
      lastUpdated: "12.12.2024"
    },
    {
      title: "Настройка автоматического резервного копирования",
      category: "Резервное копирование",
      views: 756,
      rating: 4.7,
      lastUpdated: "10.12.2024"
    },
    {
      title: "Решение проблем с подключением к серверу",
      category: "Устранение неполадок",
      views: 654,
      rating: 4.6,
      lastUpdated: "08.12.2024"
    },
    {
      title: "Настройка файрвола Windows Server",
      category: "Информационная безопасность",
      views: 543,
      rating: 4.8,
      lastUpdated: "05.12.2024"
    }
  ];

  const recentArticles = [
    {
      title: "Обновление 1С:Предприятие до версии 8.3.24",
      category: "Работа с 1С:Предприятие",
      date: "20.12.2024",
      author: "Мария Сидорова"
    },
    {
      title: "Настройка мониторинга серверов с помощью Zabbix",
      category: "Серверное администрирование",
      date: "18.12.2024",
      author: "Дмитрий Иванов"
    },
    {
      title: "Защита от ransomware: лучшие практики",
      category: "Информационная безопасность",
      date: "16.12.2024",
      author: "Алексей Петров"
    },
    {
      title: "Оптимизация производительности Windows 11",
      category: "Настройка рабочих станций",
      date: "14.12.2024",
      author: "Сергей Козлов"
    }
  ];

  const videoTutorials = [
    {
      title: "Установка и настройка 1С:Предприятие",
      duration: "15:30",
      views: 2340,
      thumbnail: "/img/aa876076-6069-4811-aef5-dbcb0532bb4d.jpg"
    },
    {
      title: "Настройка VPN сервера на Windows Server",
      duration: "22:15",
      views: 1890,
      thumbnail: "/img/31c5a312-3ceb-4d56-8c2d-f5fd25e3189f.jpg"
    },
    {
      title: "Создание резервных копий в облаке",
      duration: "18:45",
      views: 1560,
      thumbnail: "/img/1411beba-e0be-43ae-ac50-644783012932.jpg"
    }
  ];

  const downloadableResources = [
    {
      title: "Чек-лист по безопасности ПК",
      type: "PDF",
      size: "2.3 MB",
      downloads: 450
    },
    {
      title: "Шаблоны отчетов для 1С",
      type: "ZIP",
      size: "5.7 MB",
      downloads: 320
    },
    {
      title: "Скрипты для администрирования",
      type: "ZIP",
      size: "1.2 MB",
      downloads: 280
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <Badge variant="secondary" className="mb-4">База знаний</Badge>
            <h1 className="text-4xl font-bold mb-4">База знаний ITCompany</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Полезные статьи, инструкции и руководства для решения ИТ-задач. 
              Делимся опытом и помогаем вам работать эффективнее
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
                    placeholder="Поиск по базе знаний..." 
                    className="flex-1"
                  />
                  <Button>
                    <Icon name="Search" size={20} />
                  </Button>
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-white">
                    1С
                  </Badge>
                  <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-white">
                    Windows
                  </Badge>
                  <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-white">
                    Сервер
                  </Badge>
                  <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-white">
                    Безопасность
                  </Badge>
                  <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-white">
                    Сеть
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* Categories Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {categories.map((category, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className={`w-12 h-12 ${category.color} rounded-full flex items-center justify-center`}>
                        <Icon name={category.icon} size={24} className="text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{category.title}</CardTitle>
                        <CardDescription>{category.articles} статей</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm mb-4">{category.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">{category.articles} статей</span>
                      <Icon name="ArrowRight" size={16} className="text-primary" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Content Tabs */}
            <Tabs defaultValue="articles" className="w-full">
              <TabsList className="grid w-full grid-cols-4 mb-8">
                <TabsTrigger value="articles">Статьи</TabsTrigger>
                <TabsTrigger value="videos">Видео</TabsTrigger>
                <TabsTrigger value="downloads">Загрузки</TabsTrigger>
                <TabsTrigger value="faq">FAQ</TabsTrigger>
              </TabsList>

              {/* Articles */}
              <TabsContent value="articles">
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold">Популярные статьи</h3>
                  {popularArticles.map((article, index) => (
                    <Card key={index} className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <h4 className="font-semibold text-lg mb-2 text-primary hover:underline cursor-pointer">
                              {article.title}
                            </h4>
                            <Badge variant="outline" className="mb-3">{article.category}</Badge>
                            <div className="flex items-center space-x-4 text-sm text-gray-500">
                              <div className="flex items-center">
                                <Icon name="Eye" size={14} className="mr-1" />
                                {article.views} просмотров
                              </div>
                              <div className="flex items-center">
                                <Icon name="Star" size={14} className="mr-1" />
                                {article.rating}
                              </div>
                              <div className="flex items-center">
                                <Icon name="Calendar" size={14} className="mr-1" />
                                {article.lastUpdated}
                              </div>
                            </div>
                          </div>
                          <Button variant="outline" size="sm">
                            Читать
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* Videos */}
              <TabsContent value="videos">
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold">Видеоуроки</h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {videoTutorials.map((video, index) => (
                      <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                        <div className="relative">
                          <img 
                            src={video.thumbnail} 
                            alt={video.title}
                            className="w-full h-40 object-cover"
                          />
                          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                            <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                              <Icon name="Play" size={24} className="text-primary ml-1" />
                            </div>
                          </div>
                          <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs">
                            {video.duration}
                          </div>
                        </div>
                        <CardHeader>
                          <CardTitle className="text-lg">{video.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="flex items-center justify-between text-sm text-gray-500">
                            <div className="flex items-center">
                              <Icon name="Eye" size={14} className="mr-1" />
                              {video.views} просмотров
                            </div>
                            <Button variant="outline" size="sm">
                              Смотреть
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </TabsContent>

              {/* Downloads */}
              <TabsContent value="downloads">
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold">Загружаемые материалы</h3>
                  {downloadableResources.map((resource, index) => (
                    <Card key={index} className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                              <Icon name="Download" size={24} className="text-primary" />
                            </div>
                            <div>
                              <h4 className="font-semibold">{resource.title}</h4>
                              <div className="flex items-center space-x-4 text-sm text-gray-500">
                                <span>{resource.type}</span>
                                <span>{resource.size}</span>
                                <span>{resource.downloads} загрузок</span>
                              </div>
                            </div>
                          </div>
                          <Button>
                            <Icon name="Download" size={16} className="mr-2" />
                            Скачать
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* FAQ */}
              <TabsContent value="faq">
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold">Часто задаваемые вопросы</h3>
                  <div className="space-y-4">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Как сбросить пароль в 1С?</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600">
                          Для сброса пароля в 1С:Предприятие обратитесь к администратору системы. 
                          Самостоятельно сбросить пароль можно только при наличии соответствующих прав.
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Почему компьютер работает медленно?</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600">
                          Медленная работа компьютера может быть вызвана различными причинами: 
                          недостаток оперативной памяти, фрагментация диска, вирусы, 
                          большое количество автозагрузки программ.
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Как настроить удаленный доступ к серверу?</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600">
                          Для настройки удаленного доступа используйте RDP для Windows Server 
                          или SSH для Linux. Обязательно настройте безопасное подключение 
                          и ограничьте доступ по IP-адресам.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Quick Navigation */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Быстрая навигация</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {categories.map((category, index) => (
                    <div key={index} className="flex items-center justify-between py-2 hover:bg-gray-50 px-2 rounded cursor-pointer">
                      <div className="flex items-center space-x-2">
                        <Icon name={category.icon} size={16} className="text-primary" />
                        <span className="text-sm">{category.title}</span>
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {category.articles}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Articles */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Новые статьи</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentArticles.map((article, index) => (
                    <div key={index} className="border-b border-gray-100 pb-3 last:border-b-0">
                      <h4 className="font-semibold text-sm mb-1 text-primary hover:underline cursor-pointer">
                        {article.title}
                      </h4>
                      <div className="text-xs text-gray-500 space-y-1">
                        <p>{article.category}</p>
                        <p>{article.date} • {article.author}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Help Request */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Не нашли ответ?</CardTitle>
                <CardDescription>Обратитесь к нашим экспертам</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Button className="w-full" size="sm">
                    <Icon name="MessageCircle" size={16} className="mr-2" />
                    Задать вопрос
                  </Button>
                  <Button variant="outline" size="sm" className="w-full">
                    <Icon name="Phone" size={16} className="mr-2" />
                    Позвонить
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Feedback */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Обратная связь</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  Помогите нам улучшить базу знаний
                </p>
                <div className="space-y-3">
                  <Button variant="outline" size="sm" className="w-full">
                    <Icon name="ThumbsUp" size={16} className="mr-2" />
                    Оценить статью
                  </Button>
                  <Button variant="outline" size="sm" className="w-full">
                    <Icon name="MessageSquare" size={16} className="mr-2" />
                    Оставить отзыв
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Statistics */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Статистика</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Всего статей:</span>
                    <span className="font-semibold">165</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Видеоуроков:</span>
                    <span className="font-semibold">28</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Загрузок:</span>
                    <span className="font-semibold">15</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Просмотров:</span>
                    <span className="font-semibold">45,230</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Нужна персональная консультация?</h2>
          <p className="text-xl mb-8">Наши эксперты готовы помочь решить любые технические вопросы</p>
          <Button variant="secondary" size="lg">
            <Icon name="Users" size={20} className="mr-2" />
            Получить консультацию
          </Button>
        </div>
      </div>
    </div>
  );
}