import Head from "next/head";
import Image from "next/image";

import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Gallery from "../components/Gallery";
import Faq from "../components/Faq";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-pattern">
      <Header />
      <Hero />
      <About />
      <Faq></Faq>
      <Gallery />
    </div>
  );
}