export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-20 bg-black/20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Kamal Poshala. All rights reserved.
        </p>
        <p className="text-sm text-gray-600">
          Built with Next.js 16, Tailwind 4 & Framer Motion
        </p>
      </div>
    </footer>
  );
}
