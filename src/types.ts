export type PageTab =
  | 'home'
  | 'about'
  | 'services'
  | 'portfolio'
  | 'case-studies'
  | 'testimonials'
  | 'blog'
  | 'contact';

export type PortfolioCategory = 'all' | 'etsy' | 'seo' | 'ads' | 'ecommerce';

export interface ServiceItem {
  id: string;
  category: 'etsy' | 'seo' | 'content' | 'ads' | 'ebay';
  categoryLabel: string;
  title: string;
  shortDesc: string;
  items: string[];
  iconName: string;
  highlightTag?: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'etsy' | 'seo' | 'ads' | 'ecommerce';
  categoryLabel: string;
  thumbnail: string;
  gallery?: string[];
  summary: string;
  client: string;
  metrics: { label: string; value: string }[];
  challenge: string;
  solution: string;
  results: string;
  tags: string[];
}

export interface CaseStudy {
  id: string;
  title: string;
  category: string;
  clientName: string;
  duration: string;
  heroImage: string;
  overview: string;
  beforeStats: { label: string; value: string }[];
  afterStats: { label: string; value: string }[];
  keyStrategies: string[];
  testimonialQuote?: string;
  testimonialAuthor?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  companyOrNiche: string;
  avatar: string;
  content: string;
  rating: number;
  orderType: string;
  platform: 'Etsy' | 'Fiverr' | 'Upwork' | 'Direct Client';
  verifiedOrder: boolean;
}

export interface BlogPost {
  id: string;
  title: string;
  category: 'Etsy SEO' | 'Digital Marketing' | 'SEO Strategy' | 'eCommerce Growth';
  date: string;
  readTime: string;
  summary: string;
  content: string;
  coverImage: string;
  author: string;
  tags: string[];
}

export interface SkillItem {
  name: string;
  percentage: number;
  category: 'SEO & Etsy' | 'Advertising & Marketing' | 'Content & Management';
  iconName: string;
  description: string;
}

export interface ContactFormData {
  fullName: string;
  email: string;
  selectedServices: string[];
  budget: string;
  projectDetails: string;
}
