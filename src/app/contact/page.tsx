export default function ContactPage() {
  return (
    <section>
      <h1 className="text-3xl font-bold mb-6">Contact</h1>

      <p className="mb-6 text-gray-700 max-w-2xl">
        I am open to full-time and internship opportunities in full-stack,
        backend, and systems engineering roles. Feel free to reach out through
        any of the channels below.
      </p>

      <ul className="space-y-4">
        <li>
          <strong>Email:</strong>{" "}
          <a
            href="mailto:kamalposhalap@gmail.com"
            className="text-blue-600 underline"
          >
            kamalposhalap@gmail.com
          </a>
        </li>
        <li>
          <strong>GitHub:</strong>{" "}
          <a
            href="https://github.com/Kamal-Poshala"
            target="_blank"
            className="text-blue-600 underline"
          >
            github.com/Kamal-Poshala
          </a>
        </li>
        <li>
          <strong>LinkedIn:</strong>{" "}
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            className="text-blue-600 underline"
          >
            linkedin.com
          </a>
        </li>
      </ul>
    </section>
  );
}
