import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";

export default function News() {
  const featuredNews = {
    title: "ITCompany получила статус золотого партнера Microsoft",
    excerpt: "Наша компания достигла нового уровня партнерства с Microsoft, что позволит предоставлять еще более качественные услуги",
    date: "20 декабря 2024",
    category: "Партнерство",
    image: "/img/aa876076-6069-4811-aef5-dbcb0532bb4d.jpg",
    readTime: "3 мин"
  };

  const newsItems = [
    {
      title: "Запуск нового дата-центра в Санкт-Петербурге",
      excerpt: "Открытие собственного дата-центра позволит улучшить качество услуг для клиентов Северо-Западного региона",
      date: "18 декабря 2024",
      category: "Инфраструктура",
      image: "/img/31c5a312-3ceb-4d56-8c2d-f5fd25e3189f.jpg",
      readTime: "4 мин"
    },
    {
      title: "Обновление тарифных планов на 2025 год",
      excerpt: "С 1 января 2025 года вступают в силу новые тарифы с расширенным функционалом и улучшенными условиями",
      date: "15 декабря 2024",
      category: "Тарифы",
      image: "/img/1411beba-e0be-43ae-ac50-644783012932.jpg",
      readTime: "2 мин"
    },
    {
      title: "Участие в выставке IT-Expo 2024",
      excerpt: "ITCompany представила свои решения на крупнейшей ИТ-выставке года, получив признание экспертов",
      date: "12 декабря 2024",
      category: "События",
      image: "/img/1834f1b9-6dca-4e52-8293-17b358cde3be.jpg",
      readTime: "3 мин"
    },
    {
      title: "Новые возможности в 1С:Предприятие 8.3.24",
      excerpt: "Обзор ключевых нововведений в последней версии платформы 1С и их влияние на бизнес-процессы",
      date: "10 декабря 2024",
      category: "1С",
      image: "/img/aa876076-6069-4811-aef5-dbcb0532bb4d.jpg",
      readTime: "5 мин"
    },
    {
      title: "Кибербезопасность: итоги 2024 года",
      excerpt: "Анализ основных киберугроз прошедшего года и рекомендации по защите бизнеса в 2025 году",
      date: "8 декабря 2024",
      category: "Безопасность",
      image: "/img/31c5a312-3ceb-4d56-8c2d-f5fd25e3189f.jpg",
      readTime: "6 мин"
    },
    {
      title: "Расширение команды технической поддержки",
      excerpt: "В связи с ростом клиентской базы мы увеличили штат службы поддержки для улучшения качества обслуживания",
      date: "5 декабря 2024",
      category: "Команда",
      image: "/img/1411beba-e0be-43ae-ac50-644783012932.jpg",
      readTime: "2 мин"
    },
    {
      title: "Внедрение ИИ в процессы мониторинга",
      excerpt: "Использование машинного обучения для предиктивного анализа и предотвращения сбоев в ИТ-инфраструктуре",
      date: "3 декабря 2024",
      category: "Инновации",
      image: "/img/1834f1b9-6dca-4e52-8293-17b358cde3be.jpg",
      readTime: "4 мин"
    },
    {
      title: "Сертификация специалистов по облачным технологиям",
      excerpt: "Наши инженеры успешно прошли сертификацию AWS и Azure, расширив экспертизу в облачных решениях",
      date: "1 декабря 2024",
      category: "Образование",
      image: "/img/aa876076-6069-4811-aef5-dbcb0532bb4d.jpg",
      readTime: "3 мин"
    }
  ];

  const categories = [
    { name: "Все новости", count: 25 },
    { name: "Партнерство", count: 4 },
    { name: "Инфраструктура", count: 6 },
    { name: "1С", count: 5 },
    { name: "Безопасность", count: 4 },
    { name: "События", count: 6 }
  ];

  const upcomingEvents = [
    {
      title: "Вебинар: Миграция в облако",
      date: "25 декабря 2024",
      time: "14:00",
      type: "Онлайн"
    },
    {
      title: "Конференция IT-Security 2025",
      date: "15 января 2025",
      time: "10:00",
      type: "Москва"
    },
    {
      title: "Семинар по 1С:Предприятие",
      date: "20 января 2025",
      time: "11:00",
      type: "Онлайн"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <Badge variant="secondary" className="mb-4">Новости</Badge>
            <h1 className="text-4xl font-bold mb-4">Новости ITCompany</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Следите за последними новостями компании, обновлениями продуктов 
              и событиями в мире информационных технологий
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Featured News */}
            <Card className="mb-12 overflow-hidden hover:shadow-lg transition-shadow">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img 
                    src={featuredNews.image} 
                    alt={featuredNews.title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-6">
                  <Badge className="mb-3">{featuredNews.category}</Badge>
                  <h2 className="text-2xl font-bold mb-3">{featuredNews.title}</h2>
                  <p className="text-gray-600 mb-4">{featuredNews.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span>{featuredNews.date}</span>
                    <div className="flex items-center">
                      <Icon name="Clock" size={16} className="mr-1" />
                      {featuredNews.readTime}
                    </div>
                  </div>
                  <Button>
                    Читать полностью
                    <Icon name="ArrowRight" size={16} className="ml-2" />
                  </Button>
                </div>
              </div>
            </Card>

            {/* News Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              {newsItems.map((news, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <img 
                    src={news.image} 
                    alt={news.title}
                    className="w-full h-48 object-cover"
                  />
                  <CardHeader>
                    <Badge variant="outline" className="w-fit mb-2">{news.category}</Badge>
                    <CardTitle className="text-lg line-clamp-2">{news.title}</CardTitle>
                    <CardDescription className="line-clamp-3">{news.excerpt}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <span>{news.date}</span>
                      <div className="flex items-center">
                        <Icon name="Clock" size={14} className="mr-1" />
                        {news.readTime}
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="w-full">
                      Читать далее
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <Button variant="outline" size="lg">
                <Icon name="Plus" size={20} className="mr-2" />
                Загрузить еще новости
              </Button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Search */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Поиск новостей</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex space-x-2">
                  <Input placeholder="Поиск..." />
                  <Button size="sm">
                    <Icon name="Search" size={16} />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Categories */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Категории</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {categories.map((category, index) => (
                    <div key={index} className="flex items-center justify-between py-2 hover:bg-gray-50 px-2 rounded cursor-pointer">
                      <span className="text-sm">{category.name}</span>
                      <Badge variant="secondary" className="text-xs">{category.count}</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Upcoming Events */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Предстоящие события</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingEvents.map((event, index) => (
                    <div key={index} className="border-l-4 border-primary pl-4">
                      <h4 className="font-semibold text-sm mb-1">{event.title}</h4>
                      <div className="text-xs text-gray-500 space-y-1">
                        <div className="flex items-center">
                          <Icon name="Calendar" size={12} className="mr-1" />
                          {event.date}
                        </div>
                        <div className="flex items-center">
                          <Icon name="Clock" size={12} className="mr-1" />
                          {event.time}
                        </div>
                        <div className="flex items-center">
                          <Icon name="MapPin" size={12} className="mr-1" />
                          {event.type}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <Button variant="outline" size="sm" className="w-full mt-4">
                  Все события
                </Button>
              </CardContent>
            </Card>

            {/* Newsletter */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Подписка на новости</CardTitle>
                <CardDescription>
                  Получайте последние новости на email
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Input placeholder="Ваш email" type="email" />
                  <Button className="w-full" size="sm">
                    <Icon name="Mail" size={16} className="mr-2" />
                    Подписаться
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Мы в соцсетях</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3">
                  <Button variant="outline" size="sm">
                    <Icon name="MessageCircle" size={16} className="mr-2" />
                    Telegram
                  </Button>
                  <Button variant="outline" size="sm">
                    <Icon name="Users" size={16} className="mr-2" />
                    VK
                  </Button>
                  <Button variant="outline" size="sm">
                    <Icon name="Linkedin" size={16} className="mr-2" />
                    LinkedIn
                  </Button>
                  <Button variant="outline" size="sm">
                    <Icon name="Youtube" size={16} className="mr-2" />
                    YouTube
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Archive */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Архив новостей</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between items-center py-1 hover:bg-gray-50 px-2 rounded cursor-pointer">
                    <span className="text-sm">Декабрь 2024</span>
                    <Badge variant="secondary" className="text-xs">8</Badge>
                  </div>
                  <div className="flex justify-between items-center py-1 hover:bg-gray-50 px-2 rounded cursor-pointer">
                    <span className="text-sm">Ноябрь 2024</span>
                    <Badge variant="secondary" className="text-xs">12</Badge>
                  </div>
                  <div className="flex justify-between items-center py-1 hover:bg-gray-50 px-2 rounded cursor-pointer">
                    <span className="text-sm">Октябрь 2024</span>
                    <Badge variant="secondary" className="text-xs">15</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Newsletter CTA */}
      <div className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Не пропустите важные новости</h2>
          <p className="text-xl mb-8">Подпишитесь на нашу рассылку и будьте в курсе всех событий</p>
          <div className="max-w-md mx-auto flex space-x-3">
            <Input 
              placeholder="Ваш email" 
              type="email" 
              className="bg-white text-gray-900"
            />
            <Button variant="secondary">
              Подписаться
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}