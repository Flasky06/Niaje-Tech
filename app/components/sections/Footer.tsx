export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">TechNiaje</h3>
            <p className="text-gray-400">
              Building innovative digital solutions for businesses across Africa
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <a
                href="#home"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Home
              </a>
              <a
                href="#services"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Services
              </a>
              <a
                href="#projects"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <p className="text-gray-400">Email: techniaje@gmail.com</p>
            <p className="text-gray-400">Phone: +254 748 388 173</p>
            <p className="text-gray-400">Nairobi, Kenya</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; 2024 TechNiaje. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
