import { Button } from "@/components/ui/button";

const BlogPost = () => {
  const post = {
    readTime: "5 min read",
    tags: ["Management", "The Future of Work", "Culture"],
    title: "The Future of HR: Trends Shaping the Workforce of Tomorrow",
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
    <div className="min-h-screen bg-background pt-32">
      <div className="container mx-auto px-4">
        {/* Tags and Read Time */}
        <div className="flex flex-wrap gap-2 mb-4">
          <div className="bg-white rounded-full px-3 py-1 text-sm">
            {post.readTime}
          </div>
          {post.tags.map((tag) => (
            <span 
              key={tag} 
              className="bg-pink-100 text-pink-800 rounded-full px-3 py-1 text-sm"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold mb-12">
          {post.title}
        </h1>

        {/* Content */}
        <div className="prose max-w-none mb-12 text-lg">
          {post.content.split('\n\n').map((paragraph, index) => (
            <p key={index} className="mb-6">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Tags Section */}
        <div className="flex flex-wrap gap-3 mb-12">
          {post.tags.map((tag) => (
            <Button
              key={tag}
              variant="outline"
              className="rounded-full"
            >
              {tag}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPost;