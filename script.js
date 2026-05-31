/* ==========================================================================
       i18n dictionary  —  English / Arabic
       ========================================================================== */
const I18N = {
  en: {
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.experience": "Experience",
    "nav.projects": "Projects",
    "nav.contact": "Contact",
    "nav.cta": "Let's Ship",
    "lang.switch": "العربية",

    "hero.name": "Maryam<em> Asha</em>",
    "hero.role":
      'Full Stack Developer building production systems with <span class="stack">Laravel</span> &amp; <span class="stack">Vue.js</span> — where performance and complexity are hard requirements.',
    "hero.lead":
      "3+ years building production backends — caching, query optimization, real-time architectures, and AI-integrated search. Engineering foundation that owns the full delivery cycle.",
    "hero.viewPortfolio": "View Work",
    "hero.downloadCv": "Download CV",
    "hero.card.term": "whoami",
    "hero.card.quote":
      'Engineer who optimizes <em style="color: var(--accent)">before it is a fire</em> — not after.',
    "hero.card.role.l": "Role",
    "hero.card.role.v": "Full Stack Dev",
    "hero.card.focus.l": "Focus",
    "hero.card.focus.v": "Laravel · Vue.js",
    "hero.card.exp.l": "Experience",
    "hero.card.exp.v": "3+ yrs",
    "hero.card.addons.l": "Specialty",
    "hero.card.addons.v": "Real-time · Caching · AI search",

    "about.num": "01 / About",
    "about.title": "<em>Background</em>, briefly.",
    "about.lead":
      "I build production systems where <em>the easy paths don't scale</em> — and hold the line on performance, security, and observability.",
    "about.p1":
      "Backend-leaning developer based in Aleppo. 3+ years shipping Laravel APIs and Vue.js frontends — multi-tenant systems, real-time pipelines, schema design, RBAC, and caching.",
    "about.p2":
      "Background in data science — computer vision, NLP, embedding models — before moving to full-stack. Vector databases and AI features are familiar territory; reached for only when they earn their place.",
    "about.stat1.n": "<em>3+</em>",
    "about.stat1.l": "Years building<br/>full stack apps",
    "about.stat2.n": "<em>30%</em>",
    "about.stat2.l": "Faster APIs<br/>with Octane + Redis",
    "about.stat3.n": "2",
    "about.stat3.l": "Degrees<br/>BSc · MSc",

    "edu.label": "— Education",
    "edu1.year": "2025 — Present",
    "edu1.deg": "MSc, Business Administration",
    "edu1.inst": "Syrian Virtual University",
    "edu2.year": "2018 — 2023",
    "edu2.deg": "BSc, Information Technology",
    "edu2.inst": "Aleppo University",
    "edu3.year": "2022 — 2024",
    "edu3.deg": "Data Science · Independent Track",
    "edu3.inst":
      "CNNs, NLP, embedding models, computer vision.",

    "skills.num": "02 / Skills",
    "skills.title": "The <em>stack</em> I reach for.",
    "skills.backend.title": "Backend <em>· primary</em>",
    "skills.frontend.title": "Frontend <em>· primary</em>",
    "skills.ai.title": "AI &amp; Search <em>· integrated</em>",
    "skills.ai.caption":
      "Embedding models, vector search, AI-integrated features.",
    "skills.tools.title": "Tools <em>&amp; workflow</em>",
    "skills.tools.caption":
      "Automation, version control, load testing, observability.",
    "skills.lvl.expert": "Expert",
    "skills.lvl.advanced": "Advanced",
    "skills.lvl.proficient": "Proficient",
    "skills.row.mysql": "MySQL · Query Optimization",
    "skills.row.redis": "Redis · Octane · Caching",
    "skills.row.html": "HTML5 · Responsive CSS",
    "skills.chip.queues": "Queues &amp; Jobs",
    "skills.chip.multiTenant": "Multi-tenant",
    "skills.chip.semantic": "Semantic Search",
    "skills.chip.n8n": "n8n Automation",
    "skills.chip.agile": "Agile / Scrum",

    "exp.num": "03 / Experience",
    "exp.title": "Where I've <em>shipped</em>.",

    "exp1.tag": "2023 — Present",
    "exp1.role": "Full Stack Developer",
    "exp1.location": "Aleppo",
    "exp1.company": "Automata4 Group",
    "exp1.companySub": "— Wajab &amp; Katateeb",
    "exp1.body":
      "Lead developer across two platforms — Wajab (government complaints) and Katateeb (school ERP). Own backend, performance, and real-time infrastructure.",
    "exp1.li1":
      "Wajab — modular backend; Redis + Laravel Octane → 30% API speedup, sub-second p95.",
    "exp1.li2":
      "JMeter-validated at 500 concurrent users before launch.",
    "exp1.li3":
      "Katateeb — API services for students/teachers/admins; real-time chat & notifications on Laravel Reverb.",

    "exp2.tag": "2025 — Present",
    "exp2.subtag": "Full Stack Developer",
    "exp2.role": "Full Stack Developer",
    "exp2.company": "Comma",
    "exp2.companySub": "— ZOKA Marketplace",
    "exp2.body":
      "Building ZOKA — a multi-tenant marketplace across five actor types. Own backend services and dashboard infrastructure.",
    "exp2.li1":
      "Multi-store order orchestration — split → warehouse routing → reassembly → dispatch, with notification fanout per state.",
    "exp2.li2":
      "Dual-currency wallet (USD + SYP) with automatic store crediting on delivery.",
    "exp2.li3":
      "Infinite-depth category nesting; admin-configurable delivery pricing tiers.",

    "exp3.tag": "Apr — Sep 2025",
    "exp3.subtag": "Co-Founder · Lead Developer",
    "exp3.role": "Co-Founder &amp; Lead Developer",
    "exp3.company": "Wasla Startup",
    "exp3.body":
      "Co-founded Wasla. Led MVP architecture, technical execution, and market validation in parallel.",
    "exp3.li1":
      "Owned product, infrastructure, and stack decisions; shipped MVP in Laravel + Vue.js.",
    "exp3.li2":
      "Iterative validation — measured willingness to pay, not just interest.",
    "exp3.li3":
      "Wound down honestly when data made the call. Now: validate paid demand before writing code.",

    "exp4.tag": "2024",
    "exp4.subtag": "Freelance · AI Search",
    "exp4.role": "AI Search Integration — Freelance",
    "exp4.company": "E-commerce Client",
    "exp4.companySub": "— Bilingual Semantic Search",
    "exp4.body":
      "Bilingual semantic search for an e-commerce catalog. Replaced keyword matching that was missing valid AR/EN product matches.",
    "exp4.li1":
      "Vector search pipeline with multilingual-e5-large-instruct + Qdrant — AR/EN in the same vector space.",
    "exp4.li2":
      "Chose e5-large-instruct after measuring lighter models' Arabic dialect/morphology loss.",
    "exp4.li3":
      "Replaced keyword blind spots — misspellings, synonyms, cross-language all return relevant results.",

    "proj.num": "04 / Projects",
    "proj.title": "Selected <em>work</em>.",

    "proj1.tag": "— Featured · AI integration",
    "proj1.year": "2024",
    "proj1.title": "Bilingual <em>Semantic Search</em> Engine",
    "proj1.desc":
      'Vector search pipeline for a bilingual e-commerce catalog. Keyword search was missing cross-matches — "حذاء رياضي" missed "sneakers". Built on multilingual-e5-large-instruct + Qdrant; both languages in the same vector space. Chose e5-large after measuring Arabic morphology loss on lighter models.',

    "proj2.tag": "— Automation",
    "proj2.year": "2024 — Present",
    "proj2.title": "Production <em>Workflow</em> Automation",
    "proj2.desc":
      "n8n workflows replacing fragile cron-and-glue setups. Order-lifecycle notifications fan out across customer/store/warehouse on every ZOKA state. SLA-breach detection on Wajab auto-escalates to department heads. Retries, dead-letter handling, and a UI for non-developers — without server access.",

    "proj3.tag": "— Automata4",
    "proj3.label": "Production · Government",
    "proj3.title": "Wajab — <em>Complaint</em> Platform",
    "proj3.desc":
      "Multi-tenant platform routing citizen complaints across government levels. Redis + Laravel Octane → 30% API speedup, sub-second p95. JMeter-validated at 500 concurrent users before launch. Telegram bot as a parallel entry point — file from where you already are.",

    "proj4.tag": "— Comma",
    "proj4.label": "Production · Marketplace",
    "proj4.title": "ZOKA — <em>Multi-tenant</em> Marketplace",
    "proj4.desc":
      'Multi-store orchestration, dual-currency wallets, infinite-depth categories, real-time fanout across 5 actor types. A single order can span multiple stores: split → warehouse routing → reassembly → dispatch → automatic wallet crediting. The customer sees "on the way" — underneath, an 8-stage pipeline.',

    "chip.payments": "Payments",
    "chip.product": "Product",
    "chip.pyEmbed": "e5-large-instruct",
    "chip.vectorDb": "Qdrant",
    "chip.slackEmail": "Telegram · Email",

    "contact.num": "05 / Contact",
    "contact.title": "Let's <em>ship</em> something.",
    "contact.lead":
      "Available for <em>full-time and contract</em> work — Laravel/Vue, backend-heavy, real-time, or AI-augmented systems.",
    "contact.email": "Email",
    "contact.phone": "Phone",
    "contact.location": "Based in",
    "contact.locationV": "Aleppo, Syria · Remote",

    "form.name": "Your name",
    "form.namePh": "Jane Doe",
    "form.email": "Email",
    "form.emailPh": "jane@company.com",
    "form.subject": "Subject",
    "form.subjectPh": "What are we building?",
    "form.message": "Message",
    "form.messagePh":
      "A few sentences about the project, timeline and stack…",
    "form.send": "Send message",
    "form.errMissing": "— please fill in name, email and message.",
    "form.sending": "— sending…",
    "form.sent": "✓ thanks — I'll get back to you within 24h.",
    "form.cvSoon": '<i class="bi bi-check2"></i> CV link coming soon',

    "footer.copy": "© {year} Maryam Asha ·  All rights reserved",
    "footer.back": "↑ Back to top",

    "title.tab": "Maryam Asha — Full Stack Developer (Laravel · Vue.js)",

    strip: [
      "Laravel",
      "Laravel Octane",
      "Vue.js",
      "PHP",
      "MySQL",
      "Redis",
      "Laravel Reverb",
      "RESTful APIs",
      "RBAC",
      "Tailwind",
      "Vuetify",
      "n8n Automation",
      "Semantic Search",
      "Qdrant",
      "Telegram Bot API",
      "Apache JMeter",
    ],
  },

  ar: {
    "nav.about": "نبذة",
    "nav.skills": "المهارات",
    "nav.experience": "الخبرة",
    "nav.projects": "المشاريع",
    "nav.contact": "التواصل",
    "nav.cta": "لنبدأ",
    "lang.switch": "English",

    "hero.name": "مريم<em> عشا</em>",
    "hero.role":
      'مطوّرة Full Stack تبني أنظمة إنتاج بـ <span class="stack">Laravel</span> و<span class="stack">Vue.js</span> — حيث الأداء والتعقيد متطلّبان أساسيّان لا رفاهية.',
    "hero.lead":
      "أكثر من ٣ سنوات في بناء أنظمة خلفيّة إنتاجيّة — تخزين مؤقّت، تحسين استعلامات، بُنى لحظيّة، وبحث دلالي ذكي. بأساسٍ هندسيّ يغطّي دورة التسليم كاملةً.",
    "hero.viewPortfolio": "استعرض الأعمال",
    "hero.downloadCv": "تحميل السيرة الذاتية",
    "hero.card.term": "whoami",
    "hero.card.quote":
      'مهندسة تُحسِّن الأداء <em style="color: var(--accent)">قبل اشتعال الحريق</em> — لا بعده.',
    "hero.card.role.l": "الدور",
    "hero.card.role.v": "مطوّرة Full Stack",
    "hero.card.focus.l": "التخصّص",
    "hero.card.focus.v": "Laravel · Vue.js",
    "hero.card.exp.l": "الخبرة",
    "hero.card.exp.v": "+٣ سنوات",
    "hero.card.addons.l": "المجال",
    "hero.card.addons.v": "لحظي · تخزين · بحث ذكي",

    "about.num": "٠١ / نبذة",
    "about.title": "<em>الخلفية</em>، باختصار.",
    "about.lead":
      "أبني أنظمة إنتاجية لا تتّسع لها <em>الحلول السهلة</em> — وأحافظ على معايير الأداء والأمان وإمكانية الرصد.",
    "about.p1":
      "مطوّرة Full Stack ذات ميل خلفي، مقيمة في حلب. أكثر من ٣ سنوات في تشغيل Laravel وVue.js في الإنتاج — أنظمة متعدّدة المستأجرين، أنابيب لحظيّة، تصميم Schema، صلاحيّات RBAC، واستراتيجيات تخزين مؤقّت.",
    "about.p2":
      "خلفيّة في علم البيانات — رؤية حاسوبيّة، معالجة لغة طبيعيّة، نماذج تضمين — قبل الانتقال للهندسة الشاملة. قواعد البيانات المتجهيّة والميزات الذكيّة أرضٌ مألوفة؛ ألجأ إليها حين تستحقّ مكانها.",
    "about.stat1.n": "<em>+3</em>",
    "about.stat1.l": "سنوات في بناء<br/>تطبيقات Full Stack",
    "about.stat2.n": "<em>30%</em>",
    "about.stat2.l": "تسريع APIs<br/>بـ Octane وRedis",
    "about.stat3.n": "2",
    "about.stat3.l": "شهادات<br/>بكالوريوس · ماجستير",

    "edu.label": "— التعليم",
    "edu1.year": "٢٠٢٥ — حتى الآن",
    "edu1.deg": "ماجستير إدارة الأعمال",
    "edu1.inst": "الجامعة الافتراضيّة السوريّة",
    "edu2.year": "٢٠١٨ — ٢٠٢٣",
    "edu2.deg": "بكالوريوس تقنية المعلومات",
    "edu2.inst": "جامعة حلب",
    "edu3.year": "٢٠٢٢ — ٢٠٢٤",
    "edu3.deg": "علم البيانات · مسار مستقل",
    "edu3.inst":
      "شبكات CNN، معالجة لغة طبيعيّة، نماذج تضمين، رؤية حاسوبيّة.",

    "skills.num": "٠٢ / المهارات",
    "skills.title": "الـ <em>Stack</em> الذي أعتمد عليه.",
    "skills.backend.title": "الواجهة الخلفيّة <em>· أساسيّة</em>",
    "skills.frontend.title": "الواجهة الأماميّة <em>· أساسيّة</em>",
    "skills.ai.title": "الذكاء الاصطناعي والبحث <em>· مدمج</em>",
    "skills.ai.caption":
      "نماذج تضمين، بحث متجهي، وميزات معزّزة بالذكاء الاصطناعي.",
    "skills.tools.title": "الأدوات <em>وسير العمل</em>",
    "skills.tools.caption":
      "الأتمتة، إدارة الإصدارات، اختبار الحمل، والمراقبة.",
    "skills.lvl.expert": "متقدّم جدًا",
    "skills.lvl.advanced": "متقدّم",
    "skills.lvl.proficient": "جيّد",
    "skills.row.mysql": "MySQL · تحسين الاستعلامات",
    "skills.row.redis": "Redis · Octane · تخزين مؤقّت",
    "skills.row.html": "HTML5 · تصميم متجاوب",
    "skills.chip.queues": "الطوابير والمهام",
    "skills.chip.multiTenant": "متعدّد المستأجرين",
    "skills.chip.semantic": "بحث دلالي",
    "skills.chip.n8n": "أتمتة n8n",
    "skills.chip.agile": "أجايل / سكرَم",

    "exp.num": "٠٣ / الخبرة",
    "exp.title": "أين <em>أطلقتُ</em> أعمالي.",

    "exp1.tag": "٢٠٢ — حتى الآن",
    "exp1.role": "مطوّرة Full Stack",
    "exp1.location": "حلب ",
    "exp1.company": "مجموعة Automata4",
    "exp1.companySub": "— Wajab و Katateeb",
    "exp1.body":
      "مطوّرة رئيسيّة على منصّتَين — Wajab (إدارة الشكاوى الحكوميّة) و Katateeb (نظام إدارة مدرسي). أتولّى البنية الخلفيّة والأداء والبنى اللحظيّة.",
    "exp1.li1":
      "Wajab — بنية خلفيّة معياريّة؛ Redis مع Laravel Octane ← تسريع APIs بنسبة ٣٠٪، p95 دون الثانية.",
    "exp1.li2":
      "اختبار حِمل بـ Apache JMeter عند ٥٠٠ مستخدم متزامن قبل الإطلاق.",
    "exp1.li3":
      "Katateeb — خدمات API للطلاب والمعلّمين والإداريين؛ دردشة وإشعارات لحظيّة على Laravel Reverb.",

    "exp2.tag": "٢٠٢٥ — حتى الآن",
    "exp2.subtag": "مطوّرة Full Stack",
    "exp2.role": "مطوّرة Full Stack",
    "exp2.company": "Comma",
    "exp2.companySub": "— سوق ZOKA الإلكتروني",
    "exp2.body":
      "أبني ZOKA — سوقًا متعدّد المستأجرين بخمسة أنواع من المستخدمين. أتولّى الخدمات الخلفيّة وبنية لوحات التحكّم.",
    "exp2.li1":
      "تنسيق طلبات متعدّدة المتاجر — تقسيم ← توجيه عبر أقرب مستودع ← إعادة تجميع ← إرسال، مع إشعارات لحظيّة عند كلّ انتقال.",
    "exp2.li2":
      "محفظة ثنائيّة العملة (دولار + ليرة) مع إيداع تلقائي للمتاجر عند التسليم.",
    "exp2.li3":
      "تشجير فئات بعمق لا نهائي؛ تسعير توصيل ديناميكي قابل للتعديل من لوحة الإدارة.",

    "exp3.tag": "تموز — أيلول ٢٠٢٥",
    "exp3.subtag": "شريكة مؤسِّسة · قائدة تقنية",
    "exp3.role": "شريكة مؤسِّسة وقائدة تقنية",
    "exp3.company": "شركة Wasla",
    "exp3.body":
      "شاركتُ في تأسيس Wasla. قُدتُ معماريّة الـ MVP والتنفيذ التقني ودورات تحقّق السوق بالتوازي.",
    "exp3.li1":
      "قرارات المنتج والبنية التحتية والتقنيات؛ أطلقتُ الـ MVP بـ Laravel و Vue.js.",
    "exp3.li2":
      "تحقّق تكراري بالتوازي مع التطوير — قِسْتُ الاستعداد للدفع، لا مجرّد الاهتمام.",
    "exp3.li3":
      "أنهينا المشروع بصدق حين حسمت البياناتُ القرار. الآن: أتحقّق من الطلب المدفوع قبل كتابة أيّ سطر.",

    "exp4.tag": "٢٠٢٤",
    "exp4.subtag": "عمل حر · بحث ذكي",
    "exp4.role": "دمج بحث دلالي — عمل حر",
    "exp4.company": "عميل تجارة إلكترونيّة",
    "exp4.companySub": "— بحث دلالي ثنائي اللغة",
    "exp4.body":
      "بحث دلالي ثنائي اللغة لكتالوج تجارة إلكترونيّة — استبدلتُ المطابقة المعتمدة على الكلمات المفتاحيّة.",
    "exp4.li1":
      "سلسلة بحث متجهيّة بـ multilingual-e5-large-instruct مع Qdrant — العربيّة والإنجليزيّة في فضاء واحد.",
    "exp4.li2":
      "اخترتُ e5-large-instruct بعد قياس فقدان النماذج الأخفّ لدقّة اللهجة والصرف العربي.",
    "exp4.li3":
      "الأخطاء الإملائيّة والمرادفات والاستعلامات عبر اللغات — كلّها تعود بنتائج دلاليّة دقيقة.",

    "proj.num": "٠٤ / المشاريع",
    "proj.title": "أعمال <em>مختارة</em>.",

    "proj1.tag": "— مُميَّز · دمج ذكاء اصطناعي",
    "proj1.year": "٢٠٢٤",
    "proj1.title": "محرّك <em>بحث دلالي</em> ثنائي اللغة",
    "proj1.desc":
      'سلسلة بحث متجهي لكتالوج ثنائي اللغة — البحث بالكلمات كان يفوّت تطابقات ("حذاء رياضي" يفوّت "sneakers"). مبني على multilingual-e5-large-instruct مع Qdrant؛ اللغتان في فضاء واحد. اخترتُ e5-large بعد قياس فقدان الصرف العربي على النماذج الأخفّ.',

    "proj2.tag": "— أتمتة",
    "proj2.year": "٢٠٢٤ — حتى الآن",
    "proj2.title": "<em>أتمتة</em> سير العمل الإنتاجي",
    "proj2.desc":
      "سلاسل أتمتة n8n تستبدل بنى الكرون-والنصوص الهشّة. إشعارات دورة حياة الطلبات تتفرّع للعميل/المتجر/المستودع عند كلّ انتقال في ZOKA. كشف خرق الـ SLA في Wajab يُصعّد تلقائيًا. إعادات، طوابير فشل، وواجهة لغير المطوّرين — دون وصول للسيرفر.",

    "proj3.tag": "— Automata4",
    "proj3.label": "إنتاج · حكومي",
    "proj3.title": "Wajab — منصّة <em>الشكاوى</em>",
    "proj3.desc":
      "منصّة متعدّدة المستأجرين تُوجّه شكاوى المواطنين عبر مستويات حكوميّة متعدّدة. Redis مع Laravel Octane ← تسريع APIs بنسبة ٣٠٪، p95 دون الثانية. اختبار JMeter عند ٥٠٠ مستخدم متزامن قبل الإطلاق. روبوت Telegram كمدخل مواز — التقديم من حيث أنت بالفعل.",

    "proj4.tag": "— Comma",
    "proj4.label": "إنتاج · سوق",
    "proj4.title": "ZOKA — سوق <em>متعدّد المستأجرين</em>",
    "proj4.desc":
      'تنسيق طلبات متعدّدة المتاجر، محافظ ثنائيّة العملة، تشجير فئات لا نهائي، إشعارات لحظيّة عبر خمسة أنواع من المستخدمين. طلب واحد قد يضمّ منتجات من متاجر متعدّدة: تقسيم ← توجيه ← إعادة تجميع ← إرسال ← إيداع تلقائي. العميل يرى "في الطريق" — تحت السطح، سلسلة بثماني مراحل.',

    "chip.payments": "الدفع",
    "chip.product": "منتج",
    "chip.pyEmbed": "e5-large-instruct",
    "chip.vectorDb": "Qdrant",
    "chip.slackEmail": "Telegram · بريد",

    "contact.num": "٠٥ / التواصل",
    "contact.title": "لنُطلق <em>شيئًا</em> معًا.",
    "contact.lead":
      "متاحة لـ <em>الدوام الكامل والعقود</em> — منصّات Laravel/Vue، أنظمة خلفيّة كثيفة، لحظيّة، أو مدعومة بالذكاء الاصطناعي.",
    "contact.email": "البريد",
    "contact.phone": "الهاتف",
    "contact.location": "المقر",
    "contact.locationV": "حلب،سوريا ",

    "form.name": "الاسم",
    "form.namePh": "مثال: أحمد علي",
    "form.email": "البريد الإلكتروني",
    "form.emailPh": "name@company.com",
    "form.subject": "الموضوع",
    "form.subjectPh": "ما الذي سنبنيه معًا؟",
    "form.message": "الرسالة",
    "form.messagePh":
      "وصف موجز للمشروع والجدول الزمني والتقنيات…",
    "form.send": "إرسال الرسالة",
    "form.errMissing": "— يُرجى تعبئة الاسم والبريد والرسالة.",
    "form.sending": "— جارٍ الإرسال…",
    "form.sent": "✓ شكرًا — سأعود إليكم خلال ٢٤ ساعة.",
    "form.cvSoon": '<i class="bi bi-check2"></i> رابط السيرة الذاتية قريبًا',

    "footer.copy": "© {year} مريم عشا . جميع الحقوق محفوظة",
    "footer.back": "↑ العودة إلى الأعلى",

    "title.tab": "مريم عشا — مطوّرة Full Stack (Laravel · Vue.js)",

    strip: [
      "Laravel",
      "Laravel Octane",
      "Vue.js",
      "PHP",
      "MySQL",
      "Redis",
      "Laravel Reverb",
      "RESTful APIs",
      "RBAC",
      "Tailwind",
      "Vuetify",
      "أتمتة n8n",
      "بحث دلالي",
      "Qdrant",
      "Telegram Bot API",
      "Apache JMeter",
    ],
  },
};

/* ==========================================================================
       1) Theme  —  light (default) / dark + persisted
       ========================================================================== */
const THEME_KEY = "pf.theme";
const themeBtn = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");

function applyTheme(t) {
  const root = document.documentElement;
  if (t === "dark") root.setAttribute("data-theme", "dark");
  else root.removeAttribute("data-theme");
  themeIcon.className = t === "dark" ? "bi bi-sun" : "bi bi-moon-stars";
  themeBtn.setAttribute(
    "aria-label",
    t === "dark" ? "Switch to light mode" : "Switch to dark mode",
  );
}
let theme =
  localStorage.getItem(THEME_KEY) ||
  (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
applyTheme(theme);

themeBtn.addEventListener("click", () => {
  theme = theme === "dark" ? "light" : "dark";
  localStorage.setItem(THEME_KEY, theme);
  themeBtn.classList.add("spin");
  setTimeout(() => themeBtn.classList.remove("spin"), 400);
  // Premium fade: briefly veil the page, swap theme tokens, then reveal.
  withPageFade(() => applyTheme(theme));
});

/* ==========================================================================
       2) Language  —  en / ar + persisted, full content swap + RTL
       ========================================================================== */
const LANG_KEY = "pf.lang";
const langBtn = document.getElementById("langToggle");
const langLabel = document.getElementById("langLabel");
const stripEl = document.getElementById("strip");

/* -----------------------------------------------------------
   Wordmark — robot-typewriter animation
   Cycles: type → pause (dots) → erase → pause (dots) → type
   ----------------------------------------------------------- */
const WORDMARK_SEGMENTS = {
  en: [
    { text: "<",      cls: "tw-bracket" },
    { text: "maryam", cls: "tw-first"   },
    { text: "-",      cls: "tw-sep"     },
    { text: "asha",   cls: "tw-last"    },
    { text: ">",      cls: "tw-bracket" },
  ],
  ar: [
    { text: "<",    cls: "tw-bracket" },
    { text: "مريم", cls: "tw-first"   },
    { text: " ",    cls: "tw-sep"     },
    { text: "عشا",  cls: "tw-last"    },
    { text: ">",    cls: "tw-bracket" },
  ],
};
let wmTypingState = null;

function startWordmarkTyping(langCode) {
  const wm = document.getElementById("wordmark");
  if (!wm) return;

  // Cancel any previous animation
  if (wmTypingState) {
    wmTypingState.cancelled = true;
    if (wmTypingState.timer) clearTimeout(wmTypingState.timer);
  }

  // Honour user preference for reduced motion — keep the static fallback
  if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    wm.classList.remove("is-typing");
    const existing = wm.querySelector(".wm-typed");
    if (existing) existing.remove();
    return;
  }

  // Ensure typing container exists
  let typed = wm.querySelector(".wm-typed");
  if (!typed) {
    typed = document.createElement("span");
    typed.className = "wm-typed";
    wm.appendChild(typed);
  }
  wm.classList.add("is-typing");

  // Flatten per-character with class metadata
  const segments = WORDMARK_SEGMENTS[langCode] || WORDMARK_SEGMENTS.en;
  const chars = [];
  for (const seg of segments) {
    for (const ch of seg.text) chars.push({ ch, cls: seg.cls });
  }

  const state = {
    chars,
    visible: 0,
    direction: 1, // 1 = typing forward, -1 = erasing
    cancelled: false,
    timer: null,
  };
  wmTypingState = state;

  const escapeChar = (c) =>
    c === "<" ? "&lt;" : c === ">" ? "&gt;" : c === "&" ? "&amp;" : c;

  function render() {
    if (state.cancelled) return;

    // Coalesce consecutive same-class chars into a single span
    const groups = [];
    for (let i = 0; i < state.visible; i++) {
      const { ch, cls } = state.chars[i];
      const top = groups[groups.length - 1];
      if (top && top.cls === cls) top.text += escapeChar(ch);
      else groups.push({ text: escapeChar(ch), cls });
    }

    let html = groups
      .map((g) => '<span class="' + g.cls + '">' + g.text + "</span>")
      .join("");
    html += '<span class="tw-cursor" aria-hidden="true"></span>';
    typed.innerHTML = html;
  }

  function tick() {
    if (state.cancelled) return;

    if (state.direction === 1) {
      state.visible++;
      if (state.visible >= state.chars.length) {
        state.visible = state.chars.length;
        state.direction = -1;
        render();
        state.timer = setTimeout(tick, 2200);
        return;
      }
    } else {
      state.visible--;
      if (state.visible <= 0) {
        state.visible = 0;
        state.direction = 1;
        render();
        state.timer = setTimeout(tick, 700);
        return;
      }
    }

    render();
    state.timer = setTimeout(tick, state.direction === 1 ? 130 : 70);
  }

  render();
  state.timer = setTimeout(tick, 400);
}

function applyLang(lang) {
  const dict = I18N[lang] || I18N.en;
  const root = document.documentElement;
  root.setAttribute("lang", lang);
  root.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");

  // 1) innerHTML swaps
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (!(key in dict)) return;
    if (key === "footer.copy") {
      el.innerHTML = dict[key].replace("{year}", new Date().getFullYear());
    } else {
      el.innerHTML = dict[key];
    }
  });

  // 2) placeholder attribute swaps
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (key in dict) el.setAttribute("placeholder", dict[key]);
  });

  // 3) document title
  document.title = dict["title.tab"] || document.title;

  // 4) marquee — rebuild with translated tokens
  if (stripEl && Array.isArray(dict.strip)) {
    const items = dict.strip.concat(dict.strip); // duplicate for seamless loop
    stripEl.innerHTML = items.map((t) => `<span>${t}</span>`).join("");
  }

  // 5) Button label
  if (langLabel) langLabel.textContent = dict["lang.switch"];

  // 6) Restart wordmark typing animation in the active language
  startWordmarkTyping(lang);
}

let lang = localStorage.getItem(LANG_KEY) || "en";
applyLang(lang);

langBtn.addEventListener("click", () => {
  lang = lang === "ar" ? "en" : "ar";
  localStorage.setItem(LANG_KEY, lang);
  // Premium fade across the full content swap
  withPageFade(() => {
    applyLang(lang);
    animateVisibleBars();
  });
});

/* ==========================================================================
       3) Nav  —  shadow on scroll + scroll-spy
       ========================================================================== */
const navbar = document.getElementById("navbar");
const navLinks = document.querySelectorAll("#navLinks a");
const sections = ["about", "skills", "experience", "projects", "contact"].map(
  (id) => document.getElementById(id),
);

const onScroll = () => {
  navbar.classList.toggle("scrolled", window.scrollY > 4);
  const y = window.scrollY + 120;
  let active = null;
  for (const s of sections) {
    if (s && s.offsetTop <= y) active = s.id;
  }
  navLinks.forEach((a) =>
    a.classList.toggle("active", a.getAttribute("href") === "#" + active),
  );
};
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

/* ==========================================================================
       4) Reveal-on-scroll
       ========================================================================== */
const io = new IntersectionObserver(
  (entries) => {
    for (const e of entries) {
      if (e.isIntersecting) {
        e.target.classList.add("in");
        io.unobserve(e.target);
      }
    }
  },
  { threshold: 0.12 },
);
document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

/* ==========================================================================
       5) Animate skill bars when visible
       ========================================================================== */
function animateVisibleBars() {
  document.querySelectorAll(".bar > span").forEach((s) => {
    s.style.width = (s.getAttribute("data-w") || "70") + "%";
  });
}
const barIo = new IntersectionObserver(
  (entries) => {
    for (const e of entries) {
      if (e.isIntersecting) {
        e.target.querySelectorAll(".bar > span").forEach((s) => {
          s.style.width = (s.getAttribute("data-w") || "70") + "%";
        });
        barIo.unobserve(e.target);
      }
    }
  },
  { threshold: 0.3 },
);
document.querySelectorAll(".skill-group").forEach((el) => barIo.observe(el));

/* ==========================================================================
       6) Download CV placeholder
       ========================================================================== */
document.getElementById("downloadCv").addEventListener("click", (e) => {
  e.preventDefault();
  const span = e.currentTarget.querySelector("span");
  const original = span.innerHTML;
  const dict = I18N[lang] || I18N.en;
  span.innerHTML = dict["form.cvSoon"];
  setTimeout(() => {
    span.innerHTML = original;
  }, 1800);
});

/* ==========================================================================
       7) Contact form
       ========================================================================== */
const form = document.getElementById("contactForm");
const status = document.getElementById("cf-status");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const dict = I18N[lang] || I18N.en;
  const name = document.getElementById("cf-name").value.trim();
  const email = document.getElementById("cf-email").value.trim();
  const msg = document.getElementById("cf-message").value.trim();
  if (!name || !email || !msg) {
    status.textContent = dict["form.errMissing"];
    status.style.color = "#E8A88E";
    return;
  }
  status.textContent = dict["form.sending"];
  status.style.color = "rgba(255,255,255,.55)";
  setTimeout(() => {
    status.textContent = dict["form.sent"];
    status.style.color = "#9DDFBF";
    form.reset();
  }, 900);
});

/* ==========================================================================
       8) PREMIUM SIGNATURE — scroll progress, parallax grain,
          page-fade helper, magnetic card glow, etc.
       ========================================================================== */
const prefersReducedMotion = matchMedia(
  "(prefers-reduced-motion: reduce)",
).matches;

/* --- 8a. Ultra-thin scroll progress bar ------------------------------ */
const progressEl = document.getElementById("scrollProgressFill");
let scrollRaf = 0;
function updateScrollProgress() {
  scrollRaf = 0;
  const doc = document.documentElement;
  const max = doc.scrollHeight - doc.clientHeight || 1;
  const pct = Math.min(100, Math.max(0, (window.scrollY / max) * 100));
  if (progressEl) progressEl.style.width = pct.toFixed(2) + "%";
  // 8b. Parallax grain — shift the fixed grain layer by a sub-pixel ratio.
  // Tiny offset keeps the texture "alive" without becoming distracting.
  if (!prefersReducedMotion) {
    const offset = (window.scrollY % 600) * 0.06; // ≤ 36px range
    document.body.style.setProperty("--grain-y", offset.toFixed(2) + "px");
  }
}
window.addEventListener(
  "scroll",
  () => {
    if (!scrollRaf) scrollRaf = requestAnimationFrame(updateScrollProgress);
  },
  { passive: true },
);
window.addEventListener("resize", updateScrollProgress, { passive: true });
updateScrollProgress();

/* --- 8c. Page fade for theme / language switches --------------------- */
function withPageFade(applyChange) {
  const root = document.documentElement;
  if (prefersReducedMotion) {
    applyChange();
    return;
  }
  root.classList.add("is-switching");
  // Wait one frame past the CSS opacity transition (≈ 320ms) before
  // swapping content so the user sees a clean fade-out → fade-in.
  window.setTimeout(() => {
    applyChange();
    // Allow the new DOM to paint before fading back in.
    requestAnimationFrame(() => {
      requestAnimationFrame(() => root.classList.remove("is-switching"));
    });
  }, 320);
}

/* --- 8d. Magnetic rust glow on project cards ------------------------- */
if (!prefersReducedMotion) {
  document.querySelectorAll(".proj-card").forEach((card) => {
    card.addEventListener("pointermove", (e) => {
      const r = card.getBoundingClientRect();
      const x = ((e.clientX - r.left) / r.width) * 100;
      const y = ((e.clientY - r.top) / r.height) * 100;
      card.style.setProperty("--mx", x.toFixed(1) + "%");
      card.style.setProperty("--my", y.toFixed(1) + "%");
    });
    card.addEventListener("pointerleave", () => {
      card.style.setProperty("--mx", "50%");
      card.style.setProperty("--my", "0%");
    });
  });
}

/* --- 8e. Subtle magnetic pull on the primary CTA buttons ------------- */
if (!prefersReducedMotion && matchMedia("(pointer: fine)").matches) {
  document.querySelectorAll(".btn-ink, .btn-ghost, .nav-cta").forEach((btn) => {
    btn.addEventListener("pointermove", (e) => {
      const r = btn.getBoundingClientRect();
      const dx = (e.clientX - (r.left + r.width / 2)) * 0.18;
      const dy = (e.clientY - (r.top + r.height / 2)) * 0.18 - 2; // bake in CSS lift
      btn.style.transform = `translate(${dx.toFixed(2)}px, ${dy.toFixed(2)}px)`;
    });
    btn.addEventListener("pointerleave", () => {
      btn.style.transform = "";
    });
  });
}

/* --- 8f. Refresh the reveal observer + scroll progress on font load -- */
if (document.fonts && document.fonts.ready) {
  document.fonts.ready.then(updateScrollProgress);
}
