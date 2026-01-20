export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-100 bg-white/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <p className="text-sm text-gray-500 text-center">
          &copy; {currentYear} Scott Low
        </p>
      </div>
    </footer>
  );
}
