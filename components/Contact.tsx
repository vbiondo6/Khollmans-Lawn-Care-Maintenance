"use client";

import { Mail, Phone, MapPin, Facebook, Instagram, Youtube, Video } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-extrabold text-primary sm:text-4xl mb-6">
              Get In Touch
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Ready to reclaim your weekends? Contact us today for a free quote on your lawn care needs.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Phone className="h-6 w-6 text-accent" />
                </div>
                <div className="ml-3">
                  <p className="text-base font-medium text-gray-900">Phone</p>
                  <p className="mt-1 text-lg text-gray-600">
                    <a href="tel:9063988809" className="hover:text-primary transition-colors">(906) 398-8809</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Mail className="h-6 w-6 text-accent" />
                </div>
                <div className="ml-3">
                  <p className="text-base font-medium text-gray-900">Email</p>
                  <p className="mt-1 text-lg text-gray-600">
                    <a href="mailto:khollman1@yahoo.com" className="hover:text-primary transition-colors">khollman1@yahoo.com</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <MapPin className="h-6 w-6 text-accent" />
                </div>
                <div className="ml-3">
                  <p className="text-base font-medium text-gray-900">Service Area</p>
                  <p className="mt-1 text-lg text-gray-600">Escanaba, Michigan & Surrounding Areas</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Facebook className="h-6 w-6 text-accent" />
                </div>
                <div className="ml-3">
                  <p className="text-base font-medium text-gray-900">Social Media</p>
                  <div className="mt-2 flex space-x-4">
                     <a href="https://www.facebook.com/profile.php?id=61574874435348" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#1877F2] transition-colors" aria-label="Facebook">
                        <Facebook size={24} />
                     </a>
                     <a href="https://www.instagram.com/khollmanslawncaremaintenance/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#E4405F] transition-colors" aria-label="Instagram">
                        <Instagram size={24} />
                     </a>
                     <a href="https://www.youtube.com/@KhollmanLawnCareMaintenance" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#FF0000] transition-colors" aria-label="YouTube">
                        <Youtube size={24} />
                     </a>
                     <a href="https://www.tiktok.com/@khollman.lawn.car" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#000000] transition-colors" aria-label="TikTok">
                        <Video size={24} />
                     </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 rounded-2xl p-8 shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Request a Free Quote</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                <input type="text" id="name" name="name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary py-3 px-4 bg-white" placeholder="Your Name" />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                <input type="tel" id="phone" name="phone" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary py-3 px-4 bg-white" placeholder="(906) 555-0123" />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700">Service Needed</label>
                <select id="service" name="service" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary py-3 px-4 bg-white">
                  <option>Lawn Mowing</option>
                  <option>Snow Removal</option>
                  <option>Spring/Fall Cleanup</option>
                  <option>Trimming & Edging</option>
                  <option>General Maintenance</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message (Optional)</label>
                <textarea id="message" name="message" rows={4} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary py-3 px-4 bg-white" placeholder="Tell us about your lawn..."></textarea>
              </div>

              <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors">
                Send Request
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}