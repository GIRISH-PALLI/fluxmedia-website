import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import About from './components/About';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import { CtaBanner, Footer } from './components/CtaFooter';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Services />
        <Testimonials />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
