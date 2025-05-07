export default function Services() {
  const services = [
    {
      title: "Custom Software Development",
      description: "Tailored solutions for your unique business needs",
      icon: "💻"
    },
    {
      title: "Website Design & Development",
      description: "Modern, responsive websites that convert visitors to customers",
      icon: "🌐"
    },
    {
      title: "Mobile Application Development",
      description: "Native and cross-platform mobile apps for iOS and Android",
      icon: "📱"
    },
    {
      title: "Property Management Systems",
      description: "Streamlined solutions for real estate and property management",
      icon: "🏢"
    },
    {
      title: "Enterprise Systems (ERP/CRM)",
      description: "Integrated solutions for business process automation",
      icon: "📊"
    },
    {
      title: "AI-Powered Automation Tools",
      description: "Smart solutions that enhance efficiency and productivity",
      icon: "🤖"
    },
    {
      title: "Cloud Solutions & Hosting",
      description: "Scalable cloud infrastructure and hosting services",
      icon: "☁️"
    },
    {
      title: "IT Support & Maintenance",
      description: "24/7 technical support and system maintenance",
      icon: "🔧"
    },
    {
      title: "E-Commerce & Digital Payment Integration",
      description: "Secure payment processing and e-commerce solutions",
      icon: "💳"
    },
    {
      title: "Data Analytics & Reporting Systems",
      description: "Insights-driven decision making with advanced analytics",
      icon: "📊"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-r from-blue-50 to-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-900 to-blue-700">
            Our Services
          </h2>
          <p className="text-xl text-gray-900 max-w-3xl mx-auto">
            Comprehensive digital solutions to drive your business forward
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-blue-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:bg-white"
            >
              <div className="flex items-center mb-4">
                <span className="text-2xl text-blue-600 mr-2">{service.icon}</span>
                <h3 className="text-xl font-semibold text-blue-900 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
              </div>
              <p className="text-gray-900 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
