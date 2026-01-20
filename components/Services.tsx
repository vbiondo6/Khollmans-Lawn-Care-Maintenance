import { Leaf, Scissors, Sun, Sparkles, Snowflake } from "lucide-react";

const services = [
  {
    title: "Lawn Mowing",
    description: "Regular weekly or bi-weekly mowing to keep your grass healthy and looking its best.",
    icon: Sun,
  },
  {
    title: "Trimming & Edging",
    description: "Precision trimming around trees, fences, and flower beds, plus crisp edging along driveways.",
    icon: Scissors,
  },
  {
    title: "Snow Removal",
    description: "Reliable plowing and shoveling services to keep your driveways and walkways clear all winter long.",
    icon: Snowflake,
  },
  {
    title: "Spring & Fall Cleanup",
    description: "Thorough removal of leaves, branches, and debris to prepare your lawn for the changing seasons.",
    icon: Leaf,
  },
  {
    title: "General Maintenance",
    description: "Comprehensive yard care to keep your outdoor space clean, tidy, and welcoming.",
    icon: Sparkles,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-primary sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Professional care for your property, through every season.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-8 border border-gray-100">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <service.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}