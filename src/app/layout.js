import { Inter, Hanken_Grotesk } from "next/font/google";
import "../../public/assets/css/bootstrap-icons.css";
import "../../public/assets/css/boxicons.min.css";
import "../../public/assets/css/swiper-bundle.min.css";
import "react-modal-video/css/modal-video.css";
import "../../public/assets/css/slick-theme.css";
import "../../public/assets/css/animate.min.css";
import "../../public/assets/css/slick.css";
import "../../public/assets/css/bootstrap-datetimepicker.min.css";
import "react-datepicker/dist/react-datepicker.css";
import "../../public/assets/css/bootstrap.min.css";
import "yet-another-react-lightbox/styles.css";
import "../../public/assets/css/style.css";

import ClientWrapper from "./ClientWrapper";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const hankenGrotesk = Hanken_Grotesk({ subsets: ["latin"], variable: "--font-hankenGrotesk", display: "swap" });

// Root Layout
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
        {/* ✅ Canonical URL */}
        <link rel="canonical" href="https://www.growedgex.com" />
      </head>
      <body>
        <ClientWrapper>{children}</ClientWrapper>
      </body>
    </html>
  );
}
