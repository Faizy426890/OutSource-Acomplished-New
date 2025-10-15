import Script from "next/script";

export const metadata = {
  title: "GrowEdgeX — Global BPO & Virtual Staffing Solutions",
  description:
    "GrowEdgeX provides world-class BPO, virtual coordination, and IT solutions across industries — helping businesses scale efficiently worldwide.",
  metadataBase: new URL("https://www.growedgex.com"),
  icons: {
    icon: "https://res.cloudinary.com/diml90c1y/image/upload/v1760227309/Growedge_white_background-removebg-preview_st7inq.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* ✅ JSON-LD Schema.org Structured Data */}
        <Script
          id="schema-organization"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "GrowEdgeX",
              url: "https://www.growedgex.com",
              logo:
                "https://res.cloudinary.com/diml90c1y/image/upload/v1760227309/Growedge_white_background-removebg-preview_st7inq.png",
              sameAs: [
                "https://www.facebook.com/growedgex",
                "https://www.linkedin.com/company/growedgex",
                "https://www.instagram.com/growedgex",
              ],
              description:
                "GrowEdgeX is a global BPO and virtual staffing solutions provider, delivering top-quality call center, IT, and administrative services worldwide.",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+1-800-123-4567",
                contactType: "Customer Support",
                areaServed: "US",
                availableLanguage: ["English"],
              },
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
