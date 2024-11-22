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
];

const SUB_CATEGORIES = [
  "Industry Trends",
  "Case Studies & Success Stories",
  "Thought Leadership",
];

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <div className="min-h-screen bg-background pt-32 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-[1274px] mx-auto">
          {/* Header */}
          <div className="mb-16 space-y-6">
            <h1 className="text-[64px] leading-[83px] font-bold text-[#161616] font-['Chakra_Petch']">
              Blog
            </h1>
            <p className="text-[20px] leading-[26px] text-[#161616] max-w-[1000px]">
              Explore Sprow's blog for expert insights on HR strategies, employee engagement, and team
              management. Stay updated on the latest trends in workplace culture, leadership
              development, and AI-powered tools to help your organization and employees grow. Dive into
              actionable advice to transform how you work
            </p>

            {/* Main Categories */}
            <div className="flex flex-wrap justify-center items-start content-center gap-[10px] w-full max-w-[1200px] mx-auto">
              {CATEGORIES.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`flex justify-center items-center px-[30px] py-[10px] rounded-[20px] font-['Chakra_Petch'] text-[14px] leading-[18px] font-semibold text-[#161616] transition-colors
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

            {/* Sub Categories */}
            <div className="flex flex-wrap justify-center items-start content-center gap-[10px] w-full max-w-[1200px] mx-auto">
              {SUB_CATEGORIES.map((category) => (
                <button
                  key={category}
                  className="flex justify-center items-center px-[30px] py-[10px] rounded-[20px] font-['Chakra_Petch'] text-[14px] leading-[18px] font-semibold text-[#161616] bg-white border-2 border-[#A29F95]"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Blog Posts Grid */}
          <RecentBlogPosts selectedTag={selectedCategory === "All" ? undefined : selectedCategory} />
        </div>
      </div>
    </div>
  );
};

export default Blog;
