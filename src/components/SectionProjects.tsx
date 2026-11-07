import { useState } from "react"
import { AnimatePresence } from "motion/react"
import ButtonLinks from "./ButtonLinks"
import Pagination from "./Pagination"
import ProjectCard from "./ProjectCard"
import { dataCard } from "../data/dataCard"
import { dataBtnList } from "../data/dataBtnList"
import type { Category, Project } from "@/types/project"
import emptyAnimation from "../animation/empty.json"
import Lottie from "lottie-react"

const SectionProjects = () => {
  const [showData, setShowData] = useState<Project[]>(dataCard)
  const [currentActive, setCurrentActive] = useState("all")
  const [page, setPage] = useState(1)

  const itemsPerPage = 6

  const startIndex = (page - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage

  const currentData = showData.slice(startIndex, endIndex)

  const handleOnClick = (category: string) => {
    setCurrentActive(category)
    setPage(1)

    if (category === "all") {
      setShowData(dataCard)
      return
    }

    const filteredData = dataCard.filter((project: Project) =>
      project.category.includes(category)
    )

    setShowData(filteredData)
  }

  return (
    <main
      id="projects"
      aria-labelledby="projects-title"
      className="flex flex-col items-center gap-12 sm:items-start sm:gap-5 md:flex-row"
    >
      <section
        aria-label="Project categories"
        className="flex flex-row flex-wrap justify-center gap-3 md:flex-col md:justify-normal lg:ps-5"
      >
        {dataBtnList.map((item: Category) => (
          <ButtonLinks
            key={item.pathLink}
            currentActive={currentActive}
            handleOnclick={handleOnClick}
            btncategory={item.pathLink}
          >
            {item.name}
          </ButtonLinks>
        ))}
      </section>

      {currentData.length ? (
        <div className="flex flex-col">
          <section className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {currentData.map((project) => (
                <ProjectCard key={project.projectTitle} project={project} />
              ))}
            </AnimatePresence>
          </section>

          <Pagination
            itemsPerPage={itemsPerPage}
            page={page}
            setPage={setPage}
            data={showData}
          />
        </div>
      ) : (
        <div className="mx-auto flex w-full max-w-xs flex-col items-center justify-center">
          <Lottie style={{ width: 300 }} animationData={emptyAnimation} />
          <h3 className="mt-5 text-lg font-medium text-muted-foreground">
            No projects found.
          </h3>
        </div>
      )}
    </main>
  )
}

export default SectionProjects
