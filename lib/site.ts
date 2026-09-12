export const site = {
  name: 'Vorlen',
  domain: 'vorlen.co.uk',
  url: 'https://www.vorlen.co.uk',
  email: 'hello@vorlen.co.uk',
  location: 'Manchester, UK',
  description:
    'Vorlen is an independent digital studio in Manchester creating high-performance websites, web applications, ecommerce experiences, AI automation and search-led growth systems.',
};

export type Service = {
  slug: string;
  number: string;
  name: string;
  short: string;
  intro: string;
  outcomes: string[];
  deliverables: string[];
  questions: { q: string; a: string }[];
};

export const services: Service[] = [
  {
    slug: 'strategy-positioning', number: '01', name: 'Strategy & positioning', short: 'Clarify what you sell, why it matters and how the digital experience should make that obvious.',
    intro: 'We turn commercial goals, audience insight and competitive context into a clear digital proposition. This gives design, content and technology one shared direction.',
    outcomes: ['A sharper proposition', 'Clearer user journeys', 'A prioritised digital roadmap', 'Messaging that is easier to understand and repeat'],
    deliverables: ['Discovery workshop', 'Audience and competitor review', 'Value proposition and messaging', 'Information architecture', 'Content hierarchy', 'Measurement plan'],
    questions: [
      { q: 'When do we need strategy before design?', a: 'When the offer, audience, priorities or message are not yet clear enough to make confident design decisions. Strategy reduces expensive rework later.' },
      { q: 'Can you work with an existing brand?', a: 'Yes. We can preserve the useful equity in an existing brand while improving how it is expressed digitally.' },
    ],
  },
  {
    slug: 'web-design-development', number: '02', name: 'Web design & development', short: 'Fast, distinctive websites designed around real user intent and measurable business outcomes.',
    intro: 'We design and build bespoke websites that make a business easier to understand, trust and choose. The same team handles experience, interface and engineering, so the final build stays true to the strategy.',
    outcomes: ['Stronger first impressions', 'Faster paths to enquiry', 'Better mobile experience', 'A technical foundation built for search and growth'],
    deliverables: ['UX and UI design', 'Responsive front-end development', 'CMS architecture', 'Technical SEO foundations', 'Analytics-ready events', 'Accessibility and performance review'],
    questions: [
      { q: 'Do you use templates?', a: 'We can work within an existing platform when that is commercially sensible, but the experience and interface are shaped around the business rather than a generic page kit.' },
      { q: 'Can you improve an existing website instead of rebuilding it?', a: 'Yes. We can audit the existing site and recommend whether targeted improvements or a rebuild will create the better return.' },
    ],
  },
  {
    slug: 'web-applications', number: '03', name: 'Web applications', short: 'Purpose-built portals, dashboards and operational tools that remove friction from real workflows.',
    intro: 'We design web applications around the work people actually need to complete. That means fewer unnecessary screens, clearer states and software that feels obvious from the first use.',
    outcomes: ['Less manual admin', 'Clearer operational visibility', 'Fewer workflow hand-offs', 'Software tailored to your process'],
    deliverables: ['Workflow mapping', 'Product UX', 'Interface design system', 'Full-stack development', 'API integrations', 'Role-based experiences'],
    questions: [
      { q: 'What kind of web apps do you build?', a: 'Client portals, internal tools, workflow systems, dashboards, booking experiences and purpose-built operational software.' },
      { q: 'Can you integrate with our existing systems?', a: 'Usually yes. We scope available APIs, authentication, data ownership and failure handling before defining the integration approach.' },
    ],
  },
  {
    slug: 'ai-automation', number: '04', name: 'AI & automation', short: 'Practical automation that removes repetitive work without making the business harder to control.',
    intro: 'We identify repeatable work, decision points and hand-offs that can be automated safely. AI is used where it creates a real advantage, not where a simpler rule or integration would be better.',
    outcomes: ['Faster response times', 'Less repetitive admin', 'More consistent workflows', 'Human review where judgement still matters'],
    deliverables: ['Automation opportunity map', 'AI-assisted workflows', 'CRM and inbox automation', 'Data enrichment', 'Human-in-the-loop controls', 'Monitoring and fallback design'],
    questions: [
      { q: 'What should a business automate first?', a: 'High-volume, repeatable tasks with clear inputs and outputs are usually the best starting point. We prioritise by time saved, risk and implementation effort.' },
      { q: 'Does every automation need AI?', a: 'No. Often the most reliable solution is a conventional integration or rule. We use AI only where language, classification, extraction or flexible reasoning genuinely helps.' },
    ],
  },
  {
    slug: 'ecommerce', number: '05', name: 'Ecommerce', short: 'Commerce experiences that make products easier to want, understand and buy.',
    intro: 'We combine brand expression, product discovery and conversion design into one coherent shopping experience, with technical foundations that support merchandising and organic growth.',
    outcomes: ['Clearer product discovery', 'Less purchase friction', 'Stronger product storytelling', 'A scalable merchandising system'],
    deliverables: ['Store UX and UI', 'Product page systems', 'Collection architecture', 'Checkout optimisation', 'Search and filtering', 'Technical SEO and structured data'],
    questions: [
      { q: 'Which ecommerce platforms do you work with?', a: 'We choose around requirements, team capability and integrations. Shopify and WooCommerce are common options, but platform choice follows the business case.' },
      { q: 'Can you improve conversion without a full redesign?', a: 'Yes. We can focus on the highest-friction parts of the journey, such as product pages, navigation, trust signals or checkout.' },
    ],
  },
  {
    slug: 'search-growth', number: '06', name: 'Search & growth', short: 'Search foundations and content systems built for people, traditional search and AI-assisted discovery.',
    intro: 'We structure sites so important pages are technically accessible, semantically clear and genuinely useful. That covers SEO, answer-focused content, entity clarity and the signals that help search and AI systems understand a business.',
    outcomes: ['Better crawlability and indexation', 'Clearer topical authority', 'Pages designed around real intent', 'More useful measurement and iteration'],
    deliverables: ['Technical SEO audit', 'Keyword and intent mapping', 'Information architecture', 'On-page optimisation', 'Structured data', 'AEO/GEO content framework'],
    questions: [
      { q: 'What is AEO?', a: 'Answer engine optimisation is the practice of making content easy to understand, extract and cite when a user asks a direct question in search or an AI interface.' },
      { q: 'What is GEO?', a: 'Generative engine optimisation focuses on making a brand and its content understandable and credible to generative search systems. In practice, it depends heavily on strong SEO, clear entities, useful original content and verifiable claims.' },
    ],
  },
];

export const projects = [
  { slug: 'ame-services', number: '01', client: 'AMÉ SERVICES', type: 'Brand / Digital / Growth', title: 'A service business presented like a category leader.', tone: 'lime', summary: 'A sharper proposition, clearer service hierarchy and a more decisive enquiry journey.' },
  { slug: 'ivy-and-pearls', number: '02', client: 'IVY & PEARLS', type: 'Commerce / Brand / Conversion', title: 'Turning product into desire.', tone: 'silver', summary: 'An editorial commerce system designed to make product discovery and purchase feel effortless.', externalUrl: 'https://ivyandpearls.co.uk/' },
  { slug: 'northstar', number: '03', client: 'NORTHSTAR', type: 'AI / Operations / Platform', title: 'Replacing fragmented operations with one intelligent system.', tone: 'orange', summary: 'A unified operational experience built around clear workflows, visibility and automation.' },
  { slug: 'ntm-associates', number: '04', client: 'NTM ASSOCIATES', type: 'Web / SEO / Local Search', title: 'Making professional accountancy feel simple, local and easy to choose.', tone: 'lime', summary: 'A conversion-focused accountancy website for a Rochdale firm, with clear service architecture, local search landing pages and practical tax content.', externalUrl: 'https://www.ntmassociatesltd.co.uk/' },
  { slug: 'tenant-dashboard', number: '05', client: 'ZOCHAT', type: 'SaaS / AI / Customer Support', title: 'Turning AI customer support into a manageable multi-tenant product.', tone: 'silver', summary: 'A multi-tenant support dashboard for configuring AI chat, handling conversations and tickets, and managing tenant-level support workflows.', externalUrl: 'https://dashboard-kappa-flax-30.vercel.app/' },
  { slug: 'badr-adventures', number: '06', client: 'BADR ADVENTURES', type: 'Web / Booking / SEO', title: 'Building a distinctive digital home for faith-friendly outdoor adventure.', tone: 'orange', summary: 'A content-rich adventure platform presenting guided hiking, camping and outdoor experiences with clear discovery, booking journeys and search-focused content.', externalUrl: 'https://badradventures.co.uk/' },
];

export const insights = [
  {
    slug: 'seo-aeo-geo-one-foundation',
    title: 'SEO, AEO and GEO: one strong foundation, not three separate tricks',
    description: 'How technical SEO, explicit answers, clear entities and credible evidence work together across search and AI discovery.',
    date: '2026-09-11',
    readTime: '6 min read',
  },
  {
    slug: 'website-redesign-brief',
    title: 'What a useful website redesign brief should actually contain',
    description: 'The decisions that need to be clear before visual design begins, from commercial goals to content and measurement.',
    date: '2026-09-11',
    readTime: '5 min read',
  },
  {
    slug: 'automation-first-workflow',
    title: 'What should a business automate first?',
    description: 'A practical way to rank repetitive work by volume, risk, clarity and implementation effort.',
    date: '2026-09-11',
    readTime: '4 min read',
  },
];
