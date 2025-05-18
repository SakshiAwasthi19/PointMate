
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

const ContactForm = () => {
  return (
    <Card className="p-6 rounded-lg shadow-md border-0">
      <h2 className="text-xl font-semibold text-[#14294b] mb-4">Team Information</h2>
      <p className="text-gray-700 mb-6">
        Connect with our educational team that oversees event coordination and point tracking
      </p>
      
      <Button className="w-full bg-[#14294b] hover:bg-[#0d1c36] text-white py-6 mb-2">
        Contact Team
      </Button>
      <p className="text-center text-sm text-gray-500 mb-6">Contact now</p>
      
      <form className="space-y-4">
        <Input 
          type="text" 
          placeholder="Name" 
          className="w-full border-gray-300 rounded"
        />
        <Input 
          type="email" 
          placeholder="Email" 
          className="w-full border-gray-300 rounded"
        />
        <Input 
          type="text" 
          placeholder="Institution" 
          className="w-full border-gray-300 rounded"
        />
        <Input 
          type="text" 
          placeholder="Message" 
          className="w-full border-gray-300 rounded"
        />
        <Button 
          type="submit"
          className="w-full bg-[#14294b] hover:bg-[#0d1c36] text-white"
        >
          Submit Request
        </Button>
      </form>
    </Card>
  );
};

export default ContactForm;
