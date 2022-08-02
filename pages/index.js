
import "../utils/interact";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Gallery from "../components/Gallery";
import Faq from "../components/Faq";
import Roadmap from "../components/roadmap";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-pattern">
      <Header />
      <Hero />
      <About />
      <Faq></Faq>
      <Roadmap />
      <Gallery />
    </div>
  );
}