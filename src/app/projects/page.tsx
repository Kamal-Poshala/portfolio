import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <section>
      <h1 className="text-3xl font-bold mb-8 text-center">
        Projects
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white border rounded-lg p-6 hover:shadow-md transition"
          >
            <h2 className="text-xl font-semibold mb-1">
              {project.title}
            </h2>

            <p className="text-sm text-gray-500 mb-3">
              {project.category}
            </p>

            <p className="text-gray-700 mb-4">
              {project.description}
            </p>

            <p className="text-sm text-gray-600">
              <strong>Tech:</strong> {project.tech.join(", ")}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
