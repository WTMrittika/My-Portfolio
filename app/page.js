import Image from "next/image";
import HeroSection from "./components/HeroSection";

export default function Home() {
  return (  
    //bg color
      <main className="flex min-h-screen flex-col bg-[#121212] container mx-auto px-12 py-4">
      <HeroSection></HeroSection>
      </main>
  );
}
