
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const InfoSection = () => {
  return (
    <section className="py-4">
      <Button variant="outline" className="mb-6 border-[#14294b] text-[#14294b] flex items-center gap-2">
        Educational Events Listing <ArrowRight size={16} />
      </Button>
      
      <h2 className="text-3xl font-bold text-[#14294b] mb-6">
        How AICTE Tracker Helps You Graduate
      </h2>
      
      <div className="space-y-6 text-gray-700 text-center md:text-left">
        <p>
          Your central tracking of courses and educational activities, faster.
        </p>
        
        <p>
          Personalize comprehensive event notifications to never miss out events or activities of your choice from technical training events to campus programming fairs and your career events.
        </p>
        
        <p>
          Digital certificates generated automatically for event attendance, eliminating paperwork hassles. No more damaged and lost docs.
        </p>
        
        <p className="text-[#14294b] font-semibold">
          — Students
        </p>
      </div>
    </section>
  );
};

export default InfoSection;
