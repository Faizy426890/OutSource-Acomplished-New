// app/services/[slug]/page.tsx
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { getServiceBySlug, getAllServiceSlugs } from "./data";
import ServiceDetailClient from "./ServiceDetailClient";

interface PageProps {
  params: {
    slug: string;
  };
}

// Generate metadata for SEO
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const service = getServiceBySlug(params.slug);
  
  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: `${service.title} | Operational Excellence`,
    description: service.overview.solution.substring(0, 160),
    openGraph: {
      title: `${service.title} - ${service.subtitle}`,
      description: service.overview.solution,
      images: [service.heroImage],
    },
  };
}

// Generate static paths at build time
export async function generateStaticParams() {
  const slugs = getAllServiceSlugs();
  return slugs;
}

export default function ServiceDetailPage({ params }: PageProps) {
  const service = getServiceBySlug(params.slug);

  if (!service) {
    notFound();
  }

  return <ServiceDetailClient service={service} />;
}
