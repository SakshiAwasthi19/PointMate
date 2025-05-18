
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import InfoSection from "@/components/InfoSection";
import FaqCard from "@/components/FaqCard";
import ContactForm from "@/components/ContactForm";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content - 2/3 width on desktop */}
          <div className="lg:col-span-2 space-y-12">
            <HeroSection />
            <InfoSection />
          </div>
          
          {/* Sidebar - 1/3 width on desktop */}
          <div className="space-y-8">
            <FaqCard />
            <Card className="p-6 rounded-lg shadow-md border-0">
              <h2 className="text-xl font-semibold text-rose-500 mb-4">Your Account</h2>
              <p className="text-gray-700 mb-4">Track your activity status authorized</p>
              <img 
                src="/placeholder.svg" 
                alt="Account dashboard preview" 
                className="w-full h-24 object-cover rounded mb-4" 
              />
            </Card>
            
            <Card className="p-6 rounded-lg shadow-md border-0">
              <h2 className="text-xl font-semibold text-rose-500 mb-4">No Records</h2>
              <p className="text-gray-700 mb-6">
                Resource pages organized per department or school and searchable across all educational resources.
              </p>
              <div className="flex gap-4">
                <Button className="bg-[#14294b] hover:bg-[#0d1c36] text-white">Get Started</Button>
                <Button variant="outline" className="border-[#14294b] text-[#14294b]">Learn More</Button>
              </div>
            </Card>
            
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
