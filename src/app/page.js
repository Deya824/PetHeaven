import Navbar from '@/components/Navbar';
import Banner from '@/components/Banner';
import FeaturedPets from '@/components/FeaturedPets';
import HowItWorks from '@/components/HowItWorks';
import WhyAdopt from '@/components/WhyAdopt';
import SuccessStories from '@/components/SuccessStories';
import PetCareTips from '@/components/PetCareTips';
import Stats from '@/components/Stats';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
     
      
     
      <div className="flex-grow">
        
       
        <Banner />
        
      
        <FeaturedPets />
        
       
        <HowItWorks />
        
        
        <WhyAdopt />
        
       
        <Stats />
        
        
        <SuccessStories />
        
       
        <PetCareTips />

      </div>

     
    </main>
  );
}