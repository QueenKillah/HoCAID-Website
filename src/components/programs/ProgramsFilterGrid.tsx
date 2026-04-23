"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import ProjectCard from "@/components/shared/ProjectCard";
import { SAMPLE_PROJECTS, PILLARS } from "@/lib/constants";

const ALL = "all";

const statusOptions = [
  { value: ALL, label: "All" },
  { value: "active", label: "Active" },
  { value: "completed", label: "Completed" },
];

const pillarOptions = [
  { value: ALL, label: "All Pillars" },
  ...PILLARS.map((p) => ({ value: p.title, label: p.shortTitle })),
];

export default function ProgramsFilterGrid() {
  const [activePillar, setActivePillar] = useState(ALL);
  const [activeStatus, setActiveStatus] = useState(ALL);

  const filtered = SAMPLE_PROJECTS.filter((p) => {
    const pillarMatch = activePillar === ALL || p.pillar === activePillar;
    const statusMatch = activeStatus === ALL || p.status === activeStatus;
    return pillarMatch && statusMatch;
  });

  return (
    <div>
      {/* ── Filter bar ── */}
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        {/* Pillar filter */}
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by pillar">
          {pillarOptions.map((opt) => (
            <button
              key={opt.value}
              onClick={() => setActivePillar(opt.value)}
              className={cn(
                "rounded-full px-4 py-1.5 text-sm font-semibold transition-colors",
                activePillar === opt.value
                  ? "bg-navy text-white"
                  : "bg-grey/10 text-grey hover:bg-grey/20"
              )}
            >
              {opt.label}
            </button>
          ))}
        </div>

        {/* Status filter */}
        <div className="flex gap-2" role="group" aria-label="Filter by status">
          {statusOptions.map((opt) => (
            <button
              key={opt.value}
              onClick={() => setActiveStatus(opt.value)}
              className={cn(
                "rounded-full px-4 py-1.5 text-sm font-semibold transition-colors",
                activeStatus === opt.value
                  ? "bg-orange text-white"
                  : "bg-grey/10 text-grey hover:bg-grey/20"
              )}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      {/* ── Results count ── */}
      <p className="mb-6 text-sm text-grey">
        Showing{" "}
        <span className="font-semibold text-navy">{filtered.length}</span> of{" "}
        {SAMPLE_PROJECTS.length} projects
      </p>

      {/* ── Grid ── */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      ) : (
        <div className="rounded-2xl bg-cream py-16 text-center">
          <p className="text-base font-semibold text-navy">No projects match these filters.</p>
          <button
            onClick={() => { setActivePillar(ALL); setActiveStatus(ALL); }}
            className="mt-3 text-sm font-semibold text-orange hover:underline"
          >
            Clear filters
          </button>
        </div>
      )}
    </div>
  );
}
