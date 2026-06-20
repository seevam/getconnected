export type CategoryColor = 'cyan' | 'emerald' | 'sky' | 'orange' | 'violet' | 'amber' | 'rose' | 'teal'

export type ContentBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'h3'; text: string }
  | { type: 'quote'; text: string; attribution?: string }
  | { type: 'stat-grid'; items: { value: string; label: string }[] }
  | { type: 'list'; items: string[] }
  | { type: 'callout'; text: string; icon?: string }

export interface Story {
  slug: string
  title: string
  subtitle?: string
  category: string
  categoryColor: CategoryColor
  location: string
  date: string
  readTime: string
  excerpt: string
  heroIcon: string
  highlights: { value: string; label: string }[]
  body: ContentBlock[]
  relatedSlugs: string[]
}

export const stories: Story[] = [
  {
    slug: 'papagarang',
    title: 'Project Papagarang: How High School Students Are Transforming an Island Through Simple Toilets',
    category: 'Community Impact',
    categoryColor: 'cyan',
    location: 'Papagarang Island, Nusa Tenggara Timur',
    date: 'July 15, 2025',
    readTime: '6 min read',
    excerpt:
      'Indonesian high school students discovered the critical link between sanitation and stunting, then raised IDR 30 million to build toilets on a remote island - proving that simple solutions can transform communities.',
    heroIcon: 'Waves',
    highlights: [
      { value: 'IDR 30M', label: 'Funds Raised' },
      { value: '6+', label: 'Toilets Built' },
      { value: '25–30%', label: 'Stunting Rate in NTT' },
      { value: '100s', label: 'Children Protected' },
    ],
    body: [
      {
        type: 'h2',
        text: 'The Hidden Crisis Behind Paradise',
      },
      {
        type: 'paragraph',
        text: 'East Nusa Tenggara Timur captivates visitors with its breathtaking landscapes, pristine waters, and legendary komodo dragons. But beneath this postcard-perfect surface lies a silent crisis that threatens the future of Indonesia\'s most remote communities: stunting. The statistics are sobering - in Indonesia, stunting affects between 25–30% of children under five years old, with rural areas like Nusa Tenggara Timur bearing the heaviest burden. Stunted children face lifelong consequences: difficulty learning in school, reduced earning potential as adults, and a higher likelihood of perpetuating the cycle of poverty.',
      },
      {
        type: 'h2',
        text: 'When Youth Refused to Accept the Status Quo',
      },
      {
        type: 'paragraph',
        text: 'While most teenagers their age were focused on exams and university applications, a group of passionate Indonesian high school students saw the stunting crisis on Papagarang Island and decided they couldn\'t stand by and watch. Rather than following conventional approaches focused primarily on nutrition, these young changemakers identified something others had overlooked: the critical link between sanitation and stunting. Project Papagarang was born from this insight - the island\'s lack of proper sanitation facilities was creating a dangerous cycle of continuous exposure to harmful bacteria that directly contributed to the stunting epidemic.',
      },
      {
        type: 'quote',
        text: 'We realized that you can provide all the nutritious food in the world, but if children are constantly exposed to harmful bacteria and diseases from poor sanitation, their bodies can\'t properly absorb those nutrients.',
      },
      {
        type: 'h2',
        text: 'Simple Solutions, Profound Impact',
      },
      {
        type: 'paragraph',
        text: 'The students didn\'t arrive with predetermined solutions - they sat down with local community leaders and residents, listened to their experiences, and worked together to identify the most practical and sustainable interventions. The approach was as brilliant as it was simple: construct low-cost, high-impact toilets for households across the island.',
      },
      {
        type: 'stat-grid',
        items: [
          { value: '$2,400', label: 'Raised (IDR 30M)' },
          { value: '6', label: 'Toilets Completed' },
          { value: 'Dozens', label: 'Families Impacted' },
          { value: 'Hundreds', label: 'Children Protected' },
        ],
      },
      {
        type: 'h2',
        text: 'Community Partnership in Action',
      },
      {
        type: 'paragraph',
        text: 'What makes Project Papagarang remarkable isn\'t just the toilets themselves - it\'s the way the students approached community engagement. Rather than imposing outside solutions, they built relationships first by spending time understanding local customs and needs, included families in planning to ensure toilet designs met actual usage patterns, provided ongoing support through maintenance systems and hygiene education, and celebrated local knowledge by combining traditional practices with modern sanitation principles.',
      },
      {
        type: 'h2',
        text: 'The Ripple Effect of Simple Dignity',
      },
      {
        type: 'paragraph',
        text: 'Each toilet represents more than improved sanitation - it\'s a foundation for human dignity, health, and opportunity. When families have access to proper facilities, children especially girls can attend school more regularly, mothers spend less time caring for sick children, the entire community faces reduced healthcare costs, and economic opportunities improve as health outcomes stabilize.',
      },
      {
        type: 'callout',
        text: 'Transformation doesn\'t always require massive resources or complex solutions - sometimes it starts with young people who refuse to accept that suffering is inevitable.',
        icon: '🌅',
      },
      {
        type: 'h2',
        text: 'The Future of Papagarang',
      },
      {
        type: 'paragraph',
        text: 'Project Papagarang represents more than a successful student initiative - it\'s a template for how young people can create lasting change when they combine passion with practical action. The students are already planning their next phase: expanding to neighboring islands, developing hygiene education curricula for schools, training local youth to become sanitation advocates, and partnering with government programs for larger-scale impact.',
      },
    ],
    relatedSlugs: ['foodflip', 'cleanflo', 'belajar'],
  },

  {
    slug: 'foodflip',
    title: 'FoodFlip: Turning Waste into Warmth',
    subtitle:
      'How college students created a movement that redistributed over 126,000 pieces of bread while fighting food waste across Jakarta',
    category: 'Social Innovation',
    categoryColor: 'emerald',
    location: 'Jakarta, Indonesia',
    date: 'July 25, 2025',
    readTime: '6 min read',
    excerpt:
      'What began as a Grade 10 TED Talk-style school presentation became a 7-year operation redistributing 126,000+ pieces of bread and 600 kg of fruit to 46 orphanages across Jakarta - proving that student innovation can outlast any classroom.',
    heroIcon: 'Leaf',
    highlights: [
      { value: '126,000+', label: 'Pieces of Bread Redistributed' },
      { value: '600+ kg', label: 'Fruit Distributed' },
      { value: '46', label: 'Orphanages Served' },
      { value: '7 years', label: 'Of Sustained Impact' },
    ],
    body: [
      {
        type: 'h2',
        text: 'The Hidden Crisis of Abundance',
      },
      {
        type: 'paragraph',
        text: 'In a world where hunger persists alongside abundance, Indonesia faces a paradox that defines modern urban life. Food waste and hunger coexist in devastating harmony. A 2021 study revealed that in Indonesia, 10 million pieces of bread, cookies, and other baked goods are thrown away every single week. Meanwhile, countless families struggle to put nutritious meals on their tables, and orphanages across Jakarta face daily challenges feeding the children they care for.',
      },
      {
        type: 'h2',
        text: 'When Students Refused to Accept the Status Quo',
      },
      {
        type: 'paragraph',
        text: 'In 2018, a simple classroom assignment would spark a movement. FoodFlip began not in a boardroom, but in a Grade 10 English class where students were tasked with delivering TED Talk-style presentations on topics they cared about. What started as research for a school presentation became a personal awakening. Here was a problem with a clear solution: connect surplus with need. The concept was elegantly simple - partner with local vendors and bakeries to redirect unsold baked goods and fruits to orphanages across Jakarta.',
      },
      {
        type: 'quote',
        text: 'The first few deliveries were hand-delivered ourselves.',
      },
      {
        type: 'h2',
        text: 'Building a Network of Change',
      },
      {
        type: 'paragraph',
        text: 'What began with hand-delivered donations evolved into a sophisticated network of partnerships. FoodFlip\'s approach focused on creating sustainable relationships rather than one-time charitable gestures. The organization cultivated partnerships with established Jakarta food retailers including Monami Bakery, Ranch Market, and BreadLife - each committed to ensuring their surplus reaches those who need it most rather than ending up in landfills.',
      },
      {
        type: 'callout',
        text: 'Prior to the pandemic, FoodFlip introduced remote delivery systems using WhatsApp coordination and Gojek drivers to scale their reach - an innovation that proved critical during COVID-19 when minimal contact delivery became essential.',
        icon: '📱',
      },
      {
        type: 'stat-grid',
        items: [
          { value: '126,000+', label: 'Pieces of Bread' },
          { value: '600+ kg', label: 'Fruit Distributed' },
          { value: '46', label: 'Orphanages Served' },
          { value: '15+', label: 'Partner Bakeries' },
        ],
      },
      {
        type: 'h2',
        text: 'Evolution Through Innovation',
      },
      {
        type: 'paragraph',
        text: 'FoodFlip\'s growth story demonstrates how successful social ventures adapt and innovate to expand their impact. The organization started in 2018 with hand-delivered donations, established major bakery partnerships in 2019, introduced their digital WhatsApp–Gojek delivery system in 2020, and by 2021–2025 had reached 46 orphanages and redistributed over 126,000 pieces of bread.',
      },
      {
        type: 'h2',
        text: 'The Philosophy of Continuous Impact',
      },
      {
        type: 'quote',
        text: 'You can always start small and just try to keep doing things to help the world.',
      },
      {
        type: 'paragraph',
        text: 'This approach - "just keep going" - represents a mature understanding of social impact work. FoodFlip\'s founders recognize that lasting change comes from consistency, relationship building, and continuous improvement rather than headline-grabbing expansion. Their work demonstrates how community-based solutions can address systemic problems, providing a replicable model that other cities could adapt.',
      },
    ],
    relatedSlugs: ['mchomelessproject', 'papagarang', 'charityconnect'],
  },

  {
    slug: 'cleanflo',
    title: 'CleanFlo: How High Schoolers Are Transforming Rivers Through Revolutionary Bubble Technology',
    category: 'Environmental Innovation',
    categoryColor: 'sky',
    location: 'Jakarta & Indramayu, Indonesia',
    date: 'July 20, 2025',
    readTime: '5 min read',
    excerpt:
      'High school students invented an air bubble net system that collects 90 kg of river trash per week without harming marine life - a breakthrough that traditional rope nets could never achieve.',
    heroIcon: 'Droplets',
    highlights: [
      { value: '90 kg', label: 'Trash Collected in One Week' },
      { value: '0', label: 'Marine Life Casualties' },
      { value: 'SDG 14', label: 'Life Below Water Focus' },
      { value: '2', label: 'Target Rivers (Ciluwang & Citarum)' },
    ],
    body: [
      {
        type: 'h2',
        text: 'The Silent Crisis Beneath Indonesia\'s Waters',
      },
      {
        type: 'paragraph',
        text: 'Across Indonesia\'s vast archipelago, a hidden environmental crisis flows through the arteries of the nation. Polluted, trash-filled rivers and irrigation systems have become a persistent challenge, stemming from inadequate waste management and drainage infrastructure. For decades, communities have relied on traditional trash nets to combat river pollution - but these come with devastating trade-offs: marine life becomes trapped and killed, and high Biochemical Oxygen Demand (BOD) levels persist, depleting oxygen and triggering eutrophication that devastates entire aquatic ecosystems.',
      },
      {
        type: 'h2',
        text: 'When Innovation Meets Inspiration',
      },
      {
        type: 'paragraph',
        text: 'The story of CleanFlo began where SDG 14 (Life Below Water) wasn\'t just a poster on the wall - it was a call to action. After years of participating in river cleanups, these high school students witnessed firsthand the limitations of existing solutions and the urgent need for innovation.',
      },
      {
        type: 'callout',
        text: 'Instead of traditional rope nets, CleanFlo\'s revolutionary system uses air bubbles to create an invisible barrier. It blocks trash passage through controlled pressure differentials, allows marine life to pass safely without physical barriers, releases oxygen into the water to reduce BOD levels, and prevents eutrophication while cleaning waterways.',
        icon: '🔬',
      },
      {
        type: 'h2',
        text: 'From Prototype to Proven Impact',
      },
      {
        type: 'paragraph',
        text: 'The true test came in Haurgeulis, Indramayu - a region where irrigation channels are lifelines for entire communities whose livelihoods depend on agriculture and fishing.',
      },
      {
        type: 'stat-grid',
        items: [
          { value: '90 kg', label: 'Trash Removed in One Week' },
          { value: '0', label: 'Marine Life Casualties' },
          { value: 'Improved', label: 'Water Oxygen Levels' },
          { value: '✓', label: 'Community Approval Gained' },
        ],
      },
      {
        type: 'h2',
        text: 'A Personal Mission Born from Experience',
      },
      {
        type: 'quote',
        text: '[We] started because not everyone\'s as privileged to have counter measures to these floods. A lot of people depend on the waters of their areas.',
      },
      {
        type: 'paragraph',
        text: 'One founder described the frequent flooding directly in front of their home and community - a stark reminder that environmental challenges don\'t affect everyone equally. The most vulnerable communities often bear the greatest burden of pollution and its consequences. This perspective shaped their approach: technology for social good that prioritizes communities who depend most on clean waterways for their survival and prosperity.',
      },
      {
        type: 'h2',
        text: 'Scaling Innovation for Systemic Change',
      },
      {
        type: 'paragraph',
        text: 'Success in Indramayu was just the beginning. The CleanFlo team is now planning to transform their prototype into a full-scale initiative through their school\'s environmental club. Their expansion strategy targets Jakarta\'s major rivers including the Ciluwang and Citarum, develops school networks for replication, builds community and government partnerships, and continuously refines the technology based on field results.',
      },
      {
        type: 'h2',
        text: 'The Ripple Effect of Youth Innovation',
      },
      {
        type: 'paragraph',
        text: 'CleanFlo represents more than a technological breakthrough - it\'s a testament to what\'s possible when young people apply scientific thinking to social challenges. Their work demonstrates innovation with empathy, community-centered solutions, systemic thinking that tackles root causes, and scalable approaches that can grow and adapt. The students behind CleanFlo prove that the next generation isn\'t just inheriting environmental problems - they\'re actively solving them.',
      },
    ],
    relatedSlugs: ['papagarang', 'foodflip', 'belajar'],
  },

  {
    slug: 'mchomelessproject',
    title: 'MC Homeless Project: When Fine Dining Meets Social Justice',
    subtitle:
      'How a London-based initiative is leveraging high-end hospitality to double every donation for homelessness charities, one meal at a time',
    category: 'Social Challenges',
    categoryColor: 'rose',
    location: 'London, United Kingdom',
    date: 'Founded 2020',
    readTime: '7 min read',
    excerpt:
      'Mahesh Khilnani created a matched giving model where London restaurants collect £1 donations from diners - and the Chanrai family doubles every pound - channeling the hospitality industry\'s reach into a sustainable funding stream for homelessness charities.',
    heroIcon: 'UtensilsCrossed',
    highlights: [
      { value: '2×', label: 'Every Donation Matched' },
      { value: '£0', label: 'Admin Costs to Charities' },
      { value: '1975', label: 'Chanrai Tulsi Trust Founded' },
      { value: 'YMCA', label: 'First Charity Partner' },
    ],
    body: [
      {
        type: 'h2',
        text: 'The Crisis Hidden in Plain Sight',
      },
      {
        type: 'paragraph',
        text: 'Walk through central London on any given day and you\'ll witness a stark contradiction. Gleaming glass towers house multinational corporations. Michelin-starred restaurants serve £200 tasting menus to well-heeled clientele. Yet amid this abundance, people sleep in doorways, huddle in subway stations, and struggle for survival on streets paved with wealth. Homelessness is projected to increase by a third within 12 months, post-COVID lockdowns devastated vulnerable populations, and charities are stretched thin despite critical need.',
      },
      {
        type: 'h2',
        text: 'A Legacy of Service',
      },
      {
        type: 'paragraph',
        text: 'To understand the MC Homeless Project, you must first understand the family behind it. The project is named after Mithu Chanrai, Mahesh\'s grandfather, whose legacy of compassion shaped the entire family\'s approach to wealth and responsibility. Through the Chanrai family\'s Tulsi Trust, established in 1975, they have spent decades supporting Mother Teresa\'s foundations in India - feeding 150–200 people twice weekly in Mumbai, providing healthcare to marginalized communities, and establishing TCF Nigeria in 1992.',
      },
      {
        type: 'quote',
        text: 'They were fortunate enough to meet and be influenced by Mother Teresa from a young age; through Subodh\'s father, Mithu Chanrai. Charity-based work has always been something the family is very passionate about.',
      },
      {
        type: 'h2',
        text: 'The Innovation: Doubling Every Pound',
      },
      {
        type: 'paragraph',
        text: 'The MC Homeless Project\'s model is elegant in its simplicity and revolutionary in its impact. Rather than creating an entirely new fundraising infrastructure, Mahesh recognized that high-end hospitality venues already have everything needed to raise significant funds: affluent customers, trusted brands, efficient payment systems, and regular foot traffic. What these venues lacked was a simple, turnkey system for channeling customer generosity toward homelessness charities - with one game-changing addition: the Chanrai family matches every donation raised.',
      },
      {
        type: 'list',
        items: [
          'Restaurant partners collect donations via simple prompts on bills or specific menu items',
          'Diners are invited to add £1 to their bill or donate a percentage on particular items',
          'Every pound raised is matched by the Chanrai family, instantly doubling the impact',
          'All funds go directly from the restaurant to the designated homelessness charity - no admin costs',
          'Donations are credited to the hospitality venue, celebrating the restaurant\'s commitment to impact',
        ],
      },
      {
        type: 'h2',
        text: 'Dinings SW3: The Pilot Partnership',
      },
      {
        type: 'paragraph',
        text: 'The first test of this model came through a partnership with Dinings SW3, a prestigious Japanese restaurant in Knightsbridge - one of London\'s most affluent neighborhoods. The charity selected for this inaugural collaboration was YMCA, an organization with extensive experience supporting young people experiencing homelessness and housing instability, providing not just emergency shelter but comprehensive support including life skills training, mental health services, and pathways to stable housing.',
      },
      {
        type: 'quote',
        text: 'All the money will be given directly to the charity from the hospitality venue. We take no credit for the donations given to the charities. All the money raised will be recognised as donated from the hospitality venue.',
      },
      {
        type: 'h2',
        text: 'Scaling the Vision',
      },
      {
        type: 'paragraph',
        text: 'The mathematics of scale are compelling: 50 restaurants collecting £1 per customer per day, matched by the family, generates £10,000 daily. At 500 restaurants the figure reaches £100,000 daily. London has thousands of restaurants, and the model is simple enough to replicate in any city: New York, Paris, Dubai, Singapore, or Mumbai. The key ingredients are universal - restaurants with giving customers, homelessness charities providing essential services, and a coordinating body managing partnerships.',
      },
      {
        type: 'callout',
        text: 'Working towards ending homelessness in the UK - one restaurant meal, one matched donation, one changed life at a time.',
        icon: 'Globe',
      },
    ],
    relatedSlugs: ['foodflip', 'charityconnect', 'opendoor'],
  },

  {
    slug: 'charityconnect',
    title: 'Charity Connect BH: Making Giving as Simple as Clicking',
    subtitle:
      'How a digital platform is revolutionizing charitable giving in Bahrain by connecting willing hearts with worthy causes',
    category: 'Charity',
    categoryColor: 'violet',
    location: 'Bahrain',
    date: 'Founded 2024',
    readTime: '6 min read',
    excerpt:
      'Charity Connect BH solves the paradox of modern charity in Bahrain: countless people want to give, and countless causes need support, yet the two sides struggle to find each other. The platform\'s tagline says it all - "Charity made simple!"',
    heroIcon: 'Heart',
    highlights: [
      { value: '7', label: 'Cause Areas Covered' },
      { value: '2024', label: 'Year Founded' },
      { value: 'Bahrain', label: 'Primary Focus Region' },
      { value: '0', label: 'Friction to Get Started' },
    ],
    body: [
      {
        type: 'h2',
        text: 'The Paradox of Modern Charity',
      },
      {
        type: 'paragraph',
        text: 'In Bahrain, a nation with deep roots in charitable giving and community support, an interesting paradox exists. On one side, countless individuals want to give back - they have time, skills, resources, and genuine desire to make a difference. On the other side, charitable organizations desperately need volunteers, donations, and support to sustain their vital work serving orphans, animals, migrant workers, women in need, and countless other vulnerable populations. Yet despite this perfect alignment of need and willingness, the two sides often struggle to find each other.',
      },
      {
        type: 'h2',
        text: 'When Simplicity Becomes Revolutionary',
      },
      {
        type: 'paragraph',
        text: 'Enter Charity Connect BH, a digital platform built on a deceptively simple premise: charity shouldn\'t be complicated. With the tagline "Charity made simple!", the platform tackles the connection crisis head-on by creating a centralized hub where compassion meets action. Rather than reinventing charitable work itself, Charity Connect BH recognized that the real innovation needed was in reducing friction - making it as easy as browsing a well-organized website to find the right cause.',
      },
      {
        type: 'quote',
        text: 'Charity made simple!',
      },
      {
        type: 'h2',
        text: 'A Spectrum of Causes, A Community of Care',
      },
      {
        type: 'paragraph',
        text: 'One of Charity Connect BH\'s defining features is its comprehensive approach to charitable causes. The platform organizes organizations across seven major cause areas: poverty alleviation, supporting children (including orphans and those with special needs), animal protection, migrant workers, religion and culture, women\'s welfare, and health. This breadth ensures that whether someone is passionate about animal rescue, children with Down syndrome, or migrant worker rights, they can find organizations doing meaningful work in that space.',
      },
      {
        type: 'list',
        items: [
          'Al Sanabel Orphans Care Society - comprehensive support for orphans in Bahrain',
          'Down Syndrome Care Center - empowering individuals and families with specialized care',
          'Alia for Early Intervention - promoting lifelong access for those with behavioral and communication difficulties',
          'Bahrain Strays - community-engaged dog rescue, vetting, and rehoming',
          'Bahrain Animal Rescue Centre (BARC) - the largest no-kill shelter in the Kingdom',
        ],
      },
      {
        type: 'h2',
        text: 'The Power of Curation',
      },
      {
        type: 'paragraph',
        text: 'What makes Charity Connect BH particularly valuable isn\'t just aggregation - it\'s thoughtful curation. The platform features verified, legitimate organizations doing meaningful work across diverse causes. This vetting process provides something invaluable to potential volunteers and donors: trust. By leveling the playing field, smaller grassroots initiatives gain the same visibility as established charities.',
      },
      {
        type: 'h2',
        text: 'Digital Accessibility, Human Connection',
      },
      {
        type: 'paragraph',
        text: 'Charity Connect BH\'s approach is particularly smart in its recognition that digital platforms work best when they facilitate human connection rather than replace it. The website doesn\'t try to manage donations, volunteer scheduling, or complicated matchmaking algorithms. Instead, it does one thing exceptionally well: introduces people to organizations they might care about and provides clear pathways to reach out.',
      },
      {
        type: 'callout',
        text: 'The best solutions don\'t add complexity - they remove it. By making charity simple, we make it accessible. By making it accessible, we make it powerful.',
        icon: '💡',
      },
      {
        type: 'h2',
        text: 'A Template for Thoughtful Technology',
      },
      {
        type: 'paragraph',
        text: 'Charity Connect BH reminds us that technology\'s highest purpose isn\'t complexity or novelty - it\'s serving fundamental human needs with elegance and empathy. The platform demonstrates that digital solutions don\'t need to be complicated to be effective, that curation provides value in an age of information overload, and that technology works best when it facilitates human connection. In a world where we often reach for complex solutions to complex problems, Charity Connect BH proves that sometimes the most revolutionary act is making something beautifully, powerfully simple.',
      },
    ],
    relatedSlugs: ['mchomelessproject', 'opendoor', 'empowered'],
  },

  {
    slug: 'empowered',
    title: 'EmpowerED: Opening Doors to Higher Education for Refugee Students',
    subtitle:
      'How one student\'s college journey inspired her to create pathways for Rohingya refugee students navigating the impossible transition to university',
    category: 'Social Innovation',
    categoryColor: 'amber',
    location: 'Singapore → Johor, Malaysia',
    date: 'October 6, 2025',
    readTime: '6 min read',
    excerpt:
      'Saanvi Kedia, a Singapore student navigating her own college applications, couldn\'t ignore that refugee students in Malaysia\'s Johor faced the same process without counselors, alumni networks, or information. So she built EmpowerED to change that.',
    heroIcon: 'GraduationCap',
    highlights: [
      { value: '2025', label: 'Year Founded' },
      { value: 'Johor, MY', label: 'Primary Community Served' },
      { value: '0', label: 'College Counselors Available to Refugees' },
      { value: 'India', label: 'Next Expansion Target' },
    ],
    body: [
      {
        type: 'h2',
        text: 'The Invisible Barrier',
      },
      {
        type: 'paragraph',
        text: 'In Malaysia\'s southern region of Johor, thousands of refugee students face a paradox that defines modern displacement: they can access basic education, but the pathway to higher education remains almost impossibly distant. For many in the Rohingya community, there exists a rare school that offers hope - a bridge to tertiary education in the Philippines - but the resources to actually cross that bridge are virtually nonexistent. No college counselors. No alumni networks. No comprehensive guides about different fields of study. No interview preparation. Just hope, determination, and the overwhelming uncertainty that comes with navigating unfamiliar systems while carrying the weight of displacement.',
      },
      {
        type: 'h2',
        text: 'When Your Own Privilege Becomes Your Call to Action',
      },
      {
        type: 'paragraph',
        text: 'Saanvi\'s journey to founding EmpowerED began with a moment of realization that changed everything. As she navigated her own college application process - researching universities, exploring different academic paths, preparing for interviews - she was surrounded by resources: shared experiences from older students, guidance counselors, and access to information about every possible pathway.',
      },
      {
        type: 'quote',
        text: 'As a student who is also navigating her own college journey, I have relied so much on shared resources. I can\'t imagine going through this process without the same kind of access and freedom to make decisions.',
        attribution: 'Saanvi Kedia, Founder of EmpowerED',
      },
      {
        type: 'h2',
        text: 'Building Bridges Through Information',
      },
      {
        type: 'paragraph',
        text: 'EmpowerED\'s approach is as practical as it is transformative. Rather than trying to solve every challenge refugee students face, Saanvi focused on what she knew could create immediate impact: democratizing access to information and skills. The platform centers on two interconnected pillars: pathway discovery and college navigation, providing comprehensive resources about different fields of study and career pathways; and essential soft skills development - interview preparation, professional communication, application strategies, and confidence building.',
      },
      {
        type: 'callout',
        text: 'What makes EmpowerED particularly effective is Saanvi\'s position as a fellow student. She\'s not speaking from the distant perspective of an adult - she\'s navigating the same challenges in real-time, creating a unique credibility and relatability that traditional educational programs often lack.',
        icon: '🌟',
      },
      {
        type: 'h2',
        text: 'The Philosophy of Starting Now',
      },
      {
        type: 'quote',
        text: 'If you have an idea, start working on it as soon as possible. Once the momentum starts, it\'s easy to keep going.',
        attribution: 'Saanvi Kedia',
      },
      {
        type: 'paragraph',
        text: 'This philosophy of action over endless planning has shaped EmpowerED\'s development. Rather than waiting for perfect conditions or comprehensive funding, Saanvi began building immediately - creating resources, establishing connections, and preparing to serve students who couldn\'t afford to wait. The approach acknowledges a crucial truth: for students navigating college applications right now, "someday" isn\'t good enough. Each year of delay means another cohort of students making life-defining decisions without adequate support.',
      },
      {
        type: 'h2',
        text: 'The Multiplier Effect of Educational Access',
      },
      {
        type: 'paragraph',
        text: 'EmpowerED\'s impact extends far beyond individual college applications. When refugee students gain access to higher education with proper preparation and information, the ripple effects transform entire communities: education creates pathways out of poverty and displacement, educated individuals return to serve their communities, parents who accessed education prioritize it for their children, and success stories inspire the next generation to believe they can also achieve their dreams.',
      },
      {
        type: 'paragraph',
        text: 'EmpowerED represents more than a platform or an initiative - it\'s a declaration that educational opportunity shouldn\'t depend on the circumstances of your birth. Refugee students possess the same potential, dreams, and determination as students anywhere in the world. The only difference is access to information and support. And that difference, as Saanvi demonstrates, is entirely within our power to address.',
      },
    ],
    relatedSlugs: ['belajar', 'opendoor', 'charityconnect'],
  },

  {
    slug: 'belajar',
    title: 'Belajar Bersama: When Students Teach Students to Break the Cycle',
    subtitle:
      'How Indonesian high school students created a tutoring movement helping 60+ youth pass national equivalency exams and unlock economic opportunity',
    category: 'Education',
    categoryColor: 'orange',
    location: 'Indonesia',
    date: 'Founded 2021',
    readTime: '6 min read',
    excerpt:
      'High school students teaching other youth to pass Indonesia\'s national equivalency exams (PKBM Paket A, B, and C) - because Belajar Bersama believes education isn\'t just about knowledge, it\'s about opening economic opportunity and breaking cycles of poverty.',
    heroIcon: 'BookOpen',
    highlights: [
      { value: '60+', label: 'Students Helped to Pass Exams' },
      { value: '2021', label: 'Year Founded' },
      { value: '3', label: 'Exam Levels Supported (Paket A, B, C)' },
      { value: 'Weekly', label: 'Tutoring Sessions' },
    ],
    body: [
      {
        type: 'h2',
        text: 'The Promise and the Gap',
      },
      {
        type: 'paragraph',
        text: 'Education is enshrined as a fundamental right in Indonesia\'s constitution - celebrated as the pathway to success and the great equalizer. Yet behind these lofty ideals lies a sobering reality: millions of Indonesian children and teenagers cannot access formal education, creating a crisis that threatens not just individual futures but the nation\'s development itself. For young people who must work to support their families, who live in areas without schools, or who face other circumstances that force them out of the formal education system, this is the difference between opportunity and a lifetime of limited options.',
      },
      {
        type: 'h2',
        text: 'The Birth of Belajar Bersama',
      },
      {
        type: 'paragraph',
        text: 'Founded in 2021, Belajar Bersama emerged from a simple but powerful recognition: students who can\'t access formal education still deserve the chance to earn their credentials and build their futures. What makes this initiative remarkable isn\'t just its mission - it\'s who\'s leading it. High school students teaching other youth. Peers mentoring peers. Teenagers dedicating their time to ensure others don\'t get left behind.',
      },
      {
        type: 'callout',
        text: 'Belajar Bersama partnered strategically with Nara Kreatif, an organization dedicated to non-formal education. Nara Kreatif provides curriculum framework and exam registration; Belajar Bersama provides weekly tutoring, mock exams, emotional support, and peer mentorship - together creating a comprehensive support system.',
        icon: 'Users',
      },
      {
        type: 'h2',
        text: 'Understanding the PKBM Pathway',
      },
      {
        type: 'paragraph',
        text: 'At the heart of Belajar Bersama\'s work is Indonesia\'s national equivalency exam system - the PKBM (Pusat Kegiatan Belajar Masyarakat). For students who can\'t access formal schooling, this system offers an alternative pathway to educational credentials through three levels: Paket A (elementary school equivalency), Paket B (middle school equivalency), and Paket C (high school equivalency - the same qualifications as formal schooling graduates, opening the same doors to employment and higher education).',
      },
      {
        type: 'stat-grid',
        items: [
          { value: '60+', label: 'Exam Passes Supported' },
          { value: '4 years', label: 'Of Consistent Impact' },
          { value: 'Math & Science', label: 'Core Subjects Taught' },
          { value: 'Mock Exams', label: 'Full Test Preparation' },
        ],
      },
      {
        type: 'h2',
        text: 'Beyond Knowledge: Economic Transformation',
      },
      {
        type: 'quote',
        text: 'Belajar Bersama is not simply about knowledge. Instead it opens up economic opportunity. With these diplomas, students are able to obtain higher-paying and skilled jobs, breaking the cycle of poverty and creating a brighter future for themselves, families, and Indonesia.',
      },
      {
        type: 'paragraph',
        text: 'This understanding - that education is fundamentally about economic opportunity rather than just academic achievement - shapes everything Belajar Bersama does. They recognize that for their students, passing these exams isn\'t about intellectual satisfaction. It\'s about better jobs, higher wages, breaking cycles of poverty, and the dignity to shape one\'s own future rather than being limited by circumstance.',
      },
      {
        type: 'h2',
        text: 'The Simple Power of Teaching',
      },
      {
        type: 'quote',
        text: 'Belajar Bersama isn\'t just another school club; it empowers students to learn, connect, and grow together through shared education. Teaching may seem simple, but it holds the power to change lives by helping others reach their full potential.',
      },
      {
        type: 'paragraph',
        text: 'In a world that often makes problems seem impossibly large and solutions impossibly complex, Belajar Bersama reminds us that transformation can begin with students teaching students, peers supporting peers, and communities refusing to leave anyone behind. They are now planning to expand tutoring to additional subjects - Bahasa Indonesia and Civics - as they deepen their partnership with Nara Kreatif.',
      },
    ],
    relatedSlugs: ['empowered', 'papagarang', 'cleanflo'],
  },

  {
    slug: 'opendoor',
    title: 'Open Door: When AI Meets Compassion for Migrant Workers',
    subtitle:
      'How a student\'s daily observations transformed into an AI chatbot helping migrant workers access affordable resources in Singapore',
    category: 'Migrant Empowerment',
    categoryColor: 'teal',
    location: 'Singapore',
    date: 'October 15, 2025',
    readTime: '6 min read',
    excerpt:
      'Tvisha Jhamb built an AI-powered chatbot so that migrant workers in Singapore - who know their neighborhood far less than the people who built it - can instantly find affordable groceries, healthcare, and remittance services nearby.',
    heroIcon: 'Bot',
    highlights: [
      { value: '2025', label: 'Year Launched' },
      { value: 'AI', label: 'Powered Assistance' },
      { value: 'Multilingual', label: 'Language Support' },
      { value: '24/7', label: 'Always Available' },
    ],
    body: [
      {
        type: 'h2',
        text: 'The People Who Build Our Cities',
      },
      {
        type: 'paragraph',
        text: 'Every day, millions of people pass by construction sites, cleaning crews, and delivery workers without a second thought. These migrant workers are the invisible backbone of modern Singapore - constructing skyscrapers, maintaining infrastructure, keeping businesses running. Yet for all their essential contributions, they remain largely unseen by the very society they help build. For Tvisha Jhamb, a student in Singapore, these workers were impossible to ignore. Walking past her school every day, she witnessed their reality firsthand: workers sweating under the harsh sun, carrying heavy loads, pushing through physically demanding days.',
      },
      {
        type: 'h2',
        text: 'The Hidden Struggle: Access Over Affordability',
      },
      {
        type: 'paragraph',
        text: 'When Tvisha began investigating the challenges migrant workers face, she expected to find issues related to wages or working conditions. What emerged instead was something more insidious precisely because it was so ordinary: the difficulty of accessing affordable everyday resources. Workers often don\'t know where affordable options exist, face language obstacles, live far from affordable areas, have no time after 12-hour shifts to search, and are trapped paying premium prices at convenience stores near their worksites.',
      },
      {
        type: 'quote',
        text: 'I think seeing their struggles and looking at so many migrant workers near my school sweating and doing so much work - I wanted to do something for them. After researching a lot, I found that one of the most significant concerns was finding accessible resources, and hence I tried solving for that problem.',
        attribution: 'Tvisha Jhamb, Founder of Open Door',
      },
      {
        type: 'h2',
        text: 'Technology as Bridge, Not Barrier',
      },
      {
        type: 'paragraph',
        text: 'Tvisha\'s solution emerged from a crucial insight: while migrant workers face numerous challenges, most carry smartphones - the one tool that could potentially bridge the information gap. Enter Open Door: an AI-powered chatbot designed specifically for migrant workers in Singapore. Rather than creating another app that requires downloading and registration, Tvisha built a conversational assistant that works through familiar messaging platforms.',
      },
      {
        type: 'callout',
        text: 'A worker can simply ask "Where can I find cheap groceries near Jurong?" and receive immediate, relevant recommendations. The AI understands context, remembers conversations, and provides increasingly relevant suggestions - available 24/7 in multiple languages.',
        icon: 'Bot',
      },
      {
        type: 'h2',
        text: 'Building with Empathy, Not Assumptions',
      },
      {
        type: 'paragraph',
        text: 'What distinguishes Open Door from typical technology solutions is its foundation in genuine empathy rather than assumptions about what workers need. Tvisha didn\'t build what she thought would be useful - she researched, observed, and designed around actual challenges migrant workers expressed. The design choices reflect this: simplicity first, language that treats workers as valued community members, minimal data collection, offline capability for areas with poor connectivity, and cultural sensitivity around dietary restrictions and remittance patterns.',
      },
      {
        type: 'quote',
        text: 'I feel that they already have so much to do and so much workload that making their life easier by providing them resources can ease off some of their stress and workload.',
        attribution: 'Tvisha Jhamb',
      },
      {
        type: 'h2',
        text: 'The Philosophy of Small Ideas, Big Changes',
      },
      {
        type: 'quote',
        text: 'I would advise people to do anything they can for the betterment of society, and changes don\'t always come from grand inventions but from small ideas. Even like this simple chatbot I have created can give the migrant workers a choice, a way forward, and an area of upbringing.',
        attribution: 'Tvisha Jhamb',
      },
      {
        type: 'paragraph',
        text: 'Open Door challenges us to reconsider who we see as part of our communities. Migrant workers aren\'t temporary visitors or invisible labor - they\'re community members with the same fundamental needs who deserve the same access to resources that we take for granted. Open Door is live and accessible at tvishajhamb.github.io/MigHelpBot/, helping migrant workers across Singapore find affordable resources right now.',
      },
    ],
    relatedSlugs: ['charityconnect', 'empowered', 'mchomelessproject'],
  },
]

export function getStory(slug: string): Story | undefined {
  return stories.find(s => s.slug === slug)
}
