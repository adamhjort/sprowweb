import React from 'react';
import { CarouselSlide } from '../how-it-works/CarouselSlide';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import useEmblaCarousel from 'embla-carousel-react';

const employeeData = {
  title: "For employees",
  items: [
    {
      title: "Set meaningful goals",
      description: "Create personalized development goals that align with your career aspirations and team objectives.",
      image: "/lovable-uploads/4de49e94-d73d-459f-aa76-3826565d14d3.png"
    },
    {
      title: "Track progress",
      description: "Monitor your progress with real-time updates and milestone tracking.",
      image: "/lovable-uploads/4de49e94-d73d-459f-aa76-3826565d14d3.png"
    },
    {
      title: "Receive feedback",
      description: "Get constructive feedback from your manager and peers to improve continuously.",
      image: "/lovable-uploads/4de49e94-d73d-459f-aa76-3826565d14d3.png"
    },
    {
      title: "Learn and develop",
      description: "Access personalized learning resources and development opportunities.",
      image: "/lovable-uploads/4de49e94-d73d-459f-aa76-3826565d14d3.png"
    },
    {
      title: "Stay motivated",
      description: "Celebrate achievements and stay motivated with regular progress updates.",
      image: "/lovable-uploads/4de49e94-d73d-459f-aa76-3826565d14d3.png"
    }
  ]
};

const managerData = {
  title: "For managers",
  items: [
    {
      title: "Guide team development",
      description: "Set and monitor team goals while providing guidance for individual growth.",
      image: "/lovable-uploads/18769a62-993b-424f-86db-636bfed8574f.png"
    },
    {
      title: "Streamline 1-on-1s",
      description: "Conduct effective one-on-one meetings with structured agendas and follow-ups.",
      image: "/lovable-uploads/18769a62-993b-424f-86db-636bfed8574f.png"
    },
    {
      title: "Track performance",
      description: "Monitor team performance and identify areas for improvement.",
      image: "/lovable-uploads/18769a62-993b-424f-86db-636bfed8574f.png"
    },
    {
      title: "Provide feedback",
      description: "Give timely and constructive feedback to help team members grow.",
      image: "/lovable-uploads/18769a62-993b-424f-86db-636bfed8574f.png"
    },
    {
      title: "Drive engagement",
      description: "Keep your team engaged with regular check-ins and recognition.",
      image: "/lovable-uploads/18769a62-993b-424f-86db-636bfed8574f.png"
    }
  ]
};

const hrData = {
  title: "For HR",
  items: [
    {
      title: "Strategic oversight",
      description: "Gain comprehensive insights into organizational development and performance.",
      image: "/lovable-uploads/70ca6623-c207-4f34-9e79-51b7df038115.png"
    },
    {
      title: "Data-driven decisions",
      description: "Make informed decisions based on real-time performance and engagement data.",
      image: "/lovable-uploads/70ca6623-c207-4f34-9e79-51b7df038115.png"
    },
    {
      title: "Talent development",
      description: "Identify and nurture high-potential employees across the organization.",
      image: "/lovable-uploads/70ca6623-c207-4f34-9e79-51b7df038115.png"
    },
    {
      title: "Policy compliance",
      description: "Ensure consistent application of development and performance policies.",
      image: "/lovable-uploads/70ca6623-c207-4f34-9e79-51b7df038115.png"
    },
    {
      title: "Measure impact",
      description: "Track and measure the impact of development initiatives on business outcomes.",
      image: "/lovable-uploads/70ca6623-c207-4f34-9e79-51b7df038115.png"
    }
  ]
};

export const HowItWorksSection = () => {
  const [activeTab, setActiveTab] = React.useState("hr");
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: false, 
    dragFree: true 
  });

  React.useEffect(() => {
    if (emblaApi) {
      emblaApi.scrollTo(["hr", "managers", "employees"].indexOf(activeTab));
    }
  }, [activeTab, emblaApi]);

  React.useEffect(() => {
    if (emblaApi) {
      emblaApi.on('select', () => {
        const index = emblaApi.selectedScrollSnap();
        setActiveTab(["hr", "managers", "employees"][index]);
      });
    }
  }, [emblaApi]);

  return (
    <section className="container mx-auto px-4 py-20">
      <div 
        className="w-full h-64 bg-contain bg-center bg-no-repeat mb-16"
        style={{
          backgroundImage: "url('/lovable-uploads/dce3fe16-4327-490b-8bdf-9c9a25cfe066.png')"
        }}
      />
      
      <h2 className="text-3xl font-bold text-center mb-16">How it works</h2>
      
      <div className="max-w-5xl mx-auto">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <div className="flex justify-center mb-8">
            <TabsList className="inline-flex h-10 items-center justify-center rounded-full bg-muted p-1 space-x-2">
              <TabsTrigger 
                value="hr" 
                className="rounded-full px-6 py-2 border border-primary data-[state=active]:border-transparent data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all"
              >
                For HR
              </TabsTrigger>
              <TabsTrigger 
                value="managers" 
                className="rounded-full px-6 py-2 border border-primary data-[state=active]:border-transparent data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all"
              >
                For Managers
              </TabsTrigger>
              <TabsTrigger 
                value="employees" 
                className="rounded-full px-6 py-2 border border-primary data-[state=active]:border-transparent data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all"
              >
                For Employees
              </TabsTrigger>
            </TabsList>
          </div>

          <div ref={emblaRef} className="overflow-hidden">
            <div className="flex">
              <TabsContent value="hr" className="flex-[0_0_100%] min-w-0">
                <CarouselSlide {...hrData} />
              </TabsContent>
              
              <TabsContent value="managers" className="flex-[0_0_100%] min-w-0">
                <CarouselSlide {...managerData} />
              </TabsContent>
              
              <TabsContent value="employees" className="flex-[0_0_100%] min-w-0">
                <CarouselSlide {...employeeData} />
              </TabsContent>
            </div>
          </div>
        </Tabs>
      </div>
    </section>
  );
};