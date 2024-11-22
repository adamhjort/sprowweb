import { RecentBlogPosts } from "@/components/blog/RecentBlogPosts";
import { useState } from "react";

const CATEGORIES = [
  "All",
  "Product",
  "HR", 
  "Management",
  "Employee Experience",
  "Culture",
  "Performance & Growth",
  "AI & Technology",
  "Industry Trends", 
  "Case Studies & Success Stories",
  "Thought Leadership",
];

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <div className="relative w-full max-w-[1440px] mx-auto">
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

        <div className="flex flex-col items-center gap-[50px] md:gap-[100px] pt-[100px] md:pt-[150px] pb-[100px] relative px-4">
          {/* Header Content */}
          <div className="flex flex-col items-center gap-[30px] md:gap-[50px] w-full max-w-[737px]">
            <h1 className="text-[40px] md:text-[60px] leading-[52px] md:leading-[78px] font-semibold text-[#161616] font-['Chakra_Petch'] text-center">
              Blog
            </h1>
            <p className="text-[16px] md:text-[20px] leading-[21px] md:leading-[26px] text-[#161616] text-center">
              Explore Sprow's blog for expert insights on HR strategies, employee engagement, and team
              management. Stay updated on the latest trends in workplace culture, leadership
              development, and AI-powered tools to help your organization and employees grow. Dive into
              actionable advice to transform how you work
            </p>

            {/* Categories Container */}
            <div className="flex flex-wrap justify-center gap-[10px] w-full max-w-[1200px]">
              {CATEGORIES.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`flex justify-center items-center px-[10px] md:px-[20px] py-[8px] md:py-[10px] rounded-[20px] font-['Chakra_Petch'] text-[12px] md:text-[14px] leading-[16px] md:leading-[18px] font-semibold text-[#161616] transition-colors whitespace-nowrap
                    ${
                      selectedCategory === category
                        ? "bg-[#FF93AD]"
                        : "bg-white border-2 border-[#A29F95]"
                    }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Blog Posts Grid */}
          <div className="w-full max-w-[1274px] px-4 mx-auto">
            <RecentBlogPosts 
              selectedTag={selectedCategory === "All" ? undefined : selectedCategory}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;