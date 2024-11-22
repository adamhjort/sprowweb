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
      <h3 className="text-2xl font-semibold text-center mb-8">{title}</h3>
      <div className="grid gap-12 max-w-4xl mx-auto">
        {items.map((item, index) => (
          <div key={index} className="flex items-start gap-8 animate-fade-in">
            <div className="w-48 h-48 flex-shrink-0">
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-full object-contain"
              />
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