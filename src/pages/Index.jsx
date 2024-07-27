// Update this page (the content is just a fallback if you fail to update the page)

import { Button } from "@/components/ui/button";
import { Graph } from "@/components/Graph";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#1c1c1c] text-white">
      <main className="flex-grow flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-bold mb-4">NeetCode</h1>
        <p className="text-xl mb-8">A better way to prepare for coding interviews.</p>
        <Button variant="outline" className="bg-[#2c2c2c] text-white hover:bg-[#3c3c3c]">
          Get Pro
        </Button>
        <div className="mt-12 w-full max-w-3xl">
          <Graph />
        </div>
      </main>
    </div>
  );
};

export default Index;
