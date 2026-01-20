import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <div className="relative bg-primary text-white overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-90 mix-blend-multiply" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-40" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
          Your Lawn, <span className="text-accent">Our Pride.</span>
        </h1>
        <p className="mt-4 max-w-2xl text-xl text-gray-200 mb-10">
          Professional lawn care and maintenance services in Escanaba, MI. 
          Reliable service you can count on, week after week.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link 
            href="/contact" 
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-accent-foreground bg-accent hover:bg-yellow-500 transition-colors md:text-lg"
          >
            Get a Free Quote
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
          <Link 
            href="/services" 
            className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-base font-medium rounded-full text-white hover:bg-white hover:text-primary transition-colors md:text-lg"
          >
            View Services
          </Link>
        </div>
      </div>
    </div>
  );
}
