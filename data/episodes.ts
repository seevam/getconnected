export interface Episode {
  id: number
  title: string
  guest: string
  guestTitle: string
  topic: 'social-innovation' | 'education' | 'environment' | 'community'
  duration: string
  date: string
  excerpt: string
  icon: string
  isLatest?: boolean
}

export const episodes: Episode[] = [
  {
    id: 18,
    title: 'Building for the Invisible: How an AI Chatbot Is Restoring Agency to Migrant Workers',
    guest: 'Tvisha Jhamb',
    guestTitle: 'Founder, Open Door',
    topic: 'social-innovation',
    duration: '9 min',
    date: 'October 15, 2025',
    excerpt:
      'Tvisha shares how walking past construction sites near her Singapore school sparked the creation of Open Door, an AI chatbot helping migrant workers find affordable groceries, healthcare, and remittance services nearby. She explains why empathy - not technology - is the real innovation.',
    icon: '🤖',
    isLatest: true,
  },
  {
    id: 17,
    title: 'Refugee Students Deserve More Than Hope: Inside EmpowerED',
    guest: 'Saanvi Kedia',
    guestTitle: 'Founder, EmpowerED',
    topic: 'education',
    duration: '10 min',
    date: 'October 6, 2025',
    excerpt:
      'While navigating her own college applications in Singapore, Saanvi realised Rohingya refugee students in Malaysia\'s Johor were making the same life-defining decisions with zero guidance. She built EmpowerED to give them the resources she took for granted - and talks about why starting imperfectly beats waiting for perfect.',
    icon: '📚',
  },
  {
    id: 16,
    title: 'Bubbles vs. Trash: The High School Invention Cleaning Indonesian Rivers',
    guest: 'CleanFlo Student Team',
    guestTitle: 'Co-Founders, CleanFlo',
    topic: 'environment',
    duration: '8 min',
    date: 'September 20, 2025',
    excerpt:
      'The CleanFlo team explains how frustration with traditional rope nets - which kill marine life while barely denting pollution - led them to develop an air bubble barrier that collected 90 kg of trash in Indramayu in a single week without a single fish casualty. They also discuss their plan to take the technology to Jakarta\'s most polluted rivers.',
    icon: '💧',
  },
  {
    id: 15,
    title: 'Charity Made Simple: Connecting Bahrain\'s Volunteers With the Causes They Love',
    guest: 'Charity Connect BH Team',
    guestTitle: 'Founders, Charity Connect BH',
    topic: 'community',
    duration: '7 min',
    date: 'September 8, 2025',
    excerpt:
      'The founders of Charity Connect BH explain the frustrating paradox they witnessed in Bahrain: willing volunteers on one side, under-resourced charities on the other, and almost no way for them to find each other. Their digital directory - spanning seven cause areas from poverty alleviation to animal welfare - is changing that with a deceptively simple approach.',
    icon: '❤️',
  },
  {
    id: 14,
    title: 'Feeding 46 Orphanages From Bakery Leftovers: The FoodFlip Story',
    guest: 'FoodFlip Founding Team',
    guestTitle: 'Founders, FoodFlip Indonesia',
    topic: 'social-innovation',
    duration: '9 min',
    date: 'August 25, 2025',
    excerpt:
      'Seven years after a Grade 10 TED Talk assignment about food waste, FoodFlip has redistributed over 126,000 pieces of bread and 600 kg of fruit to 46 orphanages across Jakarta. The founders discuss how they scaled from hand deliveries to a WhatsApp–Gojek logistics system, and why "just keep going" has been their most powerful strategy.',
    icon: '🌿',
  },
  {
    id: 13,
    title: 'Toilets as Medicine: Tackling Child Stunting on a Remote Indonesian Island',
    guest: 'Project Papagarang Student Leaders',
    guestTitle: 'Founders, Project Papagarang',
    topic: 'community',
    duration: '8 min',
    date: 'August 10, 2025',
    excerpt:
      'The high school students behind Project Papagarang explain why nutrition campaigns alone could not fix stunting on Papagarang Island - and how identifying the sanitation link led them to raise IDR 30 million and build toilets that are changing health outcomes for hundreds of children in Nusa Tenggara Timur.',
    icon: '🏝️',
  },
  {
    id: 12,
    title: 'Peers Teaching Peers: How Belajar Bersama Opens Doors to Economic Opportunity',
    guest: 'Belajar Bersama Club Leaders',
    guestTitle: 'Co-Founders, Belajar Bersama',
    topic: 'education',
    duration: '10 min',
    date: 'July 28, 2025',
    excerpt:
      'The student leaders of Belajar Bersama discuss how their high school tutoring club has helped 60+ Indonesian youth pass PKBM national equivalency exams since 2021 - and why they frame their work not as charity but as economic justice. They also reveal plans to expand from maths and science into Bahasa Indonesia and civics.',
    icon: '🎓',
  },
  {
    id: 11,
    title: 'Fine Dining for Social Good: The Matched Giving Model Ending Homelessness One Meal at a Time',
    guest: 'Mahesh Khilnani',
    guestTitle: 'Co-Founder, MC Homeless Project',
    topic: 'social-innovation',
    duration: '11 min',
    date: 'July 14, 2025',
    excerpt:
      'Mahesh Khilnani explains how his family\'s decades of service alongside Mother Teresa\'s foundations shaped a brilliantly simple idea: have London restaurants collect £1 donations from diners, then have the Chanrai family match every pound. He walks through the pilot at Dinings SW3 with the YMCA, and what it would mean to bring the model to 500 restaurants.',
    icon: '🍽️',
  },
  {
    id: 10,
    title: 'From Flooding Doorstep to River Innovation: The Personal Mission Behind CleanFlo',
    guest: 'CleanFlo Lead Innovator',
    guestTitle: 'Lead Innovator, CleanFlo',
    topic: 'environment',
    duration: '8 min',
    date: 'June 30, 2025',
    excerpt:
      'In this deeper-dive follow-up, a CleanFlo co-founder reflects on how watching their own neighbourhood flood repeatedly became the emotional engine for the project, and explains the science behind why releasing oxygen into rivers can heal ecosystems - not just clean them. They also address the challenges of moving from prototype to policy.',
    icon: '🌊',
  },
  {
    id: 9,
    title: 'What Mother Teresa Taught a London Entrepreneur About Giving Back',
    guest: 'Subodh Chanrai',
    guestTitle: 'Trustee, Chanrai Tulsi Trust',
    topic: 'community',
    duration: '12 min',
    date: 'June 15, 2025',
    excerpt:
      'Subodh Chanrai shares the story of meeting Mother Teresa as a young man through his father Mithu Chanrai - and how those encounters shaped a family philosophy of "Caring Capitalism" that now underpins the MC Homeless Project. He also reflects on five decades of the Tulsi Trust\'s healthcare work across India and Nigeria, and what he hopes future generations will carry forward.',
    icon: '🌍',
  },
]
