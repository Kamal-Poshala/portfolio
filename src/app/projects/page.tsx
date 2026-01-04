import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <section>
      <h1 className="text-3xl font-bold mb-8">Projects</h1>

      <div className="space-y-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="border rounded-lg p-6 hover:shadow-sm transition"
          >
            <h2 className="text-xl font-semibold">{project.title}</h2>
            <p className="text-sm text-gray-500 mb-2">
              {project.category}
            </p>
            <p className="mb-3">{project.description}</p>
            <p className="text-sm text-gray-600">
              <strong>Tech:</strong> {project.tech.join(", ")}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
