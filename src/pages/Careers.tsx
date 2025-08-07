import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

export default function Careers() {
  const openPositions = [
    {
      id: 1,
      title: "Системный администратор",
      department: "ИТ-поддержка",
      type: "Полная занятость",
      location: "Москва",
      experience: "3-5 лет",
      salary: "80,000 - 120,000₽",
      description: "Ищем опытного системного администратора для поддержки корпоративной ИТ-инфраструктуры",
      requirements: [
        "Опыт работы с Windows Server",
        "Знание Active Directory",
        "Опыт виртуализации (VMware/Hyper-V)",
        "Навыки работы с сетевым оборудованием"
      ],
      responsibilities: [
        "Администрирование серверов и рабочих станций",
        "Поддержка пользователей",
        "Мониторинг ИТ-инфраструктуры",
        "Резервное копирование данных"
      ]
    },
    {
      id: 2,
      title: "Разработчик 1С",
      department: "Разработка",
      type: "Полная занятость",
      location: "Москва/Удаленно",
      experience: "2-4 года",
      salary: "90,000 - 150,000₽",
      description: "Требуется разработчик 1С для работы над проектами автоматизации бизнес-процессов",
      requirements: [
        "Опыт разработки на платформе 1С:Предприятие 8",
        "Знание языка запросов 1С",
        "Опыт работы с типовыми конфигурациями",
        "Понимание бизнес-процессов"
      ],
      responsibilities: [
        "Разработка и доработка конфигураций 1С",
        "Создание отчетов и обработок",
        "Интеграция с внешними системами",
        "Техническая поддержка пользователей"
      ]
    },
    {
      id: 3,
      title: "Специалист технической поддержки",
      department: "Поддержка",
      type: "Полная занятость",
      location: "Москва",
      experience: "1-3 года",
      salary: "50,000 - 80,000₽",
      description: "В команду технической поддержки требуется специалист для работы с клиентами",
      requirements: [
        "Базовые знания ПК и сетей",
        "Опыт работы с пользователями",
        "Коммуникативные навыки",
        "Желание развиваться в ИТ"
      ],
      responsibilities: [
        "Консультирование клиентов",
        "Решение технических проблем",
        "Ведение базы знаний",
        "Эскалация сложных вопросов"
      ]
    },
    {
      id: 4,
      title: "DevOps инженер",
      department: "Инфраструктура",
      type: "Полная занятость",
      location: "Москва/Удаленно",
      experience: "3-6 лет",
      salary: "120,000 - 200,000₽",
      description: "Ищем DevOps инженера для автоматизации процессов разработки и развертывания",
      requirements: [
        "Опыт работы с Docker и Kubernetes",
        "Знание CI/CD процессов",
        "Опыт работы с облачными платформами",
        "Навыки скриптинга (Bash, Python)"
      ],
      responsibilities: [
        "Настройка CI/CD пайплайнов",
        "Управление контейнерной инфраструктурой",
        "Мониторинг и логирование",
        "Автоматизация развертывания"
      ]
    }
  ];

  const benefits = [
    {
      title: "Конкурентная зарплата",
      description: "Достойная оплата труда с возможностью роста",
      icon: "DollarSign"
    },
    {
      title: "Гибкий график",
      description: "Возможность удаленной работы и гибкого графика",
      icon: "Clock"
    },
    {
      title: "Обучение и развитие",
      description: "Оплачиваемые курсы и сертификации",
      icon: "BookOpen"
    },
    {
      title: "Медицинская страховка",
      description: "ДМС для сотрудников и их семей",
      icon: "Heart"
    },
    {
      title: "Современный офис",
      description: "Комфортное рабочее место в центре города",
      icon: "Building"
    },
    {
      title: "Дружная команда",
      description: "Работа в команде профессионалов",
      icon: "Users"
    }
  ];

  const companyValues = [
    {
      title: "Профессионализм",
      description: "Мы стремимся к высоким стандартам качества в каждом проекте"
    },
    {
      title: "Развитие",
      description: "Поддерживаем профессиональный и личностный рост сотрудников"
    },
    {
      title: "Инновации",
      description: "Используем современные технологии и подходы"
    },
    {
      title: "Командная работа",
      description: "Ценим взаимопомощь и сотрудничество"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <Badge variant="secondary" className="mb-4">Карьера</Badge>
            <h1 className="text-4xl font-bold mb-4">Присоединяйтесь к нашей команде</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Мы ищем талантливых специалистов, готовых развиваться вместе с нами 
              и создавать инновационные ИТ-решения
            </p>
          </div>
        </div>
      </div>

      {/* Why Work With Us */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Почему стоит работать с нами</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            ITCompany — это не просто работа, это возможность расти профессионально 
            в команде единомышленников
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
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

        {/* Company Values */}
        <div className="bg-white rounded-2xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">Наши ценности</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {companyValues.map((value, index) => (
              <div key={index} className="text-center">
                <h4 className="font-semibold text-lg mb-2 text-primary">{value.title}</h4>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Open Positions */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Открытые вакансии</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Актуальные предложения для ИТ-специалистов различного уровня
            </p>
          </div>

          <div className="space-y-6">
            {openPositions.map((position) => (
              <Card key={position.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <CardTitle className="text-xl mb-2">{position.title}</CardTitle>
                      <div className="flex flex-wrap gap-2 mb-2">
                        <Badge variant="outline">{position.department}</Badge>
                        <Badge variant="outline">{position.type}</Badge>
                        <Badge variant="outline">{position.location}</Badge>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-primary">{position.salary}</div>
                      <div className="text-sm text-gray-500">Опыт: {position.experience}</div>
                    </div>
                  </div>
                  <CardDescription className="text-base">{position.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="font-semibold mb-3">Требования:</h4>
                      <ul className="space-y-2">
                        {position.requirements.map((req, index) => (
                          <li key={index} className="flex items-start">
                            <Icon name="Check" size={16} className="text-green-500 mr-2 mt-0.5" />
                            <span className="text-sm">{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3">Обязанности:</h4>
                      <ul className="space-y-2">
                        {position.responsibilities.map((resp, index) => (
                          <li key={index} className="flex items-start">
                            <Icon name="ArrowRight" size={16} className="text-primary mr-2 mt-0.5" />
                            <span className="text-sm">{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button className="flex-1">
                      <Icon name="Send" size={16} className="mr-2" />
                      Откликнуться
                    </Button>
                    <Button variant="outline" className="flex-1">
                      <Icon name="Bookmark" size={16} className="mr-2" />
                      Сохранить
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Application Form */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Инициативная заявка</CardTitle>
              <CardDescription>
                Не нашли подходящую вакансию? Отправьте нам свое резюме, 
                и мы свяжемся с вами при появлении подходящих позиций
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Имя *</label>
                    <Input placeholder="Ваше имя" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Фамилия *</label>
                    <Input placeholder="Ваша фамилия" />
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Email *</label>
                    <Input type="email" placeholder="your@email.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Телефон *</label>
                    <Input placeholder="+7 (xxx) xxx-xx-xx" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Желаемая позиция</label>
                  <Input placeholder="Например: Системный администратор" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Опыт работы</label>
                  <select className="w-full p-3 border border-gray-300 rounded-lg">
                    <option>Без опыта</option>
                    <option>1-2 года</option>
                    <option>3-5 лет</option>
                    <option>5+ лет</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Ключевые навыки</label>
                  <Input placeholder="Например: Windows Server, 1С, Python" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">О себе</label>
                  <Textarea 
                    rows={4}
                    placeholder="Расскажите о своем опыте, достижениях и мотивации..."
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Резюме</label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                    <Icon name="Upload" size={32} className="mx-auto text-gray-400 mb-2" />
                    <p className="text-gray-600">Прикрепите резюме (PDF, DOC, DOCX)</p>
                    <p className="text-sm text-gray-500 mt-1">Максимальный размер: 5 МБ</p>
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

      {/* Team Culture */}
      <div className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Наша корпоративная культура</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Icon name="Users" size={24} className="mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Командная работа</h3>
                    <p className="text-blue-100">Мы работаем как единая команда, поддерживаем друг друга и делимся знаниями</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="TrendingUp" size={24} className="mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Постоянное развитие</h3>
                    <p className="text-blue-100">Поощряем изучение новых технологий и профессиональный рост</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="Award" size={24} className="mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Признание достижений</h3>
                    <p className="text-blue-100">Ценим вклад каждого сотрудника и отмечаем успехи</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="/img/31c5a312-3ceb-4d56-8c2d-f5fd25e3189f.jpg" 
                alt="Наша команда"
                className="rounded-2xl shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Часто задаваемые вопросы</h2>
            
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Какой процесс найма в компании?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Процесс включает: рассмотрение резюме → телефонное интервью → 
                    техническое собеседование → встреча с руководителем → принятие решения. 
                    Весь процесс занимает 1-2 недели.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Есть ли испытательный срок?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Да, испытательный срок составляет 3 месяца. В течение этого времени 
                    мы помогаем новому сотруднику адаптироваться и оцениваем взаимное соответствие.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Предоставляете ли вы оборудование для работы?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Да, мы предоставляем все необходимое оборудование: ноутбук, монитор, 
                    периферию. При удаленной работе оборудование можно забрать домой.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}