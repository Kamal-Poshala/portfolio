export default function ResumePage() {
  return (
    <section>
      <h1 className="text-3xl font-bold mb-6">Resume</h1>

      <iframe
        src="/resume.pdf"
        className="w-full h-[800px] border"
      ></iframe>

      <a
        href="/resume.pdf"
        download
        className="inline-block mt-4 px-5 py-2 border rounded"
      >
        Download PDF
      </a>
    </section>
  );
}
