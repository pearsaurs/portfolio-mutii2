import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="text-center pt-24 pb-16 px-4">
      <h1 className="text-4xl md:text-6xl font-bold mb-4 text-slate-800">
        Saya <span className="text-pink-500">Mutia Firda</span>
      </h1>

      <p className="mt-4 text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
        Frontend Developer & UI/UX Enthusiast.
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
    </section>
  );
}