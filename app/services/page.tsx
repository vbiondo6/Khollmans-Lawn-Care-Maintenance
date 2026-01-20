import Services from "@/components/Services";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Services | Khollman's Lawn Care Maintenance",
  description: "Comprehensive lawn care and snow removal services including mowing, plowing, spring/fall cleanup, trimming, and edging.",
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

      {/* Video CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold sm:text-4xl mb-6">Watch Us In Action</h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-10">
            Curious to see how we handle the heavy Escanaba snow? Check out our latest snow removal and lawn care videos on our social channels!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a 
              href="https://www.youtube.com/@KhollmanLawnCareMaintenance" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white rounded-full text-lg font-bold hover:bg-white hover:text-primary transition-all group"
            >
              Watch on YouTube
              <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="https://www.facebook.com/profile.php?id=61574874435348" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-accent text-accent-foreground rounded-full text-lg font-bold hover:bg-yellow-500 transition-all"
            >
              Follow on Facebook
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
