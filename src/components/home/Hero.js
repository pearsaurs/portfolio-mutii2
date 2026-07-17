import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Code, User, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section className="text-center pt-24 pb-16 px-4">
      <div className="flex justify-center mb-6">
        <div className="w-24 h-24 rounded-full bg-pink-100 border-4 border-white shadow-sm flex items-center justify-center text-3xl font-bold text-pink-500 ring-4 ring-pink-50/50">
          MF
        </div>
      </div>
      <h1 className="text-4xl md:text-6xl font-bold mb-4 text-slate-800">
        <span className="text-pink-500">Mutia Firda</span>
      </h1>

      <p className="mt-4 text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
        Pengembang Frontend & Antusias UI/UX.
      </p>

      <div className="mt-8 flex justify-center gap-4">
        <Link href="#contact" passHref>
          <Button size="lg" className="bg-pink-500 hover:bg-pink-600 text-white rounded-full px-8 shadow-sm hover:shadow-md transition-all">
            Hubungi saya
          </Button>
        </Link>

        <Link href="#projects" passHref>
          <Button variant="outline" size="lg" className="border-pink-200 text-pink-600 hover:bg-pink-50 hover:text-pink-700 hover:border-pink-300 rounded-full px-8 transition-all">
            Karya Saya
          </Button>
        </Link>
      </div>

      <div className="mt-10 flex justify-center gap-6 text-slate-400">
        <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-pink-500 transition-colors" title="GitHub">
          <Code className="w-6 h-6" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-pink-500 transition-colors" title="LinkedIn">
          <User className="w-6 h-6" />
        </a>
        <a href="mailto:hello@example.com" className="hover:text-pink-500 transition-colors" title="Email">
          <Mail className="w-6 h-6" />
        </a>
      </div>
    </section>
  );
}