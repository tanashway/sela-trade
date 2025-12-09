import Hero from '@/components/Hero';
import TrustedBy from '@/components/TrustedBy';
import Strengths from '@/components/Strengths';
import HowWeWork from '@/components/HowWeWork';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <TrustedBy />
      <Strengths />
      <HowWeWork />
      <Testimonials />
      <Footer />
    </main>
  );
}
