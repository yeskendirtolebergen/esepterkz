/* Presentation localization. Stored data, form values and scoring identifiers remain canonical. */
(() => {
const rows = `
Enter your username and password to continue.|Введите логин и пароль для входа.|Кіру үшін логин мен құпиясөзді енгізіңіз.
Username|Логин|Логин
Password|Пароль|Құпиясөз
Enter your username|Введите логин|Логинді енгізіңіз
Enter your password|Введите пароль|Құпиясөзді енгізіңіз
Show|Показать|Көрсету
Hide|Скрыть|Жасыру
Show password|Показать пароль|Құпиясөзді көрсету
Hide password|Скрыть пароль|Құпиясөзді жасыру
New to Esepter?|Ещё нет аккаунта?|Әлі аккаунтыңыз жоқ па?
Request an account. Your school administrator assigns access.|Подайте заявку на регистрацию. Доступ выдаёт администратор вашей школы.|Тіркелуге өтінім беріңіз. Кіру рұқсатын мектебіңіздің әкімшісі береді.
Register|Зарегистрироваться|Тіркелу
Demo access|Доступ к демоверсии|Демоға кіру
Use student, teacher, or admin as the username. Demo password: Esepter2026!|Логин: student, teacher или admin. Пароль демоверсии: Esepter2026!|Логин: student, teacher немесе admin. Демо құпиясөзі: Esepter2026!
This is a local preview. Production sign-in requires a backend.|Это локальная демоверсия. Для настоящей авторизации нужен сервер.|Бұл жергілікті демо. Толық авторизация үшін сервер қажет.
Incorrect username or password.|Неверный логин или пароль.|Логин немесе құпиясөз қате.
Request registration|Заявка на регистрацию|Тіркелуге өтінім
Choose your school|Выберите школу|Мектебіңізді таңдаңыз
Demo: the request is saved in this browser only and is not sent to a school.|Демоверсия: заявка сохраняется только в этом браузере и не отправляется в школу.|Демо: өтінім тек осы браузерде сақталады және мектепке жіберілмейді.
Save registration request|Сохранить заявку|Өтінімді сақтау
Request saved|Заявка сохранена|Өтінім сақталды
Your registration request is saved in this browser. In the live platform, the school administrator will review it and provide login details.|Заявка сохранена в этом браузере. На рабочей платформе администратор школы рассмотрит её и выдаст данные для входа.|Өтінім осы браузерде сақталды. Жұмыс істейтін платформада мектеп әкімшісі оны қарап, кіру деректерін береді.
Back to login|Вернуться ко входу|Кіруге оралу

Overview|Обзор|Шолу
My topics|Мои темы|Менің тақырыптарым
My results|Мои результаты|Менің нәтижелерім
Achievements|Достижения|Жетістіктер
Students|Ученики|Оқушылар
Teachers|Учителя|Мұғалімдер
Topics|Темы|Тақырыптар
Question bank|Банк заданий|Тапсырмалар банкі
Analytics|Аналитика|Талдау
Schools|Школы|Мектептер
Users & roles|Пользователи и роли|Пайдаланушылар мен рөлдер
Monitoring|Мониторинг|Мониторинг
Topic exam|Тест по теме|Тақырыптық тест
Settings|Настройки|Баптаулар
Exam result|Результат теста|Тест нәтижесі
Workspace|Личный кабинет|Жеке кабинет
Student workspace|Кабинет ученика|Оқушы кабинеті
Teacher workspace|Кабинет учителя|Мұғалім кабинеті
Admin workspace|Кабинет администратора|Әкімші кабинеті
Student|Ученик|Оқушы
Teacher|Учитель|Мұғалім
Admin|Администратор|Әкімші
student|Ученик|Оқушы
teacher|Учитель|Мұғалім
admin|Администратор|Әкімші
Demo|Демо|Демо
All schools|Все школы|Барлық мектептер
All assigned schools|Все назначенные школы|Барлық бекітілген мектептер
Your assigned schools only|Только назначенные вам школы|Тек сізге бекітілген мектептер
Nazarbayev Intellectual|Назарбаев Интеллектуальная|Назарбаев Зияткерлік
Nazarbayev Intellectual School|Назарбаев Интеллектуальная школа|Назарбаев Зияткерлік мектебі
School № 125|Школа № 125|№ 125 мектеп
Bilim Innovation Lyceum|Лицей «Білім-Инновация»|«Білім-Инновация» лицейі
Almaty|Алматы|Алматы
Astana|Астана|Астана
Shymkent|Шымкент|Шымкент
Kazakhstan|Казахстан|Қазақстан
Grade 8|8 класс|8-сынып
Grade 8 · Almaty|8 класс · Алматы|8-сынып · Алматы
2 assigned schools|2 назначенные школы|2 бекітілген мектеп
Platform administration|Управление платформой|Платформаны басқару
LEARNING SPACE|УЧЕБНЫЙ КАБИНЕТ|ОҚУ КАБИНЕТІ
WORKSPACE|РАБОЧИЙ КАБИНЕТ|ЖҰМЫС КАБИНЕТІ
A little help goes a long way|Помощь всегда рядом|Көмек әрдайым жақын
Find your way around your math learning space.|Узнайте, как пользоваться учебным кабинетом.|Оқу кабинетін қалай пайдалану керегін біліңіз.
Visit help center|Открыть справку|Анықтаманы ашу
Switch account|Сменить аккаунт|Аккаунтты ауыстыру
Open navigation|Открыть меню|Мәзірді ашу
Search anything|Поиск по платформе|Платформадан іздеу
Preview role|Роль для просмотра|Көру рөлі
Notifications|Уведомления|Хабарландырулар
Your profile|Ваш профиль|Профиліңіз
Esepter home|Главная Esepter|Esepter басты беті
© 2026 Esepter.kz. Every step counts.|© 2026 Esepter.kz. Важен каждый шаг.|© 2026 Esepter.kz. Әр қадам маңызды.
Interactive preview · Sample school data|Интерактивное демо · Пример данных школы|Интерактивті демо · Мектеп деректерінің үлгісі
Monday, 12 October 2026|Понедельник, 12 октября 2026|Дүйсенбі, 12 қазан 2026
A little progress, every day|Каждый день — шаг вперёд|Күн сайын бір қадам алға
YOUR NEXT CHAPTER|ВАША СЛЕДУЮЩАЯ ТЕМА|КЕЛЕСІ ТАҚЫРЫБЫҢЫЗ
Let’s make the|Превратим неизвестное|Белгісізді
unknown, known.|в понятное.|бірге танып білейік.
Look how far|Посмотрите, сколько|Қаншама белесті
you’ve come.|вы уже прошли.|бағындырдыңыз.
You’ve completed every topic. Revisit an exam to keep your skills sharp.|Вы прошли все темы. Повторите тест, чтобы закрепить знания.|Барлық тақырыпты аяқтадыңыз. Біліміңізді бекіту үшін тестті қайта өтіңіз.
Resume learning|Продолжить занятие|Оқуды жалғастыру
Continue learning|Продолжить обучение|Оқуды жалғастыру
Practice again|Повторить тест|Тестті қайта өту
one step closer|ещё на шаг ближе|тағы бір қадам жақын
Topics completed|Тем пройдено|Аяқталған тақырыптар
Keep going|Продолжайте|Жалғастырыңыз
· You’re making progress|· Вы движетесь вперёд|· Ілгерілеп келесіз
Average score|Средний балл|Орташа балл
Nice work|Отличная работа|Жарайсыз
· Across your attempts|· По всем попыткам|· Барлық талпыныс бойынша
Questions answered|Ответов на вопросы|Берілген жауаптар
Every question builds confidence|Каждый вопрос укрепляет знания|Әр сұрақ біліміңізді нығайтады
Your learning path|Ваш учебный маршрут|Оқу жолыңыз
View all topics|Все темы|Барлық тақырыптар
Recent activity|Последние результаты|Соңғы нәтижелер
All results|Все результаты|Барлық нәтижелер
A little every day|Понемногу каждый день|Күн сайын аз-аздан
3 days|3 дня|3 күн
You showed up. That’s what matters.|Вы продолжаете учиться. Это главное.|Оқуды жалғастырып жүрсіз. Ең маңыздысы — осы.
Make today another good day.|Сделайте сегодня ещё один шаг.|Бүгін де бір қадам жасаңыз.
Your topic journey|Ваш прогресс по темам|Тақырыптар бойынша ілгерілеу
TOPICS|ТЕМЫ|ТАҚЫРЫПТАР
One step at a time|Шаг за шагом|Қадам сайын
A SMALL REMINDER|НЕБОЛЬШОЕ НАПОМИНАНИЕ|ШАҒЫН ЕСКЕРТУ
“Mistakes are proof|«Ошибки — признак того,|«Қателесу —
that you’re trying.”|что вы стараетесь».|талпыныстың белгісі».
Take your time. Read it again.|Не спешите. Прочитайте ещё раз.|Асықпаңыз. Қайта оқып шығыңыз.
You’re learning with every answer.|Каждый ответ помогает учиться.|Әр жауап арқылы үйренесіз.
Your latest milestone|Последнее достижение|Соңғы жетістігіңіз
Foundation builder|Крепкий фундамент|Берік негіз
Completed your first two topics|Пройдены первые две темы|Алғашқы екі тақырып аяқталды
Completed|Пройдено|Аяқталды
In progress|В процессе|Орындалуда
Locked|Недоступно|Әзірге жабық
Topic passed|Тема пройдена|Тақырып аяқталды
Your next milestone|Следующая цель|Келесі мақсатыңыз
Coming up next|Впереди по программе|Алдағы тақырып
70 points to pass|70 баллов для прохождения|Өту үшін 70 балл
Complete the previous topic|Пройдите предыдущую тему|Алдыңғы тақырыпты аяқтаңыз
Topic|Тема|Тақырып
Date|Дата|Күні
Score|Балл|Балл
Result|Результат|Нәтиже
Passed|Пройдено|Сәтті өтті
Keep practicing|Нужна практика|Жаттығуды жалғастырыңыз
No results yet. Your first exam is a good place to start.|Результатов пока нет. Начните с первого теста.|Әзірге нәтиже жоқ. Алғашқы тесттен бастаңыз.
One topic at a time. A stronger foundation with every step.|Одна тема за другой. С каждым шагом знания крепче.|Бір тақырыптан келесісіне. Әр қадам біліміңізді нығайтады.
All topics|Все темы|Барлық тақырыптар
Search topics…|Найти тему…|Тақырыпты іздеу…
Search topics|Поиск тем|Тақырыптарды іздеу
No topics found|Темы не найдены|Тақырыптар табылмады
Try a different search or filter.|Измените запрос или фильтр.|Сұрауды не сүзгіні өзгертіңіз.
Filter by school|Фильтр по школе|Мектеп бойынша сүзу
Numbers & operations|Числа и действия|Сандар және амалдар
Fractions & decimals|Обыкновенные и десятичные дроби|Жай және ондық бөлшектер
Linear equations|Линейные уравнения|Сызықтық теңдеулер
Ratios & proportions|Отношения и пропорции|Қатынастар мен пропорциялар
Powers & roots|Степени и корни|Дәрежелер мен түбірлер
Geometry basics|Основы геометрии|Геометрия негіздері
Area & volume|Площадь и объём|Аудан және көлем
Statistics & probability|Статистика и вероятность|Статистика және ықтималдық
Build a strong foundation|Заложите прочную основу|Берік негіз қалаңыз
Make every part count|Разберитесь в частях целого|Бүтіннің бөліктерін түсініңіз
Find the missing piece|Найдите неизвестное|Белгісізді табыңыз
Discover the connections|Найдите взаимосвязи|Байланыстарды анықтаңыз
A new way to grow|Откройте новые возможности|Жаңа мүмкіндіктерді ашыңыз
Think in shapes and space|Изучайте фигуры и пространство|Пішіндер мен кеңістікті зерттеңіз
Measure your world|Измеряйте окружающий мир|Айналаңызды өлшеңіз
Find meaning in numbers|Увидьте смысл в числах|Сандардың мәнін түсініңіз
Archived topic|Архивная тема|Мұрағаттағы тақырып
School|Школа|Мектеп
A clear view of your schools, learners, and their next steps.|Всё о школах, учениках и их прогрессе в одном месте.|Мектептер, оқушылар және олардың ілгерілеуі бір жерде.
Help every student move one step forward.|Помогите каждому ученику сделать шаг вперёд.|Әр оқушыға алға қадам жасауға көмектесіңіз.
Create user|Создать пользователя|Пайдаланушы қосу
Create topic|Создать тему|Тақырып қосу
Sample pilot overview|Пример обзора пилотного проекта|Пилоттық жоба шолуының үлгісі
Students in view|Учеников в выборке|Таңдаудағы оқушылар
Active student profiles in this preview|Активные профили в демоверсии|Демодағы белсенді профильдер
Across students in selected schools|По ученикам выбранных школ|Таңдалған мектептердің оқушылары бойынша
Published topics|Опубликованные темы|Жарияланған тақырыптар
Connected to the platform|Подключены к платформе|Платформаға қосылған
Available in your assigned schools|Доступны в назначенных вам школах|Сізге бекітілген мектептерде қолжетімді
Learning activity|Учебная активность|Оқу белсенділігі
Last 7 days|За 7 дней|Соңғы 7 күн
Completed exam attempts · sample pilot data|Завершённые тесты · демонстрационные данные|Аяқталған тесттер · үлгі деректер
Students who need a hand|Кому нужна поддержка|Қолдау қажет оқушылар
A little support can make a big difference.|Небольшая помощь может многое изменить.|Аз ғана көмек көп нәрсені өзгерте алады.
Everyone in this view is progressing well.|Все ученики в этой выборке успешно продвигаются.|Осы таңдаудағы барлық оқушы жақсы ілгерілеп келеді.
Student progress|Прогресс учеников|Оқушылардың ілгерілеуі
View all|Показать всех|Барлығын көру
Name|Имя|Аты-жөні
Role|Роль|Рөл
Progress|Прогресс|Ілгерілеу
Status|Статус|Күйі
Active|Активен|Белсенді
No matching students or users.|Подходящие пользователи не найдены.|Сәйкес пайдаланушылар табылмады.
People make progress possible|Люди, которые помогают учиться|Оқуға көмектесетін адамдар
Every student, a different journey|У каждого ученика свой путь|Әр оқушының өз жолы бар
Manage accounts, school assignments, and roles.|Управляйте аккаунтами, ролями и привязкой к школам.|Аккаунттарды, рөлдерді және мектепке бекітуді басқарыңыз.
See how your students are doing and where they need support.|Следите за успехами учеников и помогайте там, где нужно.|Оқушылардың жетістіктерін бақылап, қажет кезде көмектесіңіз.
Search by name or email…|Поиск по имени или почте…|Аты-жөні не пошта бойынша іздеу…
Search users|Поиск пользователей|Пайдаланушыларды іздеу
Filter role|Фильтр по роли|Рөл бойынша сүзу
All roles|Все роли|Барлық рөлдер
A clear path to understanding|Понятный путь к знаниям|Білімге апарар түсінікті жол
Organize topics and give every school a structured learning journey.|Упорядочьте темы и создайте учебный маршрут для каждой школы.|Тақырыптарды реттеп, әр мектепке оқу жолын жасаңыз.
Questions|Задания|Тапсырмалар
Actions|Действия|Әрекеттер
Published|Опубликовано|Жарияланды
Edit topic|Редактировать тему|Тақырыпты өңдеу
View questions|Открыть задания|Тапсырмаларды ашу
No topics match your search.|По вашему запросу темы не найдены.|Сұрауыңызға сәйкес тақырыптар табылмады.
Topics follow the order shown within each school. Students unlock the next topic at 70 points.|В каждой школе темы идут в указанном порядке. Следующая тема открывается при достижении 70 баллов.|Әр мектепте тақырыптар көрсетілген ретпен өтеді. Келесі тақырып 70 балл жинағанда ашылады.
Good questions open new doors|Хорошие задания открывают новые возможности|Жақсы тапсырмалар жаңа мүмкіндіктер ашады
Create and manage your school’s mathematics question bank.|Создавайте и редактируйте задания по математике для вашей школы.|Мектебіңіздің математика тапсырмаларын жасаңыз және өңдеңіз.
Add question|Добавить задание|Тапсырма қосу
Search questions or topics…|Поиск заданий или тем…|Тапсырма не тақырып іздеу…
Search questions|Поиск заданий|Тапсырмаларды іздеу
Filter difficulty|Фильтр по сложности|Қиындық бойынша сүзу
All difficulties|Любая сложность|Барлық деңгейлер
Question|Вопрос|Сұрақ
Difficulty|Сложность|Қиындық деңгейі
Mode|Тип ответа|Жауап түрі
Easy|Лёгкий|Жеңіл
Medium|Средний|Орташа
Hard|Сложный|Күрделі
Numeric|Числовой ответ|Сандық жауап
Multiple choice|Выбор ответа|Жауапты таңдау
Edit question|Редактировать задание|Тапсырманы өңдеу
Delete question|Удалить задание|Тапсырманы жою
No questions found. Add one to get started.|Заданий пока нет. Добавьте первое.|Әзірге тапсырма жоқ. Алғашқысын қосыңыз.
Connected schools, shared progress|Школы вместе — прогресс для всех|Мектептер бірге — ортақ ілгерілеу
Give every school a place to help its students grow.|Создайте для каждой школы пространство для развития учеников.|Әр мектепке оқушыларды дамытуға арналған орта жасаңыз.
Add school|Добавить школу|Мектеп қосу
Search schools or cities…|Поиск школ или городов…|Мектеп не қала іздеу…
Search schools|Поиск школ|Мектептерді іздеу
View school|Открыть школу|Мектепті ашу
Small steps. Visible progress.|Небольшие шаги. Заметный прогресс.|Шағын қадамдар. Айқын ілгерілеу.
Understand how students are learning across your schools.|Следите за обучением учеников во всех ваших школах.|Мектептеріңіздегі оқушылардың оқу барысын бақылаңыз.
Student averages in this selection|Средние баллы учеников в выборке|Таңдаудағы оқушылардың орташа балдары
Above passing level|Выше проходного балла|Өту балынан жоғары
Students with an average of 70 or more|Ученики со средним баллом от 70|Орташа балы 70-тен төмен емес оқушылар
Across selected student profiles|По выбранным профилям учеников|Таңдалған оқушы профильдері бойынша
Average score by student|Средний балл по ученикам|Оқушылардың орташа балы
Select a school to focus your view|Выберите школу для подробного просмотра|Толығырақ көру үшін мектепті таңдаңыз
Topic completion|Прохождение тем|Тақырыптарды аяқтау
Sample curriculum performance|Пример показателей учебной программы|Оқу бағдарламасы көрсеткіштерінің үлгісі
See how far you’ve come|Посмотрите на свой прогресс|Өз ілгерілеуіңізді көріңіз
Every attempt tells a story. Keep building on what you know.|Каждая попытка — новый опыт. Опирайтесь на то, что уже знаете.|Әр талпыныс — жаңа тәжірибе. Білгеніңізді одан әрі дамытыңыз.
All attempts|Все попытки|Барлық талпыныстар
Practice|Практика|Жаттығу
Search results…|Поиск результатов…|Нәтижелерді іздеу…
Search results|Поиск результатов|Нәтижелерді іздеу
First step|Первый шаг|Алғашқы қадам
Complete your first topic|Пройдите первую тему|Алғашқы тақырыпты аяқтаңыз
Complete two topics|Пройдите две темы|Екі тақырыпты аяқтаңыз
High achiever|Высокий результат|Жоғары нәтиже
Earn 90 or more points|Наберите не менее 90 баллов|Кемінде 90 балл жинаңыз
Halfway there|Половина пути|Жолдың жартысы
Complete four topics|Пройдите четыре темы|Төрт тақырыпты аяқтаңыз
Math explorer|Исследователь математики|Математиканы зерттеуші
Answer 100 questions|Ответьте на 100 вопросов|100 сұраққа жауап беріңіз
Full circle|Весь путь пройден|Барлық жолдан өттіңіз
Complete your learning path|Пройдите весь учебный маршрут|Оқу жолын толық аяқтаңыз
Milestones worth celebrating|Достижения, которыми стоит гордиться|Мақтануға тұрарлық жетістіктер
You earn these by showing up, trying, and learning.|Учитесь, пробуйте и открывайте новые достижения.|Оқып, талпынып, жаңа жетістіктерге жетіңіз.
Earned|Получено|Қол жеткізілді
Make yourself at home|Настройте свой кабинет|Кабинетіңізді баптаңыз
Your profile and learning preferences.|Ваш профиль и настройки обучения.|Профиліңіз және оқу баптаулары.
Full name|Имя и фамилия|Аты-жөні
Email address|Электронная почта|Электрондық пошта
Save profile|Сохранить профиль|Профильді сақтау
This is a sample staff profile. Admins can edit users in Users & roles.|Это демонстрационный профиль сотрудника. Администратор может изменить его в разделе «Пользователи и роли».|Бұл — қызметкер профилінің үлгісі. Әкімші оны «Пайдаланушылар мен рөлдер» бөлімінде өңдей алады.
Preferences|Предпочтения|Қалаулар
Learning reminders|Напоминания об обучении|Оқу туралы еске салулар
Show a reminder in the notifications panel.|Показывать напоминания в панели уведомлений.|Хабарландырулар панелінде еске салуларды көрсету.
Preview data|Демонстрационные данные|Демо деректер
Restore the original sample users, topics, and progress.|Восстановить исходные примеры пользователей, тем и прогресса.|Бастапқы пайдаланушы, тақырып және ілгерілеу үлгілерін қалпына келтіру.
Reset demo|Сбросить демо|Демоны қалпына келтіру
Changes in this preview stay in this browser. School accounts and shared data require a connected backend.|Изменения в демоверсии сохраняются в этом браузере. Для школьных аккаунтов и общих данных нужен сервер.|Демодағы өзгерістер осы браузерде сақталады. Мектеп аккаунттары мен ортақ деректер үшін сервер қажет.
Complete your current topic to unlock this one.|Пройдите текущую тему, чтобы открыть следующую.|Келесі тақырыпты ашу үшін ағымдағысын аяқтаңыз.
Start a new attempt?|Начать новую попытку?|Жаңа талпынысты бастау керек пе?
Resume current|Продолжить текущую|Ағымдағысын жалғастыру
Start new|Начать заново|Қайта бастау
Your next step is waiting|Следующий шаг уже ждёт|Келесі қадам сізді күтеді
Choose an unlocked topic to start an exam.|Выберите доступную тему, чтобы начать тест.|Тестті бастау үшін ашық тақырыпты таңдаңыз.
Explore topics|Открыть темы|Тақырыптарды ашу
Take your time. Every question is another step forward.|Не спешите. Каждый вопрос — ещё один шаг вперёд.|Асықпаңыз. Әр сұрақ — алға жасалған тағы бір қадам.
Exit exam|Выйти из теста|Тесттен шығу
/ 100 points|/ 100 баллов|/ 100 балл
TYPE YOUR ANSWER|ВВЕДИТЕ ОТВЕТ|ЖАУАБЫҢЫЗДЫ ЕНГІЗІҢІЗ
CHOOSE ONE ANSWER|ВЫБЕРИТЕ ОДИН ОТВЕТ|БІР ЖАУАПТЫ ТАҢДАҢЫЗ
Your numeric answer|Ваш числовой ответ|Сандық жауабыңыз
Enter your answer|Введите ответ|Жауабыңызды енгізіңіз
That’s right. Well done!|Верно. Отличная работа!|Дұрыс. Жарайсыз!
A good chance to learn.|Разберёмся вместе.|Бірге талдап көрейік.
Your progress saves automatically|Прогресс сохраняется автоматически|Ілгерілеу автоматты түрде сақталады
Finish|Завершить|Аяқтау
See result|Посмотреть результат|Нәтижені көру
Next question|Следующий вопрос|Келесі сұрақ
Check answer|Проверить ответ|Жауапты тексеру
No time limit|Без ограничения времени|Уақыт шектеусіз
One question at a time|Один вопрос за раз|Бір уақытта бір сұрақ
BEST SCORE / 100|ЛУЧШИЙ БАЛЛ / 100|ЕҢ ЖОҒАРЫ БАЛЛ / 100
One more milestone, yours.|Ещё одно достижение — ваше.|Тағы бір жетістікке жеттіңіз.
Every attempt moves you forward.|Каждая попытка приближает к цели.|Әр талпыныс мақсатқа жақындатады.
You passed this topic. Your progress is saved, and the next topic is ready when you are.|Вы прошли эту тему. Прогресс сохранён, следующая тема уже доступна.|Осы тақырыптан өттіңіз. Ілгерілеу сақталды, келесі тақырып ашық.
You haven’t reached 70 points yet. Review what you learned and give it another try.|Пока не удалось набрать 70 баллов. Повторите материал и попробуйте ещё раз.|Әзірге 70 балл жиналмады. Материалды қайталап, тағы бір рет көріңіз.
View results|Посмотреть результаты|Нәтижелерді көру
Try again|Попробовать снова|Қайта көру
Log in|Войти|Кіру
Explore the platform|Открыть платформу|Платформаны ашу
A clearer path to|Понятный путь|Математиканы
confidence in math.|к уверенности в математике.|сенімді меңгеру жолы.
A thoughtful learning space for students, teachers, and schools. Build understanding one question, one topic, one small victory at a time.|Удобная учебная среда для учеников, учителей и школ. Новые знания — через вопросы, темы и маленькие победы.|Оқушыларға, мұғалімдерге және мектептерге арналған жайлы оқу ортасы. Әр сұрақ, әр тақырып, әр шағын жеңіс арқылы білімді нығайтыңыз.
Find your next step|Выбрать следующий шаг|Келесі қадамды таңдау
Learn at your pace|Учитесь в своём темпе|Өз қарқыныңызбен оқыңыз
Follow a clear topic path. Questions adapt as your confidence and score grow.|Двигайтесь по понятному маршруту. Сложность заданий меняется вместе с вашим результатом.|Түсінікті оқу жолымен жүріңіз. Тапсырмалардың қиындығы нәтижеңізге қарай өзгереді.
See every student|Внимание каждому ученику|Әр оқушыға көңіл бөлу
Understand progress, spot the places that need support, and help learning move forward.|Следите за прогрессом, замечайте трудности и помогайте ученикам двигаться вперёд.|Ілгерілеуді бақылап, қиындықтарды анықтаңыз және оқушыларға алға жылжуға көмектесіңіз.
Bring your school together|Объедините вашу школу|Мектебіңізді біріктіріңіз
Manage users, organize mathematics content, and follow progress in one shared space.|Управляйте пользователями, материалами по математике и прогрессом в одном пространстве.|Пайдаланушыларды, математика материалдарын және ілгерілеуді бір ортада басқарыңыз.
Esepter.kz · Built for the next step|Esepter.kz · Для следующего шага|Esepter.kz · Келесі қадам үшін
EVERY STEP COUNTS|ВАЖЕН КАЖДЫЙ ШАГ|ӘР ҚАДАМ МАҢЫЗДЫ
Big understanding.|Большие знания.|Үлкен білім.
Small beginnings.|Маленькие шаги.|Шағын қадамдар.
A welcoming space to learn, make mistakes, and discover what you’re capable of.|Пространство, где можно учиться, ошибаться и открывать свои возможности.|Үйренуге, қателесуге және өз мүмкіндіктеріңізді ашуға болатын орта.
Welcome to your space.|Добро пожаловать в ваш кабинет.|Кабинетіңізге қош келдіңіз.
Choose a demo account to explore the platform.|Выберите демонстрационный аккаунт для знакомства с платформой.|Платформамен танысу үшін демо аккаунтты таңдаңыз.
Your role|Ваша роль|Рөліңіз
Enter workspace|Войти в кабинет|Кабинетке кіру
This interactive preview uses sample accounts and browser storage. No password is needed. Use the Demo selector to switch between roles.|В демоверсии используются тестовые аккаунты и хранилище браузера. Пароль не нужен. Переключайте роли в меню «Демо».|Демода үлгі аккаунттар мен браузер жады қолданылады. Құпиясөз қажет емес. Рөлдерді «Демо» мәзірінен ауыстырыңыз.
Back to Esepter|На главную Esepter|Esepter басты бетіне
Math for every next step|Математика для каждого шага|Әр қадамға арналған математика
Welcome back|С возвращением|Қайта оралуыңызбен
Your topic exam|Ваш тест по теме|Тақырыптық тестіңіз
Your learning space|Ваш учебный кабинет|Оқу кабинетіңіз
Close dialog|Закрыть окно|Терезені жабу
Save changes|Сохранить изменения|Өзгерістерді сақтау
Cancel|Отмена|Бас тарту
Create a new topic|Создать новую тему|Жаңа тақырып қосу
Topic name|Название темы|Тақырып атауы
Short description|Краткое описание|Қысқаша сипаттама
Topic symbol|Символ темы|Тақырып белгісі
New topics appear at the end of the school’s learning path. Students unlock them by passing the previous topic.|Новые темы добавляются в конец учебного маршрута школы. Ученики открывают их после прохождения предыдущей темы.|Жаңа тақырыптар мектептің оқу жолының соңына қосылады. Оқушылар оларды алдыңғы тақырыпты аяқтағаннан кейін ашады.
Save topic|Сохранить тему|Тақырыпты сақтау
Add a question|Добавить задание|Тапсырма қосу
Answer mode|Тип ответа|Жауап түрі
Correct numeric answer|Правильный числовой ответ|Дұрыс сандық жауап
Four options for multiple choice|Четыре варианта ответа|Төрт жауап нұсқасы
Example: 4, 6, 8, 10|Например: 4, 6, 8, 10|Мысалы: 4, 6, 8, 10
Separate four distinct numbers with commas and include the correct answer.|Укажите четыре разных числа через запятую, включая правильный ответ.|Дұрыс жауапты қоса, төрт түрлі санды үтірмен бөліп жазыңыз.
Save question|Сохранить задание|Тапсырманы сақтау
Edit user|Редактировать пользователя|Пайдаланушыны өңдеу
Create a user|Создать пользователя|Пайдаланушы қосу
Email / username|Почта / логин|Пошта / логин
School assignments|Привязка к школам|Мектептерге бекіту
Students need exactly one school. Teachers may have several. Admins have platform-wide access.|Ученику нужна ровно одна школа. Учитель может работать в нескольких. Администратор имеет доступ ко всей платформе.|Оқушы тек бір мектепке бекітіледі. Мұғалім бірнеше мектепте жұмыс істей алады. Әкімші бүкіл платформаға қол жеткізе алады.
This creates a sample account in this browser. Production credentials require a backend.|Будет создан тестовый аккаунт в этом браузере. Для настоящих учётных данных нужен сервер.|Осы браузерде үлгі аккаунт жасалады. Нақты тіркелу деректері үшін сервер қажет.
Save user|Сохранить пользователя|Пайдаланушыны сақтау
Ready to learn|Можно начинать|Бастауға дайын
Start learning|Начать обучение|Оқуды бастау
Complete|Пройдите|Аяқтаңыз:
the previous topic|предыдущую тему|алдыңғы тақырыпты
to continue along your learning path.|, чтобы продолжить обучение.|. Содан кейін оқуды жалғастыра аласыз.
Take a breather?|Сделать перерыв?|Үзіліс жасайсыз ба?
Your current attempt is saved automatically. You can come back to it, or finish now and record your result.|Текущая попытка сохраняется автоматически. Можно вернуться позже или завершить её и записать результат.|Ағымдағы талпыныс автоматты түрде сақталады. Оған кейін оралуға немесе қазір аяқтап, нәтижені тіркеуге болады.
Save & leave|Сохранить и выйти|Сақтап шығу
Finish attempt|Завершить попытку|Талпынысты аяқтау
Delete this question?|Удалить это задание?|Осы тапсырманы жою керек пе?
This removes the question from your local question bank. Existing exam results stay in your history.|Задание будет удалено из локального банка. Сохранённые результаты тестов останутся в истории.|Тапсырма жергілікті банктен жойылады. Сақталған тест нәтижелері тарихта қалады.
Question removed.|Задание удалено.|Тапсырма жойылды.
Add a school|Добавить школу|Мектеп қосу
School name|Название школы|Мектеп атауы
City|Город|Қала
After creating the school, assign teachers and students in Users & roles.|После создания школы добавьте учителей и учеников в разделе «Пользователи и роли».|Мектепті қосқаннан кейін «Пайдаланушылар мен рөлдер» бөлімінде мұғалімдер мен оқушыларды бекітіңіз.
Create school|Создать школу|Мектеп қосу
Student roster|Количество учеников|Оқушылар саны
Sample school total|Демонстрационный показатель школы|Мектеп көрсеткішінің үлгісі
View users|Открыть пользователей|Пайдаланушыларды көру
Sample student performance|Пример результатов ученика|Оқушы нәтижелерінің үлгісі
Topics passed|Тем пройдено|Аяқталған тақырыптар
Current learning progress|Текущий прогресс обучения|Қазіргі оқу ілгерілеуі
A little support with foundational topics could help this student progress.|Помощь с базовыми темами может улучшить прогресс этого ученика.|Негізгі тақырыптар бойынша көмек осы оқушының ілгерілеуіне ықпал етуі мүмкін.
This student is building a strong foundation. Encourage regular practice.|Ученик укрепляет базовые знания. Поощряйте регулярную практику.|Оқушы негізгі білімін нығайтып келеді. Тұрақты жаттығуға ынталандырыңыз.
Teacher access includes content management and progress monitoring for assigned schools.|Учитель управляет материалами и отслеживает прогресс в назначенных школах.|Мұғалім бекітілген мектептердегі материалдарды басқарып, ілгерілеуді бақылайды.
Edit account|Редактировать аккаунт|Аккаунтты өңдеу
Practice attempt|Тренировочная попытка|Жаттығу талпынысы
/ 100 best score|/ 100 — лучший балл|/ 100 — ең жоғары балл
Your answer|Ваш ответ|Жауабыңыз
Points|Баллы|Балдар
This sample result demonstrates how completed attempts appear. Your own attempts include a full answer history.|Это пример завершённого теста. Ваши попытки содержат полную историю ответов.|Бұл — аяқталған тест нәтижесінің үлгісі. Өз талпыныстарыңызда жауаптардың толық тарихы болады.
Reset the preview?|Сбросить демоверсию?|Демоны қалпына келтіру керек пе?
This restores the original sample data and removes your locally added users, content, and exam attempts.|Будут восстановлены исходные данные. Добавленные вами пользователи, материалы и попытки в этом браузере будут удалены.|Бастапқы үлгі деректер қалпына келеді. Осы браузерде қосқан пайдаланушылар, материалдар мен талпыныстар жойылады.
Keep my changes|Оставить изменения|Өзгерістерді қалдыру
Reset preview|Сбросить демо|Демоны қалпына келтіру
Sample data restored.|Демонстрационные данные восстановлены.|Демо деректер қалпына келтірілді.
Your updates|Ваши уведомления|Хабарландыруларыңыз
Welcome to your learning space|Добро пожаловать в учебный кабинет|Оқу кабинетіне қош келдіңіз
Your school’s topics and progress are ready to explore.|Темы вашей школы и результаты уже доступны.|Мектебіңіздің тақырыптары мен нәтижелері дайын.
A little practice goes a long way|Немного практики — большой шаг|Аз ғана жаттығу — үлкен қадам
Make time for your next topic whenever you’re ready.|Найдите время для следующей темы, когда будете готовы.|Дайын болғанда келесі тақырыпқа уақыт бөліңіз.
A little guidance|Краткая справка|Қысқаша анықтама
For students|Для учеников|Оқушыларға
Start an unlocked topic from your learning path. Correct answers earn points, incorrect answers subtract points. Reach 70 to pass and unlock the next topic. You can continue to 100.|Выберите доступную тему. За верные ответы начисляются баллы, за ошибки — вычитаются. Наберите 70 баллов, чтобы пройти тему и открыть следующую. Можно продолжить до 100.|Ашық тақырыпты таңдаңыз. Дұрыс жауапқа балл қосылады, қате жауапқа шегеріледі. Тақырыптан өтіп, келесісін ашу үшін 70 балл жинаңыз. 100 балға дейін жалғастыруға болады.
For teachers and admins|Для учителей и администраторов|Мұғалімдер мен әкімшілерге
Use Topics and Question bank to manage content. Filter student views by school. Admins can also create schools and manage user assignments.|Управляйте материалами в разделах «Темы» и «Банк заданий». Фильтруйте учеников по школам. Администраторы также добавляют школы и назначают пользователей.|Материалдарды «Тақырыптар» және «Тапсырмалар банкі» бөлімдерінде басқарыңыз. Оқушыларды мектеп бойынша сүзіңіз. Әкімшілер мектептерді қосып, пайдаланушыларды бекітеді.
About this preview|О демоверсии|Демо туралы
The Demo selector switches roles. Edits save in this browser. School sign-in, secure access control, and shared records need a backend.|Меню «Демо» переключает роли. Изменения сохраняются в браузере. Для входа в школьные аккаунты, защиты доступа и общих данных нужен сервер.|«Демо» мәзірі рөлдерді ауыстырады. Өзгерістер браузерде сақталады. Мектеп аккаунтына кіру, қолжетімділікті қорғау және ортақ деректер үшін сервер қажет.
Search topics and screens|Поиск тем и разделов|Тақырыптар мен бөлімдерді іздеу
Try equations, results, or settings…|Например: уравнения, результаты, настройки…|Мысалы: теңдеулер, нәтижелер, баптаулар…
Type to find a topic or workspace screen.|Введите запрос для поиска темы или раздела.|Тақырыпты не бөлімді табу үшін сұрау енгізіңіз.
No matches found.|Ничего не найдено.|Ештеңе табылмады.
Your profile is updated.|Профиль обновлён.|Профиль жаңартылды.
Topic saved.|Тема сохранена.|Тақырып сақталды.
Enter four distinct numeric options, including the correct answer.|Укажите четыре разных числовых варианта, включая правильный ответ.|Дұрыс жауапты қоса, төрт түрлі сандық нұсқаны енгізіңіз.
Question saved to the bank.|Задание сохранено в банке.|Тапсырма банкке сақталды.
School created. Add users to get started.|Школа создана. Добавьте пользователей.|Мектеп қосылды. Пайдаланушыларды қосыңыз.
Choose exactly one school for this student.|Выберите ровно одну школу для ученика.|Оқушы үшін тек бір мектепті таңдаңыз.
Choose at least one school for this teacher.|Выберите хотя бы одну школу для учителя.|Мұғалім үшін кемінде бір мектепті таңдаңыз.
This email is already assigned to a user.|Эта почта уже привязана к пользователю.|Бұл пошта басқа пайдаланушыға тіркелген.
User account saved.|Аккаунт пользователя сохранён.|Пайдаланушы аккаунты сақталды.
Browser storage is unavailable. Changes last for this session.|Хранилище браузера недоступно. Изменения сохранятся только до закрытия страницы.|Браузер жады қолжетімсіз. Өзгерістер бет жабылғанға дейін ғана сақталады.
Mon|Пн|Дс
Tue|Вт|Сс
Wed|Ср|Ср
Thu|Чт|Бс
Fri|Пт|Жм
Sat|Сб|Сб
Sun|Вс|Жс
Language|Язык|Тіл
Please fill out this field.|Заполните это поле.|Осы өрісті толтырыңыз.
Please enter a valid email address.|Введите корректный адрес электронной почты.|Дұрыс электрондық пошта мекенжайын енгізіңіз.
Please enter a valid number.|Введите корректное число.|Дұрыс сан енгізіңіз.
`;
const catalog = new Map(rows.trim().split('\n').map(row => {const [en,ru,kk]=row.split('|');return [en,{ru,kk}]}));
let language='ru';try{const saved=localStorage.getItem('esepter-language');if(['ru','kk','en'].includes(saved))language=saved}catch{}
const pick=(ru,kk)=>language==='kk'?kk:ru;
const num=n=>new Intl.NumberFormat(language==='kk'?'kk-KZ':language==='ru'?'ru-KZ':'en-GB',{maximumFractionDigits:8}).format(Number(n));
const simple=(s)=>catalog.get(s)?.[language]||s;
const rules=[
 [/^Welcome back, (.+)\. Ready to take your next step in math\?$/,(_,n)=>pick(`С возвращением, ${n}! Готовы к следующему шагу в математике?`,`${n}, қайта оралуыңызбен! Математикада келесі қадамға дайынсыз ба?`)],
 [/^Good morning, (.+)\.$/,(_,n)=>pick(`Доброе утро, ${n}.`,`Қайырлы таң, ${n}.`)],
 [/^Continue with (.+) and turn small steps into big understanding\.$/,(_,n)=>{const key=[...catalog.keys()].find(k=>k.toLowerCase()===n);return pick(`Продолжите тему «${simple(key||n)}» и укрепляйте знания шаг за шагом.`,`«${simple(key||n)}» тақырыбын жалғастырып, біліміңізді қадам сайын нығайтыңыз.`)}],
 [/^(\d+) more topics to complete your learning path\.$/,(_,n)=>pick(`До завершения маршрута осталось тем: ${n}.`,`Оқу жолын аяқтау үшін қалған тақырып саны: ${n}.`)],
 [/^(\d+) questions · (.+)$/,(_,n,s)=>pick(`Заданий: ${n} · ${simple(s)}`,`Тапсырма саны: ${n} · ${simple(s)}`)],
 [/^Best score: (.+)$/,(_,s)=>pick(`Лучший балл: ${s}`,`Ең жоғары балл: ${s}`)],
 [/^(\d+)\/100 average score$/,(_,n)=>pick(`Средний балл: ${n}/100`,`Орташа балл: ${n}/100`)],
 [/^(\d+) of (\d+) topics$/,(_,n,total)=>pick(`Тем пройдено: ${n} из ${total}`,`Аяқталған тақырып: ${n}/${total}`)],
 [/^Showing (\d+) (users|students) · (.+)$/,(_,n,type,scope)=>pick(`Показано ${type==='users'?'пользователей':'учеников'}: ${n} · ${simple(scope)}`,`Көрсетілген ${type==='users'?'пайдаланушылар':'оқушылар'}: ${n} · ${simple(scope)}`)],
 [/^(\d+) authored questions · Student exams also use generated practice questions\.$/,(_,n)=>pick(`Авторских заданий: ${n}. В тестах также используются автоматически созданные тренировочные задания.`,`Авторлық тапсырмалар: ${n}. Тесттерде автоматты түрде жасалған жаттығулар да қолданылады.`)],
 [/^(.+), Kazakhstan$/,(_,city)=>`${simple(city)}, ${simple('Kazakhstan')}`],
 [/^Answer: (.+)$/,(_,n)=>pick(`Ответ: ${n}`,`Жауап: ${n}`)],
 [/^(Student|Teacher|Admin) · (.+)$/,(_,r,n)=>`${simple(r)} · ${n}`],
 [/^You have an unfinished attempt in (.+)\. Starting another will replace it\.$/,(_,t)=>pick(`У вас есть незавершённая попытка по теме «${simple(t)}». Новая попытка заменит её.`,`«${simple(t)}» тақырыбында аяқталмаған талпынысыңыз бар. Жаңасы оны алмастырады.`)],
 [/^(.+)\. Answer questions at your pace and reach 70 points to pass\.$/,(_,d)=>pick(`${simple(d)}. Отвечайте в своём темпе и наберите 70 баллов для прохождения.`,`${simple(d)}. Өз қарқыныңызбен жауап беріп, өту үшін 70 балл жинаңыз.`)],
 [/^(\d+) editable sample profiles are available for this school\.$/,(_,n)=>pick(`В этой школе доступно демонстрационных профилей для редактирования: ${n}.`,`Осы мектепте өңдеуге болатын үлгі профиль саны: ${n}.`)],
 [/^(\d+) questions answered(.*)$/,(_,n,rest)=>pick(`Дано ответов: ${n}${rest.replace(/(\d+)\/100 final score/, 'итоговый балл: $1/100')}`,`Берілген жауаптар: ${n}${rest.replace(/(\d+)\/100 final score/, 'қорытынды балл: $1/100')}`)],
 [/^([+−–\-\d /]+) points(.*)$/,(_,n,rest)=>pick(`${n} баллов${rest?' · Тема пройдена! Следующая тема открыта.':''}`,`${n} балл${rest?' · Тақырып аяқталды! Келесі тақырып ашылды.':''}`)],
 [/^The correct (?:numeric )?answer is (.+)\.$/,(_,n)=>pick(`Правильный ответ: ${num(n)}.`,`Дұрыс жауап: ${num(n)}.`)],
 [/^Solve for x: (.+)$/,(_,q)=>pick(`Решите уравнение: ${q}`,`Теңдеуді шешіңіз: ${q}`)],
 [/^Calculate (.+)$/,(_,q)=>pick(`Вычислите: ${q}`,`Есептеңіз: ${q}`)],
 [/^Write (.+) as a decimal\.?$/,(_,q)=>pick(`Запишите ${q} в виде десятичной дроби.`,`${q} бөлшегін ондық бөлшек түрінде жазыңыз.`)],
 [/^Work through the operations to get (.+)\.$/,(_,n)=>pick(`Выполните действия по порядку. Ответ: ${num(n)}.`,`Амалдарды ретімен орындаңыз. Жауап: ${num(n)}.`)],
 [/^Divide 1 by (.+): the result is (.+)\.$/,(_,a,n)=>pick(`Разделите 1 на ${a}. Получится ${num(n)}.`,`1-ді ${a} санына бөліңіз. Нәтиже: ${num(n)}.`)],
 [/^A ratio is 1 : (.+)\. If the first amount is (.+), what is the second\?$/,(_,a,b)=>pick(`Отношение равно 1 : ${a}. Первая величина равна ${b}. Найдите вторую.`,`Қатынас 1 : ${a}. Бірінші шама ${b}-ге тең. Екіншісін табыңыз.`)],
 [/^Multiply both parts by (.+)\. The second amount is (.+)\.$/,(_,a,q)=>pick(`Умножьте обе части отношения на ${a}. Вторая величина: ${q}.`,`Қатынастың екі бөлігін де ${a} санына көбейтіңіз. Екінші шама: ${q}.`)],
 [/^Multiply (.+) by itself (two|three) times to get (.+)\.$/,(_,a,p,n)=>pick(`${p==='two'?'Квадрат':'Куб'} числа ${a}: ${a}${p==='two'?'²':'³'} = ${n}.`,`${a} санының ${p==='two'?'квадраты':'кубы'}: ${a}${p==='two'?'²':'³'} = ${n}.`)],
 [/^Two angles of a triangle are (.+)° and (.+)°\. Find the third angle\.$/,(_,a,b)=>pick(`Два угла треугольника равны ${a}° и ${b}°. Найдите третий угол.`,`Үшбұрыштың екі бұрышы ${a}° және ${b}°. Үшінші бұрышты табыңыз.`)],
 [/^Triangle angles total 180°\. Subtract the two given angles to get (.+)°\.$/,(_,n)=>pick(`Сумма углов треугольника — 180°. Вычтите два известных угла. Ответ: ${n}°.`,`Үшбұрыш бұрыштарының қосындысы — 180°. Берілген екі бұрышты азайтыңыз. Жауап: ${n}°.`)],
 [/^A rectangle is (.+) cm wide and (.+) cm long\. What is its area in cm²\?$/,(_,a,b)=>pick(`Ширина прямоугольника — ${a} см, длина — ${b} см. Найдите площадь в см².`,`Тіктөртбұрыштың ені ${a} см, ұзындығы ${b} см. Ауданын см²-пен табыңыз.`)],
 [/^Area = width × length = (.+) cm²\.$/,(_,q)=>pick(`Площадь = ширина × длина = ${q} см².`,`Аудан = ені × ұзындығы = ${q} см².`)],
 [/^Find the mean of (.+), (.+), and (.+)\. Round to 2 decimal places if needed\.$/,(_,a,b,c)=>pick(`Найдите среднее арифметическое чисел ${a}, ${b} и ${c}. При необходимости округлите до сотых.`,`${a}, ${b} және ${c} сандарының арифметикалық ортасын табыңыз. Қажет болса, жүздік үлеске дейін дөңгелектеңіз.`)],
 [/^Add the values, then divide by 3: (.+)\.$/,(_,q)=>pick(`Сложите числа и разделите сумму на 3: ${q}.`,`Сандарды қосып, қосындыны 3-ке бөліңіз: ${q}.`)],
 [/^Subtract (.+) from both sides\. x = (.+)\.$/,(_,a,x)=>pick(`Вычтите ${a} из обеих частей. x = ${x}.`,`Екі жақтан да ${a} санын азайтыңыз. x = ${x}.`)],
 [/^Subtract (.+), then divide by (.+)\. x = (.+)\.$/,(_,a,b,x)=>pick(`Вычтите ${a}, затем разделите на ${b}. x = ${x}.`,`Алдымен ${a} санын азайтып, содан кейін ${b} санына бөліңіз. x = ${x}.`)],
 [/^Divide both sides by (.+), then subtract (.+)\. x = (.+)\.$/,(_,a,b,x)=>pick(`Разделите обе части на ${a}, затем вычтите ${b}. x = ${x}.`,`Екі жақты да ${a} санына бөліп, содан кейін ${b} санын азайтыңыз. x = ${x}.`)],
 [/^(View unlock requirements for|Open|Edit|View) (.+)$/,(_,v,n)=>`${pick({Open:'Открыть',Edit:'Изменить',View:'Просмотреть','View unlock requirements for':'Условия открытия темы'}[v],{Open:'Ашу:',Edit:'Өңдеу:',View:'Көру:','View unlock requirements for':'Тақырыпты ашу шарттары:'}[v])} ${simple(n)}`],
 [/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun): (.+)$/,(_,d,n)=>`${simple(d)}: ${n}`],
 [/^(.+) · Esepter\.kz$/,(_,s)=>`${simple(s)} · Esepter.kz`]
];
function date(value){const [year,month,day]=value.split('-').map(Number);const months=language==='kk'?['қаңтар','ақпан','наурыз','сәуір','мамыр','маусым','шілде','тамыз','қыркүйек','қазан','қараша','желтоқсан']:language==='ru'?['янв.','февр.','мар.','апр.','мая','июн.','июл.','авг.','сент.','окт.','нояб.','дек.']:['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];return `${day} ${months[month-1]} ${year}`;}
function t(value){if(language==='en')return String(value);const source=String(value),s=source.trim();if(!s)return source;let result=simple(s);if(result===s){for(const [pattern,replace] of rules){if(pattern.test(s)){result=s.replace(pattern,replace);break}}}if(result===s&&s.includes(' · '))result=s.split(' · ').map(simple).join(' · ');return source.slice(0,source.indexOf(s))+result+source.slice(source.indexOf(s)+s.length)}
const sources=new WeakMap(),attrs=new WeakMap(),fieldSources=new WeakMap();
function sourceText(node){const prev=sources.get(node);const current=node.nodeValue;const original=prev&&prev.output===current?prev.original:current;const output=t(original);sources.set(node,{original,output});if(current!==output)node.nodeValue=output;}
function apply(root=document.body){if(!root)return;root.querySelectorAll('option:not([value])').forEach(o=>o.setAttribute('value',o.value));const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);let node;while(node=walker.nextNode()){if(node.parentElement?.closest('script,style,input,textarea,[data-no-i18n]'))continue;sourceText(node)}root.querySelectorAll('[placeholder],[aria-label],[title]').forEach(el=>{if(el.closest('[data-no-i18n]'))return;let record=attrs.get(el)||{};for(const attr of ['placeholder','aria-label','title']){if(!el.hasAttribute(attr))continue;const current=el.getAttribute(attr);const prev=record[attr];const original=prev&&prev.output===current?prev.original:current;const output=t(original);record[attr]={original,output};if(current!==output)el.setAttribute(attr,output)}attrs.set(el,record)});root.querySelectorAll('time[datetime]').forEach(el=>{el.textContent=date(el.getAttribute('datetime'))});root.querySelectorAll('[data-weekday]').forEach(el=>{el.textContent=window.EsepterI18n.weekday(Number(el.dataset.weekday))});root.querySelectorAll('[data-original-value]').forEach(el=>{const previous=fieldSources.get(el);if(!previous||el.value===previous){el.value=t(el.dataset.originalValue);fieldSources.set(el,el.value)}});document.documentElement.lang=language;document.documentElement.style.setProperty('--pass-label',JSON.stringify(pick('Порог · 70','Өту · 70')));if(language==='en')document.documentElement.style.setProperty('--pass-label','"Pass · 70"');document.querySelectorAll('[data-language-select]').forEach(s=>s.value=language);const title=document.querySelector('title')?.firstChild;if(title)sourceText(title);}
function selector(){return `<label class="language-control" data-no-i18n><span>${simple('Language')}</span><select data-language-select aria-label="${simple('Language')}"><option value="ru" ${language==='ru'?'selected':''}>Русский</option><option value="kk" ${language==='kk'?'selected':''}>Қазақша</option><option value="en" ${language==='en'?'selected':''}>English</option></select></label>`}
function injectSelectors(){for(const host of document.querySelectorAll('.top-actions,.landing header .row,.login-story')){if(!host.querySelector('[data-language-select]'))host.insertAdjacentHTML('afterbegin',selector())}for(const host of document.querySelectorAll('.modal-head')){if(!host.querySelector('[data-language-select]'))host.insertAdjacentHTML('beforeend',selector())}}
function refresh(){observer.disconnect();injectSelectors();apply();observer.observe(document.body,{childList:true,subtree:true,characterData:true,attributes:true,attributeFilter:['placeholder','aria-label','title']});}
let queued=false;const observer=new MutationObserver(()=>{if(queued)return;queued=true;queueMicrotask(()=>{queued=false;refresh()})});
function setLanguage(next){if(!['ru','kk','en'].includes(next))return;language=next;try{localStorage.setItem('esepter-language',language)}catch{}document.querySelectorAll('.language-control>span').forEach(s=>s.textContent=simple('Language'));document.querySelectorAll('[data-language-select]').forEach(s=>s.setAttribute('aria-label',simple('Language')));refresh();document.dispatchEvent(new CustomEvent('languagechange',{detail:language}));}
function search(source,query){const q=query.toLocaleLowerCase();const text=String(source);return text.toLocaleLowerCase().includes(q)||t(text).toLocaleLowerCase().includes(q);}
window.EsepterI18n={t,date,apply,refresh,setLanguage,search,get language(){return language},get locale(){return language==='kk'?'kk-KZ':language==='ru'?'ru-KZ':'en-GB'},weekday(i){return (language==='ru'?['Пн','Вт','Ср','Чт','Пт','Сб','Вс']:language==='kk'?['Дс','Сс','Ср','Бс','Жм','Сб','Жс']:['M','T','W','T','F','S','S'])[i]}};
document.addEventListener('change',e=>{if(e.target.matches('[data-language-select]'))setLanguage(e.target.value)});
document.addEventListener('invalid',e=>{const el=e.target;if(!el.validity)return;el.setCustomValidity('');if(el.validity.valueMissing)el.setCustomValidity(t('Please fill out this field.'));else if(el.validity.typeMismatch)el.setCustomValidity(t('Please enter a valid email address.'));else if(el.validity.badInput)el.setCustomValidity(t('Please enter a valid number.'));},true);
document.addEventListener('input',e=>{if(e.target.setCustomValidity)e.target.setCustomValidity('')});
refresh();
})();
