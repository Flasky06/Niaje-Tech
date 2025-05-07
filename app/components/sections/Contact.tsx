import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-16 bg-gradient-to-r from-blue-50 to-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-900 to-blue-700">
            Contact Us
          </h2>
          <p className="text-lg text-gray-900 max-w-2xl mx-auto">
            Ready to start your digital transformation? We're here to help.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-blue-900 mb-3">Get in Touch</h3>
            <div className="space-y-3">
              <div className="flex items-center bg-gradient-to-r from-blue-50 to-blue-100 p-3 rounded-lg">
                <div className="flex-shrink-0">
                  <Mail className="h-5 w-5 text-blue-500" />
                </div>
                <div className="ml-3">
                  <p className="text-sm text-blue-900">Email</p>
                  <p className="text-sm text-blue-500">techniaje@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center bg-gradient-to-r from-blue-50 to-blue-100 p-3 rounded-lg">
                <div className="flex-shrink-0">
                  <Phone className="h-5 w-5 text-blue-500" />
                </div>
                <div className="ml-3">
                  <p className="text-sm text-blue-900">Phone</p>
                  <p className="text-sm text-blue-500">+254 748 388 173</p>
                </div>
              </div>
              <div className="flex items-center bg-gradient-to-r from-blue-50 to-blue-100 p-3 rounded-lg">
                <div className="flex-shrink-0">
                  <MapPin className="h-5 w-5 text-blue-500" />
                </div>
                <div className="ml-3">
                  <p className="text-sm text-blue-900">Location</p>
                  <p className="text-sm text-blue-500">Nairobi, Kenya</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white/95 p-6 rounded-lg shadow-md">
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-900 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                  className="w-full px-3 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="w-full px-3 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-900 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  placeholder="How can we help you?"
                  rows={3}
                  className="w-full px-3 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 rounded-md font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 group"
              >
                Send Message
                <svg
                  className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
