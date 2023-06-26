import Image from 'next/image'
import { Inter } from 'next/font/google'
import NavBar from '@/components/NavBar.component';
import Hero from '@/components/hero.component';
import Feature from '@/components/feature.component';
import Footer from '@/components/Footer.component';

const inter = Inter({ subsets: ['latin'] })
const HomePage = () => {
  return (
    <>
    <div>
      <NavBar />
      <Hero />
      <Feature />
    </div>
    </>
  );
};


export default HomePage;