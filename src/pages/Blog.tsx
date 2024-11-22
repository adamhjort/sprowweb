import { Button } from "@/components/ui/button";
import { useState } from "react";
import { BlogGrid } from "@/components/blog/BlogGrid";

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
        <BlogGrid featuredPost={featuredPost} otherPosts={otherPosts} />

        {/* Load More Button */}
        <div className="flex justify-center mt-12 mb-20">
          <Button variant="outline" className="rounded-full px-8">
            Load more
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Blog;