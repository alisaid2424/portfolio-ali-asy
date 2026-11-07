import { cn } from "@/lib/utils"
import { ChevronsLeft, ChevronsRight } from "lucide-react"
import ReactPaginate from "react-paginate"
import { buttonVariants } from "./ui/button"

type PaginationProps = {
  itemsPerPage: number
  setPage: React.Dispatch<React.SetStateAction<number>>
  page: number
  data: unknown[]
}

const Pagination = ({ itemsPerPage, setPage, page, data }: PaginationProps) => {
  const pageCount = Math.ceil(data.length / itemsPerPage)

  if (pageCount <= 1) {
    return null
  }

  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel={<ChevronsRight size={28} />}
      previousLabel={<ChevronsLeft size={28} />}
      onPageChange={(event) => setPage(event.selected + 1)}
      pageCount={pageCount}
      pageRangeDisplayed={3}
      marginPagesDisplayed={2}
      renderOnZeroPageCount={null}
      containerClassName="my-7 flex max-w-full items-center justify-center"
      pageLinkClassName={cn(
        buttonVariants({ variant: "portfolio", size: "icon-lg" }),
        "mx-1 h-8! w-8! rounded-full p-2 sm:mx-2"
      )}
      activeLinkClassName="border-portfolio-blue font-bold opacity-100"
      previousLinkClassName={`px-2 text-2xl font-light text-portfolio-blue transition-opacity sm:text-3xl ${
        page === 1
          ? "cursor-not-allowed opacity-40"
          : "cursor-pointer hover:opacity-70"
      }`}
      nextLinkClassName={`px-2 text-2xl font-light text-portfolio-blue transition-opacity sm:text-3xl ${
        page === pageCount
          ? "cursor-not-allowed opacity-40"
          : "cursor-pointer hover:opacity-70"
      }`}
      breakLinkClassName="px-2 text-portfolio-subtitle"
    />
  )
}

export default Pagination
