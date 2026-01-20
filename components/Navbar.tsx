"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import WeatherWidget from "./WeatherWidget";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-primary text-primary-foreground sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link href="/" className="font-bold text-xl tracking-wider">
              KHOLLMAN'S
              <span className="block text-xs font-normal text-gray-300">Lawn Care, Maintenance & Snow Removal</span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <Link href="/services" className="hover:text-accent transition-colors px-3 py-2 rounded-md text-sm font-medium">Services</Link>
              <Link href="/about" className="hover:text-accent transition-colors px-3 py-2 rounded-md text-sm font-medium">About</Link>
              <Link href="/contact" className="hover:text-accent transition-colors px-3 py-2 rounded-md text-sm font-medium">Contact</Link>
              <WeatherWidget />
              <Link href="tel:9063988809" className="bg-accent text-accent-foreground hover:bg-yellow-500 px-4 py-2 rounded-full font-bold transition-colors flex items-center gap-2">
                <Phone size={16} />
                (906) 398-8809
              </Link>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden items-center gap-4">
             <div className="scale-90"><WeatherWidget /></div>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-secondary focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-secondary">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/services" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-primary" onClick={() => setIsOpen(false)}>Services</Link>
            <Link href="/about" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-primary" onClick={() => setIsOpen(false)}>About</Link>
            <Link href="/contact" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-primary" onClick={() => setIsOpen(false)}>Contact</Link>
             <Link href="tel:9063988809" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-primary font-bold text-accent" onClick={() => setIsOpen(false)}>Call Now</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
