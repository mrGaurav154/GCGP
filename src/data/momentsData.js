// "Life at Globe Creater" gallery data — powers the Navbar About → Moments page.
// TODO(Om): replace `image` with real event/office photos (drop files in
// public/moments/ and point image to e.g. '/moments/annual-outing-2026.jpg').
// Until then each card renders a styled placeholder using its icon + accent color.

export const momentCategories = [
  { id: 'all', label: 'All Moments', icon: 'LayoutGrid', color: '#0D9488' },
  { id: 'office', label: 'Office Life', icon: 'Building2', color: '#D97706' },
  { id: 'events', label: 'Events', icon: 'Calendar', color: '#E11D48' },
  { id: 'training', label: 'Training', icon: 'GraduationCap', color: '#7C3AED' },
  { id: 'celebrations', label: 'Celebrations', icon: 'PartyPopper', color: '#F472B6' },
  { id: 'hackathons', label: 'Hackathons', icon: 'Code2', color: '#16A34A' },
  { id: 'csr', label: 'CSR', icon: 'Heart', color: '#F472B6' },
];

export const moments = [
  {
    id: 'annual-outing-2026',
    title: 'Annual Outing 2026',
    desc: 'Team bonding and adventures.',
    category: 'office',
    icon: 'Users',
    image: null,
  },
  {
    id: 'hackathon-night',
    title: 'Hackathon Night',
    desc: 'Code. Innovate. Impact.',
    category: 'hackathons',
    icon: 'Code2',
    image: null,
  },
  {
    id: 'office-workspace',
    title: 'Office Workspace',
    desc: 'Where ideas take shape.',
    category: 'office',
    icon: 'Building2',
    image: null,
  },
  {
    id: 'womens-day',
    title: "Women's Day Celebration",
    desc: 'Empowering every creator.',
    category: 'celebrations',
    icon: 'PartyPopper',
    image: null,
  },
  {
    id: 'ai-workshop',
    title: 'AI Workshop',
    desc: 'Learning the future together.',
    category: 'training',
    icon: 'GraduationCap',
    image: null,
  },
  {
    id: 'sports-day',
    title: 'Sports Day',
    desc: 'Energy. Focus. Teamwork.',
    category: 'events',
    icon: 'Trophy',
    image: null,
  },
  {
    id: 'annual-function',
    title: 'Annual Function',
    desc: 'Celebrating our achievements.',
    category: 'celebrations',
    icon: 'Star',
    image: null,
  },
  {
    id: 'csr-initiative',
    title: 'CSR Initiative',
    desc: 'Giving back to society.',
    category: 'csr',
    icon: 'Heart',
    image: null,
  },
];
