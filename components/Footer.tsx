export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold tracking-wider">KHOLLMAN'S</h3>
            <p className="text-sm text-gray-300 mt-1">Professional Lawn Care & Maintenance</p>
          </div>
          
          <div className="flex space-x-6 text-sm text-gray-300">
            <a href="#" className="hover:text-white transition-colors">Home</a>
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-xs text-gray-400">
          <p>&copy; {new Date().getFullYear()} Khollman's Lawn Care Maintenance. All rights reserved.</p>
          <p className="mt-2">Serving Escanaba, MI and surrounding areas.</p>
        </div>
      </div>
    </footer>
  );
}
