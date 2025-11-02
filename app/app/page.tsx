import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  BadgeCheck,
  BellRing,
  Brain,
  CheckCircle2,
  Gauge,
  LineChart,
  Link2,
  Radar,
  ShieldCheck,
  Sparkles,
  Tags,
  TimerReset,
} from "lucide-react";

type Feature = {
  title: string;
  description: string;
  icon: LucideIcon;
  bullets?: string[];
};

type Plan = {
  name: string;
  price: string;
  promo?: string;
  description: string;
  cta: string;
  highlighted?: boolean;
  features: string[];
};

const navigation = [
  { name: "Возможности", href: "#features" },
  { name: "Автоматизация", href: "#automation" },
  { name: "Тарифы", href: "#pricing" },
  { name: "Отзывы", href: "#testimonials" },
  { name: "FAQ", href: "#faq" },
];

const stats = [
  { label: "Рост органического трафика", value: "x4.2", sub: "за 6 месяцев у клиентов Pro" },
  { label: "Сэкономлено часов", value: "68+", sub: "на подготовку отчетов и текстов" },
  { label: "Качество ссылок", value: "92%", sub: "если использовать LinkPilot AI Outreach" },
];

const features: Feature[] = [
  {
    title: "Автоматический линкбилдинг",
    description:
      "Искусственный интеллект анализирует релевантные площадки, отправляет персонализированные письма и отслеживает статусы размещений.",
    icon: Link2,
    bullets: [
      "Сегментация доноров по DR, трафику и тематике",
      "Автогенерация писем и цепочек касаний",
      "Отчеты по статусам и дедлайнам в реальном времени",
    ],
  },
  {
    title: "Генерация SEO-текстов",
    description:
      "Подготовка структурированных текстов с учетом частотностей, LSI и тональности бренда на базе актуальных SERP-данных.",
    icon: Sparkles,
    bullets: [
      "Брифы и структуры за секунды",
      "Адаптация под заданный стиль и регион",
      "Экспорт в CMS или Google Docs",
    ],
  },
  {
    title: "Конструктор мета-тегов",
    description:
      "Создание title, description и Open Graph с поддержкой A/B-тестов и гибких правил для разных типов страниц.",
    icon: Tags,
    bullets: [
      "Учитывает ограничения длины и CTR-метрики",
      "Автопроверка дубликатов и скупа",
      "Экспорт через API или sitemap",
    ],
  },
  {
    title: "Мониторинг позиций и SERP",
    description:
      "Отслеживайте динамику ранжирования и конкурентов, получайте подсказки, что улучшить, прямо в рабочем кабинете.",
    icon: LineChart,
    bullets: [
      "Отчеты по регионам и устройствам",
      "Сигналы о смене алгоритмов и конкурентов",
      "Прогнозирование трафика на основе трендов",
    ],
  },
  {
    title: "Аналитика трафика и конверсий",
    description:
      "Единая панель соединяет данные Search Console, GA4 и рекламных каналов с автоматическими рекомендациями.",
    icon: Gauge,
    bullets: [
      "Настраиваемые KPI и виджеты",
      "Уведомления в Slack/Telegram",
      "Готовые отчеты для руководителей",
    ],
  },
  {
    title: "Контроль качества и безопасности",
    description:
      "Отслеживайте токсичные ссылки, дубли и техошибки. Получайте предложения по исправлению и автоматизируйте рутинные проверки.",
    icon: Radar,
    bullets: [
      "Еженедельные аудиты без ручной работы",
      "Поиск каннибализации и битых ссылок",
      "Экспорт чек-листов для подрядчиков",
    ],
  },
];

const automation = [
  {
    title: "Умная настройка",
    description:
      "Подключите Search Console, аналитические системы и CRM — платформа сама настроит цели, метрики и триггеры.",
    icon: Brain,
  },
  {
    title: "Авто-кампании линкбилдинга",
    description:
      "Настройте сценарии в визуальном редакторе: сегменты аудиторий, шаблоны писем, дедлайны и ответственных.",
    icon: BellRing,
  },
  {
    title: "Отчеты по расписанию",
    description:
      "LinkPilot собирает данные, сопоставляет с целями и отправляет отчет в нужный канал или CRM.",
    icon: TimerReset,
  },
  {
    title: "Фокус на результате",
    description:
      "Искусственный интеллект выделяет ключевые инсайты и предлагает шаги, которые дадут максимальный эффект.",
    icon: CheckCircle2,
  },
];

const plans: Plan[] = [
  {
    name: "Start",
    price: "5 900 ₽",
    description: "Для фрилансеров и небольших проектов до 10 000 URL.",
    promo: "14 дней бесплатно",
    cta: "Попробовать бесплатно",
    features: [
      "До 3 проектов и 50 отслеживаемых запросов",
      "Генерация SEO-текстов и мета-тегов",
      "Легкий линкбилдинг с AI Outreach",
      "Отчеты в PDF и Google Sheets",
    ],
  },
  {
    name: "Pro",
    price: "17 500 ₽",
    description: "Оптимально для агентств и внутренних команд маркетинга.",
    highlighted: true,
    cta: "Выбрать Pro",
    features: [
      "Безлимит на проекты и запросы",
      "Расширенная автоматизация писем",
      "Совместная работа и права доступа",
      "API и интеграция с CRM/Slack",
      "Аудит ссылок и анкор-листа",
    ],
  },
  {
    name: "Enterprise",
    price: "По запросу",
    description: "Для сложных инфраструктур, сетей сайтов и международных команд.",
    cta: "Связаться с отделом продаж",
    features: [
      "Индивидуальные SLA и поддержка 24/7",
      "Настройка аналитики и кастомных дашбордов",
      "Дедупликация и защита данных",
      "Обучение команды и миграция процессов",
    ],
  },
];

const faqs = [
  {
    question: "Можно ли подключить существующие таблицы и процессы линкбилдинга?",
    answer:
      "Да, импортируйте свои базы доноров в формате CSV или подключите Google Sheets. LinkPilot автоматически почистит данные, определит статусы и предложит стратегии развития.",
  },
  {
    question: "Какие языки и регионы поддерживаются?",
    answer:
      "Платформа работает с любыми локалями: достаточно указать регион и язык проекта. Аналитика учитывает особенности выдачи, а генерация текстов адаптируется под локальные поисковые паттерны.",
  },
  {
    question: "Подходит ли сервис для агентств?",
    answer:
      "Да. В тарифе Pro и Enterprise есть роли для аккаунтов, проджектов и аналитиков, брендированные отчеты, а также автоматический биллинг клиентов.",
  },
  {
    question: "Можно ли интегрировать LinkPilot с внутренними BI-системами?",
    answer:
      "Используйте REST и Webhook API, готовые коннекторы к Power BI и Looker Studio или экспортируйте данные в формате JSON/CSV по расписанию.",
  },
];

const testimonials = [
  {
    name: "Анна Мельникова",
    role: "Руководитель SEO-направления, Qwerty Agency",
    quote:
      "LinkPilot избавил команду от рутины: подбор площадок, брифы для копирайтеров и отчеты теперь автоматизированы. Мы удвоили ROMI за квартал.",
  },
  {
    name: "Игорь Плотников",
    role: "Head of Growth, FinLight",
    quote:
      "Понравилась прозрачность линкбилдинга и подсказки по SERP. Видим, какие действия дадут больше прироста и сколько трафика принесут новые ссылки.",
  },
  {
    name: "Наталья Белова",
    role: "SEO-аналитик, EcommerceX",
    quote:
      "Автоотчеты экономят до 15 часов в неделю. Клиенты получают понятные дашборды, а команда — четкие рекомендации по росту.",
  },
];

export default function Home() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="relative flex min-h-screen flex-col bg-transparent text-slate-100">
      <header className="sticky top-0 z-40 border-b border-white/5 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 lg:px-10">
          <Link href="#" className="flex items-center gap-3 text-lg font-semibold tracking-tight">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-indigo-500/20 text-indigo-300 backdrop-blur">
              <BadgeCheck className="h-5 w-5" />
            </span>
            <span className="text-white">LinkPilot</span>
          </Link>
          <nav className="hidden items-center gap-8 text-sm font-medium text-slate-300 md:flex">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="transition hover:text-white"
              >
                {item.name}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <Link
              href="#pricing"
              className="hidden rounded-full border border-white/15 px-5 py-2 text-sm font-semibold text-slate-200 transition hover:border-indigo-400/40 hover:text-white md:inline-flex"
            >
              Тарифы
            </Link>
            <Link
              href="#cta"
              className="inline-flex items-center gap-2 rounded-full bg-indigo-500 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-indigo-500/40 transition hover:bg-indigo-400"
            >
              Войти
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section id="hero" className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[var(--gradient-hero)] opacity-80 mix-blend-screen" />
          <div className="absolute -left-40 top-32 h-64 w-64 rounded-full bg-indigo-500/30 blur-3xl" />
          <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-sky-400/10 blur-[120px]" />
          <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 pb-28 pt-24 lg:flex-row lg:items-center lg:px-10 lg:pb-32 lg:pt-32">
            <div className="flex flex-1 flex-col gap-8">
              <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 px-4 py-1 text-xs uppercase tracking-[0.3em] text-indigo-200/80">
                НОВОЕ ПОКОЛЕНИЕ SEO
              </span>
              <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
                Автоматизируйте линкбилдинг и SEO-аналитику с LinkPilot
              </h1>
              <p className="max-w-2xl text-lg leading-relaxed text-slate-200/80 sm:text-xl">
                Единственная платформа, которая объединяет поиск доноров, генерацию текстов, контроль метрик и AI-рекомендации. 
                Сфокусируйтесь на стратегии — мы возьмем рутину на себя.
              </p>
              <ul className="grid gap-3 text-sm text-slate-200/80 sm:grid-cols-2 sm:text-base">
                {[
                  "Автоматический поиск площадок и outreach",
                  "Умные подсказки по росту органического трафика",
                  "Готовые SEO-тексты и мета-теги за секунды",
                  "Дашборды по позициям и конверсиям в одном экране",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 flex-none text-indigo-300" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <Link
                  href="#pricing"
                  className="inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-200 sm:text-base"
                >
                  Попробовать бесплатно
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="#features"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-indigo-300/60 hover:text-indigo-200 sm:text-base"
                >
                  Смотреть возможности
                </Link>
              </div>
              <div className="flex flex-wrap items-center gap-6 text-sm text-slate-400">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    {["/avatars/1.png", "/avatars/2.png", "/avatars/3.png"].map((src) => (
                      <span
                        key={src}
                        className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/40 bg-white/10 text-xs text-white backdrop-blur"
                      >
                        ★
                      </span>
                    ))}
                  </div>
                  <span className="font-semibold text-white">7 400+ SEO-специалистов</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-indigo-300" />
                  <span>GDPR & 152-ФЗ ready</span>
                </div>
              </div>
            </div>

            <div className="relative flex flex-1 justify-end">
              <div className="relative w-full max-w-xl rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_0_80px_rgba(99,102,241,0.25)] backdrop-blur">
                <div className="mb-6 flex items-center justify-between rounded-2xl bg-slate-900/40 px-5 py-3">
                  <div className="text-sm text-slate-300">Проект: fintech.ru</div>
                  <div className="rounded-full bg-indigo-500/20 px-3 py-1 text-xs text-indigo-200">
                    +38% трафика
                  </div>
                </div>
                <div className="grid gap-4">
                  <div className="rounded-2xl border border-white/10 bg-slate-900/50 p-4">
                    <div className="flex items-center justify-between text-xs uppercase tracking-widest text-indigo-200/80">
                      Статус Outreach
                      <span className="rounded-full bg-indigo-500/20 px-2 py-1 text-[11px] text-indigo-200">
                        Авто
                      </span>
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <div className="text-3xl font-semibold text-white">87%</div>
                      <div className="flex items-center gap-2 text-sm text-slate-300">
                        <ArrowRight className="h-4 w-4 text-indigo-300" />
                        +12 площадок
                      </div>
                    </div>
                    <div className="mt-4 grid grid-cols-3 gap-3 text-xs text-slate-400">
                      <div className="rounded-xl bg-white/5 p-3">
                        <p className="text-[11px] uppercase tracking-widest text-slate-500">
                          Новые
                        </p>
                        <p className="mt-2 text-lg font-semibold text-white">24</p>
                      </div>
                      <div className="rounded-xl bg-white/5 p-3">
                        <p className="text-[11px] uppercase tracking-widest text-slate-500">
                          В работе
                        </p>
                        <p className="mt-2 text-lg font-semibold text-white">41</p>
                      </div>
                      <div className="rounded-xl bg-white/5 p-3">
                        <p className="text-[11px] uppercase tracking-widest text-slate-500">
                          Размещено
                        </p>
                        <p className="mt-2 text-lg font-semibold text-white">18</p>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-2xl border border-white/5 bg-indigo-500/10 p-4">
                    <p className="text-xs uppercase tracking-[0.25em] text-indigo-100/70">
                      INSIGHT
                    </p>
                    <p className="mt-3 text-sm text-slate-100">
                      Подготовьте SEO-статью по теме “как инвестировать в ИИС”. LinkPilot уже собрал актуальные ключевые фразы и добавил LSI.
                    </p>
                    <button className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-indigo-200 transition hover:text-white">
                      Сгенерировать текст
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-white/5 bg-white/[0.02]">
          <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-14 text-center sm:grid-cols-3 sm:text-left lg:px-10">
            {stats.map((item) => (
              <div key={item.label} className="rounded-3xl bg-white/3 p-6 shadow-[0_10px_60px_rgba(15,23,42,0.35)]">
                <p className="text-xs uppercase tracking-[0.25em] text-slate-400">{item.label}</p>
                <p className="mt-4 text-4xl font-semibold text-white">{item.value}</p>
                <p className="mt-2 text-sm text-slate-300/80">{item.sub}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="features" className="relative overflow-hidden py-24 sm:py-28">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/30 via-transparent to-slate-950" />
          <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-14 px-6 lg:px-10">
            <div className="flex flex-col gap-4 text-center md:text-left">
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-indigo-200/70">
                ФУНКЦИИ
              </span>
              <h2 className="text-3xl font-semibold text-white sm:text-4xl">
                Все инструменты SEO-специалиста в одном месте
              </h2>
              <p className="mx-auto max-w-3xl text-lg text-slate-300/85 md:mx-0">
                Используйте LinkPilot, чтобы строить стратегию, управлять процессами и доказывать результат. 
                Каждый модуль связан с данными и рекомендациями, поэтому принятое решение подкреплено фактами.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {features.map((feature) => (
                <article
                  key={feature.title}
                  className="group relative overflow-hidden rounded-3xl border border-white/5 bg-white/5 p-8 transition hover:border-indigo-400/40 hover:shadow-[0_40px_120px_rgba(99,102,241,0.25)]"
                >
                  <div className="absolute inset-0 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:blur-3xl" />
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-500/15 text-indigo-200">
                      <feature.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-slate-300/85">
                    {feature.description}
                  </p>
                  {feature.bullets && (
                    <ul className="mt-6 space-y-3 text-sm text-slate-200/90">
                      {feature.bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-3">
                          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-indigo-300" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="automation" className="border-y border-white/5 bg-slate-950/60">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 py-24 lg:px-10">
            <div className="flex flex-col gap-4 text-center md:text-left">
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-indigo-200/70">
                АВТОМАТИЗАЦИЯ
              </span>
              <h2 className="text-3xl font-semibold text-white sm:text-4xl">
                Конструктор сценариев без кода
              </h2>
              <p className="mx-auto max-w-3xl text-lg text-slate-300/85 md:mx-0">
                Создавайте последовательности outreach, контрольные точки и аналитические отчеты через визуальный редактор. 
                LinkPilot выполняет задачи точно в срок и предупреждает, если показатели выходят за пределы KPI.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {automation.map((step) => (
                <div
                  key={step.title}
                  className="flex flex-col gap-4 rounded-3xl border border-white/5 bg-white/3 p-8"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-500/15 text-indigo-200">
                    <step.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-300/85">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="testimonials" className="bg-transparent py-24 sm:py-28">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 lg:px-10">
            <div className="flex flex-col gap-4 text-center md:text-left">
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-indigo-200/70">
                ОПЫТ КЛИЕНТОВ
              </span>
              <h2 className="text-3xl font-semibold text-white sm:text-4xl">
                Результаты команд, которые уже с LinkPilot
              </h2>
              <p className="mx-auto max-w-3xl text-lg text-slate-300/85 md:mx-0">
                Мы собираем обратную связь каждую неделю: вот что говорят лидеры SEO-направлений из агентств и in-house команд.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {testimonials.map((item) => (
                <figure
                  key={item.name}
                  className="flex h-full flex-col gap-4 rounded-3xl border border-white/5 bg-white/5 p-6"
                >
                  <p className="grow text-sm leading-relaxed text-slate-200/90">“{item.quote}”</p>
                  <figcaption className="pt-4 text-sm text-slate-400">
                    <p className="text-base font-semibold text-white">{item.name}</p>
                    <p>{item.role}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section
          id="pricing"
          className="border-y border-white/5 bg-gradient-to-b from-slate-900/30 via-slate-950 to-slate-950 py-24 sm:py-28"
        >
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-14 px-6 lg:px-10">
            <div className="flex flex-col gap-4 text-center md:text-left">
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-indigo-200/70">
                ТАРИФЫ
              </span>
              <h2 className="text-3xl font-semibold text-white sm:text-4xl">
                Прозрачная стоимость, бесплатный старт
              </h2>
              <p className="mx-auto max-w-3xl text-lg text-slate-300/85 md:mx-0">
                Оплачивайте только необходимые функции и масштабируйтесь без ограничений. Любой тариф можно расширить опциями.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {plans.map((plan) => (
                <div
                  key={plan.name}
                  className={`flex flex-col gap-6 rounded-3xl border p-8 ${
                    plan.highlighted
                      ? "border-indigo-400/80 bg-indigo-500/20 shadow-[0_30px_120px_rgba(99,102,241,0.35)]"
                      : "border-white/10 bg-white/5"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-semibold text-white">{plan.name}</h3>
                      <p className="text-sm text-slate-400">{plan.description}</p>
                    </div>
                    {plan.promo && (
                      <span className="rounded-full border border-white/20 px-3 py-1 text-xs text-indigo-100">
                        {plan.promo}
                      </span>
                    )}
                  </div>
                  <div className="text-4xl font-semibold text-white">{plan.price}</div>
                  <ul className="space-y-3 text-sm text-slate-200/90">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex gap-3">
                        <ArrowRight className="mt-1 h-4 w-4 flex-none text-indigo-300" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="#cta"
                    className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition ${
                      plan.highlighted
                        ? "bg-white text-slate-900 hover:bg-slate-200"
                        : "border border-white/20 text-white hover:border-indigo-300/60 hover:text-indigo-200"
                    }`}
                  >
                    {plan.cta}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="bg-transparent py-24 sm:py-28">
          <div className="mx-auto flex w-full max-w-5xl flex-col gap-10 px-6 lg:px-10">
            <div className="flex flex-col gap-4 text-center md:text-left">
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-indigo-200/70">
                FAQ
              </span>
              <h2 className="text-3xl font-semibold text-white sm:text-4xl">
                Частые вопросы
              </h2>
            </div>
            <div className="space-y-6">
              {faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group rounded-3xl border border-white/5 bg-white/5 p-6 transition hover:border-indigo-300/60"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-semibold text-white">
                    {faq.question}
                    <ArrowRight className="h-4 w-4 flex-none transition group-open:rotate-90" />
                  </summary>
                  <p className="mt-4 text-sm leading-relaxed text-slate-300/85">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section
          id="cta"
          className="relative overflow-hidden rounded-t-[3rem] border-t border-white/5 bg-indigo-500/20 py-24"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/30 via-sky-500/20 to-transparent" />
          <div className="relative mx-auto flex w-full max-w-4xl flex-col items-center gap-8 px-6 text-center">
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
              Готовы ускорить рост органического трафика?
            </h2>
            <p className="max-w-2xl text-lg text-indigo-50/90">
              Получите доступ ко всем модулям, импортируйте проекты и настройте первые сценарии за 10 минут. Команда поддержки поможет на каждом этапе.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="#"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-black/20 transition hover:bg-slate-200 sm:text-base"
              >
                Создать аккаунт
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="mailto:hello@linkpilot.io"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 px-8 py-3 text-sm font-semibold text-white transition hover:border-white sm:text-base"
              >
                Запросить демо
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/5 bg-slate-950/90 py-10">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 text-sm text-slate-400 lg:px-10 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-base font-semibold text-white">LinkPilot</p>
            <p className="mt-2 text-sm text-slate-400/90">
              Платформа для SEO-специалистов и агентств. Автоматизируйте линкбилдинг, тексты и аналитику.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-6">
            <Link href="#features" className="transition hover:text-white">
              Возможности
            </Link>
            <Link href="#pricing" className="transition hover:text-white">
              Тарифы
            </Link>
            <Link href="mailto:support@linkpilot.io" className="transition hover:text-white">
              Поддержка
            </Link>
            <Link href="#" className="transition hover:text-white">
              Политика конфиденциальности
            </Link>
          </div>
          <p className="text-xs text-slate-500">
            © {currentYear} LinkPilot. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
}
