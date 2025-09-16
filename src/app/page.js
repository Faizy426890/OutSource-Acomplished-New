import Home1About from "@/components/about/Home1About";
import Home1Approach from "@/components/approachSection/Home1Approach";
import Home1Banner from "@/components/banner/Home1Banner";
import Home1Blog from "@/components/blog/Home1Blog";
import BannerWithCaseStudySlider from "@/components/caseStudy/BannerWithCaseStudySlider";
// import Home1Contact from "@/components/contact/Home1Contact"; 
import Home2Contact from "@/components/contact/Home2Contact"; 
import Footer from "@/components/footer/Footer"; 
import Industries from "@/components/industries/Industries";
import Header1 from "@/components/header/Header1";
import Home1BannerMarquee from "@/components/marquee/Home1BannerMarquee";
import LogoMarquee from "@/components/marquee/LogoMarquee";
import Home1Solution from "@/components/solution/Home1Solution";
import Home1Testimonial from "@/components/testimonial/Home1Testimonial";
import Home1WorkProcess from "@/components/workProcess/Home1WorkProcess";

export const metadata = {
  icons: {
    icon: "https://res.cloudinary.com/diml90c1y/image/upload/v1753659664/ChatGPT_Image_Jul_14_2025_12_34_01_AM_1_m2n3ci.png",
  },
}
export default function Home() {
  return (
    <>
      <Header1 />
      <Home1Banner />
      <Home1BannerMarquee />
      {/* <Home1About /> */}
      <Home1Solution /> 
      <Industries/>
      <Home1WorkProcess />
      {/* <BannerWithCaseStudySlider /> */}
      <Home1Approach />
      {/* <LogoMarquee /> */}
      {/* <Home1Testimonial /> */}
      {/* <Home1Blog /> */}
      <Home2Contact />
      <Footer />
    </>
  );
}
