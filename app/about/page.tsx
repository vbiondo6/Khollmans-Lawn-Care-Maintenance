import type { Metadata } from "next";
import { Users, CheckCircle, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Khollman's Lawn Care Maintenance",
  description: "Learn more about Khollman's Lawn Care Maintenance, serving Escanaba, MI with pride and precision.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="bg-primary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl">About Us</h1>
          <p className="mt-4 text-xl text-gray-200">Dedicated to keeping Escanaba beautiful, one lawn at a time.</p>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Who We Are</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Khollman's Lawn Care Maintenance is a locally owned and operated business serving the Escanaba, Michigan area. 
                We understand that your lawn is more than just grass - it's an extension of your home and a place for your family to enjoy.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our mission is simple: to provide reliable, high-quality lawn care services that give you back your free time. 
                Whether it's weekly mowing or a complete seasonal cleanup, we treat every property with the same care and attention to detail as if it were our own.
              </p>
            </div>
            <div className="relative h-96 bg-gray-200 rounded-2xl overflow-hidden shadow-lg">
               {/* Placeholder for an actual team or work photo */}
               <div className="absolute inset-0 bg-primary opacity-10 flex items-center justify-center">
                  <Users className="h-32 w-32 text-primary opacity-20" />
               </div>
               <div className="absolute inset-0 flex items-center justify-center text-gray-500 font-medium">
                 [Company/Team Photo Placeholder]
               </div>
            </div>
          </div>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Quality Guarantee</h3>
              <p className="text-gray-600">We don't cut corners. We take pride in our crisp edges and even cuts.</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Reliable Schedule</h3>
              <p className="text-gray-600">You can count on us to show up when we say we will.</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Local Experts</h3>
              <p className="text-gray-600">We know the local climate and what your lawn needs to thrive here in Escanaba.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
