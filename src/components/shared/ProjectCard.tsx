import type { FC } from "react";
import Link from "next/link";
import type { Project } from "@/lib/types";

interface Props {
  project: Project;
}

const ProjectCard: FC<Props> = ({ project }) => {
  return (
    <article className="flex flex-col rounded-xl bg-white p-4 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md md:p-6">
      <span className="inline-block w-fit rounded-full bg-cream px-3 py-1 text-xs font-semibold uppercase tracking-wide text-navy">
        {project.pillar}
      </span>
      <h3 className="mt-3 font-display text-xl font-bold text-navy">
        {project.title}
      </h3>
      <p className="mt-2 flex-1 text-sm text-grey">{project.description}</p>
      <div className="mt-4 flex items-center justify-between text-xs text-grey">
        <span>{project.location}</span>
        <span
          className={
            project.status === "active" ? "text-green font-medium" : "text-grey"
          }
        >
          {project.status === "active" ? "Active" : "Completed"}
        </span>
      </div>
      <Link
        href={`/programs/${project.slug}`}
        className="mt-4 text-sm font-semibold text-orange hover:underline"
      >
        View project →
      </Link>
    </article>
  );
};

export default ProjectCard;
