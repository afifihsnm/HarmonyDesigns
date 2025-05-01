import NavBar from "./components/NavBar";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Contact from "./sections/Contact";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Experience from "./sections/Experience";
import FeatureCards from "./sections/FeatureCards";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import LogoShowcase from "./sections/LogoShowcase";
import Showcase from "./sections/Showcase";
import TechStack from "./sections/TechStack";
import Testimonials from "./sections/Testimonials";

export default function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <Showcase />
      <LogoShowcase />
      <FeatureCards />
      <Experience />
      <TechStack />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}
