export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-900 text-slate-300 h-12 flex items-center justify-center">
      <p className="text-xs sm:text-sm">
        © {currentYear} DKMG. All rights reserved.
      </p>
    </footer>
  );
}
