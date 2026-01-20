import Contact from "@/components/Contact";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Khollman's Lawn Care Maintenance",
  description: "Get a free quote for your lawn care needs. Serving Escanaba, MI. Call (906) 398-8809.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="bg-primary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl">Contact Us</h1>
          <p className="mt-4 text-xl text-gray-200">We're here to help you get the lawn you deserve.</p>
        </div>
      </div>
      <Contact />
    </main>
  );
}
