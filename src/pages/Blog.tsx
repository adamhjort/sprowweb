import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Link } from "react-router-dom";

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All", "Product", "HR", "Management", "Employee Experience", "Culture", 
    "Performance & Growth", "AI & Technology", "Industry Trends", 
    "Case Studies & Success Stories", "Thought Leadership", "Product"
  ];

  const featuredPost = {
    id: 1,
    image: "/lovable-uploads/e5c1ec63-c51d-41b5-a319-99a76924a129.png",
    readTime: "5 min read",
    tags: ["Management", "The Future of Work", "Culture"],
    title: "The Future of HR: Trends Shaping the Workforce of Tomorrow"
  };

  const otherPosts = [
    {
      id: 2,
      image: "/lovable-uploads/e5c1ec63-c51d-41b5-a319-99a76924a129.png",
      readTime: "5 min read",
      tags: ["Management", "The Future of Work", "Culture"],
      title: "Why Employee Engagement Isn't Enough: How to Foster True Empowerment in the Workplace"
    },
    {
      id: 3,
      image: "/lovable-uploads/e5c1ec63-c51d-41b5-a319-99a76924a129.png",
      readTime: "5 min read",
      tags: ["Management", "The Future of Work", "Culture"],
      title: "From Feedback to Action: Turning Employee Surveys Into Real Change"
    },
    {
      id: 4,
      image: "/lovable-uploads/e5c1ec63-c51d-41b5-a319-99a76924a129.png",
      readTime: "5 min read",
      tags: ["Management", "The Future of Work", "Culture"],
      title: "The Future of Leadership: What Managers Need to Succeed in 2024 and Beyond"
    }
  ];

  return (
    <div className="min-h-screen bg-background pt-32">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold mb-6">Blog</h1>
        <p className="text-lg max-w-3xl mb-12">
          Explore Sprow's blog for expert insights on HR strategies, employee engagement, and team management. Stay updated on the latest trends in workplace culture, leadership development, and AI-powered tools to help your organization and employees grow. Dive into actionable advice to transform how you work
        </p>

        {/* Categories */}
        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="flex flex-col lg:flex-row justify-center items-start gap-[30px] max-w-[1274px] mx-auto">
          {/* Featured Post (Left Column) */}
          <Link to={`/blog/${featuredPost.id}`} className="w-full lg:w-[536px] bg-white rounded-[30px] shadow-[0px_0px_6px_rgba(0,0,0,0.05)] overflow-hidden">
            <div 
              className="w-full h-[572px] p-[30px_20px] relative bg-cover bg-center rounded-t-[30px]"
              style={{ backgroundImage: `url(${featuredPost.image})` }}
            >
              <div className="bg-white/50 rounded-[10px] px-[10px] py-[10px] w-fit">
                <span className="text-[16px] leading-[21px] font-semibold text-[#161616]">
                  {featuredPost.readTime}
                </span>
              </div>
            </div>
            <div className="p-[30px_50px_50px] space-y-5">
              <div className="flex flex-wrap gap-[10px]">
                {featuredPost.tags.map((tag) => (
                  <span 
                    key={tag}
                    className="bg-[#FFC8D5] text-[#161616] rounded-[20px] px-5 py-[10px] text-xs font-semibold"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h2 className="text-[30px] leading-[39px] font-semibold text-[#161616]">
                {featuredPost.title}
              </h2>
            </div>
          </Link>

          {/* Other Posts (Right Column) */}
          <div className="w-full lg:w-[708px] flex flex-col gap-[30px]">
            {otherPosts.map((post) => (
              <Link 
                key={post.id}
                to={`/blog/${post.id}`} 
                className="flex flex-col md:flex-row bg-white rounded-[30px] shadow-[0px_0px_6px_rgba(0,0,0,0.05)] overflow-hidden"
              >
                <div 
                  className="w-full md:w-[225px] h-[258px] p-5 relative bg-cover bg-center rounded-t-[30px] md:rounded-l-[30px] md:rounded-tr-none"
                  style={{ backgroundImage: `url(${post.image})` }}
                >
                  <div className="bg-white/50 rounded-[10px] px-[10px] py-[10px] w-fit">
                    <span className="text-[16px] leading-[21px] font-semibold text-[#161616]">
                      {post.readTime}
                    </span>
                  </div>
                </div>
                <div className="flex-1 p-[30px] space-y-5">
                  <div className="flex flex-wrap gap-[10px]">
                    {post.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="bg-[#FFC8D5] text-[#161616] rounded-[20px] px-5 py-[10px] text-xs font-semibold"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h2 className="text-[24px] leading-[31px] font-semibold text-[#161616]">
                    {post.title}
                  </h2>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Load More Button */}
        <div className="flex justify-center mt-12 mb-12">
          <Button variant="outline" className="rounded-full px-8">
            Load more
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Blog;
