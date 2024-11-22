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
      <a href="#" className="text-foreground hover:text-primary transition-colors px-4 py-2">Resources</a>
      <hr className="my-2" />
      <Button variant="ghost" className="justify-start">Request demo</Button>
      <Button variant="ghost" className="justify-start">Login</Button>
      <Button className="justify-start">Sign up</Button>
    </div>
  );

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-2' : 'py-4'}`}>
      <div className={`container mx-auto px-4 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg rounded-[20px]' : ''}`}>
        <div className="flex justify-between items-center h-[70px]">
          <div className="text-2xl font-bold text-primary">Sprow</div>
          
          <div className="hidden md:flex space-x-6">
            <a href="#" className="text-foreground hover:text-primary transition-colors">About</a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">Pricing</a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">Resources</a>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost">Request demo</Button>
            <Button variant="ghost">Login</Button>
            <Button>Sign up</Button>
          </div>

          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <MobileMenu />
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};