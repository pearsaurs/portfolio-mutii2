"use client";

import { useState, useMemo } from "react";
import ProjectCard from "./ProjectCard";

export default function ProjectList({ projects }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("Semua");

  const categories = ["Semua", ...new Set(projects.map((p) => p.category))];

  const filteredProjects = useMemo(() => {
    const q = query.trim().toLowerCase();
    return projects.filter((project) => {
      const matchesName = project.name.toLowerCase().includes(q);
      const matchesCategory = category === "Semua" || project.category === category;
      return matchesName && matchesCategory;
    });
  }, [projects, query, category]);

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row gap-4 mb-8 items-center justify-between">
        <div className="w-full max-w-md">
          <input
            type="text"
            placeholder="Cari proyek..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-white border border-pink-200 rounded-full py-2 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-pink-400 transition-colors shadow-sm text-slate-700 placeholder:text-pink-300"
          />
        </div>

        <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 hide-scrollbar w-full md:w-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`whitespace-nowrap px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                category === cat 
                  ? "bg-pink-500 text-white shadow-sm" 
                  : "bg-white text-pink-700 hover:bg-pink-50 border border-pink-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {filteredProjects.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-16 px-4 bg-slate-50 rounded-xl border border-slate-200">
          <div className="text-4xl mb-4">🔍</div>
          <h3 className="text-xl font-semibold text-slate-700 mb-2">o0ops Proyek tidak ditemukan</h3>
          <p className="text-slate-500 text-center">
            Coba sesuaikan pencarian atau filter untuk menemukan apa yang kamu cari.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              name={project.name}
              category={project.category}
              description={project.description}
            />
          ))}
        </div>
      )}
    </div>
  );
}