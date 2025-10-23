import dynamic from "next/dynamic";

// ✅ Lazy-loaded components for better performance
const Header1 = dynamic(() => import("../components/header/Header1"));
const Home1Banner = dynamic(() => import("../components/banner/Home1Banner"));
const Home1BannerMarquee = dynamic(() => import("../components/marquee/Home1BannerMarquee"));
const ServicesGrid = dynamic(() => import("./Industries"));
const Home1Solution = dynamic(() => import("../components/solution/Home1Solution"));
const GlobalMapPartners = dynamic(() => import("./map"), { ssr: false });
const GlobalLocationsMap = dynamic(() => import("./officelocations"), { ssr: false });
const Home2Contact = dynamic(() => import("../components/contact/Home2Contact"));
const Footer = dynamic(() => import("../components/footer/Footer"));

// ✅ SEO Metadata for GrowEdgeX Homepage
export const metadata = {
  title: "GrowEdgeX — Business Process Solutions & BPO Firm",
  description:
    "GrowEdgeX delivers intelligent Business Process Outsourcing (BPO) and virtual staffing solutions that enhance productivity, reduce costs, and drive growth for global enterprises.",
  keywords:
    "GrowEdgeX, BPO services, outsourcing company, business process outsourcing, call center outsourcing, virtual staffing, back office solutions, customer support, remote teams",
  alternates: {
    canonical: "https://www.growedgex.com/",
  },
  openGraph: {
    title: "GrowEdgeX — Smart Business Process Outsourcing Solutions",
    description:
      "Partner with GrowEdgeX to streamline your business operations through expert outsourcing, 24/7 support, and scalable workforce solutions.",
    url: "https://www.growedgex.com/",
    siteName: "GrowEdgeX",
    images: [
      {
        url: "https://res.cloudinary.com/diml90c1y/image/upload/v1760232138/Screenshot_2025-10-11_202108_jtip2d.png",
        width: 1200,
        height: 630,
        alt: "GrowEdgeX - BPO and Outsourcing Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "https://res.cloudinary.com/diml90c1y/image/upload/v1760232138/Screenshot_2025-10-11_202108_jtip2d.png",
  },
};

// ✅ Main Home Page Component
export default function Home() {
  return (
    <>
      <Header1 />
      <Home1Banner />
      <Home1BannerMarquee />
      <ServicesGrid />
      <Home1Solution />
      <GlobalMapPartners />
      <GlobalLocationsMap />
      <Home2Contact />
      <Footer />

      {/* ✅ Structured Data (Schema Markup for SEO) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "GrowEdgeX",
            url: "https://www.growedgex.com",
            logo: "https://res.cloudinary.com/diml90c1y/image/upload/v1760232138/Screenshot_2025-10-11_202108_jtip2d.png",
            sameAs: [
              "https://www.facebook.com/growedgex",
              "https://www.linkedin.com/company/growedgex",
              "https://twitter.com/growedgex",
            ],
          }),
        }}
      />
    </>
  );
}
