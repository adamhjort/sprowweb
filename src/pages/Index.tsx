import { Button } from "@/components/ui/button";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { useEffect, useState } from "react";

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
      {/* Navigation - Floating */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-2' : 'py-4'}`}>
        <div className={`container mx-auto px-6 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg rounded-[20px]' : ''}`}>
          <div className="flex justify-between items-center h-[70px]">
            <div className="text-2xl font-bold text-primary">Sprow</div>
            <div className="hidden md:flex space-x-6">
              <a href="#" className="text-foreground hover:text-primary transition-colors">About</a>
              <a href="#" className="text-foreground hover:text-primary transition-colors">Pricing</a>
              <a href="#" className="text-foreground hover:text-primary transition-colors">Resources</a>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost">Request demo</Button>
              <Button variant="ghost">Login</Button>
              <Button>Sign up</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-background relative min-h-screen">
        <div className="relative z-10 container mx-auto px-4 pt-40 pb-20 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-up">
            Empowering Teams.<br />
            Elevating Leaders.
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-up">
            Sprow is an AI-powered platform that connects employees and managers for seamless growth. Using traditional HR tools, Sprow unifies all aspects of employee development.
          </p>
          <Button size="lg" className="animate-fade-up">Sign up</Button>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-2xl font-semibold mb-10">Trusted by</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 justify-items-center">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="h-12 w-32 bg-gray-200 rounded animate-pulse"></div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Sprow Section */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-center mb-16">Why Sprow</h2>
        <div className="grid md:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="mb-6">
              <img 
                src="/lovable-uploads/fa9c9d95-1b13-4fa5-ae44-10b8e3432cd8.png" 
                alt="A Unified Platform for Employees and Managers" 
                className="w-full h-48 object-contain"
              />
            </div>
            <h3 className="text-xl font-semibold mb-4">A Unified Platform for Employees and Managers</h3>
            <p className="text-muted-foreground">
              Sprow brings everything together in one platform, designed specifically for employees and managers. From professional growth to leadership development, Sprow ensures that every part of the journey is connected, making collaboration and progress seamless.
            </p>
          </div>
          <div className="text-center">
            <div className="mb-6">
              <img 
                src="/lovable-uploads/fa9c9d95-1b13-4fa5-ae44-10b8e3432cd8.png" 
                alt="AI-powered Growth and leadership" 
                className="w-full h-48 object-contain"
              />
            </div>
            <h3 className="text-xl font-semibold mb-4">AI-powered Growth and leadership</h3>
            <p className="text-muted-foreground">
              Sprow uses AI to deliver personalized recommendations and insights that drive meaningful discussions. By understanding each individual's unique context, Sprow helps guide both employees and managers toward their full potential.
            </p>
          </div>
          <div className="text-center">
            <div className="mb-6">
              <img 
                src="/lovable-uploads/fa9c9d95-1b13-4fa5-ae44-10b8e3432cd8.png" 
                alt="Focused on long term success" 
                className="w-full h-48 object-contain"
              />
            </div>
            <h3 className="text-xl font-semibold mb-4">Focused on long term success</h3>
            <p className="text-muted-foreground">
              Sprow empowers both employees and managers with tools that foster long-term growth. Whether you're starting a team or advancing in your role, Sprow supports your journey to success in an ever-changing workplace.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* How it Works Section */}
      <HowItWorksSection />

      {/* Footer */}
      <footer className="flex flex-row justify-between items-center py-5 pr-5 pl-0 w-[1440px] h-[113px] bg-white">
        {/* Sitemap */}
        <div className="flex flex-row items-end gap-[50px] w-[559px] h-[73px]">
          {/* Logo */}
          <div className="w-[134px] h-[70px]">
            <div className="text-2xl font-bold text-primary">Sprow</div>
          </div>

          {/* Menu */}
          <div className="flex flex-col items-start gap-[5px] w-[78px] h-[73px]">
            <a href="/about" className="font-['Chakra_Petch'] text-[16px] leading-[21px] text-[#161616] hover:text-primary transition-colors">About</a>
            <a href="/pricing" className="font-['Chakra_Petch'] text-[16px] leading-[21px] text-[#161616] hover:text-primary transition-colors">Pricing</a>
            <a href="/resources" className="font-['Chakra_Petch'] text-[16px] leading-[21px] text-[#161616] hover:text-primary transition-colors">Resources</a>
          </div>

          {/* Terms and policy */}
          <div className="flex flex-col items-start gap-[5px] w-[102px] h-[73px]">
            <a href="/terms" className="font-['Chakra_Petch'] text-[16px] leading-[21px] text-[#161616] hover:text-primary transition-colors">Terms of use</a>
            <a href="/privacy" className="font-['Chakra_Petch'] text-[16px] leading-[21px] text-[#161616] hover:text-primary transition-colors">Privacy policy</a>
            <a href="/contact" className="font-['Chakra_Petch'] text-[16px] leading-[21px] text-[#161616] hover:text-primary transition-colors">Contact</a>
          </div>

          {/* Login */}
          <div className="flex flex-col items-start gap-[5px] w-[95px] h-[73px]">
            <a href="/signup" className="font-['Chakra_Petch'] text-[16px] leading-[21px] text-[#161616] hover:text-primary transition-colors">Sign up</a>
            <a href="/demo" className="font-['Chakra_Petch'] text-[16px] leading-[21px] text-[#161616] hover:text-primary transition-colors">Book a demo</a>
            <a href="/login" className="font-['Chakra_Petch'] text-[16px] leading-[21px] text-[#161616] hover:text-primary transition-colors">Login</a>
          </div>
        </div>

        {/* Social links */}
        <div className="flex flex-row items-end gap-[31px] w-[303px] h-[24px]">
          {/* Social Icons */}
          <div className="flex flex-row items-center gap-[10px] w-[58px] h-[24px]">
            <a href="https://linkedin.com" className="text-[#161616] hover:text-primary transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
            <a href="https://instagram.com" className="text-[#161616] hover:text-primary transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
          </div>

          {/* Divider */}
          <div className="w-[20px] h-0 rotate-90 border-2 border-[#161616] opacity-20" />

          {/* Made with love in Sweden */}
          <div className="flex flex-row items-start gap-[5px] w-[183px] h-[24px]">
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
