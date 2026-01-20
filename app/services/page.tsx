import Services from "@/components/Services";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Khollman's Lawn Care Maintenance",
  description: "Comprehensive lawn care services including mowing, spring/fall cleanup, trimming, and edging.",
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="bg-primary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl">Our Services</h1>
          <p className="mt-4 text-xl text-gray-200">Professional care for every inch of your lawn.</p>
        </div>
      </div>
      <Services />
    </main>
  );
}
