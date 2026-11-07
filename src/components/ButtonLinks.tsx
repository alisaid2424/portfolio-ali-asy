import type { ReactNode } from "react"
import { Button } from "@/components/ui/button"

type ButtonLinksProps = {
  children: ReactNode
  currentActive: string
  handleOnclick: (category: string) => void
  btncategory: string
}

const ButtonLinks = ({
  children,
  currentActive,
  handleOnclick,
  btncategory,
}: ButtonLinksProps) => {
  const isActive = currentActive === btncategory

  return (
    <Button
      type="button"
      variant="portfolio"
      active={isActive}
      onClick={() => handleOnclick(btncategory)}
    >
      {children}
    </Button>
  )
}

export default ButtonLinks
