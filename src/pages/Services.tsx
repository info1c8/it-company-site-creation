import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

export default function Services() {
  const services = [
    {
      id: 1,
      title: "Обслуживание компьютеров",
      description: "Профессиональное обслуживание и ремонт компьютерной техники",
      icon: "Monitor",
      price: "от 2,000₽",
      features: ["Диагностика", "Ремонт", "Профилактика", "Настройка"]
    },
    {
      id: 2,
      title: "Программирование 1С",
      description: "Разработка и доработка конфигураций 1С:Предприятие",
      icon: "Code",
      price: "от 5,000₽",
      features: ["Разработка", "Доработка", "Интеграция", "Обучение"]
    },
    {
      id: 3,
      title: "Аренда серверов",
      description: "Надежные серверные решения для вашего бизнеса",
      icon: "Server",
      price: "от 3,000₽/мес",
      features: ["VPS", "Выделенные", "Облачные", "Поддержка 24/7"]
    },
    {
      id: 4,
      title: "Настройка сетей",
      description: "Проектирование и настройка корпоративных сетей",
      icon: "Network",
      price: "от 10,000₽",
      features: ["Проектирование", "Настройка", "Безопасность", "Мониторинг"]
    },
    {
      id: 5,
      title: "Резервное копирование",
      description: "Надежные системы резервного копирования данных",
      icon: "HardDrive",
      price: "от 1,500₽/мес",
      features: ["Автоматизация", "Облачное хранение", "Восстановление", "Мониторинг"]
    },
    {
      id: 6,
      title: "Кибербезопасность",
      description: "Комплексная защита от киберугроз",
      icon: "Shield",
      price: "от 8,000₽/мес",
      features: ["Антивирус", "Файрвол", "Мониторинг", "Обучение"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <Badge variant="secondary" className="mb-4">Наши услуги</Badge>
            <h1 className="text-4xl font-bold mb-4">Полный спектр ИТ-услуг</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Предоставляем комплексные решения для вашего бизнеса с гарантией качества и круглосуточной поддержкой
            </p>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Icon name={service.icon} size={32} className="text-primary" />
                </div>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
                <div className="text-2xl font-bold text-primary">{service.price}</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <Icon name="Check" size={16} className="text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className="w-full">Заказать услугу</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Нужна консультация?</h2>
          <p className="text-xl mb-8">Наши эксперты помогут выбрать оптимальное решение</p>
          <Button variant="secondary" size="lg">
            <Icon name="Phone" size={20} className="mr-2" />
            Получить консультацию
          </Button>
        </div>
      </div>
    </div>
  );
}