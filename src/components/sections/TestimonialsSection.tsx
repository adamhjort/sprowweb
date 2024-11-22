import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const testimonials = [
  {
    quote: "Sprow has completely changed how we manage employee growth. Instead of chasing after data from multiple sources, everything is in one place. The AI-powered recommendations have been a game-changer for identifying manager training needs and providing real-time, actionable insights that drive engagement. It's not just another HR tool—it's a platform that actually helps us build a better team.",
    author: "Man Manager",
    role: "HR Partner, Hewlett Packard",
    image: "/lovable-uploads/d0447517-5260-4b42-97af-12f4c5ca96e6.png"
  },
  {
    quote: "The platform has revolutionized how we approach employee development. The AI-driven insights have made a significant impact on our team's growth.",
    author: "Sarah Chen",
    role: "Head of HR, Tech Solutions Inc",
    image: "/lovable-uploads/d0447517-5260-4b42-97af-12f4c5ca96e6.png"
  }
];

export const TestimonialsSection = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index}>
                <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                  <div className="w-full md:w-[475px] h-[475px] flex-shrink-0">
                    <img 
                      src={testimonial.image} 
                      alt="Testimonial" 
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <div className="flex-1">
                    <blockquote className="text-2xl md:text-[28px] leading-[36px] font-semibold font-['Chakra_Petch'] italic mb-6">
                      "{testimonial.quote}"
                    </blockquote>
                    <div className="font-['Chakra_Petch']">
                      <p className="font-semibold">{testimonial.author}</p>
                      <p className="text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center gap-5 mt-8">
            <CarouselPrevious className="relative inset-0 translate-y-0 h-12 w-12" />
            <CarouselNext className="relative inset-0 translate-y-0 h-12 w-12" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};