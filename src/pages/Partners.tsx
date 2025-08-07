import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

export default function Partners() {
  const partners = [
    {
      name: "Microsoft",
      logo: "/img/aa876076-6069-4811-aef5-dbcb0532bb4d.jpg",
      status: "Золотой партнер",
      description: "Официальный партнер Microsoft с экспертизой в области облачных решений и корпоративного ПО",
      specializations: ["Azure", "Office 365", "Windows Server", "SQL Server"],
      since: "2018"
    },
    {
      name: "1С",
      logo: "/img/31c5a312-3ceb-4d56-8c2d-f5fd25e3189f.jpg",
      status: "Центр компетенции",
      description: "Сертифицированный центр компетенции 1С с правом разработки и внедрения решений",
      specializations: ["1С:Предприятие", "1С:Розница", "1С:Зарплата", "1С:CRM"],
      since: "2016"
    },
    {
      name: "VMware",
      logo: "/img/1411beba-e0be-43ae-ac50-644783012932.jpg",
      status: "Авторизованный партнер",
      description: "Партнер VMware по виртуализации и облачным технологиям",
      specializations: ["vSphere", "vCenter", "NSX", "vSAN"],
      since: "2019"
    },
    {
      name: "Kaspersky",
      logo: "/img/1834f1b9-6dca-4e52-8293-17b358cde3be.jpg",
      status: "Сертифицированный партнер",
      description: "Партнер Kaspersky в области информационной безопасности",
      specializations: ["Endpoint Security", "Security Center", "Anti-Virus", "Internet Security"],
      since: "2017"
    },
    {
      name: "Cisco",
      logo: "/img/aa876076-6069-4811-aef5-dbcb0532bb4d.jpg",
      status: "Авторизованный реселлер",
      description: "Авторизованный реселлер сетевого оборудования Cisco",
      specializations: ["Маршрутизаторы", "Коммутаторы", "Firewall", "Wireless"],
      since: "2020"
    },
    {
      name: "Dell Technologies",
      logo: "/img/31c5a312-3ceb-4d56-8c2d-f5fd25e3189f.jpg",
      status: "Авторизованный партнер",
      description: "Партнер Dell по серверному оборудованию и системам хранения данных",
      specializations: ["PowerEdge", "PowerVault", "Рабочие станции", "Ноутбуки"],
      since: "2019"
    }
  ];

  const partnershipBenefits = [
    {
      title: "Взаимовыгодное сотрудничество",
      description: "Создаем долгосрочные партнерские отношения с взаимной выгодой",
      icon: "Handshake"
    },
    {
      title: "Техническая экспертиза",
      description: "Делимся знаниями и опытом для решения сложных задач",
      icon: "Users"
    },
    {
      title: "Расширение возможностей",
      description: "Совместно предлагаем комплексные решения клиентам",
      icon: "TrendingUp"
    },
    {
      title: "Маркетинговая поддержка",
      description: "Совместные маркетинговые активности и продвижение",
      icon: "Megaphone"
    }
  ];

  const partnershipTypes = [
    {
      type: "Технологическое партнерство",
      description: "Сотрудничество в области разработки и внедрения технологических решений",
      benefits: [
        "Совместная разработка продуктов",
        "Обмен технологиями",
        "Техническая поддержка",
        "Сертификация специалистов"
      ]
    },
    {
      type: "Реселлерское партнерство",
      description: "Продажа и поддержка продуктов партнеров через нашу дистрибьюторскую сеть",
      benefits: [
        "Доступ к продуктам партнера",
        "Маркетинговая поддержка",
        "Обучение продажам",
        "Техническая поддержка"
      ]
    },
    {
      type: "Интеграционное партнерство",
      description: "Совместная работа над проектами интеграции и автоматизации",
      benefits: [
        "Совместные проекты",
        "Обмен клиентской базой",
        "Техническая экспертиза",
        "Совместная поддержка"
      ]
    }
  ];

  const certifications = [
    { name: "Microsoft Certified Partner", year: "2024" },
    { name: "1С:Центр компетенции", year: "2024" },
    { name: "VMware Authorized Partner", year: "2024" },
    { name: "Kaspersky Certified Partner", year: "2024" },
    { name: "Cisco Authorized Reseller", year: "2024" },
    { name: "Dell Authorized Partner", year: "2024" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <Badge variant="secondary" className="mb-4">Партнеры</Badge>
            <h1 className="text-4xl font-bold mb-4">Наши партнеры</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Мы сотрудничаем с ведущими технологическими компаниями, 
              чтобы предоставлять нашим клиентам лучшие решения на рынке
            </p>
          </div>
        </div>
      </div>

      {/* Partners Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {partners.map((partner, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <img 
                  src={partner.logo} 
                  alt={partner.name}
                  className="w-20 h-20 object-cover rounded-lg mx-auto mb-4"
                />
                <CardTitle className="text-xl">{partner.name}</CardTitle>
                <Badge variant="outline" className="w-fit mx-auto">{partner.status}</Badge>
                <CardDescription className="mt-2">{partner.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Специализации:</h4>
                    <div className="flex flex-wrap gap-2">
                      {partner.specializations.map((spec, specIndex) => (
                        <Badge key={specIndex} variant="secondary" className="text-xs">
                          {spec}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-between items-center text-sm text-gray-500">
                    <span>Партнеры с {partner.since} года</span>
                    <Icon name="Award" size={16} className="text-primary" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Partnership Benefits */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Преимущества партнерства</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partnershipBenefits.map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={benefit.icon} size={32} className="text-primary" />
                  </div>
                  <CardTitle className="text-lg">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Partnership Types */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Типы партнерства</h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {partnershipTypes.map((type, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">{type.type}</CardTitle>
                  <CardDescription>{type.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold mb-3">Преимущества:</h4>
                  <ul className="space-y-2">
                    {type.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center">
                        <Icon name="Check" size={16} className="text-green-500 mr-2" />
                        <span className="text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Certifications */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Сертификации и статусы</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Наши сертификации подтверждают высокий уровень экспертизы 
            и соответствие стандартам качества партнеров
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {certifications.map((cert, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Icon name="Award" size={32} className="text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">{cert.name}</h3>
                <p className="text-sm text-gray-500">Действует до {cert.year}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Become Partner */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Станьте нашим партнером</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Заинтересованы в сотрудничестве? Заполните форму, 
                и мы обсудим возможности взаимовыгодного партнерства
              </p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Заявка на партнерство</CardTitle>
                <CardDescription>
                  Расскажите о вашей компании и предложениях по сотрудничеству
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Название компании *</label>
                      <Input placeholder="ООО 'Ваша компания'" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Сфера деятельности *</label>
                      <Input placeholder="Например: Разработка ПО" />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Контактное лицо *</label>
                      <Input placeholder="Имя Фамилия" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Должность</label>
                      <Input placeholder="Генеральный директор" />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Email *</label>
                      <Input type="email" placeholder="contact@company.com" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Телефон *</label>
                      <Input placeholder="+7 (xxx) xxx-xx-xx" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Тип партнерства</label>
                    <select className="w-full p-3 border border-gray-300 rounded-lg">
                      <option>Выберите тип партнерства</option>
                      <option>Технологическое партнерство</option>
                      <option>Реселлерское партнерство</option>
                      <option>Интеграционное партнерство</option>
                      <option>Другое</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Описание предложения *</label>
                    <Textarea 
                      rows={5}
                      placeholder="Расскажите о вашей компании, продуктах/услугах и предложениях по сотрудничеству..."
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Дополнительные материалы</label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                      <Icon name="Upload" size={32} className="mx-auto text-gray-400 mb-2" />
                      <p className="text-gray-600">Прикрепите презентацию, каталог или другие материалы</p>
                      <p className="text-sm text-gray-500 mt-1">Максимальный размер: 10 МБ</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="consent" className="rounded" />
                    <label htmlFor="consent" className="text-sm text-gray-600">
                      Согласен на обработку персональных данных
                    </label>
                  </div>
                  
                  <Button className="w-full" size="lg">
                    <Icon name="Send" size={20} className="mr-2" />
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Success Stories */}
      <div className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Истории успеха</h2>
            <p className="text-xl">Примеры успешного сотрудничества с нашими партнерами</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white/10 border-white/20 text-white">
              <CardHeader>
                <CardTitle>Проект с Microsoft</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-blue-100">
                  Совместно с Microsoft реализовали миграцию 500+ рабочих мест 
                  в облако Office 365 для крупного производственного предприятия
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 border-white/20 text-white">
              <CardHeader>
                <CardTitle>Внедрение 1С</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-blue-100">
                  Как центр компетенции 1С успешно автоматизировали 
                  бизнес-процессы для 50+ компаний различных отраслей
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 border-white/20 text-white">
              <CardHeader>
                <CardTitle>Безопасность с Kaspersky</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-blue-100">
                  Внедрили комплексные решения Kaspersky для защиты 
                  ИТ-инфраструктуры банков и финансовых организаций
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}