import { Navigation } from '@/components/nav';
import { Hero } from '@/components/hero';
import { About } from '@/components/about';
import { Features } from '@/components/features';
import { Gallery } from '@/components/gallery';
import { Contact } from '@/components/contact';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <main className="relative">
      <Navigation />
      <Hero />
      <About />
      <Features />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  );
}