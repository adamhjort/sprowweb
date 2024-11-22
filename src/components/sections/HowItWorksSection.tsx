import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { CarouselSlide } from '../how-it-works/CarouselSlide';

const hrData = {
  title: "For HR",
  items: [
    {
      title: "Align development goals",
      description: "HR can work with managers and employees to set actionable goals that fit quality to organizational priorities, ensuring growth that's sustainable in long-term success.",
      image: "/lovable-uploads/e3764372-ffa8-4c13-b346-d90bfa5a3b4a.png"
    },
    {
      title: "Identify and support",
      description: "Sprow's AI doesn't just track performance—it identifies managers who may need additional support, enabling focused dialogues for improvement.",
      image: "/lovable-uploads/e3764372-ffa8-4c13-b346-d90bfa5a3b4a.png"
    },
    {
      title: "Drive retention and engagement",
      description: "With Sprow, HR can easily monitor team health and performance and get strategies based on real data to drive more effective approach improved employee satisfaction.",
      image: "/lovable-uploads/e3764372-ffa8-4c13-b346-d90bfa5a3b4a.png"
    }
  ]
};

const managerData = {
  title: "For managers",
  items: [
    {
      title: "Use 1-on-1 data",
      description: "Managers notes from 1-on-1s are cross-referenced with employee surveys, performance data, and more to get a holistic view of employee engagement and progress.",
      image: "/lovable-uploads/e3764372-ffa8-4c13-b346-d90bfa5a3b4a.png"
    },
    {
      title: "Automate follow-ups",
      description: "AI generates follow-up tasks based on 1-on-1 meetings and notifies both HR and managers to keep development plans on track.",
      image: "/lovable-uploads/e3764372-ffa8-4c13-b346-d90bfa5a3b4a.png"
    }
  ]
};

const employeeData = {
  title: "For employees",
  items: [
    {
      title: "Set clear goals",
      description: "Employees can easily track their progress and get AI-powered suggestions for skill development.",
      image: "/lovable-uploads/e3764372-ffa8-4c13-b346-d90bfa5a3b4a.png"
    },
    {
      title: "Get feedback",
      description: "Regular feedback loops ensure employees stay aligned with their development goals.",
      image: "/lovable-uploads/e3764372-ffa8-4c13-b346-d90bfa5a3b4a.png"
    }
  ]
};

export const HowItWorksSection = () => {
  return (
    <section className="container mx-auto px-4 py-20">
      <h2 className="text-3xl font-bold text-center mb-16">How it works</h2>
      <Carousel className="max-w-5xl mx-auto">
        <CarouselContent className="px-8">
          <CarouselItem className="transition-opacity duration-300">
            <CarouselSlide {...hrData} />
          </CarouselItem>
          <CarouselItem className="transition-opacity duration-300">
            <CarouselSlide {...managerData} />
          </CarouselItem>
          <CarouselItem className="transition-opacity duration-300">
            <CarouselSlide {...employeeData} />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="left-0" />
        <CarouselNext className="right-0" />
      </Carousel>
    </section>
  );
};