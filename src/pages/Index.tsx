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
      <footer className="border-t">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-primary">Features</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary">Pricing</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary">Sign up</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-primary">About</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary">Blog</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-primary">Documentation</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary">Help Center</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-primary">Privacy</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary">Terms</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary">Security</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t text-center text-muted-foreground">
            <p>&copy; 2024 Sprow. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;