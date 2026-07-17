import Hero from "@/components/home/Hero";
import { projects } from "@/lib/projects";
import ProjectList from "@/components/projects/ProjectList";
import ContactForm from "@/components/contact/ContactForm";

export default function Home() {
  return (
    <div className="min-h-screen bg-pink-50/30 text-slate-800 selection:bg-pink-300/50">
      <main className="max-w-5xl mx-auto px-6 py-12 flex flex-col gap-20">
        <Hero />

        <section id="projects" className="scroll-mt-20">
          <div className="flex flex-col items-center mb-10">
            <h2 className="text-3xl font-bold text-slate-800">
              Proyek Saya
            </h2>
            <div className="h-1.5 w-16 bg-pink-400 rounded mt-3"></div>
          </div>
          <ProjectList projects={projects} />
        </section>

        <section id="contact" className="scroll-mt-20">
          <div className="flex flex-col items-center mb-10">
            <h2 className="text-3xl font-bold text-slate-800">
              Hubungi Saya
            </h2>
            <div className="h-1.5 w-16 bg-pink-400 rounded mt-3"></div>
          </div>
          <div className="flex justify-center">
            <ContactForm />
          </div>
        </section>
      </main>
    </div>
  );
}