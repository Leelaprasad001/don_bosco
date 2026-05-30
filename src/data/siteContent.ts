import type { EventItem, Facility, Feature, GalleryItem, NavItem, StatDef, Testimonial } from '../types';

export const navItems: NavItem[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About Us' },
  { id: 'admissions', label: 'Admissions' },
  { id: 'facilities', label: 'Facilities' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'events', label: 'Events' },
  { id: 'contact', label: 'Contact' },
];

export const features: Feature[] = [
  { ic: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M2 7l10-4 10 4-10 4L2 7z"/><path d="M6 9.5V14c0 1.7 2.7 3 6 3s6-1.3 6-3V9.5"/><path d="M22 7v6"/></svg>', t: 'Expert Faculty', d: 'Highly qualified and experienced teachers dedicated to nurturing young minds with personalized attention.' },
  { ic: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="4" width="18" height="12" rx="2"/><path d="M8 20h8M12 16v4"/><path d="M8 9l2.5 2.5L8 14M13 14h3"/></svg>', t: 'Smart Learning', d: 'State-of-the-art digital classrooms with interactive boards and modern teaching methodologies.' },
  { ic: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 21s-7-4.5-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 11c0 5.5-7 10-7 10z"/></svg>', t: 'Holistic Development', d: 'Focus on physical, mental, and emotional growth through sports, arts, and co-curricular activities.' },
  { ic: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.7 2.5 15.3 0 18M12 3c-2.5 2.7-2.5 15.3 0 18"/></svg>', t: 'Global Exposure', d: 'International collaborations, exchange programs, and global curriculum standards.' },
  { ic: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="9" r="5"/><path d="M8.5 13.5L7 22l5-3 5 3-1.5-8.5"/></svg>', t: 'Academic Excellence', d: 'Consistent outstanding results in board examinations and competitive exams.' },
  { ic: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 2l8 3v6c0 5-3.5 8.5-8 11-4.5-2.5-8-6-8-11V5l8-3z"/><path d="M9 12l2 2 4-4"/></svg>', t: 'Character Building', d: 'Emphasis on moral values, discipline, and social responsibility for complete personality development.' },
];

export const facilities: Facility[] = [
  { img: 'fac-smart', t: 'Smart Classrooms', d: 'Interactive digital boards and modern learning tools', ic: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"><rect x="3" y="4" width="18" height="13" rx="2"/><path d="M8 21h8M12 17v4"/></svg>' },
  { img: 'fac-science', t: 'Science Labs', d: 'Well-equipped Physics, Chemistry, and Biology labs', ic: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"><path d="M9 3h6M10 3v6l-5 9a2 2 0 0 0 1.8 3h10.4A2 2 0 0 0 19 18l-5-9V3"/></svg>' },
  { img: 'fac-library', t: 'Library', d: '20,000+ books and digital resources', ic: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"><path d="M4 5a2 2 0 0 1 2-2h6v18H6a2 2 0 0 0-2 2V5z"/><path d="M20 5a2 2 0 0 0-2-2h-6v18h6a2 2 0 0 1 2 2V5z"/></svg>' },
  { img: 'fac-sports', t: 'Sports Complex', d: 'Multi-sport facilities and trained coaches', ic: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"><circle cx="12" cy="12" r="9"/><path d="M12 3l2.5 5.5L20 9l-4 4 1 6-5-3-5 3 1-6-4-4 5.5-.5L12 3z"/></svg>' },
  { img: 'fac-transport', t: 'Transportation', d: 'GPS-enabled buses covering all major routes', ic: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"><rect x="4" y="4" width="16" height="13" rx="2"/><path d="M4 11h16M7 17v2M17 17v2"/><circle cx="8" cy="14" r="1" fill="currentColor"/><circle cx="16" cy="14" r="1" fill="currentColor"/></svg>' },
  { img: 'fac-security', t: 'Security', d: '24/7 CCTV surveillance and trained security', ic: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"><path d="M12 2l8 3v6c0 5-3.5 8.5-8 11-4.5-2.5-8-6-8-11V5l8-3z"/></svg>' },
  { img: 'fac-auditorium', t: 'Auditorium', d: '1000+ seating capacity for events', ic: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"><path d="M3 10a9 5 0 0 1 18 0v8H3v-8z"/><path d="M3 14h18M8 18v-4M16 18v-4"/></svg>' },
  { img: 'fac-cafeteria', t: 'Cafeteria', d: 'Hygienic and nutritious food options', ic: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"><path d="M6 3v7a2 2 0 0 0 4 0V3M8 3v18M18 3c-1.7 0-3 2-3 5s1.3 4 3 4v9"/></svg>' },
];

export const events: EventItem[] = [
  { img: 'gal-audience', cat: 'Cultural', cls: 'cultural', date: 'March 15, 2024', t: 'Annual Day Celebration 2024', d: 'Join us for a spectacular evening of performances, awards, and celebrations.' },
  { img: 'ev-science', cat: 'Academic', cls: 'academic', date: 'March 20, 2024', t: 'Science Exhibition', d: 'Students showcase innovative science projects and experiments.' },
  { img: 'gal-sports', cat: 'Sports', cls: 'sports', date: 'April 5, 2024', t: 'Inter-School Sports Meet', d: 'Annual sports competition featuring athletics, team sports, and more.' },
  { img: 'ev-parent', cat: 'Academic', cls: 'academic', date: 'April 10, 2024', t: 'Parent-Teacher Meeting', d: 'Discuss student progress and academic performance with our teachers.' },
];

export const gallery: GalleryItem[] = [
  { img: 'gal-classroom', cls: 'g-a', alt: 'Modern classroom' },
  { img: 'gal-audience', cls: 'g-b', alt: 'School assembly' },
  { img: 'gal-apple', cls: 'g-c', alt: 'Books and learning' },
  { img: 'gal-sports', cls: 'g-d', alt: 'Sports ground' },
  { img: 'gal-glass', cls: 'g-e', alt: 'Science laboratory' },
  { img: 'gal-books', cls: 'g-f', alt: 'Library' },
];

export const testimonials: Testimonial[] = [
  { q: 'Don Bosco has transformed my son into a confident and responsible individual. The teachers here go above and beyond to ensure each child receives personal attention. The overall environment is conducive to learning.', n: 'Rajesh Kumar', g: 'Parent of Arjun (Grade 8)', av: 'RK' },
  { q: 'We are extremely happy with our decision to enrol Ananya at Don Bosco. The school\'s balanced approach to academics and extracurricular activities has helped her develop into a well-rounded individual. Highly recommended!', n: 'Priya Sharma', g: 'Parent of Ananya (Grade 6)', av: 'PS' },
  { q: 'The dedication of the faculty at Don Bosco is commendable. They have nurtured my daughter\'s academic growth while instilling strong moral values. The school\'s regular communication with parents is also appreciated.', n: 'Mohammed Ali', g: 'Parent of Fatima (Grade 10)', av: 'MA' },
];

export const statDefs: StatDef[] = [
  { target: 27, suffix: '+', label: 'Years of Excellence', sub: 'Shaping futures since 1999', ic: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 2 4 6v6c0 5 8 8 8 8s8-3 8-8V6l-8-4z"/></svg>' },
  { target: 375, suffix: '+', label: 'Students', sub: 'Learning and growing daily', ic: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 9l9-5 9 5-9 5-9-5zM7 11v5c0 1.5 2.5 3 5 3s5-1.5 5-3v-5"/></svg>' },
  { target: 15, suffix: '+', label: 'Expert Faculty', sub: 'Dedicated educators', ic: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 4-6 8-6s8 2 8 6"/></svg>' },
  { target: 11, suffix: '+', label: 'Achievements', sub: 'Awards and recognitions', ic: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M8 21h8M12 17v4M7 4h10v5a5 5 0 0 1-10 0V4zM7 6H4v2a3 3 0 0 0 3 3M17 6h3v2a3 3 0 0 1-3 3"/></svg>' },
];
