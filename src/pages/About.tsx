import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

export default function About() {
  const team = [
    {
      name: "Алексей Петров",
      position: "Технический директор",
      experience: "12 лет",
      specialization: "Системная архитектура",
      image: "/img/1834f1b9-6dca-4e52-8293-17b358cde3be.jpg"
    },
    {
      name: "Мария Сидорова",
      position: "Ведущий разработчик 1С",
      experience: "8 лет",
      specialization: "1С:Предприятие",
      image: "/img/31c5a312-3ceb-4d56-8c2d-f5fd25e3189f.jpg"
    },
    {
      name: "Дмитрий Иванов",
      position: "Системный администратор",
      experience: "10 лет",
      specialization: "Серверные технологии",
      image: "/img/1411beba-e0be-43ae-ac50-644783012932.jpg"
    }
  ];

  const achievements = [
    { number: "500+", label: "Реализованных проектов" },
    { number: "150+", label: "Довольных клиентов" },
    { number: "10", label: "Лет на рынке" },
    { number: "24/7", label: "Техническая поддержка" }
  ];

  const values = [
    {
      title: "Качество",
      description: "Мы гарантируем высокое качество всех выполняемых работ",
      icon: "Award"
    },
    {
      title: "Надежность",
      description: "Наши решения проверены временем и работают стабильно",
      icon: "Shield"
    },
    {
      title: "Инновации",
      description: "Используем современные технологии и подходы",
      icon: "Lightbulb"
    },
    {
      title: "Поддержка",
      description: "Круглосуточная техническая поддержка наших клиентов",
      icon: "HeadphonesIcon"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <div className="bg-white">
        <div className="container mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="mb-4">О компании</Badge>
              <h1 className="text-4xl font-bold mb-6">
                Команда профессионалов с 10-летним опытом
              </h1>
              <p className="text-gray-600 mb-8 text-lg">
                ITCompany — это команда опытных специалистов, которая предоставляет 
                комплексные ИТ-услуги для бизнеса любого масштаба. Мы помогаем компаниям 
                оптимизировать свои ИТ-процессы и достигать новых высот.
              </p>
              <Button size="lg">
                <Icon name="Users" size={20} className="mr-2" />
                Познакомиться с командой
              </Button>
            </div>
            <div>
              <img 
                src="/img/aa876076-6069-4811-aef5-dbcb0532bb4d.jpg" 
                alt="Наша команда"
                className="rounded-2xl shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Achievements */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">
                  {achievement.number}
                </div>
                <div className="text-gray-600">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Наша команда</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Познакомьтесь с экспертами, которые делают вашу ИТ-инфраструктуру надежной и эффективной
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                  />
                  <CardTitle>{member.name}</CardTitle>
                  <CardDescription>{member.position}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Опыт:</span>
                      <span className="font-semibold">{member.experience}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Специализация:</span>
                      <span className="font-semibold">{member.specialization}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Наши ценности</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Принципы, которыми мы руководствуемся в работе с каждым клиентом
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={value.icon} size={32} className="text-primary" />
                  </div>
                  <CardTitle className="text-lg">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* History Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">История компании</h2>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-4 h-4 bg-primary rounded-full mt-2"></div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">2014 - Основание</h3>
                  <p className="text-gray-600">
                    Компания была основана группой энтузиастов с целью предоставления 
                    качественных ИТ-услуг для малого и среднего бизнеса.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-4 h-4 bg-secondary rounded-full mt-2"></div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">2017 - Расширение</h3>
                  <p className="text-gray-600">
                    Открытие направления по разработке на платформе 1С:Предприятие 
                    и начало работы с крупными корпоративными клиентами.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-4 h-4 bg-green-500 rounded-full mt-2"></div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">2020 - Облачные решения</h3>
                  <p className="text-gray-600">
                    Запуск собственной облачной платформы и услуг по аренде серверов 
                    с гарантией uptime 99.9%.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-4 h-4 bg-orange-500 rounded-full mt-2"></div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">2024 - Настоящее время</h3>
                  <p className="text-gray-600">
                    Сегодня мы обслуживаем более 150 клиентов и продолжаем развиваться, 
                    внедряя новые технологии и расширяя спектр услуг.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}