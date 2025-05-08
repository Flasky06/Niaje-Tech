export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-[60vh] flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 opacity-90 z-0" />
      
      {/* Pattern overlay */}
      <div className="absolute inset-0 bg-[url('/patterns/dot-pattern.svg')] opacity-10 z-10" />
      
      <div className="relative z-20 max-w-6xl mx-auto px-4 text-center">
        <div className="space-y-8">
          {/* Tagline */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
              TechNiaje
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Building innovative digital solutions for businesses across Africa
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-4 bg-white/5 rounded-lg backdrop-blur-sm">
              <h3 className="text-3xl font-bold text-white">100+</h3>
              <p className="text-white/80">Projects Completed</p>
            </div>
            <div className="p-4 bg-white/5 rounded-lg backdrop-blur-sm">
              <h3 className="text-3xl font-bold text-white">50+</h3>
              <p className="text-white/80">Happy Clients</p>
            </div>
            <div className="p-4 bg-white/5 rounded-lg backdrop-blur-sm">
              <h3 className="text-3xl font-bold text-white">10+</h3>
              <p className="text-white/80">Years Experience</p>
            </div>
            <div className="p-4 bg-white/5 rounded-lg backdrop-blur-sm">
              <h3 className="text-3xl font-bold text-white">5+</h3>
              <p className="text-white/80">Countries Served</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-full font-semibold hover:bg-blue-50 transition-colors group"
            >
              Get Started
              <svg
                className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
            <a
              href="#projects"
              className="inline-flex items-center px-8 py-4 bg-white/10 text-white rounded-full font-semibold hover:bg-white/20 transition-colors group"
            >
              View Projects
              <svg
                className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -left-20 w-48 h-48 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -right-20 w-48 h-48 bg-white/5 rounded-full blur-3xl" />
      </div>
    </section>
  );
}
