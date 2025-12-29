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
import FoundersPromise from "../components/ownermessage/message"

// ✅ SEO Metadata for GrowEdgeX Homepag

// ✅ Main Home Page Component
export default function Home() {
  return (
    <>
      <Header1 />
      <Home1Banner />
      <Home1BannerMarquee /> 
      <ServicesGrid /> 
      <FoundersPromise/>
      {/* <Home1Solution /> */}
      <GlobalMapPartners />
      <GlobalLocationsMap />
      <Home2Contact />
      <Footer />

      {/* ✅ Structured Data (Schema Markup for SEO) */}
     
    
    </>
  );
}
