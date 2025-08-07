import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";

export default function Sitemap() {
  const siteStructure = [
    {
      category: "Основные страницы",
      icon: "Home",
      pages: [
        { name: "Главная", url: "/", description: "Главная страница сайта с обзором услуг" },
        { name: "О компании", url: "/about", description: "Информация о компании, команде и истории" },
        { name: "Услуги", url: "/services", description: "Полный перечень предоставляемых услуг" },
        { name: "Цены", url: "/pricing", description: "Тарифные планы и стоимость услуг" },
        { name: "Контакты", url: "/contact", description: "Контактная информация и форма обратной связи" }
      ]
    },
    {
      category: "Услуги",
      icon: "Settings",
      pages: [
        { name: "Обслуживание ПК", url: "/services/pc-support", description: "Техническое обслуживание компьютеров" },
        { name: "Программирование 1С", url: "/services/1c-development", description: "Разработка и внедрение 1С решений" },
        { name: "Аренда серверов", url: "/services/server-rental", description: "VPS и выделенные серверы" },
        { name: "Техническая поддержка", url: "/services/support", description: "Круглосуточная техническая поддержка" },
        { name: "Настройка сетей", url: "/services/network-setup", description: "Проектирование и настройка сетей" },
        { name: "Кибербезопасность", url: "/services/security", description: "Защита от киберугроз" }
      ]
    },
    {
      category: "Информация",
      icon: "Info",
      pages: [
        { name: "Блог", url: "/blog", description: "Статьи и новости из мира ИТ" },
        { name: "Новости", url: "/news", description: "Новости компании и отрасли" },
        { name: "Портфолио", url: "/portfolio", description: "Примеры выполненных проектов" },
        { name: "FAQ", url: "/faq", description: "Часто задаваемые вопросы" },
        { name: "База знаний", url: "/knowledge-base", description: "Полезные материалы и инструкции" }
      ]
    },
    {
      category: "Поддержка",
      icon: "Headphones",
      pages: [
        { name: "Техподдержка", url: "/support", description: "Центр технической поддержки" },
        { name: "Создать заявку", url: "/support/ticket", description: "Создание заявки в службу поддержки" },
        { name: "Статус заявки", url: "/support/status", description: "Проверка статуса заявки" },
        { name: "Удаленная помощь", url: "/support/remote", description: "Получение удаленной помощи" },
        { name: "Документация", url: "/support/docs", description: "Техническая документация" }
      ]
    },
    {
      category: "Клиентам",
      icon: "Users",
      pages: [
        { name: "Личный кабинет", url: "/cabinet", description: "Персональный кабинет клиента" },
        { name: "Мои услуги", url: "/cabinet/services", description: "Управление подключенными услугами" },
        { name: "Счета и платежи", url: "/cabinet/billing", description: "История платежей и счета" },
        { name: "Мои заявки", url: "/cabinet/tickets", description: "История обращений в поддержку" },
        { name: "Настройки", url: "/cabinet/settings", description: "Настройки аккаунта" }
      ]
    },
    {
      category: "Партнерам",
      icon: "Handshake",
      pages: [
        { name: "Партнеры", url: "/partners", description: "Информация о партнерской программе" },
        { name: "Стать партнером", url: "/partners/join", description: "Заявка на партнерство" },
        { name: "Партнерский кабинет", url: "/partners/cabinet", description: "Кабинет для партнеров" },
        { name: "Материалы", url: "/partners/materials", description: "Маркетинговые материалы" },
        { name: "Обучение", url: "/partners/training", description: "Обучающие материалы для партнеров" }
      ]
    },
    {
      category: "Карьера",
      icon: "Briefcase",
      pages: [
        { name: "Вакансии", url: "/careers", description: "Открытые вакансии в компании" },
        { name: "О работе в ITCompany", url: "/careers/about", description: "Информация о работе в компании" },
        { name: "Отправить резюме", url: "/careers/apply", description: "Отправка резюме" },
        { name: "Стажировка", url: "/careers/internship", description: "Программы стажировки" },
        { name: "Корпоративная культура", url: "/careers/culture", description: "Наша корпоративная культура" }
      ]
    },
    {
      category: "Правовая информация",
      icon: "Scale",
      pages: [
        { name: "Условия использования", url: "/terms", description: "Пользовательское соглашение" },
        { name: "Политика конфиденциальности", url: "/privacy", description: "Обработка персональных данных" },
        { name: "Договор оферты", url: "/offer", description: "Публичная оферта на оказание услуг" },
        { name: "Реквизиты", url: "/requisites", description: "Юридическая информация о компании" },
        { name: "Карта сайта", url: "/sitemap", description: "Структура сайта" }
      ]
    }
  ];

  const quickLinks = [
    { name: "Заказать услугу", url: "/services", icon: "ShoppingCart" },
    { name: "Техподдержка", url: "/support", icon: "Headphones" },
    { name: "Личный кабинет", url: "/cabinet", icon: "User" },
    { name: "Связаться с нами", url: "/contact", icon: "Phone" }
  ];

  const popularPages = [
    "Главная",
    "Услуги", 
    "Цены",
    "Техподдержка",
    "О компании",
    "Контакты",
    "FAQ",
    "Блог"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <Badge variant="secondary" className="mb-4">Карта сайта</Badge>
            <h1 className="text-4xl font-bold mb-4">Карта сайта</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Полная структура нашего сайта для удобной навигации. 
              Найдите нужную информацию быстро и легко
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
                    placeholder="Поиск по сайту..." 
                    className="flex-1"
                  />
                  <Button>
                    <Icon name="Search" size={20} />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Site Structure */}
            <div className="space-y-8">
              {siteStructure.map((section, sectionIndex) => (
                <Card key={sectionIndex}>
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <Icon name={section.icon} size={24} className="text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{section.category}</CardTitle>
                        <CardDescription>{section.pages.length} страниц</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4">
                      {section.pages.map((page, pageIndex) => (
                        <div key={pageIndex} className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <h4 className="font-semibold text-primary hover:underline cursor-pointer">
                                {page.name}
                              </h4>
                              <p className="text-sm text-gray-600 mt-1">{page.description}</p>
                              <p className="text-xs text-gray-400 mt-2 font-mono">{page.url}</p>
                            </div>
                            <Icon name="ExternalLink" size={16} className="text-gray-400 ml-2 cursor-pointer hover:text-primary" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Quick Links */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Быстрые ссылки</CardTitle>
                <CardDescription>Наиболее популярные разделы</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {quickLinks.map((link, index) => (
                    <Button key={index} variant="outline" size="sm" className="w-full justify-start">
                      <Icon name={link.icon} size={16} className="mr-2" />
                      {link.name}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Popular Pages */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Популярные страницы</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {popularPages.map((page, index) => (
                    <div key={index} className="flex items-center justify-between py-2 hover:bg-gray-50 px-2 rounded cursor-pointer">
                      <span className="text-sm">{page}</span>
                      <Icon name="TrendingUp" size={14} className="text-green-500" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Site Statistics */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Статистика сайта</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Всего страниц:</span>
                    <span className="font-semibold">
                      {siteStructure.reduce((total, section) => total + section.pages.length, 0)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Разделов:</span>
                    <span className="font-semibold">{siteStructure.length}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Последнее обновление:</span>
                    <span className="font-semibold text-xs">20.12.2024</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* XML Sitemap */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">XML Sitemap</CardTitle>
                <CardDescription>Для поисковых систем</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Button variant="outline" size="sm" className="w-full justify-start">
                    <Icon name="FileText" size={16} className="mr-2" />
                    sitemap.xml
                  </Button>
                  <Button variant="outline" size="sm" className="w-full justify-start">
                    <Icon name="FileText" size={16} className="mr-2" />
                    robots.txt
                  </Button>
                  <p className="text-xs text-gray-500">
                    Файлы для индексации поисковыми системами
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Mobile App */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Мобильное приложение</CardTitle>
                <CardDescription>Скоро в App Store и Google Play</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <Icon name="Smartphone" size={32} className="text-primary mx-auto mb-3" />
                  <p className="text-sm text-gray-600 mb-3">
                    Мы работаем над мобильным приложением для удобного доступа к нашим услугам
                  </p>
                  <Button variant="outline" size="sm" disabled>
                    <Icon name="Bell" size={16} className="mr-2" />
                    Уведомить о выходе
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Site Navigation Tips */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Советы по навигации</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Как быстро найти нужную информацию на нашем сайте
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Icon name="Search" size={32} className="text-primary mx-auto mb-3" />
                <CardTitle className="text-lg">Используйте поиск</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Воспользуйтесь поиском в верхней части страницы для быстрого поиска информации
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Icon name="Menu" size={32} className="text-primary mx-auto mb-3" />
                <CardTitle className="text-lg">Главное меню</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Основные разделы сайта доступны через главное меню в шапке сайта
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Icon name="Bookmark" size={32} className="text-primary mx-auto mb-3" />
                <CardTitle className="text-lg">Добавьте в закладки</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Сохраните часто используемые страницы в закладки браузера для быстрого доступа
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Feedback */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Не нашли нужную страницу?</h2>
            <p className="text-gray-600 mb-8">
              Если вы не можете найти нужную информацию, свяжитесь с нами, 
              и мы поможем вам найти то, что вы ищете
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button>
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Написать в поддержку
              </Button>
              <Button variant="outline">
                <Icon name="Phone" size={20} className="mr-2" />
                Позвонить нам
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}