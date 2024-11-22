import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { RecentBlogPosts } from "@/components/blog/RecentBlogPosts";
import { useParams } from "react-router-dom";

const BlogPost = () => {
  const { id } = useParams();
  const postId = parseInt(id || "0");
  
  const post = {
    readTime: "5 min read",
    tags: ["Management", "The Future of Work", "Culture"],
    title: "The Future of HR: Trends Shaping the Workforce of Tomorrow",
    image: "/lovable-uploads/e5c1ec63-c51d-41b5-a319-99a76924a129.png",
    content: `
      The HR landscape is undergoing a significant transformation, driven by rapid technological advancements, shifting workforce demographics, and evolving employee expectations. As we move toward the future, HR professionals must adapt to these changes while maintaining the human element. Here are key predictions that will define the future of HR.

      1. The Rise of AI in HR
      Artificial Intelligence (AI) is revolutionizing the way HR departments operate. From streamlining recruitment processes to reducing biases in hiring, AI is enabling managers to make HR functions. According to recent studies, over 50% of HR departments are now using some form of AI in their daily operations. However, while self-service AI tools, such as generative AI models, are helping HR professionals identify top talent faster than ever before, early AI continues to evolve, it will further enhance employee management and engagement.

      2. Data-Driven Decision Making
      Data has become the cornerstone of strategic decision-making in HR. In fact, 82% of Fortune 1000 companies have significantly increased their investment in data-related initiatives. With the ability to analyze large sets of workforce data, HR leaders can make informed decisions that positively impact employee satisfaction and retention. However, the challenge lies in balancing data-driven efficiency with human-centered strategies will remain crucial to maintaining a positive workplace culture.

      3. Upskilling and Talent Shortages
      With technology evolving at an unprecedented pace, HR departments are facing growing talent shortages in critical areas. By 2025, it's estimated that 85 million jobs could go unfilled due to the lack of qualified perspective. Continuous learning and development programs are based on upskilling employees for future roles, while addressing future shortages head-on. HR leaders must prioritize developing robust training frameworks to help their workforce adapt to changing demands.
    `,
  };

  return (
    <div className="min-h-screen bg-background pt-32 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-[1000px] mx-auto bg-white rounded-[30px] shadow-[0px_0px_6px_rgba(0,0,0,0.05)] overflow-hidden">
          {/* Header Image */}
          <div 
            className="w-full h-[411px] p-5 relative bg-cover bg-center"
            style={{ backgroundImage: `url(${post.image})` }}
          >
            <div className="bg-white/50 rounded-[10px] px-[10px] py-[10px] w-fit">
              <span className="text-[16px] leading-[21px] font-semibold text-black">
                {post.readTime}
              </span>
            </div>
          </div>

          {/* Content Container */}
          <div className="p-[50px_100px] space-y-5">
            {/* Tags */}
            <div className="flex flex-wrap gap-[10px] w-full max-w-[800px]">
              {post.tags.map((tag) => (
                <span 
                  key={tag}
                  className="bg-[#FFC8D5] text-black rounded-[20px] px-5 py-[10px] text-xs font-semibold flex items-center justify-center"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Title */}
            <h1 className="text-[30px] leading-[39px] font-semibold text-[#161616] max-w-[800px]">
              {post.title}
            </h1>

            {/* Content */}
            <div className="prose max-w-[800px] text-[16px] leading-[21px] font-[500] text-[#161616] font-['Chakra_Petch']">
              {post.content.split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-6">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Posts */}
        <div className="max-w-[1000px] mx-auto mt-12">
          <RecentBlogPosts currentPostId={postId} />
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
