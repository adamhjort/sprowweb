import { Button } from "@/components/ui/button";

const Pricing = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="relative w-full max-w-[1440px] mx-auto">
        <div className="absolute inset-0 w-full" style={{ height: '1500px' }}>
          <img 
            src="/lovable-uploads/8f515b57-13dc-49a2-8b0f-59a88933722f.png"
            alt="Background pattern"
            className="w-full h-full object-cover opacity-50"
            style={{
              objectPosition: 'center 100px',
              objectFit: 'cover',
              transform: 'scale(1.2)'
            }}
          />
        </div>

        <div className="flex flex-col items-center gap-[50px] md:gap-[100px] pt-[100px] md:pt-[150px] pb-[100px] relative px-4">
          <div className="flex flex-col items-center gap-[30px] md:gap-[50px] w-full max-w-[737px]">
            <h1 className="text-[40px] md:text-[60px] leading-[52px] md:leading-[78px] font-semibold text-[#161616] font-['Chakra_Petch'] text-center">
              Pricing
            </h1>
            <p className="text-[16px] md:text-[20px] leading-[21px] md:leading-[26px] text-[#161616] text-center">
              Get started with Sprow's freemium plan and upgrade as your team grows. Access advanced features like AI-powered insights and 1-on-1 tracking when you're ready to take your team's development to the next level.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto w-full">
            {/* Basic Plan */}
            <div className="bg-white rounded-[30px] p-8 shadow-lg">
              <h2 className="text-[24px] font-semibold mb-4">Basic</h2>
              <p className="text-[32px] font-bold mb-8">$0<span className="text-[16px] text-muted-foreground">/seat</span></p>
              <ul className="space-y-4 mb-8 text-[16px]">
                <li>Note taking</li>
                <li>Goals</li>
                <li>Actions</li>
                <li>Google workspace integration</li>
                <li>Up to 5 employees</li>
                <li>Basic surveys</li>
              </ul>
              <Button className="w-full">Sign up</Button>
            </div>

            {/* Pro Plan */}
            <div className="bg-[#FFF8E2] rounded-[30px] p-8 shadow-lg transform scale-105">
              <h2 className="text-[24px] font-semibold mb-4">Pro</h2>
              <p className="text-[32px] font-bold mb-8">$5<span className="text-[16px] text-muted-foreground">/seat</span></p>
              <ul className="space-y-4 mb-8 text-[16px]">
                <li>Everything in Basic +</li>
                <li>AI functionality</li>
                <li>Microsoft outlook integration</li>
                <li>Custom surveys</li>
              </ul>
              <Button className="w-full">Sign up</Button>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-white rounded-[30px] p-8 shadow-lg">
              <h2 className="text-[24px] font-semibold mb-4">Enterprise</h2>
              <p className="text-[32px] font-bold mb-8">$7<span className="text-[16px] text-muted-foreground">/seat</span></p>
              <ul className="space-y-4 mb-8 text-[16px]">
                <li>Everything in Pro +</li>
                <li>SSO</li>
                <li>Advanced analysis</li>
                <li>Executive summaries</li>
                <li>360 review AI support</li>
                <li>Early warning reports</li>
              </ul>
              <Button className="w-full">Sign up</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;