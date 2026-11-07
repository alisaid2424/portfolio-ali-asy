import { motion } from "motion/react"
import { ArrowRight, Link2 } from "lucide-react"
import type { Project } from "@/types/project"

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <motion.article
      className="card-style flex flex-col"
      initial={{
        scale: 0,
        opacity: 0,
      }}
      animate={{
        scale: 1,
        opacity: 1,
      }}
      exit={{
        scale: 0,
        opacity: 0,
      }}
      transition={{
        duration: 0.3,
        ease: "easeOut",
      }}
      whileHover={{
        scale: 1.03,
        transition: {
          duration: 0.2,
          ease: "easeOut",
        },
      }}
    >
      <img
        src={project.imgPath}
        alt={`${project.projectTitle} project preview`}
        loading="lazy"
        decoding="async"
        className="h-44 w-full object-cover"
      />

      <div className="box flex flex-1 flex-col px-2 py-4">
        <h2 className="title font-bold text-portfolio-title capitalize">
          {project.projectTitle}
        </h2>

        <p className="sub-title mt-2 mb-3 text-sm text-portfolio-subtitle">
          {project.description}
        </p>

        <div className="mt-auto flex items-center justify-between text-base text-portfolio-subtitle">
          <div className="flex items-center gap-5">
            <a
              href={project.LinkProject}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.projectTitle} project`}
              className="transition-all duration-300 hover:scale-105 hover:text-portfolio-icon-hover"
            >
              <Link2 size={17} strokeWidth={1.8} aria-hidden="true" />
            </a>

            <a
              href={project.LinkGithub}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.projectTitle} source code`}
              className="transition-all duration-300 hover:scale-105 hover:text-portfolio-icon-hover"
            >
              <svg
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2.17c-3.2.7-3.87-1.35-3.87-1.35-.53-1.34-1.28-1.7-1.28-1.7-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.8 0c2.21-1.49 3.18-1.18 3.18-1.18.63 1.59.23 2.77.11 3.06.74.81 1.19 1.84 1.19 3.1 0 4.42-2.69 5.4-5.25 5.68.41.36.78 1.07.78 2.16v3.2c0 .31.21.67.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
              </svg>
            </a>
          </div>

          <a
            href={project.LinkProject}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.projectTitle}`}
            className="flex items-center gap-1 text-sm text-portfolio-blue transition-all duration-300 hover:font-medium"
          >
            more
            <ArrowRight size={16} strokeWidth={1.8} aria-hidden="true" />
          </a>
        </div>
      </div>
    </motion.article>
  )
}

export default ProjectCard
