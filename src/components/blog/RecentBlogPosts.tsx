import { BlogGrid } from "./BlogGrid";

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
    }
  ];

  const filteredPosts = currentPostId 
    ? allPosts.filter(post => post.id !== currentPostId)
    : allPosts;

  const recentPosts = filteredPosts.slice(0, limit);
  
  // Use the first post as featured and the rest as other posts
  const [featuredPost, ...otherPosts] = recentPosts;

  return (
    <div className="w-full">
      <h2 className="text-2xl font-semibold mb-6">Recent Posts</h2>
      <BlogGrid featuredPost={featuredPost} otherPosts={otherPosts} />
    </div>
  );
};