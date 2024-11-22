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
  "Product",
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
            <div className="flex flex-wrap gap-3">
              {CATEGORIES.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-full text-[16px] leading-[21px] font-semibold transition-colors
                    ${
                      selectedCategory === category
                        ? "bg-primary text-primary-foreground"
                        : "bg-white text-[#161616] hover:bg-primary/10"
                    }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Sub Categories */}
            <div className="flex flex-wrap gap-3">
              {SUB_CATEGORIES.map((category) => (
                <button
                  key={category}
                  className="px-6 py-3 rounded-full text-[16px] leading-[21px] font-semibold 
                           bg-white text-[#161616] hover:bg-primary/10 transition-colors"
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