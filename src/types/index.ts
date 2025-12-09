import { ReactNode } from 'react';

export interface MenuItem {
  id: string;
  label: string;
  path: string;
  icon?: ReactNode;  // Changed to ReactNode for JSX elements
  submenu?: SubMenuItem[];
}

export interface SubMenuItem {
  id: string;
  label: string;
  path: string;
  description?: string;
  icon?: ReactNode;  // Changed to ReactNode
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  features: string[];
  category: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;  // Keep as string for icon names
  image: string;
  features: string[];
}

export interface CarouselItem {
  id: number;
  title: string;
  description: string;
  image: string;
  ctaText: string;
  ctaLink: string;
}

export interface CompanyInfo {
  name: string;
  tagline: string;
  phone: string;
  email: string;
  address: string;
  founded: number;
}