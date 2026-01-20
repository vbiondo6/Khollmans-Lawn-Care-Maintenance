import Hero from "@/components/Hero";
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      
      {/* Services Teaser */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-primary sm:text-4xl mb-6">Professional Lawn Care Made Simple</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
            From weekly mowing to seasonal cleanups, we have the tools and experience to keep your property looking its best.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
             <div className="p-6 border rounded-xl hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold mb-2">Lawn Mowing</h3>
                <p className="text-gray-600">Reliable weekly or bi-weekly service.</p>
             </div>
             <div className="p-6 border rounded-xl hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold mb-2">Spring/Fall Cleanup</h3>
                <p className="text-gray-600">Get your yard ready for the season.</p>
             </div>
             <div className="p-6 border rounded-xl hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold mb-2">Trimming & Edging</h3>
                <p className="text-gray-600">The perfect finishing touch.</p>
             </div>
          </div>
          <Link href="/services" className="inline-flex items-center font-bold text-primary hover:text-secondary text-lg">
            View All Services <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Lawn?</h2>
          <p className="text-xl mb-10 text-gray-100">Contact us today for a free, no-obligation quote.</p>
          <Link 
            href="/contact" 
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-primary bg-white hover:bg-gray-100 transition-colors md:text-lg"
          >
            Get a Quote Now
          </Link>
        </div>
      </section>
    </main>
  );
}
