export default function Footer() {
  return (
    <footer className="bg-white border-t mt-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Kamal Poshala. All rights reserved.
      </div>
    </footer>
  );
}
