import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-primary">Sprow</div>
          <div className="hidden md:flex space-x-6">
            <a href="#" className="text-foreground hover:text-primary transition-colors">About</a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">Pricing</a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">Resources</a>
          </div>
          <div className="flex space-x-4">
            <Button variant="ghost">Login</Button>
            <Button>Sign up</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-up">
          Empowering Teams.<br />
          Elevating Leaders.
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-up">
          Sprow is an AI-powered platform that connects employees and managers for seamless growth. Using traditional HR tools, Sprow unifies all aspects of employee development.
        </p>
        <Button size="lg" className="animate-fade-up">Sign up</Button>
      </section>

      {/* Trusted By Section */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-2xl font-semibold mb-10">Trusted by</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 justify-items-center">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="h-12 w-32 bg-gray-200 rounded animate-pulse"></div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-center mb-16">Why Sprow</h2>
        <div className="grid md:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="mb-6">
              <img src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" alt="Platform" className="w-full h-48 object-cover rounded-lg" />
            </div>
            <h3 className="text-xl font-semibold mb-4">A Unified Platform</h3>
            <p className="text-muted-foreground">Bring everything together in one platform for employees and managers.</p>
          </div>
          <div className="text-center">
            <div className="mb-6">
              <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c" alt="AI Growth" className="w-full h-48 object-cover rounded-lg" />
            </div>
            <h3 className="text-xl font-semibold mb-4">AI-powered Growth</h3>
            <p className="text-muted-foreground">Leverage AI to deliver personalized insights and recommendations.</p>
          </div>
          <div className="text-center">
            <div className="mb-6">
              <img src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81" alt="Success" className="w-full h-48 object-cover rounded-lg" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Long-term Success</h3>
            <p className="text-muted-foreground">Focus on sustainable growth and development for your team.</p>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="bg-muted py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <p className="text-lg mb-6 italic">
                "Sprow has completely changed how we manage employee growth. Instead of chasing after data from multiple sources, everything is in one place."
              </p>
              <div className="flex items-center">
                <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e" alt="Testimonial" className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <p className="font-semibold">Man Manager</p>
                  <p className="text-sm text-muted-foreground">HR Partner, Hewlett Packard</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-center mb-16">How it works</h2>
        <Tabs defaultValue="hr" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="hr">For HR</TabsTrigger>
            <TabsTrigger value="managers">For managers</TabsTrigger>
            <TabsTrigger value="employees">For employees</TabsTrigger>
          </TabsList>
          <TabsContent value="hr" className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Align development goals</h3>
                <p className="text-muted-foreground">HR can work with managers and employees to set clear development goals.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Track progress</h3>
                <p className="text-muted-foreground">Monitor employee development and ensure goals are being met.</p>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="managers" className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Support your team</h3>
                <p className="text-muted-foreground">Get insights and recommendations to better support your team's growth.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Drive engagement</h3>
                <p className="text-muted-foreground">Keep your team motivated and engaged with personalized development plans.</p>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="employees" className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Set clear goals</h3>
                <p className="text-muted-foreground">Define your career path and track your progress along the way.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Get feedback</h3>
                <p className="text-muted-foreground">Receive regular feedback and guidance to support your growth.</p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* Footer */}
      <footer className="border-t">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-primary">Features</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary">Pricing</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary">Sign up</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-primary">About</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary">Blog</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-primary">Documentation</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary">Help Center</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-primary">Privacy</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary">Terms</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary">Security</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t text-center text-muted-foreground">
            <p>&copy; 2024 Sprow. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;