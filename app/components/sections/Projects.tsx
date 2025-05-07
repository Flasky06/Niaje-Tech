import Image from "next/image";

const projects = [
  {
    name: "GTC Website",
    client: "GTC",
    image: "/images/gtc-mall.png",
    link: "https://gtc.co.ke/",
    description:
      "A premium corporate website for GTC Nairobi – Kenya's first HOPSCA development. Features responsive layout, bilingual content, and intuitive property browsing.",
  },
  {
    name: "PowerPro",
    client: "PowerPro",
    image: "/images/powerpro.png",
    link: "https://www.powerpro.app/",
    description:
      "An elite platform for powerlifting athletes. Features training program management, progress tracking, and community engagement.",
  },
  {
    name: "Teamhouse",
    client: "Teamhouse",
    image: "/images/teamhouse.png",
    link: "https://teamhouse.co",
    description:
      "AI-powered workspace platform enabling teams to integrate AI assistants, manage workflows, and automate processes.",
  },
  {
    name: "Soffabulous",
    client: "Soffabulous Beauty",
    image: "/images/soffabulaus.png",
    link: "https://soffabulaus.co.ke/",
    description:
      "Full-featured e-commerce site for beauty products with cart integration and vendor backend access.",
  },
  {
    name: "Steadfast Academy",
    client: "Steadfast Christian Academy",
    image: "/images/steadfast.png",
    link: "https://steadfastacademy.co.ke/",
    description:
      "Modern school website with programs, admissions, and news sections for a faith-based educational institution.",
  },
  {
    name: "Empower Rising Resilience",
    client: "Empower Rising Resilience",
    image: "/images/empowerisingresilience.png",
    link: "https://empowerisingresilience.org/",
    description:
      "Community development website featuring programs, youth empowerment initiatives, and charity projects.",
  },
  {
    name: "Hyperwave",
    client: "Hyperwave Technologies",
    image: "/images/hyperwave.png",
    link: "https://www.hyperwave.co.ke/",
    description:
      "Portfolio and landing page for a digital innovation firm. Features interactive visuals, project case studies, and service-based navigation.",
  },
  {
    name: "My Great Nairobi",
    client: "GTC",
    image: "/images/mygreatnairobi.jpg",
    link: "https://www.mygreatnairobi.co.ke/",
    description:
      "Campaign microsite for the GTC Photogallery Experience. Integrated blog, booking system, and high-performance layout.",
  },
];

export default function Projects() {
  return (
    <section className="bg-gradient-to-b from-blue-900 to-blue-800 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
            Our Projects Portfolio
          </h2>
          <p className="text-base text-gray-900 max-w-2xl mx-auto">
            Explore our diverse portfolio of digital solutions across various industries
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-200">
              <div className="relative h-40">
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent" />
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-3 left-3">
                  <h3 className="text-lg font-bold text-white">{project.name}</h3>
                </div>
              </div>
              <div className="p-4">
                <p className="text-sm text-gray-900 mb-2">Client: {project.client}</p>
                <p className="text-sm text-gray-900 mb-4">{project.description}</p>
                <div className="flex justify-between items-center">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-blue-300 transition-colors flex items-center text-sm"
                  >
                    View Project
                    <svg
                      className="ml-1 w-3 h-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                  <div className="flex items-center space-x-1">
                    <span className="text-white">•</span>
                    <span className="text-sm text-gray-900">Live Demo</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
