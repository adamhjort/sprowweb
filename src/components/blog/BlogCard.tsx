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
    featured: 'h-[400px] w-full', // Reduced from 572px
    horizontal: 'h-full w-1/2', // Using Tailwind's w-1/2 for exact 50% width
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
      className={`bg-white rounded-[30px] shadow-[0px_0px_6px_rgba(0,0,0,0.05)] overflow-hidden h-full ${containerClasses} transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-lg`}
    >
      <div 
        className={`p-5 relative bg-cover bg-center ${imageClasses}`}
        style={{ backgroundImage: `url(${post.image})` }}
      >
        <div className="bg-white/50 rounded-[10px] px-2 py-2 w-fit">
          <span className="text-[12px] md:text-[14px] leading-[16px] md:leading-[18px] font-semibold text-[#161616]">
            {post.readTime}
          </span>
        </div>
      </div>
      <div className={`p-[20px] space-y-4 flex-grow ${variant === 'featured' ? 'p-[20px_35px_35px]' : ''}`}>
        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span 
              key={tag}
              className="bg-[#FFC8D5] text-[#161616] rounded-[20px] px-2 md:px-3 py-1 md:py-1.5 text-[10px] md:text-[12px] font-semibold"
            >
              {tag}
            </span>
          ))}
        </div>
        <h2 className={`${variant === 'featured' ? 'text-[24px] md:text-[30px] leading-[31px] md:leading-[39px]' : 'text-[20px] md:text-[24px] leading-[26px] md:leading-[31px]'} font-semibold text-[#161616]`}>
          {post.title}
        </h2>
      </div>
    </Link>
  );
};