import {
  ServiceItem,
  PortfolioItem,
  CaseStudy,
  Testimonial,
  BlogPost,
  SkillItem,
} from '../types';

export const MISBAH_INFO = {
  name: 'Misbah Noor',
  title: 'Digital Entrepreneur & E-commerce Marketing Strategist',
  tagline: 'Helping Businesses Grow Through Etsy, SEO & Digital Marketing.',
  subheadline:
    'I am Misbah Noor, a Digital Entrepreneur specializing in Etsy Digital Products, SEO, Content Writing, Facebook Ads, Google Ads, eBay Management and E-commerce Growth.',
  bio: 'I have successfully completed more than 200 Etsy orders and have extensive experience in digital marketing, listing optimization, and e-commerce scaling. My goal is to help businesses increase visibility, sales, and brand growth through strategic digital solutions.',
  email: 'misbah.noor.digital@gmail.com',
  whatsapp: '+923001234567', // formatted for direct chat link
  whatsappDisplay: '+92 300 1234567',
  location: 'Global Remote / Digital Entrepreneur',
  completedOrdersCount: 200,
  yearsExperience: 5,
  satisfactionRate: '99.4%',
  socialLinks: {
    linkedin: 'https://linkedin.com/in/misbahnoor-digital',
    etsy: 'https://etsy.com',
    fiverr: 'https://fiverr.com',
    facebook: 'https://facebook.com',
    instagram: 'https://instagram.com',
  },
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'etsy-services',
    category: 'etsy',
    categoryLabel: 'Etsy Services',
    title: 'Etsy Shop Setup & Growth',
    shortDesc:
      'Complete end-to-end Etsy shop creation, keyword optimization, and digital product listing design to drive steady organic sales.',
    items: [
      'Etsy Shop Setup & Configuration',
      'Etsy SEO & Keyword Optimization',
      'Digital Product Listings & Mockups',
      'Listing Optimization & Rank Boosting',
      'Etsy Branding & Banner Design',
    ],
    iconName: 'ShoppingBag',
    highlightTag: 'Top Requested',
  },
  {
    id: 'seo-services',
    category: 'seo',
    categoryLabel: 'SEO Services',
    title: 'Search Engine Optimization',
    shortDesc:
      'Data-driven search engine optimization strategies to propel your website to page 1 on Google and search platforms.',
    items: [
      'In-Depth Keyword Research',
      'On Page SEO Optimization',
      'Off Page SEO & High-DA Backlinks',
      'Technical SEO Audit & Fixes',
      'Content & Metadata Optimization',
    ],
    iconName: 'TrendingUp',
    highlightTag: 'High ROI',
  },
  {
    id: 'content-services',
    category: 'content',
    categoryLabel: 'Content Writing',
    title: 'Content Writing & Copywriting',
    shortDesc:
      'Engaging, persuasive, and SEO-optimized copy crafted to convert searchers into loyal customers.',
    items: [
      'Blog Posts & Article Writing',
      'Website Copy & Landing Pages',
      'E-commerce Product Descriptions',
      'SEO Articles & Keyword Integration',
      'Digital Download Guides & eBooks',
    ],
    iconName: 'PenTool',
  },
  {
    id: 'marketing-services',
    category: 'ads',
    categoryLabel: 'Digital Marketing',
    title: 'Paid Ads & Marketing Campaigns',
    shortDesc:
      'High-converting social and search ad campaigns designed to maximize Return on Ad Spend (ROAS).',
    items: [
      'Facebook & Instagram Ads Strategy',
      'Google Ads Campaign Management',
      'Social Media Content Management',
      'Targeted Lead Generation Funnels',
      'Retargeting & Audience Profiling',
    ],
    iconName: 'Megaphone',
  },
  {
    id: 'ebay-services',
    category: 'ebay',
    categoryLabel: 'eBay Management',
    title: 'eBay Store & Stock Management',
    shortDesc:
      'Streamlined eBay inventory, listing creation, stock model synchronization, and seller account optimization.',
    items: [
      'Bulk Product Uploading & Drafting',
      'Inventory & Stock Level Management',
      'Stock Model & Variation Management',
      'eBay SEO Title & Description Tuning',
      'Store Architecture & Policy Setup',
    ],
    iconName: 'PackageCheck',
  },
];

export const PORTFOLIO_DATA: PortfolioItem[] = [
  {
    id: 'etsy-1',
    title: 'Etsy Digital Products & Planner Store Scaling',
    category: 'etsy',
    categoryLabel: 'Etsy Projects',
    thumbnail: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80',
    summary:
      'Turned a newly launched digital planner shop into a top-rated seller with 140+ sales in 60 days using long-tail Etsy SEO and Canva templates.',
    client: 'Digital Bloom Studio (USA)',
    metrics: [
      { label: 'Etsy Orders', value: '140+' },
      { label: 'Search Impressions', value: '+450%' },
      { label: 'Conversion Rate', value: '4.8%' },
    ],
    challenge:
      'The client had digital products but zero organic search traffic due to non-optimized titles and competitive search tags.',
    solution:
      'Engineered a 13-tag Etsy keyword strategy, updated listing thumbnail mockups with high-converting imagery, and optimized title hierarchy.',
    results:
      'Achieved Page 1 placement for 12 primary buyer keywords within 3 weeks, resulting in steady passive income.',
    tags: ['Etsy SEO', 'Digital Products', 'Canva Templates', 'Listing Optimization'],
  },
  {
    id: 'etsy-2',
    title: 'Handmade Crochet Patterns & Craft Shop Optimization',
    category: 'etsy',
    categoryLabel: 'Etsy Projects',
    thumbnail: 'https://images.unsplash.com/photo-1584992236310-6edddc08acff?auto=format&fit=crop&w=800&q=80',
    summary:
      'Listing optimization and tags revamp for a crochet pattern seller, boosting listing conversion rates and organic favorites.',
    client: 'CozyLoops Craft Co. (UK)',
    metrics: [
      { label: 'Crochet PDF Sales', value: '85+ Orders' },
      { label: 'Favorites Added', value: '1.2k+' },
      { label: 'Search Rank', value: '#1 for "Crochet Plushie Pattern"' },
    ],
    challenge:
      'Unique crochet patterns were buried under general craft searches without proper keyword targeting.',
    solution:
      'Restructured listing attributes, introduced SEO descriptions, and added clear step-by-step PDF instructions mockups.',
    results:
      'Grew shop favorites by 300% and secured #1 ranking for high-intent search queries.',
    tags: ['Crochet Patterns', 'Craft Niche', 'Etsy Tag Optimization', 'Digital PDF'],
  },
  {
    id: 'seo-1',
    title: 'E-commerce Organic Traffic Explosion & Ranking',
    category: 'seo',
    categoryLabel: 'SEO Projects',
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    summary:
      'Executed full On-Page and Technical SEO overhaul for a boutique fashion and lifestyle online store.',
    client: 'LuxeLiving Direct (Canada)',
    metrics: [
      { label: 'Organic Traffic', value: '+340%' },
      { label: 'Keywords Ranked #1-3', value: '28 Keywords' },
      { label: 'Monthly Organic Revenue', value: '$18,500' },
    ],
    challenge:
      'Slow page load speeds, duplicate content meta tags, and poor internal link structure throttled Google crawling.',
    solution:
      'Optimized site architecture, wrote keyword-rich collection copy, fixed broken headers, and built high-quality niche backlinks.',
    results:
      'Traffic quadrupled over 5 months with a 35% reduction in customer acquisition costs.',
    tags: ['On-Page SEO', 'Technical Audit', 'Google Search Console', 'Keyword Research'],
  },
  {
    id: 'ads-1',
    title: 'Facebook & Instagram Ads Campaign for E-learning eBooks',
    category: 'ads',
    categoryLabel: 'Advertising Projects',
    thumbnail: 'https://images.unsplash.com/photo-1533750516457-a7f992034fec?auto=format&fit=crop&w=800&q=80',
    summary:
      'Designed and managed high-converting Meta advertising campaigns with direct retargeting funnels.',
    client: 'EduGrow Publishing',
    metrics: [
      { label: 'Return on Ad Spend', value: '4.8x ROAS' },
      { label: 'Cost Per Acquisition', value: '$3.20' },
      { label: 'Total Revenue Generated', value: '$24,000+' },
    ],
    challenge:
      'Previous ad campaigns struggled with high cost-per-click ($1.80) and low conversion on cold audiences.',
    solution:
      'Created short-form video creatives, tested lookalike audiences based on past buyer emails, and deployed retargeting sequences.',
    results:
      'Consistently generated 4.8x ROAS across 90 days with lower CPA.',
    tags: ['Facebook Ads', 'Meta Pixel', 'Retargeting Funnel', 'Digital Marketing'],
  },
  {
    id: 'ecommerce-1',
    title: 'eBay Store Catalog Upload & Stock Model Automation',
    category: 'ecommerce',
    categoryLabel: 'eCommerce Projects',
    thumbnail: 'https://images.unsplash.com/photo-1556742049-0a670f4a4591?auto=format&fit=crop&w=800&q=80',
    summary:
      'Managed 600+ SKU inventory uploading, stock variations, and item specifics for a multi-category eBay merchant.',
    client: 'Apex Retail Tech (Australia)',
    metrics: [
      { label: 'SKUs Uploaded', value: '600+' },
      { label: 'Inventory Error Rate', value: '0.0%' },
      { label: 'Monthly Sales Volume', value: '320+ Items' },
    ],
    challenge:
      'Manual inventory updates caused stockouts, customer dissatisfaction, and low seller performance metrics.',
    solution:
      'Implemented automated stock synchronization spreadsheets, standard item specifics, and eBay Cassini-friendly listing titles.',
    results:
      'Maintained 100% Top-Rated Seller standing with zero stock discrepancies.',
    tags: ['eBay Management', 'Inventory Control', 'Stock Model Management', 'Bulk Uploads'],
  },
  {
    id: 'ads-2',
    title: 'Google Search Ads for Local B2B Service Provider',
    category: 'ads',
    categoryLabel: 'Advertising Projects',
    thumbnail: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80',
    summary:
      'Targeted Google Search PPC campaign focusing on high-intent lead generation for digital consultations.',
    client: 'NextGen Digital Agency',
    metrics: [
      { label: 'Lead Conversion', value: '18.4%' },
      { label: 'Qualified Leads', value: '95+ Leads' },
      { label: 'CPC Reduction', value: '-38%' },
    ],
    challenge:
      'Wasted ad budget on negative keywords and non-converting location targeting.',
    solution:
      'Rebuilt ad groups around phrase and exact match keywords, added negative keyword lists, and redesigned custom landing pages.',
    results:
      'Lowered cost per lead while increasing phone and email consultation bookings.',
    tags: ['Google Ads', 'PPC Campaign', 'Lead Generation', 'Conversion Rate Optimization'],
  },
];

export const CASE_STUDIES_DATA: CaseStudy[] = [
  {
    id: 'cs-etsy-growth',
    title: 'Case Study: Scaling an Etsy Shop from Zero to 200+ Sales in 90 Days',
    category: 'Etsy Digital Products & SEO',
    clientName: 'Crafters & Digital Design Co.',
    duration: '3 Months',
    heroImage: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=1200&q=80',
    overview:
      'How Misbah Noor applied deep keyword research, tag optimization, and conversion-focused listing layouts to build a thriving Etsy digital shop.',
    beforeStats: [
      { label: 'Monthly Etsy Sales', value: '2 Orders' },
      { label: 'Etsy Search Impressions', value: '450/mo' },
      { label: 'Listing Conversion Rate', value: '0.5%' },
    ],
    afterStats: [
      { label: 'Monthly Etsy Sales', value: '210+ Orders' },
      { label: 'Etsy Search Impressions', value: '42,000+/mo' },
      { label: 'Listing Conversion Rate', value: '4.6%' },
    ],
    keyStrategies: [
      'Identified low-competition, high-search volume long-tail keywords in Etsy search.',
      'Designed high-contrast, professional listing thumbnail mockups with clear callouts.',
      'Optimized title structure placing primary keyword within the first 40 characters.',
      'Configured all 13 Etsy listing tags with exact multi-word search phrases.',
      'Created automated PDF delivery and digital shop branding banners.',
    ],
    testimonialQuote:
      'Misbah completely transformed my Etsy store! Her SEO insights and listing tweaks made my digital products appear on the front page within weeks. 200+ orders later, I couldn’t be happier!',
    testimonialAuthor: 'Sarah M., Etsy Shop Owner',
  },
  {
    id: 'cs-seo-ranking',
    title: 'Case Study: Driving 300% Organic Traffic Growth via On-Page & Technical SEO',
    category: 'Search Engine Optimization',
    clientName: 'Niche Ecommerce Retailer',
    duration: '4 Months',
    heroImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    overview:
      'Comprehensive SEO audit, keyword mapping, technical fixes, and content optimization that landed 28 transactional keywords on Page 1 of Google.',
    beforeStats: [
      { label: 'Organic Monthly Visitors', value: '1,200' },
      { label: 'Domain Authority', value: '14' },
      { label: 'Page 1 Keywords', value: '2' },
    ],
    afterStats: [
      { label: 'Organic Monthly Visitors', value: '5,800+' },
      { label: 'Domain Authority', value: '28' },
      { label: 'Page 1 Keywords', value: '28' },
    ],
    keyStrategies: [
      'Eliminated duplicate meta titles and implemented schema markup across 150+ product pages.',
      'Authored 12 keyword-rich SEO articles addressing targeted buyer questions.',
      'Improved mobile PageSpeed score from 42 to 91 by compressing media and deferring non-essential scripts.',
      'Secured contextual backlinks from niche industry websites.',
    ],
    testimonialQuote:
      'Working with Misbah was the best decision for our e-commerce site. Her technical knowledge and clear reports made the whole process seamless.',
    testimonialAuthor: 'David K., E-commerce Founder',
  },
];

export const SKILLS_DATA: SkillItem[] = [
  {
    name: 'Etsy SEO & Listing Rank',
    percentage: 95,
    category: 'SEO & Etsy',
    iconName: 'ShoppingBag',
    description: '13-tag strategy, keyword research, ranking algorithm tuning, listing conversion copy.',
  },
  {
    name: 'Digital Marketing & Strategy',
    percentage: 90,
    category: 'Advertising & Marketing',
    iconName: 'Megaphone',
    description: 'Multi-channel digital marketing campaigns, sales funnels, audience profiling.',
  },
  {
    name: 'SEO Strategy (On & Off Page)',
    percentage: 90,
    category: 'SEO & Etsy',
    iconName: 'TrendingUp',
    description: 'Technical audits, site structure, backlink building, search console analytics.',
  },
  {
    name: 'Content Writing & Copy',
    percentage: 90,
    category: 'Content & Management',
    iconName: 'PenTool',
    description: 'SEO articles, product copy, engaging landing pages, e-commerce descriptions.',
  },
  {
    name: 'Facebook & Instagram Ads',
    percentage: 88,
    category: 'Advertising & Marketing',
    iconName: 'Target',
    description: 'Meta ads manager, lookalike retargeting, creative testing, ROAS scaling.',
  },
  {
    name: 'Google Ads & PPC',
    percentage: 85,
    category: 'Advertising & Marketing',
    iconName: 'Search',
    description: 'Search PPC, keyword match types, negative keywords, landing page CRO.',
  },
  {
    name: 'eBay Store & Stock Control',
    percentage: 85,
    category: 'Content & Management',
    iconName: 'PackageCheck',
    description: 'Bulk SKU uploads, stock model management, variation listings, inventory sync.',
  },
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 't1',
    name: 'Elena Rostova',
    role: 'Digital Planner Creator',
    companyOrNiche: 'Etsy Digital Store',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    content:
      'Misbah is an absolute genius when it comes to Etsy SEO! She updated my product titles, tags, and descriptions. My daily orders jumped from 1 to over 15 sales a day. She completed everything ahead of schedule!',
    rating: 5,
    orderType: 'Etsy SEO & Digital Product Setup',
    platform: 'Etsy',
    verifiedOrder: true,
  },
  {
    id: 't2',
    name: 'Marcus Thorne',
    role: 'Co-Founder',
    companyOrNiche: 'SaaS & Digital Goods',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    content:
      'Her Facebook Ads strategy gave us a 4.5x ROAS in the first month! Misbah understands consumer psychology and writes ad copy that actually converts. Highly professional communication!',
    rating: 5,
    orderType: 'Facebook Ads & Lead Generation',
    platform: 'Direct Client',
    verifiedOrder: true,
  },
  {
    id: 't3',
    name: 'Hannah Blake',
    role: 'Craft Business Owner',
    companyOrNiche: 'Crochet & Handmade Store',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80',
    content:
      'I was struggling to get views on my crochet pattern downloads. Misbah revamped all 30 listings with targeted tags and beautiful layout text. My views quadrupled in two weeks!',
    rating: 5,
    orderType: 'Crochet Listing SEO & Mockups',
    platform: 'Etsy',
    verifiedOrder: true,
  },
  {
    id: 't4',
    name: 'Jason Miller',
    role: 'Operations Lead',
    companyOrNiche: 'eBay Wholesale Tech',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    content:
      'Managing 500+ SKUs on eBay used to be a nightmare until Misbah took over. Her stock management and inventory uploading skills saved us countless hours. Extremely detail-oriented!',
    rating: 5,
    orderType: 'eBay Store & Stock Model Management',
    platform: 'Fiverr',
    verifiedOrder: true,
  },
];

export const BLOG_POSTS_DATA: BlogPost[] = [
  {
    id: 'blog-1',
    title: 'The Ultimate 13-Tag Etsy SEO Strategy for 2026',
    category: 'Etsy SEO',
    date: 'July 14, 2026',
    readTime: '5 min read',
    summary:
      'Learn how to research high-intent long-tail keywords and place them strategically across your Etsy title and 13 tags for maximum search visibility.',
    coverImage: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=800&q=80',
    author: 'Misbah Noor',
    tags: ['Etsy SEO', 'Digital Products', 'Listing Tips'],
    content: `
# The Ultimate 13-Tag Etsy SEO Strategy

Etsy’s search algorithm ranks listings based on keyword relevance, shopper behavior, and listing quality. If your tags are generic, you are competing against millions of sellers.

## 1. Focus on Long-Tail Multi-Word Phrases
Instead of using single words like "planner", use high-intent multi-word combinations like:
- "hyperlinked digital planner"
- "goodnotes student budget"
- "undated daily agenda pdf"

## 2. Match Titles with Tag Phrases
Etsy rewards exact phrase matches between your listing title and your tags. Ensure your primary keyword phrase appears in both the title and at least one tag.

## 3. Use All 13 Tag Slots
Never leave a tag slot empty! Every tag is an additional entry point for potential buyers to discover your shop.

## 4. Prioritize Visual Thumbnails
SEO gets buyers to your listing, but thumbnail design gets them to click. Ensure high contrast, clear text callouts, and clean background styling.
    `,
  },
  {
    id: 'blog-2',
    title: 'How to Build & Sell Profitable Digital Products on Etsy',
    category: 'eCommerce Growth',
    date: 'June 28, 2026',
    readTime: '6 min read',
    summary:
      'Step-by-step guide to researching trending digital niches like Canva templates, crochet pattern PDFs, and budget spreadsheets with zero inventory cost.',
    coverImage: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80',
    author: 'Misbah Noor',
    tags: ['Digital Products', 'Passive Income', 'Etsy Growth'],
    content: `
# How to Build & Sell Profitable Digital Products

Digital products are one of the most profitable e-commerce models because you create them once and sell them infinitely without shipping headaches.

## Top High-Demand Digital Categories:
1. **Canva Templates:** Social media kits, business branding kits, resume templates.
2. **Crochet & Craft Patterns:** Step-by-step PDF instructions with stitch guides and photo references.
3. **Planners & Spreadsheets:** Google Sheets automated budget trackers, habit logs, wedding planners.

## Keys to High Conversion:
- Provide instant download PDF guides with clear instructions.
- Add watermark protection on preview graphics.
- Include a thank-you note PDF encouraging reviews and repeat visits.
    `,
  },
  {
    id: 'blog-3',
    title: '5 On-Page SEO Tweaks That Instantly Double Search Traffic',
    category: 'SEO Strategy',
    date: 'June 10, 2026',
    readTime: '4 min read',
    summary:
      'Quick technical and content optimization wins for websites and online stores looking to jump ahead on Google search results.',
    coverImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    author: 'Misbah Noor',
    tags: ['SEO', 'On-Page SEO', 'Google Search'],
    content: `
# 5 On-Page SEO Tweaks That Double Traffic

Search Engine Optimization isn't magic—it's structured clarity. Here are 5 actionable steps you can execute today:

1. **Optimize H1 & Title Tags:** Place target keywords naturally within the first 60 characters.
2. **Compress Images & Add Alt Text:** Fast-loading images boost user experience and rank on Google Images.
3. **Internal Linking Mesh:** Link related blog posts and product pages together to distribute link equity.
4. **Answer Buyer Search Intent:** Craft content that answers specific questions (e.g., "how to choose a digital planner").
5. **Schema Markup Integration:** Add product, review, and FAQ schema to display star ratings in Google search snippets.
    `,
  },
];

export const WHY_HIRE_ME_REASONS = [
  {
    iconName: 'Award',
    title: '200+ Successful Etsy Orders',
    desc: 'Proven track record delivering exceptional listing optimization, store setups, and customer satisfaction.',
  },
  {
    iconName: 'Sparkles',
    title: 'Multi-Skill Digital Professional',
    desc: 'Mastery across Etsy, SEO, Facebook & Google Ads, Content Writing, and eBay inventory management.',
  },
  {
    iconName: 'TrendingUp',
    title: 'SEO & Marketing Expertise',
    desc: 'Deep analytical understanding of search algorithms and paid ad conversion funnels.',
  },
  {
    iconName: 'MessageSquare',
    title: 'Professional Communication',
    desc: 'Prompt, transparent, and detailed project updates keeping you informed every step of the way.',
  },
  {
    iconName: 'Target',
    title: 'Result-Oriented Strategies',
    desc: 'Focus on metrics that matter most: rank, clicks, conversions, and direct revenue growth.',
  },
  {
    iconName: 'Layers',
    title: 'E-commerce Experience',
    desc: 'Comprehensive knowledge of store policies, inventory models, variation listings, and brand assets.',
  },
];
