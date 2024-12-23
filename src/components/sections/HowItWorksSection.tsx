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
    dragFree: true,
    skipSnaps: false,
    align: 'center',
    containScroll: 'trimSnaps'
  });

  React.useEffect(() => {
    if (emblaApi) {
      const index = ["hr", "managers", "employees"].indexOf(activeTab);
      emblaApi.scrollTo(index);
    }
  }, [activeTab, emblaApi]);

  React.useEffect(() => {
    if (emblaApi) {
      emblaApi.on('select', () => {
        const index = emblaApi.selectedScrollSnap();
        const newTab = ["hr", "managers", "employees"][index];
        if (newTab !== activeTab) {
          setActiveTab(newTab);
        }
      });
    }
  }, [emblaApi, activeTab]);

  return (
    <section className="py-20">
      <h2 className="text-3xl font-bold text-center mb-16">How it works</h2>
      
      <div className="max-w-[1440px] mx-auto px-4">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <div className="flex justify-center mb-8">
            <TabsList className="flex flex-wrap justify-center gap-[10px] w-full max-w-[1200px] bg-transparent p-0">
              <TabsTrigger 
                value="hr" 
                className="flex justify-center items-center px-[10px] md:px-[20px] py-[8px] md:py-[10px] rounded-[20px] font-['Chakra_Petch'] text-[12px] md:text-[14px] leading-[16px] md:leading-[18px] font-semibold text-[#161616] transition-colors whitespace-nowrap data-[state=active]:bg-[#FF93AD] data-[state=inactive]:bg-white data-[state=inactive]:border-2 data-[state=inactive]:border-[#A29F95]"
              >
                For HR
              </TabsTrigger>
              <TabsTrigger 
                value="managers" 
                className="flex justify-center items-center px-[10px] md:px-[20px] py-[8px] md:py-[10px] rounded-[20px] font-['Chakra_Petch'] text-[12px] md:text-[14px] leading-[16px] md:leading-[18px] font-semibold text-[#161616] transition-colors whitespace-nowrap data-[state=active]:bg-[#FF93AD] data-[state=inactive]:bg-white data-[state=inactive]:border-2 data-[state=inactive]:border-[#A29F95]"
              >
                For Managers
              </TabsTrigger>
              <TabsTrigger 
                value="employees" 
                className="flex justify-center items-center px-[10px] md:px-[20px] py-[8px] md:py-[10px] rounded-[20px] font-['Chakra_Petch'] text-[12px] md:text-[14px] leading-[16px] md:leading-[18px] font-semibold text-[#161616] transition-colors whitespace-nowrap data-[state=active]:bg-[#FF93AD] data-[state=inactive]:bg-white data-[state=inactive]:border-2 data-[state=inactive]:border-[#A29F95]"
              >
                For Employees
              </TabsTrigger>
            </TabsList>
          </div>

          <div ref={emblaRef} className="overflow-hidden">
            <div className="flex">
              <TabsContent value="hr" className="flex-[0_0_100%] min-w-0 transition-transform duration-500">
                <CarouselSlide {...hrData} />
              </TabsContent>
              
              <TabsContent value="managers" className="flex-[0_0_100%] min-w-0 transition-transform duration-500">
                <CarouselSlide {...managerData} />
              </TabsContent>
              
              <TabsContent value="employees" className="flex-[0_0_100%] min-w-0 transition-transform duration-500">
                <CarouselSlide {...employeeData} />
              </TabsContent>
            </div>
          </div>
        </Tabs>
      </div>
    </section>
  );
};
