import { Link } from "react-router-dom";

interface BlogPost {
  id: number;
  image: string;
  readTime: string;
  tags: string[];
  title: string;
}

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
}

export const BlogCard = ({ post, featured = false }: BlogCardProps) => {
  return (
    <Link 
      to={`/blog/${post.id}`} 
      className={`bg-white rounded-[30px] shadow-[0px_0px_6px_rgba(0,0,0,0.05)] overflow-hidden h-full flex flex-col`}
    >
      <div 
        className={`w-full ${featured ? 'h-[572px]' : 'h-[258px]'} p-5 relative bg-cover bg-center`}
        style={{ backgroundImage: `url(${post.image})` }}
      >
        <div className="bg-white/50 rounded-[10px] px-[10px] py-[10px] w-fit">
          <span className="text-[16px] leading-[21px] font-semibold text-[#161616]">
            {post.readTime}
          </span>
        </div>
      </div>
      <div className={`p-[30px] space-y-5 flex-grow ${featured ? 'p-[30px_50px_50px]' : ''}`}>
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
        <h2 className={`${featured ? 'text-[30px] leading-[39px]' : 'text-[24px] leading-[31px]'} font-semibold text-[#161616]`}>
          {post.title}
        </h2>
      </div>
    </Link>
  );
};