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
];

const SUB_CATEGORIES = [
  "AI & Technology",
  "Industry Trends",
  "Case Studies & Success Stories",
  "Thought Leadership",
  "Product",
];

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedSubCategory, setSelectedSubCategory] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-background">
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

        <div className="container mx-auto px-4 pt-32 pb-20 relative">
          <div className="max-w-[1274px] mx-auto text-center">
            {/* Header */}
            <div className="mb-16 space-y-6">
              <h1 className="text-[64px] leading-[83px] font-bold text-[#161616] font-['Chakra_Petch']">
                Blog
              </h1>
              <p className="text-[20px] leading-[26px] text-[#161616] mx-auto max-w-[800px]">
                Explore Sprow's blog for expert insights on HR strategies, employee engagement, and team
                management. Stay updated on the latest trends in workplace culture, leadership
                development, and AI-powered tools to help your organization and employees grow. Dive into
                actionable advice to transform how you work
              </p>

              {/* Main Categories */}
              <div className="flex flex-wrap gap-[10px] justify-center">
                {CATEGORIES.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`flex justify-center items-center px-[20px] py-[10px] rounded-[20px] font-['Chakra_Petch'] text-[14px] leading-[18px] font-semibold text-[#161616] transition-colors whitespace-nowrap
                      ${
                        selectedCategory === category
                          ? "bg-[#FF93AD]"
                          : "bg-white border border-[#A29F95]"
                      }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* Sub Categories */}
              <div className="flex flex-wrap gap-[10px] justify-center">
                {SUB_CATEGORIES.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedSubCategory(category === selectedSubCategory ? null : category)}
                    className={`flex justify-center items-center px-[20px] py-[10px] rounded-[20px] font-['Chakra_Petch'] text-[14px] leading-[18px] font-semibold text-[#161616] transition-colors whitespace-nowrap
                      ${
                        selectedSubCategory === category
                          ? "bg-[#FF93AD] border border-[#FF93AD]"
                          : "bg-white border border-[#A29F95]"
                      }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Blog Posts Grid */}
            <RecentBlogPosts 
              selectedTag={selectedCategory === "All" ? undefined : selectedCategory} 
              selectedSubCategory={selectedSubCategory}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;