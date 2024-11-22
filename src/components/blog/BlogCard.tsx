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
  variant?: 'featured' | 'horizontal' | 'default';
}

export const BlogCard = ({ post, variant = 'default' }: BlogCardProps) => {
  const imageClasses = {
    featured: 'h-[572px] w-full',
    horizontal: 'h-full w-[50%]',
    default: 'h-[258px] w-full'
  }[variant];

  const containerClasses = {
    featured: 'flex flex-col',
    horizontal: 'flex flex-row',
    default: 'flex flex-col'
  }[variant];

  return (
    <Link 
      to={`/blog/${post.id}`} 
      className={`bg-white rounded-[30px] shadow-[0px_0px_6px_rgba(0,0,0,0.05)] overflow-hidden h-full ${containerClasses}`}
    >
      <div 
        className={`p-5 relative bg-cover bg-center ${imageClasses}`}
        style={{ backgroundImage: `url(${post.image})` }}
      >
        <div className="bg-white/50 rounded-[10px] px-[10px] py-[10px] w-fit">
          <span className="text-[14px] leading-[18px] font-semibold text-[#161616]">
            {post.readTime}
          </span>
        </div>
      </div>
      <div className={`p-[30px] space-y-5 flex-grow ${variant === 'featured' ? 'p-[30px_50px_50px]' : ''}`}>
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
        <h2 className={`${variant === 'featured' ? 'text-[30px] leading-[39px]' : 'text-[24px] leading-[31px]'} font-semibold text-[#161616]`}>
          {post.title}
        </h2>
      </div>
    </Link>
  );
};