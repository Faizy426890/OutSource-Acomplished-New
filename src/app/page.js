import Home1Approach from "../components/approachSection/Home1Approach";
import Home1Banner from "../components/banner/Home1Banner";
import Home2Contact from "../components/contact/Home2Contact"; 
import Footer from "../components/footer/Footer"; 
import Industries from "../components/industries/Industries";
import Header1 from "../components/header/Header1";
import Home1BannerMarquee from "../components/marquee/Home1BannerMarquee";
import Home1Solution from "../components/solution/Home1Solution";
import Home1WorkProcess from "..//components/workProcess/Home1WorkProcess";

export const metadata = {
  icons: {
    icon: "https://res.cloudinary.com/diml90c1y/image/upload/v1760232138/Screenshot_2025-10-11_202108_jtip2d.png",
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
