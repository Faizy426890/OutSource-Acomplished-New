import { Inter, Hanken_Grotesk } from "next/font/google";
import dynamic from "next/dynamic";
import Script from "next/script";
import ClientWrapper from "./ClientWrapper";

// Fonts
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const hankenGrotesk = Hanken_Grotesk({ subsets: ["latin"], variable: "--font-hankenGrotesk", display: "swap" });

// Lazy-load CSS to reduce initial requests
const BootstrapIconsCSS = dynamic(() => import("../../public/assets/css/bootstrap-icons.css"), { ssr: false });
const BoxiconsCSS = dynamic(() => import("../../public/assets/css/boxicons.min.css"), { ssr: false });
const SwiperCSS = dynamic(() => import("../../public/assets/css/swiper-bundle.min.css"), { ssr: false });
const ModalVideoCSS = dynamic(() => import("react-modal-video/css/modal-video.css"), { ssr: false });
const SlickThemeCSS = dynamic(() => import("../../public/assets/css/slick-theme.css"), { ssr: false });
const AnimateCSS = dynamic(() => import("../../public/assets/css/animate.min.css"), { ssr: false });
const SlickCSS = dynamic(() => import("../../public/assets/css/slick.css"), { ssr: false });
const DatepickerCSS = dynamic(() => import("../../public/assets/css/bootstrap-datetimepicker.min.css"), { ssr: false });
const ReactDatepickerCSS = dynamic(() => import("react-datepicker/dist/react-datepicker.css"), { ssr: false });
const BootstrapCSS = dynamic(() => import("../../public/assets/css/bootstrap.min.css"), { ssr: false });
const LightboxCSS = dynamic(() => import("yet-another-react-lightbox/styles.css"), { ssr: false });
const StyleCSS = dynamic(() => import("../../public/assets/css/style.css"), { ssr: false });

// ✅ Global metadata (keep everything as-is)
export const metadata = {
  metadataBase: new URL("https://www.growedgex.com"),
  title: "GrowEdgeX — Business Process Solutions & BPO Firm",
  description: "GrowEdgeX is a trusted BPO firm offering professional business process solutions, customer support, and call center services that drive business growth.",
  keywords: "BPO firm, business process solutions, customer support, call center, GrowEdgeX",
  icons: {
    icon: "https://res.cloudinary.com/diml90c1y/image/upload/v1760232138/Screenshot_2025-10-11_202108_jtip2d.png",
    shortcut: "https://res.cloudinary.com/diml90c1y/image/upload/v1760232138/Screenshot_2025-10-11_202108_jtip2d.png",
    apple: "https://res.cloudinary.com/diml90c1y/image/upload/v1760232138/Screenshot_2025-10-11_202108_jtip2d.png",
  },
  openGraph: {
    title: "GrowEdgeX — Business Process Solutions & BPO Firm",
    description: "GrowEdgeX is a trusted BPO firm offering professional business process solutions, customer support, and call center services that drive business growth.",
    url: "https://www.growedgex.com",
    siteName: "GrowEdgeX",
    images: [
      {
        url: "https://res.cloudinary.com/diml90c1y/image/upload/v1760232138/Screenshot_2025-10-11_202108_jtip2d.png",
        width: 800,
        height: 600,
        alt: "GrowEdgeX Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GrowEdgeX — Business Process Solutions & BPO Firm",
    description: "GrowEdgeX is a trusted BPO firm offering professional business process solutions, customer support, and call center services that drive business growth.",
    images: [
      "https://res.cloudinary.com/diml90c1y/image/upload/v1760232138/Screenshot_2025-10-11_202108_jtip2d.png",
    ],
  },
};

export default function RootLayout({ children }) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "GrowEdgeX",
    url: "https://www.growedgex.com",
    logo: "https://res.cloudinary.com/diml90c1y/image/upload/v1760232138/Screenshot_2025-10-11_202108_jtip2d.png",
    description: "GrowEdgeX is a trusted BPO firm offering business process outsourcing, customer support, and virtual coordination services for business growth.",
    sameAs: [
      "https://www.facebook.com/growedgex",
      "https://www.linkedin.com/company/growedgex",
      "https://twitter.com/growedgex",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-000-000-0000",
      contactType: "Customer Support",
      areaServed: "US",
      availableLanguage: "English",
    },
  };

  return (
    <html lang="en" className={`${inter.variable} ${hankenGrotesk.variable}`}>
      <head>
        {/* ✅ Schema.org JSON-LD structured data */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
        {/* ✅ Canonical tag for SEO */}
        <link rel="canonical" href="https://www.growedgex.com" />
        {/* ✅ Lazy-load JS libraries */}
        <Script src="https://cdn.jsdelivr.net/npm/swiper/swiper-bundle.min.js" strategy="lazyOnload" />
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap-datetimepicker@latest/build/js/bootstrap-datetimepicker.min.js" strategy="lazyOnload" />
      </head>
      <body>
        {/* ✅ Lazy-loaded CSS */}
        <BootstrapIconsCSS />
        <BoxiconsCSS />
        <SwiperCSS />
        <ModalVideoCSS />
        <SlickThemeCSS />
        <AnimateCSS />
        <SlickCSS />
        <DatepickerCSS />
        <ReactDatepickerCSS />
        <BootstrapCSS />
        <LightboxCSS />
        <StyleCSS />
        <ClientWrapper>{children}</ClientWrapper>
      </body>
    </html>
  );
}
