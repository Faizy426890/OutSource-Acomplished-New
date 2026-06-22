// app/services/[slug]/icon-map.ts
// Central lookup so string icon names stored in data.ts (e.g. "Heart", "Calendar")
// can be resolved to actual lucide-react components at render time.

import {
  Heart,
  Calendar,
  UserCheck,
  Truck,
  Users,
  Shield,
  TrendingUp,
  ClipboardList,
  Settings,
  CheckCircle,
  Clock,
  Zap,
  Award,
  Eye,
  Scale,
  Phone,
  FileText,
  FileCheck,
  PieChart,
  Star,
  Clipboard,
  Gavel,
  Calculator,
  Building,
  DollarSign,
  Database,
  Activity,
  BarChart,
  Cloud,
  Code,
  Cog,
  Layout,
  AlertCircle,
  Mail,
  type LucideIcon,
} from "lucide-react";

export const iconMap: Record<string, LucideIcon> = {
  Heart,
  Calendar,
  UserCheck,
  Truck,
  Users,
  Shield,
  TrendingUp,
  ClipboardList,
  Settings,
  CheckCircle,
  Clock,
  Zap,
  Award,
  Eye,
  Scale,
  Phone,
  FileText,
  FileCheck,
  PieChart,
  Star,
  Clipboard,
  Gavel,
  Calculator,
  Building,
  DollarSign,
  Database,
  Activity,
  BarChart,
  Cloud,
  Code,
  Cog,
  Layout,
  AlertCircle,
  Mail,
};

/**
 * Resolve an icon name string (as stored in data.ts) to a real component.
 * Falls back to Star if the name isn't found, so a typo never renders blank.
 */
export function getIcon(name: string): LucideIcon {
  return iconMap[name] ?? Star;
}
