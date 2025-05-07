export default function About() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-50 to-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-900 to-blue-700">
            About Us
          </h2>
          <p className="text-xl text-gray-900 max-w-3xl mx-auto">
            Niaje Tech is a forward-thinking technology company dedicated to building smart, reliable, and scalable digital solutions. We specialize in developing custom software systems and integrated platforms that solve real business problems and optimize operations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Our Mission</h3>
              <p className="text-gray-900">
                We help organizations improve efficiency, reduce costs, and scale through powerful digital tools. Our portfolio spans multiple sectors, from property management systems and e-commerce solutions to ERP platforms and AI-driven tools.
              </p>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Our Approach</h3>
              <p className="text-gray-900">
                We take a strategic and hands-on approach to every project — ensuring each solution we deliver is user-friendly, secure, and aligned with client goals. With a commitment to quality, innovation, and collaboration, we continue to drive digital transformation in Africa and beyond.
              </p>
            </div>
          </div>

          <div className="bg-blue-50 rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-blue-900 mb-6">Core Services</h3>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Core Services</h3>
            <div className="space-y-4">
              <ul className="list-disc list-inside space-y-2">
                <li className="text-gray-700">Custom Software & System Development</li>
                <li className="text-gray-700">Website & Mobile Application Development</li>
                <li className="text-gray-700">Property & Business Management Systems</li>
                <li className="text-gray-700">IT Support & Maintenance</li>
                <li className="text-gray-700">Cloud & Hosting Solutions</li>
                <li className="text-gray-700">AI-Integrated Workflows & Automation</li>
                <li className="text-gray-700">Data Analytics & System Integration</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
