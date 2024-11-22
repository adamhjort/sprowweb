import { Button } from "@/components/ui/button";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { useEffect, useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Navigation } from "@/components/sections/Navigation";
import { HeroSection } from "@/components/sections/HeroSection";

const Index = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation isScrolled={isScrolled} />
      
      {/* Hero and Trusted By Container with shared background */}
      <div className="relative w-full max-w-[1440px] mx-auto overflow-hidden">
        <div className="absolute inset-0 w-full" style={{ height: '1500px' }}>
          <img 
            src="/lovable-uploads/8f515b57-13dc-49a2-8b0f-59a88933722f.png"
            alt="Background pattern"
            className="w-full h-full object-cover opacity-50"
            style={{
              objectPosition: 'center 100px',
              objectFit: 'cover',
              transform: 'scale(1.2)'
            }}
          />
        </div>
        
        <HeroSection />

        {/* Trusted By Section */}
        <section className="relative py-8 max-w-[1054px] mx-auto px-5">
          <h2 className="text-center text-[30px] font-semibold leading-[39px] font-['Chakra_Petch'] mb-8 md:mb-10">Trusted by</h2>
          <div className="overflow-hidden">
            <div className="flex animate-[slide_20s_linear_infinite] gap-6 md:gap-8">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="flex-shrink-0 h-10 md:h-12 w-24 md:w-32 bg-gray-200 rounded"></div>
              ))}
              {/* Duplicate set for seamless loop */}
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={`duplicate-${i}`} className="flex-shrink-0 h-10 md:h-12 w-24 md:w-32 bg-gray-200 rounded"></div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Why Sprow Section */}
      <section className="relative flex flex-col items-center py-16 md:py-20 gap-[50px] px-5 max-w-[1054px] mx-auto">
        <h2 className="w-full text-[30px] font-semibold leading-[39px] text-center font-['Chakra_Petch']">
          Why Sprow
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[47px] w-full">
          <div className="flex flex-col items-start p-5 md:p-10 gap-5 bg-white rounded-[30px]">
            <div className="w-full md:w-[240px] h-[239px]">
              <img 
                src="/lovable-uploads/fa9c9d95-1b13-4fa5-ae44-10b8e3432cd8.png" 
                alt="A Unified Platform for Employees and Managers" 
                className="w-full h-full object-cover mix-blend-hard-light"
              />
            </div>
            <h3 className="text-[20px] font-semibold leading-[26px] font-['Chakra_Petch']">
              A Unified Platform for Employees and Managers
            </h3>
            <p className="text-[16px] leading-[21px] font-['Chakra_Petch']">
              Sprow brings everything together in one platform, designed specifically for employees and managers. From professional growth to leadership development, Sprow ensures that every part of the journey is connected, making collaboration and progress seamless.
            </p>
          </div>
          
          <div className="flex flex-col items-start p-5 md:p-10 gap-5 bg-white rounded-[30px]">
            <div className="w-full md:w-[240px] h-[239px]">
              <img 
                src="/lovable-uploads/fa9c9d95-1b13-4fa5-ae44-10b8e3432cd8.png" 
                alt="AI-powered Growth and leadership" 
                className="w-full h-full object-cover mix-blend-hard-light"
              />
            </div>
            <h3 className="text-[20px] font-semibold leading-[26px] font-['Chakra_Petch']">
              AI-powered Growth and leadership
            </h3>
            <p className="text-[16px] leading-[21px] font-['Chakra_Petch']">
              Sprow uses AI to deliver personalized recommendations and insights that drive meaningful development. By understanding each individual's unique context, Sprow helps guide both employees and managers toward their full potential.
            </p>
          </div>
          
          <div className="flex flex-col items-start p-5 md:p-10 gap-5 bg-white rounded-[30px]">
            <div className="w-full md:w-[240px] h-[239px]">
              <img 
                src="/lovable-uploads/fa9c9d95-1b13-4fa5-ae44-10b8e3432cd8.png" 
                alt="Focused on long term success" 
                className="w-full h-full object-cover mix-blend-hard-light"
              />
            </div>
            <h3 className="text-[20px] font-semibold leading-[26px] font-['Chakra_Petch']">
              Focused on long term success
            </h3>
            <p className="text-[16px] leading-[21px] font-['Chakra_Petch']">
              Sprow empowers both employees and managers with tools that foster long-term growth. Whether you're leading a team or advancing in your role, Sprow supports your journey to success in an ever-changing workplace.
            </p>
          </div>
        </div>
      </section>

      <TestimonialsSection />
      <HowItWorksSection />
      
      {/* Footer */}
      <footer className="flex flex-col md:flex-row justify-between items-start md:items-center py-8 md:py-5 px-4 md:pr-5 md:pl-0 w-full min-w-[320px] max-w-[1440px] h-auto md:h-[113px] bg-white">
        {/* Sitemap */}
        <div className="flex flex-col w-full md:w-[559px] space-y-8 md:space-y-0 mb-8 md:mb-0">
          <div className="grid grid-cols-2 md:flex md:flex-row items-start md:items-end gap-8 md:gap-[50px]">
            {/* Logo */}
            <div className="col-span-2 w-[134px] h-[70px]">
              <div className="text-2xl font-bold text-primary">Sprow</div>
            </div>

            {/* Menu */}
            <div className="flex flex-col items-start gap-[5px]">
              <a href="/about" className="font-['Chakra_Petch'] text-[14px] leading-[18px] text-[#161616] hover:text-primary transition-colors">About</a>
              <a href="/pricing" className="font-['Chakra_Petch'] text-[14px] leading-[18px] text-[#161616] hover:text-primary transition-colors">Pricing</a>
              <a href="/resources" className="font-['Chakra_Petch'] text-[14px] leading-[18px] text-[#161616] hover:text-primary transition-colors">Resources</a>
            </div>

            {/* Terms and policy */}
            <div className="flex flex-col items-start gap-[5px]">
              <a href="/terms" className="font-['Chakra_Petch'] text-[16px] leading-[21px] text-[#161616] hover:text-primary transition-colors">Terms of use</a>
              <a href="/privacy" className="font-['Chakra_Petch'] text-[16px] leading-[21px] text-[#161616] hover:text-primary transition-colors">Privacy policy</a>
              <a href="/contact" className="font-['Chakra_Petch'] text-[16px] leading-[21px] text-[#161616] hover:text-primary transition-colors">Contact</a>
            </div>

            {/* Login */}
            <div className="flex flex-col items-start gap-[5px]">
              <a href="/signup" className="font-['Chakra_Petch'] text-[16px] leading-[21px] text-[#161616] hover:text-primary transition-colors">Sign up</a>
              <a href="/demo" className="font-['Chakra_Petch'] text-[16px] leading-[21px] text-[#161616] hover:text-primary transition-colors">Book a demo</a>
              <a href="/login" className="font-['Chakra_Petch'] text-[16px] leading-[21px] text-[#161616] hover:text-primary transition-colors">Login</a>
            </div>
          </div>
        </div>

        {/* Social links */}
        <div className="flex flex-row items-center gap-[31px] w-full md:w-[303px] border-t md:border-t-0 pt-8 md:pt-0">
          {/* Social Icons */}
          <div className="flex flex-row items-center gap-[10px]">
            <a href="https://linkedin.com" className="text-[#161616] hover:text-primary transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
            <a href="https://instagram.com" className="text-[#161616] hover:text-primary transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
          </div>

          {/* Divider */}
          <div className="w-[1px] h-4 bg-[#A29F95] opacity-50" />

          {/* Made with love in Sweden */}
          <div className="flex flex-row items-center gap-[5px]">
            <span className="font-['Chakra_Petch'] text-[16px] leading-[21px] text-[#161616]">Made with</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D74949" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
            <span className="font-['Chakra_Petch'] text-[16px] leading-[21px] text-[#161616]">in Sweden</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
