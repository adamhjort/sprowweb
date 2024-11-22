import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center">
      <div className="relative z-10 container mx-auto px-4 pb-20 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-up">
          Empowering Teams.<br />
          Elevating Leaders.
        </h1>
        <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-up px-4">
          Sprow is an AI-powered platform that connects employees and managers for seamless growth. Using traditional HR tools, Sprow unifies all aspects of employee development.
        </p>
        <Button size="lg" className="animate-fade-up">Sign up</Button>
      </div>
    </section>
  );
};