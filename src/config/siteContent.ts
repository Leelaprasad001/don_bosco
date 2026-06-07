import type { EventItem, Facility, Feature, GalleryItem, NavItem, StatDef, Testimonial } from '../types';

export const navItems: NavItem[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About Us' },
  { id: 'admissions', label: 'Admissions' },
  { id: 'facilities', label: 'Facilities' },
  { id: 'gallery', label: 'Gallery' },
  // { id: 'events', label: 'Events' },
  { id: 'contact', label: 'Contact' },
];

export const features: Feature[] = [
  { ic: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M2 7l10-4 10 4-10 4L2 7z"/><path d="M6 9.5V14c0 1.7 2.7 3 6 3s6-1.3 6-3V9.5"/><path d="M22 7v6"/></svg>', t: 'Expert Faculty', d: 'Qualified educators use personal attention and modern methods to build strong academic foundations and help every student reach full potential.' },
  { ic: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="4" width="18" height="12" rx="2"/><path d="M8 20h8M12 16v4"/><path d="M8 9l2.5 2.5L8 14M13 14h3"/></svg>', t: 'Smart Learning Environment', d: 'Smart classrooms, projectors, coding, and digital tools make lessons interactive, engaging, and effective while preparing students with future-ready skills.' },
  { ic: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 21s-7-4.5-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 11c0 5.5-7 10-7 10z"/></svg>', t: 'Student Development', d: 'Along with academics, students grow in communication, leadership, creativity, confidence, and character through competitions and skill-based activities.' },
  { ic: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.7 2.5 15.3 0 18M12 3c-2.5 2.7-2.5 15.3 0 18"/></svg>', t: 'Exposure & Experiential Learning', d: 'Science fairs, Skill Darbar, sports, cultural events, coding, and practical learning promote innovation, teamwork, and real-world problem-solving abilities.' },
  { ic: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="9" r="5"/><path d="M8.5 13.5L7 22l5-3 5 3-1.5-8.5"/></svg>', t: 'Academic Excellence', d: 'A consistent 100% pass record, strong English and Mathematics foundations, and IIT Foundation classes prepare students for competitive success.' },
  { ic: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 5h16v12H4z"/><path d="M8 9h8M8 12h6"/><circle cx="8" cy="18" r="1.5"/><circle cx="16" cy="18" r="1.5"/></svg>', t: 'Activities for Young Learners', d: 'For LKG to 5th Grade, activity-based learning builds creativity, curiosity, communication, and balanced development from an early age.' },
  { ic: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 10l8-6 8 6v9a1 1 0 0 1-1 1h-4v-6H9v6H5a1 1 0 0 1-1-1v-9z"/></svg>', t: 'Residential Hostel Facility', d: 'Safe campus hostel accommodation for boys and girls from 1st to 10th Grade supports discipline, care, academic focus, and growth.' },
  { ic: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 2l8 3v6c0 5-3.5 8.5-8 11-4.5-2.5-8-6-8-11V5l8-3z"/><path d="M9 12l2 2 4-4"/></svg>', t: 'Safe & Secure Campus', d: 'Full-campus CCTV surveillance and strong safety systems ensure a secure environment where students learn and grow with confidence daily.' },
];

export const facilities: Facility[] = [
  { img: 'fac-smart', t: 'Smart Classrooms', d: 'Interactive classrooms with modern teaching tools for engaging learning.', ic: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"><rect x="3" y="4" width="18" height="13" rx="2"/><path d="M8 21h8M12 17v4"/></svg>' },
  { img: 'fac-digital', t: 'Digital Projectors', d: 'Projector-enabled lessons that improve clarity, interaction, and concept understanding.', ic: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"><rect x="3" y="6" width="18" height="10" rx="2"/><circle cx="17" cy="11" r="1.5"/><path d="M7 16v2m10-2v2M9 20h6"/></svg>' },
  { img: 'fac-auditorium', t: 'Spacious Auditorium', d: 'A large auditorium for assemblies, performances, and academic events.', ic: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"><path d="M3 10a9 5 0 0 1 18 0v8H3v-8z"/><path d="M3 14h18M8 18v-4M16 18v-4"/></svg>' },
  { img: 'fac-science', t: 'Science Laboratories', d: 'Well-equipped labs that support practical experiments and scientific learning.', ic: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"><path d="M9 3h6M10 3v6l-5 9a2 2 0 0 0 1.8 3h10.4A2 2 0 0 0 19 18l-5-9V3"/></svg>' },
  { img: 'fac-computer', t: 'Computer Facilities', d: 'Computer-enabled learning spaces to build digital literacy and coding skills.', ic: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"><rect x="3" y="4" width="18" height="12" rx="2"/><path d="M8 20h8M12 16v4"/></svg>' },
  { img: 'fac-sports', t: 'Large Playground', d: 'Spacious play areas for sports, fitness, and team-building activities.', ic: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"><circle cx="12" cy="12" r="9"/><path d="M12 3l2.5 5.5L20 9l-4 4 1 6-5-3-5 3 1-6-4-4 5.5-.5L12 3z"/></svg>' },
  { img: 'fac-hostels', t: 'Hostel Facilities', d: 'Safe and comfortable hostel support for boys and girls within campus.', ic: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"><path d="M4 10l8-6 8 6v9a1 1 0 0 1-1 1h-4v-6H9v6H5a1 1 0 0 1-1-1v-9z"/></svg>' },
  { img: 'fac-transport', t: 'Safe Transportation Services', d: 'Reliable school transport services with safety-focused route coverage.', ic: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"><rect x="4" y="4" width="16" height="13" rx="2"/><path d="M4 11h16M7 17v2M17 17v2"/><circle cx="8" cy="14" r="1" fill="currentColor"/><circle cx="16" cy="14" r="1" fill="currentColor"/></svg>' },
];

export const events: EventItem[] = [
  { img: 'gal-audience', cat: 'Cultural', cls: 'cultural', date: 'March 15, 2024', t: 'Annual Day Celebration 2024', d: 'Join us for a spectacular evening of performances, awards, and celebrations.' },
  { img: 'ev-science', cat: 'Academic', cls: 'academic', date: 'March 20, 2024', t: 'Science Exhibition', d: 'Students showcase innovative science projects and experiments.' },
  { img: 'gal-sports', cat: 'Sports', cls: 'sports', date: 'April 5, 2024', t: 'Inter-School Sports Meet', d: 'Annual sports competition featuring athletics, team sports, and more.' },
  { img: 'ev-parent', cat: 'Academic', cls: 'academic', date: 'April 10, 2024', t: 'Parent-Teacher Meeting', d: 'Discuss student progress and academic performance with our teachers.' },
];

export const gallery: GalleryItem[] = [
  { img: 'gal-1', cls: 'g-a', alt: 'Gallery Image 1' },
  { img: 'gal-2', cls: 'g-b', alt: 'Gallery Image 2' },
  { img: 'gal-3', cls: 'g-c', alt: 'Gallery Image 3' },
  { img: 'gal-4', cls: 'g-d', alt: 'Gallery Image 4' },
  { img: 'gal-5', cls: 'g-e', alt: 'Gallery Image 5' },
  { img: 'gal-6', cls: 'g-f', alt: 'Gallery Image 6' },
  { img: 'gal-7', cls: 'g-g', alt: 'Gallery Image 7' },
  { img: 'gal-8', cls: 'g-h', alt: 'Gallery Image 8' },
];

export const testimonials: Testimonial[] = [
  { q: 'Don Bosco has transformed my son into a confident and responsible individual. The teachers here go above and beyond to ensure each child receives personal attention. The overall environment is conducive to learning.', n: 'Rajesh Kumar', g: 'Parent of Arjun (Grade 8)', av: 'RK' },
  { q: 'We are extremely happy with our decision to enrol Ananya at Don Bosco. The school\'s balanced approach to academics and extracurricular activities has helped her develop into a well-rounded individual. Highly recommended!', n: 'Priya Sharma', g: 'Parent of Ananya (Grade 6)', av: 'PS' },
  { q: 'The dedication of the faculty at Don Bosco is commendable. They have nurtured my daughter\'s academic growth while instilling strong moral values. The school\'s regular communication with parents is also appreciated.', n: 'Mohammed Ali', g: 'Parent of Fatima (Grade 10)', av: 'MA' },
];

export const statDefs: StatDef[] = [
  { target: 43, suffix: '+', label: 'Years of Excellence', sub: 'Shaping futures since 1983', ic: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 2 4 6v6c0 5 8 8 8 8s8-3 8-8V6l-8-4z"/></svg>' },
  { target: 850, suffix: '+', label: 'Students', sub: 'Learning and growing daily', ic: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 9l9-5 9 5-9 5-9-5zM7 11v5c0 1.5 2.5 3 5 3s5-1.5 5-3v-5"/></svg>' },
  { target: 60, suffix: '+', label: 'Expert Faculty', sub: 'Dedicated educators', ic: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 4-6 8-6s8 2 8 6"/></svg>' },
  { target: 10, suffix: '+', label: 'Achievements', sub: 'Awards and recognitions', ic: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M8 21h8M12 17v4M7 4h10v5a5 5 0 0 1-10 0V4zM7 6H4v2a3 3 0 0 0 3 3M17 6h3v2a3 3 0 0 1-3 3"/></svg>' },
];

export const highlights: string[] = [
  'Nursery to 10th Grade Education',
  '100% Academic Pass Record',
  'IIT Foundation Classes',
  'Coding & Technology Learning',
  'Smart Classrooms & Digital Learning',
  'Science Fair & Skill Darbar Programs',
  'Activity-Based Learning for LKG to 5th',
  'Boys & Girls Hostel Facility',
  'CCTV Monitored Campus',
  'Spacious Playground & Sports Activities',
  'Auditorium & Modern Infrastructure',
  'Safe Transportation Services',
  'Focus on Academic Excellence & Character Building',
];