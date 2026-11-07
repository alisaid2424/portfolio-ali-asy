import { useEffect, useState } from "react"
import { ArrowUp } from "lucide-react"
import { Button } from "./ui/button"

const ScrollToTop = () => {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(scrollY > 300)
    }

    addEventListener("scroll", handleScroll, { passive: true })

    return () => removeEventListener("scroll", handleScroll)
  }, [])

  const handleScrollToTop = () => {
    scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  if (!showScrollTop) {
    return null
  }

  return (
    <Button
      onClick={handleScrollToTop}
      title="Scroll to top"
      className="fixed right-2.5 bottom-8 z-50 flex size-10 items-center justify-center rounded-full bg-blue-500! text-white"
    >
      <ArrowUp className="size-5" aria-hidden="true" />
    </Button>
  )
}

export default ScrollToTop
