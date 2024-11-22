import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { CarouselSlide } from '../how-it-works/CarouselSlide';

const employeeData = {
  title: "For employees",
  items: [
    {
      title: "Set meaningful, actionable goals",
      description: "Sprow helps you establish personalized, relevant goals for your team, ensuring that each objective supports both individual growth and overall team performance.",
      image: "/lovable-uploads/4de49e94-d73d-459f-aa76-3826565d14d3.png"
    },
    {
      title: "Stay on top of progress with timely nudges",
      description: "You'll receive reminders before 1-on-1s and follow-up tasks, helping you manage your team's development without extra effort. Sprow nudges you when a goal needs updating or feedback is overdue.",
      image: "/lovable-uploads/4de49e94-d73d-459f-aa76-3826565d14d3.png"
    },
    {
      title: "Empower your team's continuous growth",
      description: "With AI offering personalized recommendations, follow-ups, and goal updates, you can ensure your team is always progressing and aligned with long-term leadership development.",
      image: "/lovable-uploads/4de49e94-d73d-459f-aa76-3826565d14d3.png"
    }
  ]
};

const managerData = {
  title: "For managers",
  items: [
    {
      title: "Use 1-on-1 data to drive meaningful insights",
      description: "Managers' notes from 1-on-1s are cross-referenced with employee surveys, performance data, and goals, offering HR a holistic view of employee engagement and progress.",
      image: "/lovable-uploads/18769a62-993b-424f-86db-636bfed8574f.png"
    },
    {
      title: "Automate follow-ups and task tracking",
      description: "AI generates follow-up tasks based on 1-on-1 meetings, and nudges both HR and managers to ensure tasks are completed. HR no longer has to chase down details — Sprow keeps everything moving forward.",
      image: "/lovable-uploads/18769a62-993b-424f-86db-636bfed8574f.png"
    },
    {
      title: "Calendar integration for seamless scheduling",
      description: "Sprow's calendar integration ensures you never miss a 1-on-1 and that all meetings are aligned with your team's progress. It keeps everything in 2-way sync so you can focus on leadership, not logistics.",
      image: "/lovable-uploads/18769a62-993b-424f-86db-636bfed8574f.png"
    }
  ]
};

const hrData = {
  title: "For HR",
  items: [
    {
      title: "Align development goals with business priorities",
      description: "HR can work with managers and employees to set actionable goals that tie directly to company objectives, ensuring growth that's aligned with long-term success.",
      image: "/lovable-uploads/70ca6623-c207-4f34-9e79-51b7df038115.png"
    },
    {
      title: "Identify and support managerial development",
      description: "Sprow's AI doesn't just track performance; it identifies managers who may need additional support or training, explains why, and recommends tailored strategies for improvement.",
      image: "/lovable-uploads/70ca6623-c207-4f34-9e79-51b7df038115.png"
    },
    {
      title: "Drive retention and engagement",
      description: "With Sprow, HR can easily monitor employee development and adjust strategies based on real-time data. This proactive approach improves employee satisfaction, retention, and organizational success.",
      image: "/lovable-uploads/70ca6623-c207-4f34-9e79-51b7df038115.png"
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