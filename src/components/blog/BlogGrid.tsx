import { BlogCard } from "./BlogCard";

interface BlogPost {
  id: number;
  image: string;
  readTime?: string;
  content: string;
  tags: string[];
  title: string;
}

interface BlogGridProps {
  featuredPost: BlogPost;
  otherPosts: BlogPost[];
}

export const BlogGrid = ({ featuredPost, otherPosts }: BlogGridProps) => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-stretch gap-[30px] w-full max-w-[1274px] mx-auto">
      {/* Featured Post (Left Column) */}
      <div className="w-full lg:w-[536px]">
        <BlogCard post={featuredPost} variant="featured" />
      </div>

      {/* Other Posts (Right Column) */}
      <div className="w-full lg:w-[708px] flex flex-col gap-[30px]">
        {otherPosts.map((post) => (
          <BlogCard key={post.id} post={post} variant="horizontal" />
        ))}
      </div>
    </div>
  );
};