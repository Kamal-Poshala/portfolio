export default function Home() {
  return (
    <section>
      <h1 className="text-4xl font-bold mb-4">
        Full-Stack Software Developer
      </h1>

      <p className="text-lg mb-6">
        Backend & Distributed Systems · Applied Machine Learning
      </p>

      <p className="max-w-3xl text-gray-700">
        Master’s student in Computer Science with hands-on experience building
        scalable full-stack applications, backend workflows, and distributed
        systems. Strong focus on API design, workflow automation, performance
        modeling, and data-driven systems.
      </p>

      <div className="mt-8 space-x-4">
        <a href="/projects" className="px-5 py-2 bg-black text-white rounded">
          View Projects
        </a>
        <a
          href="https://github.com/Kamal-Poshala"
          target="_blank"
          className="px-5 py-2 border rounded"
        >
          GitHub
        </a>
        <a href="/resume" className="px-5 py-2 border rounded">
          Resume
        </a>
      </div>
    </section>
  );
}
