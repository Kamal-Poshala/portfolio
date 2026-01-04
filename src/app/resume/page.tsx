export default function ResumePage() {
  return (
    <section className="text-center">
      <h1 className="text-3xl font-bold mb-8">
        Resume
      </h1>

      <div className="max-w-4xl mx-auto bg-white border rounded-lg overflow-hidden">
        <iframe
          src="/resume.pdf"
          className="w-full h-[500px] sm:h-[800px]"
        />
      </div>

      <a
        href="/resume.pdf"
        download
        className="inline-block mt-6 px-6 py-2 border rounded-md text-sm"
      >
        Download PDF
      </a>
    </section>
  );
}
