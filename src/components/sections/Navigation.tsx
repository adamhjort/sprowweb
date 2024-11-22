import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

interface NavigationProps {
  isScrolled: boolean;
}

export const Navigation = ({ isScrolled }: NavigationProps) => {
  const MobileMenu = () => (
    <div className="flex flex-col space-y-4 pt-4">
      <a href="#" className="text-foreground hover:text-primary transition-colors px-4 py-2">About</a>
      <a href="#" className="text-foreground hover:text-primary transition-colors px-4 py-2">Pricing</a>
      <a href="/blog" className="text-foreground hover:text-primary transition-colors px-4 py-2">Resources</a>
      <hr className="my-2" />
      <Button variant="ghost" className="justify-start">Request demo</Button>
      <Button variant="ghost" className="justify-start">Login</Button>
      <Button className="justify-start">Sign up</Button>
    </div>
  );

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 md:px-[10px] ${isScrolled ? 'py-2' : 'py-4'}`}>
      <div className={`max-w-[1420px] w-full mx-auto transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg rounded-[20px]' : ''}`}>
        <div className="grid grid-cols-2 lg:grid-cols-3 items-center h-[70px] px-2 lg:px-4 max-w-full">
          {/* Left column - Logo */}
          <div className="flex justify-start">
            <div className="text-2xl font-bold text-primary w-[134px] h-[70px] flex items-center">Sprow</div>
          </div>
          
          {/* Middle column - Navigation links */}
          <div className="hidden lg:flex justify-center items-center gap-8">
            <a href="#" className="text-[14px] leading-[18px] font-semibold font-['Chakra_Petch'] text-[#161616] hover:text-primary transition-colors whitespace-nowrap">About</a>
            <a href="#" className="text-[14px] leading-[18px] font-semibold font-['Chakra_Petch'] text-[#161616] hover:text-primary transition-colors whitespace-nowrap">Pricing</a>
            <a href="/blog" className="text-[14px] leading-[18px] font-semibold font-['Chakra_Petch'] text-[#161616] hover:text-primary transition-colors whitespace-nowrap">Resources</a>
          </div>
          
          {/* Right column - Actions */}
          <div className="hidden lg:flex justify-end items-center space-x-4">
            <Button variant="ghost" className="text-[14px] leading-[18px] font-semibold font-['Chakra_Petch'] text-[#161616] whitespace-nowrap px-2">Request demo</Button>
            <div className="w-[1px] h-4 bg-[#A29F95] opacity-50"></div>
            <Button variant="ghost" className="text-[14px] leading-[18px] font-semibold font-['Chakra_Petch'] text-[#161616] whitespace-nowrap px-2">Login</Button>
            <Button className="h-[35px] bg-[#FF93AD] hover:bg-primary-hover rounded-[10px] text-[14px] leading-[18px] font-semibold font-['Chakra_Petch'] text-[#161616] px-4">
              Sign up
            </Button>
          </div>

          {/* Mobile menu button - Moved to the right */}
          <div className="lg:hidden flex justify-end">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="mr-2">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <MobileMenu />
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};