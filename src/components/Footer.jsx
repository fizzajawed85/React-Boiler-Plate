export default function Footer() {
  return (
    <footer className="bg-white shadow-inner mt-10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between text-sm text-gray-600">
        <p>© {new Date().getFullYear()} Designed & Built by <span className="font-semibold text-blue-600">Fizza Jawed</span>.</p>
        <div className="flex space-x-4 mt-2 sm:mt-0">
          <a href="#" className="hover:text-blue-600 transition">Privacy</a>
          <a href="#" className="hover:text-blue-600 transition">Terms</a>
          <a href="#" className="hover:text-blue-600 transition">Contact</a>
        </div>
      </div>
    </footer>
  );
}
