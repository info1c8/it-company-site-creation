import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";

export default function Blog() {
  const featuredPost = {
    title: "Тренды ИТ-безопасности в 2024 году",
    excerpt: "Обзор основных угроз и методов защиты, которые должен знать каждый руководитель ИТ-отдела",
    author: "Алексей Петров",
    date: "15 декабря 2024",
    readTime: "8 мин",
    image: "/img/aa876076-6069-4811-aef5-dbcb0532bb4d.jpg",
    category: "Безопасность"
  };

  const blogPosts = [
    {
      title: "Как выбрать правильную конфигурацию 1С для вашего бизнеса",
      excerpt: "Подробное руководство по выбору и настройке 1С:Предприятие для различных сфер деятельности",
      author: "Мария Сидорова",
      date: "12 декабря 2024",
      readTime: "6 мин",
      image: "/img/31c5a312-3ceb-4d56-8c2d-f5fd25e3189f.jpg",
      category: "1С"
    },
    {
      title: "Облачные серверы vs выделенные: что выбрать?",
      excerpt: "Сравнение различных типов серверных решений и рекомендации по выбору",
      author: "Дмитрий Иванов",
      date: "10 декабря 2024",
      readTime: "5 мин",
      image: "/img/1411beba-e0be-43ae-ac50-644783012932.jpg",
      category: "Серверы"
    },
    {
      title: "10 признаков того, что вашему компьютеру нужно обслуживание",
      excerpt: "Простые способы определить, когда пора обратиться к специалистам",
      author: "Алексей Петров",
      date: "8 декабря 2024",
      readTime: "4 мин",
      image: "/img/1834f1b9-6dca-4e52-8293-17b358cde3be.jpg",
      category: "Обслуживание"
    },
    {
      title: "Резервное копирование: лучшие практики для бизнеса",
      excerpt: "Как правильно организовать систему резервного копирования данных",
      author: "Дмитрий Иванов",
      date: "5 декабря 2024",
      readTime: "7 мин",
      image: "/img/aa876076-6069-4811-aef5-dbcb0532bb4d.jpg",
      category: "Безопасность"
    },
    {
      title: "Автоматизация бизнес-процессов с помощью 1С",
      excerpt: "Практические примеры автоматизации рутинных задач в 1С:Предприятие",
      author: "Мария Сидорова",
      date: "3 декабря 2024",
      readTime: "9 мин",
      image: "/img/31c5a312-3ceb-4d56-8c2d-f5fd25e3189f.jpg",
      category: "1С"
    },
    {
      title: "Мониторинг серверов: инструменты и методы",
      excerpt: "Обзор современных решений для мониторинга серверной инфраструктуры",
      author: "Дмитрий Иванов",
      date: "1 декабря 2024",
      readTime: "6 мин",
      image: "/img/1411beba-e0be-43ae-ac50-644783012932.jpg",
      category: "Серверы"
    }
  ];

  const categories = [
    { name: "Все статьи", count: 24 },
    { name: "1С", count: 8 },
    { name: "Серверы", count: 6 },
    { name: "Безопасность", count: 5 },
    { name: "Обслуживание", count: 5 }
  ];

  const popularTags = [
    "1С:Предприятие", "Серверы", "Безопасность", "Резервное копирование",
    "Мониторинг", "Автоматизация", "Облачные технологии", "ИТ-поддержка"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <Badge variant="secondary" className="mb-4">Блог</Badge>
            <h1 className="text-4xl font-bold mb-4">ИТ-блог ITCompany</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Полезные статьи, советы и новости из мира информационных технологий. 
              Делимся опытом и помогаем решать ИТ-задачи
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Featured Post */}
            <Card className="mb-12 overflow-hidden hover:shadow-lg transition-shadow">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img 
                    src={featuredPost.image} 
                    alt={featuredPost.title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-6">
                  <Badge className="mb-3">{featuredPost.category}</Badge>
                  <h2 className="text-2xl font-bold mb-3">{featuredPost.title}</h2>
                  <p className="text-gray-600 mb-4">{featuredPost.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-4">
                      <span>{featuredPost.author}</span>
                      <span>{featuredPost.date}</span>
                    </div>
                    <div className="flex items-center">
                      <Icon name="Clock" size={16} className="mr-1" />
                      {featuredPost.readTime}
                    </div>
                  </div>
                  <Button>
                    Читать статью
                    <Icon name="ArrowRight" size={16} className="ml-2" />
                  </Button>
                </div>
              </div>
            </Card>

            {/* Blog Posts Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              {blogPosts.map((post, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <CardHeader>
                    <Badge variant="outline" className="w-fit mb-2">{post.category}</Badge>
                    <CardTitle className="text-lg line-clamp-2">{post.title}</CardTitle>
                    <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center space-x-2">
                        <span>{post.author}</span>
                        <span>•</span>
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center">
                        <Icon name="Clock" size={14} className="mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="w-full">
                      Читать далее
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-12">
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm" disabled>
                  <Icon name="ChevronLeft" size={16} />
                </Button>
                <Button size="sm">1</Button>
                <Button variant="outline" size="sm">2</Button>
                <Button variant="outline" size="sm">3</Button>
                <Button variant="outline" size="sm">
                  <Icon name="ChevronRight" size={16} />
                </Button>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Search */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Поиск по блогу</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex space-x-2">
                  <Input placeholder="Поиск статей..." />
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

            {/* Popular Tags */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Популярные теги</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {popularTags.map((tag, index) => (
                    <Badge key={index} variant="outline" className="cursor-pointer hover:bg-primary hover:text-white">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Newsletter */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Подписка на новости</CardTitle>
                <CardDescription>
                  Получайте новые статьи на email
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

            {/* Recent Posts */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Последние статьи</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {blogPosts.slice(0, 3).map((post, index) => (
                    <div key={index} className="flex space-x-3">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-16 h-16 object-cover rounded"
                      />
                      <div className="flex-1">
                        <h4 className="text-sm font-semibold line-clamp-2 mb-1">{post.title}</h4>
                        <p className="text-xs text-gray-500">{post.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Нужна помощь с ИТ?</h2>
          <p className="text-xl mb-8">Наши эксперты готовы решить любые технические задачи</p>
          <Button variant="secondary" size="lg">
            <Icon name="Phone" size={20} className="mr-2" />
            Получить консультацию
          </Button>
        </div>
      </div>
    </div>
  );
}