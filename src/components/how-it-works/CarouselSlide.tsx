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
      <div className="grid gap-8 max-w-4xl mx-auto">
        {items.map((item, index) => (
          <div key={index} className="flex items-start gap-8 animate-fade-in">
            <div className="w-16 h-16 flex-shrink-0 bg-muted rounded-full flex items-center justify-center">
              <span className="text-2xl font-semibold text-muted-foreground">{index + 1}</span>
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