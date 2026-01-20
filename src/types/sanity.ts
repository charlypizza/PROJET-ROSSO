export interface SanityImage {
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
  };
}

export interface HeroPanel {
  _id: string;
  _type: 'heroPanel';
  image?: SanityImage;
  imageUrl?: string;
  alt?: string;
}

export interface AboutSection {
  _id: string;
  _type: 'aboutSection';
  topLabel?: string;
  title?: string;
  paragraphs?: string[];
  image?: SanityImage;
  imageUrl?: string;
  schedule?: {
    weekdays?: string;
    sunday?: string;
  };
  contactInstagram?: string;
  contactInstagramUrl?: string;
  mapUrl?: string;
  mapButtonText?: string;
}

export interface MenuItem {
  _id: string;
  _type: 'menuItem';
  name?: string;
  title?: string;
  description?: string[];
  variant?: string;
}

export interface MenuSubcategory {
  _id: string;
  _type: 'menuSubcategory';
  name?: string;
  barTitle?: string;
  subtitle?: string;
  footer?: string;
  items?: MenuItem[];
}

export interface MenuCategory {
  _id: string;
  _type: 'menuCategory';
  name?: string;
  slug?: {
    current: string;
  };
  displayName?: string;
  image?: SanityImage;
  videoUrl?: string;
  imageUrl?: string;
  subcategories?: MenuSubcategory[];
}

export interface GalleryMedia {
  _id: string;
  _type: 'galleryMedia';
  image?: SanityImage;
  mediaUrl?: string;
  isVideo?: boolean;
  alt?: string;
}

export interface InstagramPhoto {
  _id: string;
  _type: 'instagramPhoto';
  image?: SanityImage;
  imageUrl?: string;
  alt?: string;
}

export interface SiteSettings {
  _id: string;
  _type: 'siteSettings';
  siteName?: string;
  instagramUrl?: string;
  instagramHandle?: string;
  footerDescription?: string;
  schedule?: {
    weekdays?: string;
    sunday?: string;
  };
  address?: string;
  mapUrl?: string;
  mapEmbedUrl?: string;
  logoWhite?: SanityImage;
  logoRed?: SanityImage;
  logoWhiteUrl?: string;
  logoRedUrl?: string;
}