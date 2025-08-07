import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";

export default function Portfolio() {
  const projects = [
    {
      id: 1,
      title: "Автоматизация торговой сети 'Продукты+'",
      description: "Внедрение 1С:Розница для сети из 15 магазинов с интеграцией кассового оборудования",
      category: "1С",
      client: "ООО 'Продукты+'",
      duration: "3 месяца",
      team: "4 специалиста",
      technologies: ["1С:Розница", "SQL Server", "Эквайринг", "Онлайн-касса"],
      results: [
        "Сокращение времени на инвентаризацию на 70%",
        "Автоматизация отчетности",
        "Интеграция с банковским эквайрингом",
        "Централизованное управление ассортиментом"
      ],
      image: "/img/aa876076-6069-4811-aef5-dbcb0532bb4d.jpg"
    },
    {
      id: 2,
      title: "Облачная инфраструктура для IT-стартапа",
      description: "Проектирование и развертывание масштабируемой облачной инфраструктуры",
      category: "Серверы",
      client: "TechStart Inc.",
      duration: "2 месяца",
      team: "3 специалиста",
      technologies: ["AWS", "Docker", "Kubernetes", "PostgreSQL", "Redis"],
      results: [
        "Автоматическое масштабирование нагрузки",
        "Uptime 99.9%",
        "Снижение затрат на инфраструктуру на 40%",
        "Система мониторинга и алертов"
      ],
      image: "/img/31c5a312-3ceb-4d56-8c2d-f5fd25e3189f.jpg"
    },
    {
      id: 3,
      title: "Модернизация ИТ-инфраструктуры производственного предприятия",
      description: "Полная замена серверного оборудования и настройка корпоративной сети",
      category: "Инфраструктура",
      client: "ЗАО 'Металлург'",
      duration: "4 месяца",
      team: "6 специалистов",
      technologies: ["Windows Server", "VMware", "Cisco", "Active Directory"],
      results: [
        "Увеличение производительности на 60%",
        "Централизованное управление пользователями",
        "Система резервного копирования",
        "Защищенная корпоративная сеть"
      ],
      image: "/img/1411beba-e0be-43ae-ac50-644783012932.jpg"
    },
    {
      id: 4,
      title: "CRM-система для агентства недвижимости",
      description: "Разработка и внедрение CRM на базе 1С:CRM для управления клиентской базой",
      category: "1С",
      client: "Агентство 'Дом мечты'",
      duration: "2 месяца",
      team: "3 специалиста",
      technologies: ["1С:CRM", "Битрикс24", "Телефония", "Email-маркетинг"],
      results: [
        "Увеличение конверсии на 35%",
        "Автоматизация воронки продаж",
        "Интеграция с телефонией",
        "Аналитика и отчетность"
      ],
      image: "/img/1834f1b9-6dca-4e52-8293-17b358cde3be.jpg"
    },
    {
      id: 5,
      title: "Система безопасности для банка",
      description: "Внедрение комплексной системы информационной безопасности",
      category: "Безопасность",
      client: "Региональный банк",
      duration: "6 месяцев",
      team: "5 специалистов",
      technologies: ["Kaspersky", "Firewall", "SIEM", "DLP", "PKI"],
      results: [
        "Соответствие требованиям ЦБ РФ",
        "Защита от внешних угроз",
        "Контроль утечек данных",
        "Система мониторинга инцидентов"
      ],
      image: "/img/aa876076-6069-4811-aef5-dbcb0532bb4d.jpg"
    },
    {
      id: 6,
      title: "Техническая поддержка медицинского центра",
      description: "Организация круглосуточной технической поддержки для сети клиник",
      category: "Поддержка",
      client: "Медицинский центр 'Здоровье'",
      duration: "Постоянно",
      team: "8 специалистов",
      technologies: ["Windows", "МИС", "Медицинское оборудование", "Сеть"],
      results: [
        "Время реакции на заявки - 15 минут",
        "Uptime медицинского оборудования 99.8%",
        "Обслуживание 200+ рабочих мест",
        "Интеграция с медицинскими системами"
      ],
      image: "/img/31c5a312-3ceb-4d56-8c2d-f5fd25e3189f.jpg"
    }
  ];

  const categories = [
    { name: "Все проекты", count: projects.length },
    { name: "1С", count: projects.filter(p => p.category === "1С").length },
    { name: "Серверы", count: projects.filter(p => p.category === "Серверы").length },
    { name: "Инфраструктура", count: projects.filter(p => p.category === "Инфраструктура").length },
    { name: "Безопасность", count: projects.filter(p => p.category === "Безопасность").length },
    { name: "Поддержка", count: projects.filter(p => p.category === "Поддержка").length }
  ];

  const stats = [
    { number: "150+", label: "Реализованных проектов", icon: "CheckCircle" },
    { number: "98%", label: "Довольных клиентов", icon: "Heart" },
    { number: "24/7", label: "Техническая поддержка", icon: "Clock" },
    { number: "10", label: "Лет опыта", icon: "Award" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <Badge variant="secondary" className="mb-4">Портфолио</Badge>
            <h1 className="text-4xl font-bold mb-4">Наши проекты</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Примеры успешно реализованных проектов в различных сферах бизнеса. 
              Каждый проект - это уникальное решение, созданное с учетом специфики клиента
            </p>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={stat.icon} size={32} className="text-primary" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Portfolio */}
      <div className="container mx-auto px-4 py-16">
        <Tabs defaultValue="all" className="w-full">
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            <TabsList className="grid grid-cols-3 lg:grid-cols-6 w-full max-w-4xl">
              <TabsTrigger value="all">Все</TabsTrigger>
              <TabsTrigger value="1c">1С</TabsTrigger>
              <TabsTrigger value="servers">Серверы</TabsTrigger>
              <TabsTrigger value="infrastructure">Инфраструктура</TabsTrigger>
              <TabsTrigger value="security">Безопасность</TabsTrigger>
              <TabsTrigger value="support">Поддержка</TabsTrigger>
            </TabsList>
          </div>

          {/* All Projects */}
          <TabsContent value="all">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline">{project.category}</Badge>
                      <span className="text-sm text-gray-500">{project.duration}</span>
                    </div>
                    <CardTitle className="text-lg line-clamp-2">{project.title}</CardTitle>
                    <CardDescription className="line-clamp-3">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 mb-4">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Клиент:</span>
                        <span className="font-semibold">{project.client}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Команда:</span>
                        <span className="font-semibold">{project.team}</span>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="w-full">
                      Подробнее о проекте
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* 1C Projects */}
          <TabsContent value="1c">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.filter(p => p.category === "1С").map((project) => (
                <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline">{project.category}</Badge>
                      <span className="text-sm text-gray-500">{project.duration}</span>
                    </div>
                    <CardTitle className="text-lg line-clamp-2">{project.title}</CardTitle>
                    <CardDescription className="line-clamp-3">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 mb-4">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Клиент:</span>
                        <span className="font-semibold">{project.client}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Команда:</span>
                        <span className="font-semibold">{project.team}</span>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="w-full">
                      Подробнее о проекте
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Other category tabs would be similar */}
          <TabsContent value="servers">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.filter(p => p.category === "Серверы").map((project) => (
                <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline">{project.category}</Badge>
                      <span className="text-sm text-gray-500">{project.duration}</span>
                    </div>
                    <CardTitle className="text-lg line-clamp-2">{project.title}</CardTitle>
                    <CardDescription className="line-clamp-3">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 mb-4">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Клиент:</span>
                        <span className="font-semibold">{project.client}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Команда:</span>
                        <span className="font-semibold">{project.team}</span>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="w-full">
                      Подробнее о проекте
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Detailed Project Example */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Пример детального проекта</h2>
            
            <Card className="overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img 
                    src={projects[0].image} 
                    alt={projects[0].title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-8">
                  <Badge className="mb-4">{projects[0].category}</Badge>
                  <h3 className="text-2xl font-bold mb-4">{projects[0].title}</h3>
                  <p className="text-gray-600 mb-6">{projects[0].description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="font-semibold mb-2">Клиент</h4>
                      <p className="text-gray-600">{projects[0].client}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Длительность</h4>
                      <p className="text-gray-600">{projects[0].duration}</p>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold mb-2">Технологии</h4>
                    <div className="flex flex-wrap gap-2">
                      {projects[0].technologies.map((tech, index) => (
                        <Badge key={index} variant="secondary">{tech}</Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold mb-2">Результаты</h4>
                    <ul className="space-y-2">
                      {projects[0].results.map((result, index) => (
                        <li key={index} className="flex items-center">
                          <Icon name="Check" size={16} className="text-green-500 mr-2" />
                          <span className="text-sm">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Button>
                    Обсудить похожий проект
                    <Icon name="ArrowRight" size={16} className="ml-2" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Готовы реализовать свой проект?</h2>
          <p className="text-xl mb-8">Расскажите о ваших задачах, и мы предложим оптимальное решение</p>
          <Button variant="secondary" size="lg">
            <Icon name="MessageCircle" size={20} className="mr-2" />
            Обсудить проект
          </Button>
        </div>
      </div>
    </div>
  );
}