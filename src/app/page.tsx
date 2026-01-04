export default function Home() {
  return (
    <section className="text-center">
      <h1 className="text-3xl sm:text-4xl font-bold mb-4">
        Full-Stack Software Developer
      </h1>

      <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8">
        Backend & Distributed Systems · Applied Machine Learning
      </p>

      <p className="max-w-3xl mx-auto text-sm sm:text-base text-gray-700 leading-relaxed">
        Master’s student in Computer Science with hands-on experience building
        scalable full-stack applications, backend workflows, and distributed
        systems. Strong focus on API design, workflow automation, performance
        modeling, and data-driven systems.
      </p>

      <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
        <a
          href="/projects"
          className="px-6 py-2 bg-black text-white rounded-md text-sm"
        >
          View Projects
        </a>
        <a
          href="https://github.com/Kamal-Poshala"
          target="_blank"
          className="px-6 py-2 border rounded-md text-sm"
        >
          GitHub
        </a>
        <a
          href="/resume"
          className="px-6 py-2 border rounded-md text-sm"
        >
          Resume
        </a>
      </div>
    </section>
  );
}
