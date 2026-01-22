// ============================================
// FORMSPREE ENDPOINT
// ============================================
const FORM_ENDPOINT = "https://formspree.io/f/xlggqpya";

// ============================================
// TRANSLATIONS
// ============================================
const translations = {
    ru: {
        'meta.title': 'Brandex — Digital консалтинг и маркетинг',
        'meta.description': 'Консалтинг и стратегия, ведение Instagram и Facebook, оптимизация сайтов и интернет-магазинов, автоматизация маркетинга.',
        'nav.menu': 'Меню',
        'nav.services': 'Услуги',
        'nav.stack': 'Возможности',
        'nav.clients': 'Для кого',
        'nav.contact': 'Контакты',
        'nav.cta': 'Получить консультацию',
        'hero.subtitle': 'Консалтинг и стратегия. Социальные сети. Веб и e-commerce. Автоматизация маркетинга',
        'hero.consultation': 'Получить консультацию',
        'hero.audit': 'Бесплатный аудит',
        'services.title': 'Услуги',
        'services.consulting.title': 'Консалтинг и стратегия',
        'services.consulting.bullet1': 'Digital-консалтинг для малого бизнеса',
        'services.consulting.bullet2': 'Анализ онлайн-присутствия',
        'services.consulting.bullet3': 'Стратегия продаж и продвижения',
        'services.social.title': 'Социальные сети',
        'services.social.bullet1': 'Ведение Instagram',
        'services.social.bullet2': 'Ведение Facebook',
        'services.social.bullet3': 'Контент-план и публикации',
        'services.social.bullet4': 'Настройка рекламы (Meta Ads)',
        'services.web.title': 'Веб и e-commerce',
        'services.web.bullet1': 'Оптимизация сайтов (SEO, скорость)',
        'services.web.bullet2': 'Оптимизация интернет-магазинов',
        'services.web.bullet3': 'Улучшения UX/UI',
        'services.web.bullet4': 'Поддержка и сопровождение сайтов',
        'services.automation.title': 'Автоматизация маркетинга',
        'services.automation.bullet1': 'Настройка CRM',
        'services.automation.bullet2': 'Воронки продаж',
        'services.automation.bullet3': 'Email-маркетинг',
        'services.cta.consultation': 'Получить консультацию',
        'services.cta.audit': 'Бесплатный аудит',
        'stack.title': 'Возможности',
        'stack.subtitle': 'Полный спектр инструментов для роста вашего бизнеса',
        'stack.items.strategy.title': 'Стратегия',
        'stack.items.strategy.desc': 'Позиционирование, оффер, план роста',
        'stack.items.audit.title': 'Аудит',
        'stack.items.audit.desc': 'Быстрый разбор и точки роста',
        'stack.items.seo.title': 'SEO',
        'stack.items.seo.desc': 'Структура, семантика, видимость',
        'stack.items.speed.title': 'Скорость',
        'stack.items.speed.desc': 'Оптимизация Core Web Vitals',
        'stack.items.uxui.title': 'UX/UI',
        'stack.items.uxui.desc': 'Улучшение интерфейса и конверсии',
        'stack.items.ecommerce.title': 'E-commerce',
        'stack.items.ecommerce.desc': 'Каталог, корзина, оплата',
        'stack.items.wordpress.title': 'WordPress',
        'stack.items.wordpress.desc': 'Сайты, лендинги, правки',
        'stack.items.woocommerce.title': 'WooCommerce',
        'stack.items.woocommerce.desc': 'Магазин, товары, интеграции',
        'stack.items.metaads.title': 'Meta Ads',
        'stack.items.metaads.desc': 'Лиды, ретаргетинг, тесты',
        'stack.items.instagram.title': 'Instagram',
        'stack.items.instagram.desc': 'Контент, оформление, рост',
        'stack.items.facebook.title': 'Facebook',
        'stack.items.facebook.desc': 'Страница, публикации, реклама',
        'stack.items.analytics.title': 'Аналитика',
        'stack.items.analytics.desc': 'KPI, события, отчёты',
        'stack.items.gtm.title': 'GTM',
        'stack.items.gtm.desc': 'Теги, конверсии, события',
        'stack.items.crm.title': 'CRM',
        'stack.items.crm.desc': 'Воронки, статусы, контроль заявок',
        'stack.items.email.title': 'Email',
        'stack.items.email.desc': 'Рассылки, сегменты, прогрев',
        'stack.items.automation.title': 'Автоматизация',
        'stack.items.automation.desc': 'Сценарии, триггеры, интеграции',
        'stack.items.content.title': 'Контент',
        'stack.items.content.desc': 'Контент-план и публикации',
        'stack.items.branding.title': 'Брендинг',
        'stack.items.branding.desc': 'Тон, стиль, упаковка',
        'stack.items.support.title': 'Поддержка',
        'stack.items.support.desc': 'Сопровождение сайта и правки',
        'stack.items.reporting.title': 'Отчётность',
        'stack.items.reporting.desc': 'Еженедельные/месячные отчёты',
        'clients.title': 'Для кого мы работаем',
        'clients.subtitle': 'Помогаем бизнесу расти в цифровом пространстве',
        'clients.small.title': 'Малый бизнес',
        'clients.small.desc': 'Помогаем небольшим компаниям выйти в онлайн и увеличить продажи',
        'clients.stores.title': 'Онлайн-магазины',
        'clients.stores.desc': 'Оптимизируем интернет-магазины для роста конверсии и продаж',
        'clients.creators.title': 'Эксперты и блогеры',
        'clients.creators.desc': 'Развиваем личный бренд и увеличиваем аудиторию в соцсетях',
        'contact.title': 'Свяжитесь с нами',
        'contact.subtitle': 'Оставьте заявку — и мы свяжемся с вами в ближайшее время',
        'contact.form.name': 'Имя *',
        'contact.form.company': 'Компания',
        'contact.form.email': 'Email *',
        'contact.form.phone': 'Номер телефона *',
        'contact.form.message': 'Расскажите о вашем проекте',
        'contact.form.privacy': 'Я согласен с обработкой персональных данных',
        'contact.form.submit': 'Отправить',
        'footer.contacts': 'Контакты',
        'footer.navigation': 'Навигация',
        'footer.social': 'Социальные сети',
        'footer.phoneLabel': 'Телефон',
        'footer.privacy': 'Политика конфиденциальности',
        'footer.terms': 'Условия использования',
        'footer.telegram': 'Telegram',
        'footer.whatsapp': 'WhatsApp',
        'footer.copyright': '© {year} Brandex. Все права защищены.',
        'footer.signature': 'Создано: Denys Kamenshchykov',
        'form.success': 'Спасибо! Заявка отправлена. Мы свяжемся с вами в ближайшее время.',
        'form.error': 'Ошибка отправки. Попробуйте позже или напишите на email.',
        'cookie.text.prefix': 'Мы используем файлы cookie на нашем веб-сайте. Подробнее — в ',
        'cookie.text.link': 'Политике конфиденциальности',
        'cookie.accept': 'Принять',
        'cookie.settings': 'Настройки',
        'cookie.modal.title': 'Настройки cookie',
        'cookie.modal.necessary': 'Необходимые (всегда включены)',
        'cookie.modal.analytics': 'Аналитика',
        'cookie.modal.marketing': 'Маркетинг',
        'cookie.modal.save': 'Сохранить',
        'cookie.modal.close': 'Закрыть'
    },
    uk: {
        'meta.title': 'Brandex — Digital консалтинг і маркетинг',
        'meta.description': 'Консалтинг і стратегія, ведення Instagram та Facebook, оптимізація сайтів і інтернет-магазинів, автоматизація маркетингу.',
        'nav.menu': 'Меню',
        'nav.services': 'Послуги',
        'nav.stack': 'Можливості',
        'nav.clients': 'Для кого',
        'nav.contact': 'Контакти',
        'nav.cta': 'Отримати консультацію',
        'hero.subtitle': 'Консалтинг і стратегія. Соціальні мережі. Веб і e-commerce. Автоматизація маркетингу',
        'hero.consultation': 'Отримати консультацію',
        'hero.audit': 'Безкоштовний аудит',
        'services.title': 'Послуги',
        'services.consulting.title': 'Консалтинг і стратегія',
        'services.consulting.bullet1': 'Digital-консалтинг для малого бізнесу',
        'services.consulting.bullet2': 'Аналіз онлайн-присутності',
        'services.consulting.bullet3': 'Стратегія продажів і просування',
        'services.social.title': 'Соціальні мережі',
        'services.social.bullet1': 'Ведення Instagram',
        'services.social.bullet2': 'Ведення Facebook',
        'services.social.bullet3': 'Контент-план і публікації',
        'services.social.bullet4': 'Налаштування реклами (Meta Ads)',
        'services.web.title': 'Веб і e-commerce',
        'services.web.bullet1': 'Оптимізація сайтів (SEO, швидкість)',
        'services.web.bullet2': 'Оптимізація інтернет-магазинів',
        'services.web.bullet3': 'Покращення UX/UI',
        'services.web.bullet4': 'Підтримка та супровід сайтів',
        'services.automation.title': 'Автоматизація маркетингу',
        'services.automation.bullet1': 'Налаштування CRM',
        'services.automation.bullet2': 'Воронки продажів',
        'services.automation.bullet3': 'Email-маркетинг',
        'services.cta.consultation': 'Отримати консультацію',
        'services.cta.audit': 'Безкоштовний аудит',
        'stack.title': 'Можливості',
        'stack.subtitle': 'Повний спектр інструментів для росту вашого бізнесу',
        'stack.items.strategy.title': 'Стратегія',
        'stack.items.strategy.desc': 'Позиціонування, офер, план росту',
        'stack.items.audit.title': 'Аудит',
        'stack.items.audit.desc': 'Швидкий розбір і точки росту',
        'stack.items.seo.title': 'SEO',
        'stack.items.seo.desc': 'Структура, семантика, видимість',
        'stack.items.speed.title': 'Швидкість',
        'stack.items.speed.desc': 'Оптимізація Core Web Vitals',
        'stack.items.uxui.title': 'UX/UI',
        'stack.items.uxui.desc': 'Покращення інтерфейсу та конверсії',
        'stack.items.ecommerce.title': 'E-commerce',
        'stack.items.ecommerce.desc': 'Каталог, кошик, оплата',
        'stack.items.wordpress.title': 'WordPress',
        'stack.items.wordpress.desc': 'Сайти, лендінги, правки',
        'stack.items.woocommerce.title': 'WooCommerce',
        'stack.items.woocommerce.desc': 'Магазин, товари, інтеграції',
        'stack.items.metaads.title': 'Meta Ads',
        'stack.items.metaads.desc': 'Ліди, ретаргетинг, тести',
        'stack.items.instagram.title': 'Instagram',
        'stack.items.instagram.desc': 'Контент, оформлення, ріст',
        'stack.items.facebook.title': 'Facebook',
        'stack.items.facebook.desc': 'Сторінка, пости, реклама',
        'stack.items.analytics.title': 'Аналітика',
        'stack.items.analytics.desc': 'KPI, події, звіти',
        'stack.items.gtm.title': 'GTM',
        'stack.items.gtm.desc': 'Теги, конверсії, події',
        'stack.items.crm.title': 'CRM',
        'stack.items.crm.desc': 'Воронки, статуси, контроль заявок',
        'stack.items.email.title': 'Email',
        'stack.items.email.desc': 'Розсилки, сегменти, прогрів',
        'stack.items.automation.title': 'Автоматизація',
        'stack.items.automation.desc': 'Сценарії, тригери, інтеграції',
        'stack.items.content.title': 'Контент',
        'stack.items.content.desc': 'Контент-план і публікації',
        'stack.items.branding.title': 'Брендинг',
        'stack.items.branding.desc': 'Тон, стиль, пакування',
        'stack.items.support.title': 'Підтримка',
        'stack.items.support.desc': 'Супровід сайту та правки',
        'stack.items.reporting.title': 'Звітність',
        'stack.items.reporting.desc': 'Тижневі/місячні звіти',
        'clients.title': 'Для кого ми працюємо',
        'clients.subtitle': 'Допомагаємо бізнесу зростати в цифровому просторі',
        'clients.small.title': 'Малий бізнес',
        'clients.small.desc': 'Допомагаємо невеликим компаніям вийти в онлайн і збільшити продажі',
        'clients.stores.title': 'Онлайн-магазини',
        'clients.stores.desc': 'Оптимізуємо інтернет-магазини для зростання конверсії та продажів',
        'clients.creators.title': 'Експерти та блогери',
        'clients.creators.desc': 'Розвиваємо особистий бренд і збільшуємо аудиторію в соцмережах',
        'contact.title': 'Зв\'яжіться з нами',
        'contact.subtitle': 'Залиште заявку — і ми зв\'яжемося з вами найближчим часом',
        'contact.form.name': 'Ім\'я *',
        'contact.form.company': 'Компанія',
        'contact.form.email': 'Email *',
        'contact.form.phone': 'Номер телефону *',
        'contact.form.message': 'Розкажіть про ваш проєкт',
        'contact.form.privacy': 'Я погоджуюся на обробку персональних даних',
        'contact.form.submit': 'Надіслати',
        'footer.contacts': 'Контакти',
        'footer.navigation': 'Навігація',
        'footer.social': 'Соціальні мережі',
        'footer.phoneLabel': 'Телефон',
        'footer.privacy': 'Політика конфіденційності',
        'footer.terms': 'Умови використання',
        'footer.telegram': 'Telegram',
        'footer.whatsapp': 'WhatsApp',
        'footer.copyright': '© {year} Brandex. Усі права захищено.',
        'footer.signature': 'Створено: Denys Kamenshchykov',
        'form.success': 'Дякуємо! Заявку надіслано. Ми зв\'яжемося з вами найближчим часом.',
        'form.error': 'Помилка надсилання. Спробуйте пізніше або напишіть на email.',
        'cookie.text.prefix': 'Ми використовуємо файли cookie на нашому веб-сайті. Детальніше — в ',
        'cookie.text.link': 'Політиці конфіденційності',
        'cookie.accept': 'Прийняти',
        'cookie.settings': 'Налаштування',
        'cookie.modal.title': 'Налаштування cookie',
        'cookie.modal.necessary': 'Необхідні (завжди увімкнені)',
        'cookie.modal.analytics': 'Аналітика',
        'cookie.modal.marketing': 'Маркетинг',
        'cookie.modal.save': 'Зберегти',
        'cookie.modal.close': 'Закрити'
    },
    en: {
        'meta.title': 'Brandex — Digital Consulting & Marketing',
        'meta.description': 'Consulting and strategy, Instagram and Facebook management, website and e-commerce optimization, marketing automation.',
        'nav.menu': 'Menu',
        'nav.services': 'Services',
        'nav.stack': 'Capabilities',
        'nav.clients': 'Who we help',
        'nav.contact': 'Contact',
        'nav.cta': 'Get a consultation',
        'hero.subtitle': 'Consulting & Strategy. Social Media. Web & E-commerce. Marketing Automation',
        'hero.consultation': 'Get a consultation',
        'hero.audit': 'Free audit',
        'services.title': 'Services',
        'services.consulting.title': 'Consulting & Strategy',
        'services.consulting.bullet1': 'Digital consulting for small businesses',
        'services.consulting.bullet2': 'Online presence audit',
        'services.consulting.bullet3': 'Sales and growth strategy',
        'services.social.title': 'Social Media',
        'services.social.bullet1': 'Instagram management',
        'services.social.bullet2': 'Facebook management',
        'services.social.bullet3': 'Content plan and publishing',
        'services.social.bullet4': 'Ads setup (Meta Ads)',
        'services.web.title': 'Web & E-commerce',
        'services.web.bullet1': 'Website optimization (SEO, speed)',
        'services.web.bullet2': 'E-commerce optimization',
        'services.web.bullet3': 'UX/UI improvements',
        'services.web.bullet4': 'Website support and maintenance',
        'services.automation.title': 'Marketing Automation',
        'services.automation.bullet1': 'CRM setup',
        'services.automation.bullet2': 'Sales funnels',
        'services.automation.bullet3': 'Email marketing',
        'services.cta.consultation': 'Get a consultation',
        'services.cta.audit': 'Free audit',
        'stack.title': 'Capabilities',
        'stack.subtitle': 'Full range of tools to grow your business',
        'stack.items.strategy.title': 'Strategy',
        'stack.items.strategy.desc': 'Positioning, offer, growth plan',
        'stack.items.audit.title': 'Audit',
        'stack.items.audit.desc': 'Quick review and opportunities',
        'stack.items.seo.title': 'SEO',
        'stack.items.seo.desc': 'Structure, keywords, visibility',
        'stack.items.speed.title': 'Performance',
        'stack.items.speed.desc': 'Core Web Vitals improvements',
        'stack.items.uxui.title': 'UX/UI',
        'stack.items.uxui.desc': 'Better UX and conversion',
        'stack.items.ecommerce.title': 'E-commerce',
        'stack.items.ecommerce.desc': 'Catalog, cart, checkout',
        'stack.items.wordpress.title': 'WordPress',
        'stack.items.wordpress.desc': 'Sites, landing pages, edits',
        'stack.items.woocommerce.title': 'WooCommerce',
        'stack.items.woocommerce.desc': 'Store, products, integrations',
        'stack.items.metaads.title': 'Meta Ads',
        'stack.items.metaads.desc': 'Leads, retargeting, testing',
        'stack.items.instagram.title': 'Instagram',
        'stack.items.instagram.desc': 'Content, profile, growth',
        'stack.items.facebook.title': 'Facebook',
        'stack.items.facebook.desc': 'Page, posts, ads',
        'stack.items.analytics.title': 'Analytics',
        'stack.items.analytics.desc': 'KPIs, events, dashboards',
        'stack.items.gtm.title': 'GTM',
        'stack.items.gtm.desc': 'Tags, conversions, events',
        'stack.items.crm.title': 'CRM',
        'stack.items.crm.desc': 'Pipelines, statuses, lead control',
        'stack.items.email.title': 'Email',
        'stack.items.email.desc': 'Campaigns, segments, nurture',
        'stack.items.automation.title': 'Automation',
        'stack.items.automation.desc': 'Triggers and integrations',
        'stack.items.content.title': 'Content',
        'stack.items.content.desc': 'Plan and publishing',
        'stack.items.branding.title': 'Branding',
        'stack.items.branding.desc': 'Tone, visuals, packaging',
        'stack.items.support.title': 'Support',
        'stack.items.support.desc': 'Maintenance and fixes',
        'stack.items.reporting.title': 'Reporting',
        'stack.items.reporting.desc': 'Weekly/monthly reports',
        'clients.title': 'Who we help',
        'clients.subtitle': 'We help businesses grow in the digital space',
        'clients.small.title': 'Small business',
        'clients.small.desc': 'We help small companies go online and increase sales',
        'clients.stores.title': 'Online stores',
        'clients.stores.desc': 'We optimize e-commerce to improve conversion and revenue',
        'clients.creators.title': 'Experts & creators',
        'clients.creators.desc': 'We grow personal brands and increase social media audiences',
        'contact.title': 'Contact us',
        'contact.subtitle': 'Leave a request and we\'ll get back to you shortly',
        'contact.form.name': 'Name *',
        'contact.form.company': 'Company',
        'contact.form.email': 'Email *',
        'contact.form.phone': 'Phone number *',
        'contact.form.message': 'Tell me about your project',
        'contact.form.privacy': 'I agree to personal data processing',
        'contact.form.submit': 'Send',
        'footer.contacts': 'Contacts',
        'footer.navigation': 'Navigation',
        'footer.social': 'Social',
        'footer.phoneLabel': 'Phone',
        'footer.privacy': 'Privacy Policy',
        'footer.terms': 'Terms of Service',
        'footer.telegram': 'Telegram',
        'footer.whatsapp': 'WhatsApp',
        'footer.copyright': '© {year} Brandex. All rights reserved.',
        'footer.signature': 'Created by: Denys Kamenshchykov',
        'form.success': 'Thank you! Your request has been sent. We\'ll get back to you shortly.',
        'form.error': 'Submission failed. Please try again later or email us.',
        'cookie.text.prefix': 'We use cookies on our website. Learn more in our ',
        'cookie.text.link': 'Privacy Policy',
        'cookie.accept': 'Accept',
        'cookie.settings': 'Settings',
        'cookie.modal.title': 'Cookie settings',
        'cookie.modal.necessary': 'Necessary (always on)',
        'cookie.modal.analytics': 'Analytics',
        'cookie.modal.marketing': 'Marketing',
        'cookie.modal.save': 'Save',
        'cookie.modal.close': 'Close'
    }
};

// ============================================
// LANGUAGE MANAGEMENT
// ============================================
let currentLang = localStorage.getItem('lang') || 'ru';

function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    
    // Update HTML lang attribute
    document.documentElement.lang = lang;
    
    // Update meta description
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && translations[lang]['meta.description']) {
        metaDesc.setAttribute('content', translations[lang]['meta.description']);
    }
    
    // Update title via document.title (more reliable)
    if (translations[lang]['meta.title']) {
        document.title = translations[lang]['meta.title'];
    }
    
    // Apply translations to all elements with data-i18n
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            if (element.tagName === 'INPUT' && element.type === 'submit') {
                element.value = translations[lang][key];
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });
    
    // Update aria-label for elements with data-i18n-aria
    document.querySelectorAll('[data-i18n-aria]').forEach(element => {
        const key = element.getAttribute('data-i18n-aria');
        if (translations[lang][key]) {
            element.setAttribute('aria-label', translations[lang][key]);
        }
    });
    
    // Update copyright with current year
    updateCopyright();
    
    // Update language switcher UI
    setActiveLangUI(lang);
}

function setActiveLangUI(lang) {
    document.querySelectorAll('.lang-btn').forEach(btn => {
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

function updateCopyright() {
    const year = new Date().getFullYear();
    const copyrightText = translations[currentLang]['footer.copyright'].replace('{year}', year);
    const copyrightEl = document.getElementById('copyrightText');
    if (copyrightEl) {
        copyrightEl.textContent = copyrightText;
    }
    
    // Update signature
    const signatureText = translations[currentLang]['footer.signature'];
    const signatureEl = document.getElementById('signatureText');
    if (signatureEl) {
        signatureEl.textContent = signatureText;
    }
}

// ============================================
// INITIALIZATION
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    // Initialize language first
    applyLanguage(currentLang);
    
    // Language switcher buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            applyLanguage(lang);
        });
    });
    
    // ============================================
    // MOBILE MENU
    // ============================================
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (mobileMenuToggle && navMenu) {
        mobileMenuToggle.addEventListener('click', () => {
            const isActive = navMenu.classList.contains('active');
            navMenu.classList.toggle('active');
            mobileMenuToggle.classList.toggle('active');
            mobileMenuToggle.setAttribute('aria-expanded', !isActive);
        });
        
        // Close menu when clicking on a link
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
                mobileMenuToggle.setAttribute('aria-expanded', 'false');
            });
        });
    }
    
    // ============================================
    // SMOOTH SCROLL
    // ============================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // ============================================
    // CONTACT FORM
    // ============================================
    const contactForm = document.getElementById('contactForm');
    const contactBtn = document.getElementById('contactBtn');
    
    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const formMessage = document.getElementById('formMessage');
            const submitButton = contactForm.querySelector('button[type="submit"]');
            const originalButtonText = submitButton ? submitButton.textContent : '';
            
            // Check honeypot field
            const gotchaField = contactForm.querySelector('input[name="_gotcha"]');
            if (gotchaField && gotchaField.value) {
                // Spam detected, silently return
                return;
            }
            
            // Clear previous messages
            if (formMessage) {
                formMessage.textContent = '';
                formMessage.classList.remove('success', 'error');
            }
            
            // Disable submit button
            if (submitButton) {
                submitButton.disabled = true;
                submitButton.textContent = currentLang === 'ru' ? 'Отправка...' :
                                         currentLang === 'uk' ? 'Надсилання...' :
                                         'Sending...';
            }
            
            try {
                const formData = new FormData(contactForm);
                
                const response = await fetch(FORM_ENDPOINT, {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                });
                
                // Try to read JSON response if available
                let responseData = null;
                try {
                    const contentType = response.headers.get('content-type');
                    if (contentType && contentType.includes('application/json')) {
                        responseData = await response.json();
                    }
                } catch (jsonError) {
                    // Ignore JSON parsing errors
                }
                
                // Check for errors in response data
                if (responseData && responseData.errors && Array.isArray(responseData.errors) && responseData.errors.length > 0) {
                    throw new Error('Form submission failed: validation errors');
                }
                
                if (response.ok) {
                    // Success
                    if (formMessage) {
                        formMessage.textContent = translations[currentLang]['form.success'];
                        formMessage.classList.remove('error');
                        formMessage.classList.add('success');
                    }
                    
                    // Clear form fields
                    contactForm.reset();
                    
                    // Scroll to message
                    if (formMessage) {
                        formMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                    }
                } else {
                    // Error
                    throw new Error('Form submission failed');
                }
            } catch (error) {
                // Show error message
                if (formMessage) {
                    formMessage.textContent = translations[currentLang]['form.error'];
                    formMessage.classList.remove('success');
                    formMessage.classList.add('error');
                    formMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                }
                console.error('Form submission error:', error);
            } finally {
                // Re-enable submit button
                if (submitButton) {
                    submitButton.disabled = false;
                    submitButton.textContent = originalButtonText;
                }
            }
        });
    }
    
    // ============================================
    // SCROLL TO FORM
    // ============================================
    const scrollToForm = () => {
        const formSection = document.querySelector('.contact-form-section');
        if (formSection) {
            const headerOffset = 80;
            const elementPosition = formSection.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }
    };
    
    if (contactBtn) {
        contactBtn.addEventListener('click', scrollToForm);
    }
    
    const heroConsultation = document.getElementById('heroConsultation');
    const heroAudit = document.getElementById('heroAudit');
    const servicesConsultation = document.getElementById('servicesConsultation');
    const servicesAudit = document.getElementById('servicesAudit');
    
    if (heroConsultation) heroConsultation.addEventListener('click', scrollToForm);
    if (servicesConsultation) servicesConsultation.addEventListener('click', scrollToForm);
    
    const scrollToAudit = () => {
        scrollToForm();
        setTimeout(() => {
            const messageField = document.getElementById('message');
            if (messageField) {
                messageField.focus();
                const auditText = currentLang === 'ru' ? 'Хочу получить бесплатный аудит моего проекта.' :
                                currentLang === 'uk' ? 'Хочу отримати безкоштовний аудит мого проєкту.' :
                                'I would like to get a free audit of my project.';
                messageField.value = auditText;
            }
        }, 500);
    };
    
    if (heroAudit) heroAudit.addEventListener('click', scrollToAudit);
    if (servicesAudit) servicesAudit.addEventListener('click', scrollToAudit);
    
    // ============================================
    // COOKIE MANAGEMENT
    // ============================================
    const cookieBanner = document.getElementById('cookieBanner');
    const cookieModal = document.getElementById('cookieModal');
    const acceptCookies = document.getElementById('acceptCookies');
    const cookieSettings = document.getElementById('cookieSettings');
    const cookieSave = document.getElementById('cookieSave');
    const cookieClose = document.getElementById('cookieClose');
    
    function checkCookieConsent() {
        const consent = localStorage.getItem('cookieConsent');
        const prefs = localStorage.getItem('cookiePrefs');
        return consent === 'accepted' || prefs !== null;
    }
    
    function showCookieBanner() {
        if (!checkCookieConsent() && cookieBanner) {
            setTimeout(() => {
                if (cookieBanner) {
                    cookieBanner.classList.add('show');
                }
            }, 2000);
        }
    }
    
    function hideCookieBanner() {
        if (cookieBanner) {
            cookieBanner.classList.remove('show');
        }
    }
    
    function saveCookiePreferences() {
        const analyticsEl = document.getElementById('cookieAnalytics');
        const marketingEl = document.getElementById('cookieMarketing');
        if (analyticsEl && marketingEl) {
            const prefs = {
                necessary: true,
                analytics: analyticsEl.checked,
                marketing: marketingEl.checked
            };
            localStorage.setItem('cookiePrefs', JSON.stringify(prefs));
            localStorage.setItem('cookieConsent', 'accepted');
            hideCookieBanner();
            if (cookieModal) cookieModal.classList.remove('show');
        }
    }
    
    function loadCookiePreferences() {
        const prefsStr = localStorage.getItem('cookiePrefs');
        if (prefsStr) {
            try {
                const prefs = JSON.parse(prefsStr);
                const analyticsEl = document.getElementById('cookieAnalytics');
                const marketingEl = document.getElementById('cookieMarketing');
                if (analyticsEl) analyticsEl.checked = prefs.analytics || false;
                if (marketingEl) marketingEl.checked = prefs.marketing || false;
            } catch (e) {
                // Ignore parse errors
            }
        }
    }
    
    if (acceptCookies) {
        acceptCookies.addEventListener('click', () => {
            localStorage.setItem('cookieConsent', 'accepted');
            const prefs = {
                necessary: true,
                analytics: true,
                marketing: true
            };
            localStorage.setItem('cookiePrefs', JSON.stringify(prefs));
            hideCookieBanner();
        });
    }
    
    if (cookieSettings) {
        cookieSettings.addEventListener('click', () => {
            loadCookiePreferences();
            if (cookieModal) cookieModal.classList.add('show');
        });
    }
    
    if (cookieSave) {
        cookieSave.addEventListener('click', saveCookiePreferences);
    }
    
    if (cookieClose) {
        cookieClose.addEventListener('click', () => {
            if (cookieModal) cookieModal.classList.remove('show');
        });
    }
    
    // Close modal on backdrop click
    if (cookieModal) {
        cookieModal.addEventListener('click', (e) => {
            if (e.target === cookieModal) {
                cookieModal.classList.remove('show');
            }
        });
    }
    
    // Initialize cookie banner after language is set
    showCookieBanner();
    
    // ============================================
    // SCROLL ANIMATIONS
    // ============================================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.service-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
    
    document.querySelectorAll('.client-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
    
    document.querySelectorAll('.stack-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
    
    // Reveal animation observer for stack cards
    const revealItems = document.querySelectorAll('.reveal');
    if (revealItems.length) {
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    revealObserver.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });
        
        revealItems.forEach(item => {
            revealObserver.observe(item);
        });
    }
    
    // ============================================
    // HEADER SCROLL EFFECT
    // ============================================
    const header = document.querySelector('.header');
    if (header) {
        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;
            if (currentScroll > 100) {
                header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
            } else {
                header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
            }
        });
    }
    
    // ============================================
    // FORM VALIDATION
    // ============================================
    const formInputs = document.querySelectorAll('.contact-form input, .contact-form textarea');
    
    formInputs.forEach(input => {
        input.addEventListener('blur', () => {
            if (input.hasAttribute('required') && !input.value.trim()) {
                input.style.borderColor = '#dc3545';
            } else {
                input.style.borderColor = '#e0e0e0';
            }
        });
        
        input.addEventListener('input', () => {
            if (input.style.borderColor === 'rgb(220, 53, 69)') {
                input.style.borderColor = '#e0e0e0';
            }
        });
    });
    
    const emailInput = document.getElementById('email');
    if (emailInput) {
        emailInput.addEventListener('blur', () => {
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (emailInput.value && !emailPattern.test(emailInput.value)) {
                emailInput.style.borderColor = '#dc3545';
            } else if (emailInput.value) {
                emailInput.style.borderColor = '#28a745';
            }
        });
    }
    
    const phoneInput = document.getElementById('phone');
    if (phoneInput) {
        phoneInput.addEventListener('input', (e) => {
            let value = e.target.value;
            // Allow leading + and digits, remove all other non-digit chars except first +
            value = value.replace(/[^\d+]/g, '').replace(/(?!^)\+/g, '');
            e.target.value = value;
        });
    }
});
