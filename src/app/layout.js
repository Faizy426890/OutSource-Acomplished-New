"use client";
import { useEffect } from "react";
import { Inter, Roboto_Mono, Hanken_Grotesk } from "next/font/google";
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
import ScrollProgress from "@/components/common/ScrollProgress";
import ThemeSwitch from "@/components/common/Theme";
import useWow from "@/hooks/useWow";

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
export default function RootLayout({ children }) {
  useWow();

  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return (
    <html lang="en" className={`${inter.variable} ${hankenGrotesk.variable}`}>
      <head>
             <div style={{ display: 'flex', alignItems: 'center', paddingLeft: '1px' }}>
  <img
    alt="BTS Logo"
    src="https://res.cloudinary.com/diml90c1y/image/upload/v1753659664/ChatGPT_Image_Jul_14_2025_12_34_01_AM_1_m2n3ci.png"
    style={{
      width: '60px',         // Adjust size as needed
      height: 'auto',
      objectFit: 'contain',
      marginRight: '8px',
    }}
  />
  <div style={{ lineHeight: '1.1' }}>
    <span style={{ display: 'block', fontSize: '14px', color: '#00e0ff', fontWeight: 'bold' }}>
      OutSource
    </span>
    <span style={{ display: 'block', fontSize: '13px', color: '#00e0ff' }}>
      Accomplished
    </span>
  </div>
</div>
        <title>OutSource - Accomplished &amp; BPO Compnay</title>
      </head>
      <body>
        <ScrollProgress />
        {/* <ThemeSwitch /> */}
        {children}
      </body>
    </html>
  );
}
