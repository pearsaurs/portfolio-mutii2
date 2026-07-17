import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export default function ProjectCard({ name, category, description }) {
  return (
    <Card className="bg-white border-pink-100 shadow-sm hover:shadow-md transition-all duration-300 rounded-2xl overflow-hidden hover:-translate-y-1">
      <CardHeader className="pb-3 bg-pink-50/50 border-b border-pink-100/50">
        <div className="flex justify-between items-start mb-1">
          <CardTitle className="text-lg font-bold text-slate-800">
            {name}
          </CardTitle>
        </div>
        <CardDescription>
          <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold bg-pink-100 text-pink-700">
            {category}
          </span>
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-4">
        <p className="text-slate-600 text-sm leading-relaxed">
          {description}
        </p>
      </CardContent>
    </Card>
  );
}