import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
}

export interface StatItem {
  number: string;
  label: string;
}

export interface CourseItem {
  title: string;
  description: string;
  features: string[];
  icon: LucideIcon;
  color: string;
}

export interface FeatureItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface ContactItem {
  title: string;
  info: string;
  icon: LucideIcon;
}