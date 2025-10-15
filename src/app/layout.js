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

// ✅ Fonts
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hankenGrotesk",
  display: "swap",
});

// ✅ Global metadata
export const metadata = {
  metadataBase: new URL("https://www.growedgex.com"), 
  title: "GrowEdgeX — BPO Firm",
  description:
    "GrowEdgeX is a trusted BPO firm that helps companies in operations, strengthen customer engagement, and focus on growth through reliable solutions.",
  keywords:
    "GrowEdgeX, BPO firm, outsourcing services, customer support, call center solutions, business process outsourcing",
  icons: {
    icon: "https://res.cloudinary.com/diml90c1y/image/upload/v1760232138/Screenshot_2025-10-11_202108_jtip2d.png",
    shortcut:
      "https://res.cloudinary.com/diml90c1y/image/upload/v1760232138/Screenshot_2025-10-11_202108_jtip2d.png",
    apple:
      "https://res.cloudinary.com/diml90c1y/image/upload/v1760232138/Screenshot_2025-10-11_202108_jtip2d.png",
  },
  openGraph: {
    title: "GrowEdgeX — BPO Firm",
    description:
      "Partner with GrowEdgeX to simplify your business operations through expert outsourcing and customer service solutions.",
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
    title: "GrowEdgeX — BPO Firm",
    description:
      "GrowEdgeX delivers dependable BPO and outsourcing services to help businesses operate more efficiently and scale with confidence.",
    images: [
      "https://res.cloudinary.com/diml90c1y/image/upload/v1760232138/Screenshot_2025-10-11_202108_jtip2d.png",
    ],
  },
};

// ✅ Root Layout
export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${hankenGrotesk.variable}`}>
      <body>
        <ClientWrapper>{children}</ClientWrapper>
      </body>
    </html>
  );
}
