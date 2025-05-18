
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const FaqCard = () => {
  return (
    <Card className="p-6 rounded-lg shadow-md border-0">
      <h2 className="text-xl font-semibold mb-4 text-center">FAQ</h2>
      
      <Button className="w-full bg-[#14294b] hover:bg-[#0d1c36] text-white py-6 mb-2">
        Support Center
      </Button>
      <p className="text-center text-sm text-gray-500">Contact support</p>
    </Card>
  );
};

export default FaqCard;
