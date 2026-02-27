// ─── Types ─────────────────────────────────────────────

export interface NavLink {
  label: string;
  href: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  icon: string; // Lucide icon name
}

export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: "wedding" | "pre-wedding" | "maternity" | "fashion" | "kids";
  width: number;
  height: number;
}

export interface Testimonial {
  id: number;
  name: string;
  location: string;
  rating: number;
  text: string;
  source: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: string;
}

// ─── Navigation ────────────────────────────────────────

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Gallery", href: "/gallery" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

// ─── Services ──────────────────────────────────────────

export const SERVICES: Service[] = [
  {
    id: "wedding",
    title: "Wedding Photography",
    description:
      "Capturing every sacred ritual, every joyful tear, and every dance move. From mehendi mornings to reception nights — your full wedding story, beautifully told.",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
    icon: "Heart",
  },
  {
    id: "pre-wedding",
    title: "Pre-Wedding Films",
    description:
      "Cinematic love stories shot across Kerala's backwaters, tea estates, and misty hilltops. A film as unique as your love story.",
    image:
      "https://images.unsplash.com/photo-1529634597503-139d3726fed5?w=800&q=80",
    icon: "Film",
  },
  {
    id: "wedding-films",
    title: "Wedding Films",
    description:
      "Documentary-style cinematic films that capture the emotion, energy, and beauty of your celebration in stunning 4K quality.",
    image:
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&q=80",
    icon: "Video",
  },
  {
    id: "maternity",
    title: "Maternity Shoots",
    description:
      "Gentle, golden-hour maternity sessions that celebrate the beauty of new beginnings. Styled, intimate, and unforgettable.",
    image:
      "https://images.unsplash.com/photo-1493894473891-10fc1e5dbd22?w=800&q=80",
    icon: "Baby",
  },
  {
    id: "fashion",
    title: "Fashion Shoots",
    description:
      "Bold, editorial fashion photography with creative direction, professional lighting, and magazine-quality retouching.",
    image:
      "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&q=80",
    icon: "Sparkles",
  },
  {
    id: "kids",
    title: "Kids Photography",
    description:
      "Playful, candid sessions for your little ones — from newborn portraits to milestone birthdays. Pure magic, frozen in time.",
    image:
      "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&q=80",
    icon: "Star",
  },
];

// ─── Gallery ───────────────────────────────────────────

export const GALLERY_IMAGES: GalleryImage[] = [
  // Wedding (5 images)
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
    alt: "Bride holding bouquet with warm golden light",
    category: "wedding",
    width: 800,
    height: 1200,
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&q=80",
    alt: "Wedding couple first dance under fairy lights",
    category: "wedding",
    width: 800,
    height: 533,
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800&q=80",
    alt: "Wedding ceremony with floral arch and guests",
    category: "wedding",
    width: 800,
    height: 533,
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
    alt: "Traditional wedding couple portrait outdoors",
    category: "wedding",
    width: 800,
    height: 1200,
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800&q=80",
    alt: "Elegant wedding rings on silk fabric",
    category: "wedding",
    width: 800,
    height: 800,
  },

  // Pre-Wedding (5 images)
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1529634597503-139d3726fed5?w=800&q=80",
    alt: "Couple holding hands walking on beach at sunset",
    category: "pre-wedding",
    width: 800,
    height: 533,
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1474552226712-ac0f0961a954?w=800&q=80",
    alt: "Romantic couple silhouette against orange sky",
    category: "pre-wedding",
    width: 800,
    height: 1200,
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1544078751-58fee2d8a03b?w=800&q=80",
    alt: "Couple laughing together in a field of flowers",
    category: "pre-wedding",
    width: 800,
    height: 533,
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=800&q=80",
    alt: "Couple embracing in misty morning light",
    category: "pre-wedding",
    width: 800,
    height: 1067,
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800&q=80",
    alt: "Couple at golden hour in tea estate",
    category: "pre-wedding",
    width: 800,
    height: 533,
  },

  // Maternity (4 images)
  {
    id: 11,
    src: "https://images.unsplash.com/photo-1493894473891-10fc1e5dbd22?w=800&q=80",
    alt: "Expectant mother in flowing white dress",
    category: "maternity",
    width: 800,
    height: 1067,
  },
  {
    id: 12,
    src: "https://images.unsplash.com/photo-1489710437720-ebb67ec84dd2?w=800&q=80",
    alt: "Maternity portrait in garden setting",
    category: "maternity",
    width: 800,
    height: 1200,
  },
  {
    id: 13,
    src: "https://images.unsplash.com/photo-1457089328109-e5d9bd499191?w=800&q=80",
    alt: "Couple expecting with hands on belly",
    category: "maternity",
    width: 800,
    height: 533,
  },
  {
    id: 14,
    src: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?w=800&q=80",
    alt: "Soft light maternity silhouette",
    category: "maternity",
    width: 800,
    height: 1200,
  },

  // Fashion (5 images)
  {
    id: 15,
    src: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&q=80",
    alt: "Fashion model with dramatic lighting",
    category: "fashion",
    width: 800,
    height: 1200,
  },
  {
    id: 16,
    src: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&q=80",
    alt: "High fashion editorial portrait",
    category: "fashion",
    width: 800,
    height: 533,
  },
  {
    id: 17,
    src: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80",
    alt: "Model in vibrant yellow outfit on street",
    category: "fashion",
    width: 800,
    height: 1200,
  },
  {
    id: 18,
    src: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=800&q=80",
    alt: "Fashion portrait with natural light",
    category: "fashion",
    width: 800,
    height: 800,
  },
  {
    id: 19,
    src: "https://images.unsplash.com/photo-1495385794356-15371f348c31?w=800&q=80",
    alt: "Elegant fashion portrait against textured wall",
    category: "fashion",
    width: 800,
    height: 1200,
  },

  // Kids (5 images)
  {
    id: 20,
    src: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&q=80",
    alt: "Happy child with flower crown outdoors",
    category: "kids",
    width: 800,
    height: 1067,
  },
  {
    id: 21,
    src: "https://images.unsplash.com/photo-1471286174890-9c112ffca5b4?w=800&q=80",
    alt: "Toddler playing with bubbles in garden",
    category: "kids",
    width: 800,
    height: 533,
  },
  {
    id: 22,
    src: "https://images.unsplash.com/photo-1519457431-44ccd64a579b?w=800&q=80",
    alt: "Baby laughing on soft blanket",
    category: "kids",
    width: 800,
    height: 800,
  },
  {
    id: 23,
    src: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?w=800&q=80",
    alt: "Child running through sunlit meadow",
    category: "kids",
    width: 800,
    height: 1200,
  },
  {
    id: 24,
    src: "https://images.unsplash.com/photo-1544776193-352d25ca82cd?w=800&q=80",
    alt: "Little girl with sparklers at celebration",
    category: "kids",
    width: 800,
    height: 533,
  },
];

// ─── Testimonials ──────────────────────────────────────

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Meera & Arjun Nair",
    location: "Kochi, Kerala",
    rating: 5,
    text: "Tuesday Lights didn't just photograph our wedding — they captured the soul of it. Every frame feels like a painting. We still get teary looking at the album.",
    source: "WedMeGood",
  },
  {
    id: 2,
    name: "Lakshmi Menon",
    location: "Trivandrum, Kerala",
    rating: 5,
    text: "Our maternity shoot was the most beautiful experience. They made me feel like a goddess in golden light. The pictures are pure art.",
    source: "Google Reviews",
  },
  {
    id: 3,
    name: "Rahul & Priya Krishnan",
    location: "Thrissur, Kerala",
    rating: 5,
    text: "From the pre-wedding shoot in Munnar to the three-day wedding in Guruvayoor, they were everywhere and yet invisible. Absolute professionals.",
    source: "WedMeGood",
  },
  {
    id: 4,
    name: "Anjali Thomas",
    location: "Calicut, Kerala",
    rating: 5,
    text: "We flew them to Rajasthan for our destination wedding and it was the best decision. The photos look like they belong in a magazine.",
    source: "Google Reviews",
  },
  {
    id: 5,
    name: "Deepak & Sneha Varma",
    location: "Alappuzha, Kerala",
    rating: 5,
    text: "We wanted candid, raw, emotional — and that's exactly what we got. The wedding film made our parents cry happy tears. Forever grateful.",
    source: "WedMeGood",
  },
];

// ─── Stats ─────────────────────────────────────────────

export const STATS: Stat[] = [
  { value: "500+", label: "Weddings" },
  { value: "8+", label: "Years" },
  { value: "157K", label: "Followers" },
  { value: "All India", label: "Coverage" },
];

// ─── Social Links ──────────────────────────────────────

export const SOCIAL_LINKS: SocialLink[] = [
  { label: "Instagram", href: "https://instagram.com/tuesdaylights", icon: "Instagram" },
  { label: "Facebook", href: "https://facebook.com/tuesdaylights", icon: "Facebook" },
  { label: "YouTube", href: "https://youtube.com/@tuesdaylights", icon: "Youtube" },
];

// ─── Contact Info ──────────────────────────────────────

export const CONTACT_INFO = {
  address: "Tuesday Lights, JGPR+GHQ, Amalagiri P.O, Kerala 686630, India",
  phone: "+91 7010085577",
  whatsapp: "https://wa.me/917010085577",
  whatsappMessage:
    "Hi Tuesday Lights! I'd love to know more about your photography packages.",
  email: "hello@tuesdaylights.com",
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3933.5!2d76.5!3d9.95!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwNTcnMDAuMCJOIDc2wrAzMCcwMC4wIkU!5e0!3m2!1sen!2sin!4v1",
};

// ─── About ─────────────────────────────────────────────

export const ABOUT_STORY = {
  title: "Our Story",
  subtitle: "Born from light, driven by love",
  paragraphs: [
    "Tuesday Lights was born from a simple belief — that every love story deserves to be told beautifully. Based in the lush green heart of Kerala, we started with a single camera and a passion for real, raw emotion.",
    "Over eight years and 500+ weddings later, we've traveled across India — from the backwaters of Alleppey to the palaces of Rajasthan — capturing weddings, emotions, and fleeting moments that last a lifetime.",
    "Our team of passionate photographers and filmmakers believes that the best stories are the ones you don't pose for. We wait, we watch, we capture what's real.",
  ],
  images: {
    main: "https://images.unsplash.com/photo-1554048612-b6a482bc67e5?w=800&q=80",
    accent: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600&q=80",
  },
};
