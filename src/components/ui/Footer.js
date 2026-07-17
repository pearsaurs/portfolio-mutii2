export default function Footer() {
  return (
    <footer className="bg-pink-100 text-center py-6 mt-12 text-sm text-pink-700">
      <p>© {new Date().getFullYear()} — Dibuat dengan Next.js & Tailwind CSS</p>
    </footer>
  );
}