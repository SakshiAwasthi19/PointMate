
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="py-4">
      <h1 className="text-5xl md:text-6xl font-bold text-[#14294b] leading-tight mb-6">
        Never Miss an<br />AICTE Activity<br />Event Again
      </h1>
      <p className="text-gray-600 mb-6 max-w-2xl">
        Track your entire education experience throughout academic semesters, and store your certificates along with verification links so that you never miss an educational opportunity.
      </p>
      <Button className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-6 text-lg rounded-md">
        Register Event
      </Button>
    </section>
  );
};

export default HeroSection;
