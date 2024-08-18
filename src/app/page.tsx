import Banner from '@/components/layout/Banner';
import Header from "@/components/layout/header/Header";
import HowToUse from '@/components/layout/HowToUse';
import Testimonial from '@/components/layout/Testimonial';
import Features from '@/components/layout/Features';
import Brands from '@/components/layout/Brands';
import Intro from '@/components/layout/Intro';
import FAQ from '@/components/layout/FAQ/FAQ';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main className="">
        <Intro />
{/*         <Brands /> */}
        <Features />
        <Banner />
        <HowToUse />
{/*         <Testimonial /> */}
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
