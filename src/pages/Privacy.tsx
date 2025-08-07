import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

export default function Privacy() {
  const sections = [
    {
      title: "1. Общие положения",
      content: [
        "Настоящая Политика конфиденциальности определяет порядок обработки персональных данных пользователей сайта itcompany.ru (далее - Сайт) компанией ITCompany (далее - Компания).",
        "Использование Сайта означает безоговорочное согласие пользователя с настоящей Политикой конфиденциальности и указанными в ней условиями обработки его персональных данных.",
        "В случае несогласия с условиями Политики конфиденциальности пользователь должен прекратить использование Сайта."
      ]
    },
    {
      title: "2. Персональные данные пользователей",
      content: [
        "Персональные данные - любая информация, относящаяся к прямо или косвенно определенному или определяемому физическому лицу (субъекту персональных данных).",
        "Компания обрабатывает следующие персональные данные пользователей:",
        "• Фамилия, имя, отчество",
        "• Контактный телефон",
        "• Адрес электронной почты",
        "• Название организации и должность",
        "• IP-адрес и данные о браузере",
        "• Файлы cookie и данные о посещениях сайта"
      ]
    },
    {
      title: "3. Цели обработки персональных данных",
      content: [
        "Компания обрабатывает персональные данные пользователей в следующих целях:",
        "• Предоставление услуг и выполнение договорных обязательств",
        "• Связь с пользователями для консультаций и поддержки",
        "• Информирование о новых услугах и специальных предложениях",
        "• Проведение маркетинговых исследований",
        "• Обеспечение безопасности и предотвращение мошенничества",
        "• Соблюдение требований законодательства"
      ]
    },
    {
      title: "4. Правовые основания обработки",
      content: [
        "Обработка персональных данных осуществляется на следующих правовых основаниях:",
        "• Согласие субъекта персональных данных",
        "• Исполнение договора, стороной которого является субъект персональных данных",
        "• Соблюдение правовых обязательств, возложенных на Компанию",
        "• Защита жизненно важных интересов субъекта персональных данных",
        "• Осуществление правосудия",
        "• Законные интересы Компании или третьих лиц"
      ]
    },
    {
      title: "5. Способы обработки персональных данных",
      content: [
        "Компания обрабатывает персональные данные как с использованием средств автоматизации, так и без их использования.",
        "Обработка включает в себя:",
        "• Сбор и систематизацию",
        "• Накопление и хранение",
        "• Уточнение и обновление",
        "• Использование и передачу",
        "• Обезличивание и блокирование",
        "• Удаление и уничтожение"
      ]
    },
    {
      title: "6. Передача персональных данных третьим лицам",
      content: [
        "Компания не передает персональные данные третьим лицам, за исключением следующих случаев:",
        "• Получено явное согласие пользователя на передачу",
        "• Передача необходима для исполнения договора с пользователем",
        "• Передача предусмотрена российским или иным применимым законодательством",
        "• Передача необходима для защиты жизни, здоровья или иных жизненно важных интересов пользователя",
        "Компания может привлекать третьих лиц для обработки персональных данных от своего имени, при условии обеспечения конфиденциальности."
      ]
    },
    {
      title: "7. Меры защиты персональных данных",
      content: [
        "Компания принимает необходимые и достаточные организационные и технические меры для защиты персональных данных:",
        "• Шифрование данных при передаче и хранении",
        "• Ограничение доступа к персональным данным",
        "• Использование антивирусного программного обеспечения",
        "• Регулярное резервное копирование данных",
        "• Обучение сотрудников правилам обработки персональных данных",
        "• Контроль за соблюдением требований законодательства"
      ]
    },
    {
      title: "8. Сроки обработки персональных данных",
      content: [
        "Персональные данные обрабатываются в течение сроков, необходимых для достижения целей обработки.",
        "Конкретные сроки обработки:",
        "• Данные клиентов - в течение срока действия договора и 5 лет после его окончания",
        "• Данные потенциальных клиентов - до отзыва согласия или 3 года с момента последнего обращения",
        "• Технические данные (логи, cookie) - до 2 лет",
        "• Данные для выполнения законных требований - в соответствии с требованиями законодательства"
      ]
    },
    {
      title: "9. Права субъектов персональных данных",
      content: [
        "Пользователи имеют следующие права в отношении своих персональных данных:",
        "• Право на получение информации об обработке персональных данных",
        "• Право на доступ к своим персональным данным",
        "• Право на уточнение, исправление или дополнение персональных данных",
        "• Право на удаление персональных данных",
        "• Право на ограничение обработки",
        "• Право на отзыв согласия на обработку",
        "• Право на обжалование действий или бездействия Компании"
      ]
    },
    {
      title: "10. Использование файлов cookie",
      content: [
        "Сайт использует файлы cookie для улучшения работы и персонализации пользовательского опыта.",
        "Типы используемых cookie:",
        "• Необходимые cookie - обеспечивают базовую функциональность сайта",
        "• Аналитические cookie - помогают понять, как пользователи взаимодействуют с сайтом",
        "• Функциональные cookie - запоминают выбор пользователя",
        "• Маркетинговые cookie - используются для показа релевантной рекламы",
        "Пользователь может управлять cookie через настройки браузера."
      ]
    },
    {
      title: "11. Изменения в Политике конфиденциальности",
      content: [
        "Компания оставляет за собой право вносить изменения в настоящую Политику конфиденциальности.",
        "При внесении изменений Компания:",
        "• Размещает обновленную версию на Сайте",
        "• Указывает дату последнего обновления",
        "• Уведомляет пользователей о существенных изменениях",
        "Продолжение использования Сайта после внесения изменений означает согласие с новой версией Политики."
      ]
    },
    {
      title: "12. Контактная информация",
      content: [
        "По вопросам обработки персональных данных можно обращаться:",
        "• Email: privacy@itcompany.ru",
        "• Телефон: +7 (495) 123-45-67",
        "• Почтовый адрес: 125009, г. Москва, ул. Тверская, д. 1, офис 100",
        "• Ответственный за обработку персональных данных: Петров Алексей Владимирович",
        "Компания обязуется рассмотреть обращения в течение 30 дней с момента получения."
      ]
    }
  ];

  const principles = [
    {
      title: "Законность",
      description: "Обработка персональных данных осуществляется в соответствии с требованиями законодательства",
      icon: "Scale"
    },
    {
      title: "Справедливость",
      description: "Обработка персональных данных ограничивается достижением конкретных, заранее определенных целей",
      icon: "Heart"
    },
    {
      title: "Соразмерность",
      description: "Обрабатываются только те персональные данные, которые необходимы для достижения целей",
      icon: "Balance"
    },
    {
      title: "Достоверность",
      description: "Принимаются меры по обеспечению точности и актуальности персональных данных",
      icon: "CheckCircle"
    },
    {
      title: "Безопасность",
      description: "Применяются необходимые технические и организационные меры защиты",
      icon: "Shield"
    },
    {
      title: "Прозрачность",
      description: "Субъекты персональных данных информируются о целях и способах обработки",
      icon: "Eye"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <Badge variant="secondary" className="mb-4">Конфиденциальность</Badge>
            <h1 className="text-4xl font-bold mb-4">Политика конфиденциальности</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Настоящая политика описывает, как мы собираем, используем и защищаем 
              ваши персональные данные в соответствии с требованиями законодательства РФ
            </p>
            <div className="mt-4 text-sm text-gray-500">
              Последнее обновление: 20 декабря 2024 года
            </div>
          </div>
        </div>
      </div>

      {/* Principles */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Принципы обработки персональных данных</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Мы руководствуемся следующими принципами при обработке персональных данных
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {principles.map((principle, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={principle.icon} size={32} className="text-primary" />
                </div>
                <CardTitle className="text-lg">{principle.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">{principle.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Policy Content */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {sections.map((section, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-xl">{section.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {section.content.map((paragraph, paragraphIndex) => (
                      <p key={paragraphIndex} className="text-gray-700 leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Управление персональными данными</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Вы можете в любое время воспользоваться своими правами в отношении персональных данных
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon name="Eye" size={32} className="text-primary mx-auto mb-3" />
                <CardTitle className="text-lg">Запросить данные</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Получить копию всех персональных данных, которые мы о вас храним
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon name="Edit" size={32} className="text-primary mx-auto mb-3" />
                <CardTitle className="text-lg">Исправить данные</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Обновить или исправить неточные персональные данные
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon name="Trash2" size={32} className="text-primary mx-auto mb-3" />
                <CardTitle className="text-lg">Удалить данные</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Запросить удаление ваших персональных данных из наших систем
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon name="Ban" size={32} className="text-primary mx-auto mb-3" />
                <CardTitle className="text-lg">Отозвать согласие</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Отозвать согласие на обработку персональных данных
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Contact for Privacy */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Вопросы по конфиденциальности?</h2>
            <p className="text-gray-600 mb-8">
              Если у вас есть вопросы о том, как мы обрабатываем ваши персональные данные, 
              или вы хотите воспользоваться своими правами, свяжитесь с нами
            </p>
            
            <Card>
              <CardContent className="p-8">
                <div className="space-y-4">
                  <div className="flex items-center justify-center space-x-3">
                    <Icon name="Mail" size={20} className="text-primary" />
                    <span className="font-semibold">privacy@itcompany.ru</span>
                  </div>
                  <div className="flex items-center justify-center space-x-3">
                    <Icon name="Phone" size={20} className="text-primary" />
                    <span className="font-semibold">+7 (495) 123-45-67</span>
                  </div>
                  <div className="flex items-start justify-center space-x-3">
                    <Icon name="MapPin" size={20} className="text-primary mt-1" />
                    <div className="text-center">
                      <div className="font-semibold">Ответственный за обработку ПД:</div>
                      <div>Петров Алексей Владимирович</div>
                      <div className="text-sm text-gray-600 mt-1">
                        125009, г. Москва, ул. Тверская, д. 1, офис 100
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-blue-800">
                    <Icon name="Info" size={16} className="inline mr-2" />
                    Мы обязуемся рассмотреть ваше обращение в течение 30 дней 
                    с момента получения и предоставить исчерпывающий ответ
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Legal Notice */}
      <div className="bg-primary text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">
            Настоящая Политика конфиденциальности составлена в соответствии с требованиями 
            Федерального закона от 27.07.2006 № 152-ФЗ "О персональных данных" 
            и вступает в силу с момента размещения на сайте
          </p>
        </div>
      </div>
    </div>
  );
}