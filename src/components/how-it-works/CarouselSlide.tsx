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
    <div className="w-full max-w-[1129px] mx-auto px-4">
      <div className="flex flex-col gap-5">
        {/* First Row */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          {items.slice(0, 2).map((item, index) => (
            <div 
              key={index}
              className="w-full md:w-[547px] flex flex-col md:flex-row items-start p-5 md:p-10 gap-5 bg-white rounded-[30px] min-h-[279px]"
            >
              <div className="flex flex-col items-start gap-0 w-full md:w-[232px]">
                <h4 className="text-[18px] leading-[23px] font-semibold mb-0 font-['Chakra_Petch'] text-black">
                  {item.title}
                </h4>
                <div className="w-full md:w-[232px] h-[153px] mt-0">
                  <img 
                    src={item.image} 
                    alt="" 
                    className="w-full h-full object-cover mix-blend-hard-light" 
                  />
                </div>
              </div>
              <p className="flex-1 text-[18px] leading-[23px] font-['Chakra_Petch'] text-black">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Second Row */}
        <div className="flex flex-col md:flex-row items-center gap-5">
          {items.slice(2, 4).map((item, index) => (
            <div 
              key={index}
              className="w-full md:w-[547px] flex flex-col md:flex-row items-start p-5 md:p-10 gap-5 bg-white rounded-[30px] min-h-[287px]"
            >
              <div className="flex flex-col items-start gap-0 w-full md:w-[232px]">
                <h4 className="text-[18px] leading-[23px] font-semibold mb-0 font-['Chakra_Petch'] text-black">
                  {item.title}
                </h4>
                <div className="w-full md:w-[232px] h-[153px] mt-0">
                  <img 
                    src={item.image} 
                    alt="" 
                    className="w-full h-full object-cover mix-blend-hard-light" 
                  />
                </div>
              </div>
              <p className="flex-1 text-[18px] leading-[23px] font-['Chakra_Petch'] text-black">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Last Item (if exists) */}
        {items[4] && (
          <div className="flex flex-row items-center justify-center w-full">
            <div 
              className="w-full md:w-[547px] flex flex-col md:flex-row items-start p-5 md:p-10 gap-5 bg-white rounded-[30px] min-h-[287px]"
            >
              <div className="flex flex-col items-start gap-0 w-full md:w-[232px]">
                <h4 className="text-[18px] leading-[23px] font-semibold mb-0 font-['Chakra_Petch'] text-black">
                  {items[4].title}
                </h4>
                <div className="w-full md:w-[232px] h-[153px] mt-0">
                  <img 
                    src={items[4].image} 
                    alt="" 
                    className="w-full h-full object-cover mix-blend-hard-light" 
                  />
                </div>
              </div>
              <p className="flex-1 text-[18px] leading-[23px] font-['Chakra_Petch'] text-black">
                {items[4].description}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};