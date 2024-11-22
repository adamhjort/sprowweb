import React from 'react';

interface CarouselSlideProps {
  title: string;
  items: Array<{
    title: string;
    description: string;
    image: string;
  }>;
}

export const CarouselSlide = ({ title, items }: CarouselSlideProps) => {
  return (
    <div className="space-y-8 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {items.map((item, index) => (
          <div 
            key={index} 
            className={`flex items-start gap-8 animate-fade-in p-6 bg-white rounded-lg shadow-sm ${
              index === items.length - 1 && items.length % 2 !== 0 ? "md:col-span-2 md:w-1/2 md:mx-auto" : ""
            }`}
          >
            <div className="w-24 h-24 flex-shrink-0">
              <img src={item.image} alt="" className="w-full h-full object-contain" />
            </div>
            <div className="flex-1">
              <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
              <p className="text-muted-foreground">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};