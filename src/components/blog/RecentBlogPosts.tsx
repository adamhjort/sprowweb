import { BlogGrid } from "./BlogGrid";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface BlogPost {
  id: number;
  image: string;
  readTime: string;
  tags: string[];
  title: string;
}

interface RecentBlogPostsProps {
  currentPostId?: number;
  limit?: number;
}

export const RecentBlogPosts = ({ currentPostId, limit = 4 }: RecentBlogPostsProps) => {
  const [displayLimit, setDisplayLimit] = useState(limit);

  // This would typically come from an API or database
  const allPosts = [
    {
      id: 1,
      image: "/lovable-uploads/e5c1ec63-c51d-41b5-a319-99a76924a129.png",
      readTime: "5 min read",
      tags: ["Management", "The Future of Work", "Culture"],
      title: "The Future of HR: Trends Shaping the Workforce of Tomorrow"
    },
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
    },
    {
      id: 5,
      image: "/lovable-uploads/e5c1ec63-c51d-41b5-a319-99a76924a129.png",
      readTime: "5 min read",
      tags: ["Management", "The Future of Work", "Culture"],
      title: "Building a Culture of Innovation: Strategies for Modern Organizations"
    },
    {
      id: 6,
      image: "/lovable-uploads/e5c1ec63-c51d-41b5-a319-99a76924a129.png",
      readTime: "5 min read",
      tags: ["Management", "The Future of Work", "Culture"],
      title: "The Power of Employee Recognition: Beyond Traditional Rewards"
    },
    {
      id: 7,
      image: "/lovable-uploads/e5c1ec63-c51d-41b5-a319-99a76924a129.png",
      readTime: "5 min read",
      tags: ["Management", "The Future of Work", "Culture"],
      title: "Remote Work Success: Building Strong Teams Across Distances"
    },
    {
      id: 8,
      image: "/lovable-uploads/e5c1ec63-c51d-41b5-a319-99a76924a129.png",
      readTime: "5 min read",
      tags: ["Management", "The Future of Work", "Culture"],
      title: "Data-Driven HR: Making Better Decisions with Analytics"
    }
  ];

  const filteredPosts = currentPostId 
    ? allPosts.filter(post => post.id !== currentPostId)
    : allPosts;

  const recentPosts = filteredPosts.slice(0, displayLimit);
  const hasMorePosts = filteredPosts.length > displayLimit;
  
  // Use the first post as featured and the rest as other posts
  const [featuredPost, ...otherPosts] = recentPosts;

  const handleLoadMore = () => {
    setDisplayLimit(prev => prev + 4);
  };

  return (
    <div className="w-full">
      <h2 className="text-2xl font-semibold mb-6">Recent Posts</h2>
      <BlogGrid featuredPost={featuredPost} otherPosts={otherPosts} />
      
      {/* Load More Button */}
      {hasMorePosts && (
        <div className="flex justify-center mt-12">
          <Button 
            variant="outline" 
            className="rounded-full px-8"
            onClick={handleLoadMore}
          >
            Load more
          </Button>
        </div>
      )}
    </div>
  );
};