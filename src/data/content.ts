export type Feature = { title: string; description: string };
export type Facility = { img: string; title: string; description: string };
export type EventItem = {
  img: string;
  category: 'Cultural' | 'Academic' | 'Sports';
  date: string;
  title: string;
  description: string;
};
export type GalleryItem = { img: string; alt: string };
export type Testimonial = { quote: string; name: string; grade: string; avatar: string };
export type Stat = { value: number; suffix: string; label: string; sub: string };

export const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About Us' },
  { id: 'admissions', label: 'Admissions' },
  { id: 'facilities', label: 'Facilities' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'events', label: 'Events' },
  { id: 'contact', label: 'Contact' },
] as const;

export const stats: Stat[] = [
  { value: 27, suffix: '+', label: 'Years of Excellence', sub: 'Shaping futures since 1999' },
  { value: 375, suffix: '+', label: 'Students', sub: 'Learning and growing daily' },
  { value: 15, suffix: '+', label: 'Expert Faculty', sub: 'Dedicated educators' },
  { value: 11, suffix: '+', label: 'Achievements', sub: 'Awards and recognitions' },
];

export const features: Feature[] = [
  { title: 'Expert Faculty', description: 'Highly qualified and experienced teachers dedicated to nurturing young minds with personalized attention.' },
  { title: 'Smart Learning', description: 'State-of-the-art digital classrooms with interactive boards and modern teaching methodologies.' },
  { title: 'Holistic Development', description: 'Focus on physical, mental, and emotional growth through sports, arts, and co-curricular activities.' },
  { title: 'Global Exposure', description: 'International collaborations, exchange programs, and global curriculum standards.' },
  { title: 'Academic Excellence', description: 'Consistent outstanding results in board examinations and competitive exams.' },
  { title: 'Character Building', description: 'Emphasis on moral values, discipline, and social responsibility for complete personality development.' },
];

export const facilities: Facility[] = [
  { img: 'fac-smart.png', title: 'Smart Classrooms', description: 'Interactive digital boards and modern learning tools' },
  { img: 'fac-science.png', title: 'Science Labs', description: 'Well-equipped Physics, Chemistry, and Biology labs' },
  { img: 'fac-library.png', title: 'Library', description: '20,000+ books and digital resources' },
  { img: 'fac-sports.png', title: 'Sports Complex', description: 'Multi-sport facilities and trained coaches' },
  { img: 'fac-transport.png', title: 'Transportation', description: 'GPS-enabled buses covering all major routes' },
  { img: 'fac-security.png', title: 'Security', description: '24/7 CCTV surveillance and trained security' },
  { img: 'fac-auditorium.png', title: 'Auditorium', description: '1000+ seating capacity for events' },
  { img: 'fac-cafeteria.png', title: 'Cafeteria', description: 'Hygienic and nutritious food options' },
];

export const events: EventItem[] = [
  { img: 'gal-audience.png', category: 'Cultural', date: 'March 15, 2024', title: 'Annual Day Celebration 2024', description: 'Join us for a spectacular evening of performances, awards, and celebrations.' },
  { img: 'ev-science.png', category: 'Academic', date: 'March 20, 2024', title: 'Science Exhibition', description: 'Students showcase innovative science projects and experiments.' },
  { img: 'gal-sports.png', category: 'Sports', date: 'April 5, 2024', title: 'Inter-School Sports Meet', description: 'Annual sports competition featuring athletics, team sports, and more.' },
  { img: 'ev-parent.png', category: 'Academic', date: 'April 10, 2024', title: 'Parent-Teacher Meeting', description: 'Discuss student progress and academic performance with our teachers.' },
];

export const gallery: GalleryItem[] = [
  { img: 'gal-classroom.png', alt: 'Modern classroom' },
  { img: 'gal-audience.png', alt: 'School assembly' },
  { img: 'gal-apple.png', alt: 'Books and learning' },
  { img: 'gal-sports.png', alt: 'Sports ground' },
  { img: 'gal-glass.png', alt: 'Science laboratory' },
  { img: 'gal-books.png', alt: 'Library' },
];

export const testimonials: Testimonial[] = [
  {
    quote: 'Don Bosco has transformed my son into a confident and responsible individual. The teachers here go above and beyond to ensure each child receives personal attention.',
    name: 'Rajesh Kumar',
    grade: 'Parent of Arjun (Grade 8)',
    avatar: 'RK',
  },
  {
    quote: 'We are extremely happy with our decision to enroll Ananya at Don Bosco. The balanced approach to academics and extracurricular activities helped her become well-rounded.',
    name: 'Priya Sharma',
    grade: 'Parent of Ananya (Grade 6)',
    avatar: 'PS',
  },
  {
    quote: 'The dedication of the faculty is commendable. They nurtured my daughter\'s academic growth while instilling strong moral values and discipline.',
    name: 'Mohammed Ali',
    grade: 'Parent of Fatima (Grade 10)',
    avatar: 'MA',
  },
];
