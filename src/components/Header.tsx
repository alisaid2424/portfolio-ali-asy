import { useState } from "react"
import { Menu, Moon, Sun, X } from "lucide-react"
import { useTheme } from "@/components/theme-provider"

const navItems = [
  { label: "About", href: "#about" },
  { label: "Articles", href: "#projects" },
  { label: "Projects", href: "#projects" },
  { label: "Speaking", href: "#contact" },
  { label: "Contact", href: "#contact" },
]

const Header = () => {
  const [showModal, setShowModal] = useState(false)
  const { theme, setTheme } = useTheme()

  const handleThemeToggle = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  const closeMenu = () => {
    setShowModal(false)
  }

  return (
    <header className="flex items-center justify-between pt-5 sm:px-9">
      <button
        type="button"
        onClick={() => setShowModal(true)}
        className="group btn-nav cursor-pointer md:hidden"
        aria-label="Open navigation menu"
        aria-expanded={showModal}
      >
        <Menu
          className="size-5 text-yellow-500 transition-colors group-hover:text-portfolio-blue"
          aria-hidden="true"
        />
      </button>

      <div />
      <nav
        className="hidden rounded-full bg-portfolio-header px-6 py-3 shadow-sm shadow-gray-500/50 md:block"
        aria-label="Main navigation"
      >
        <ul className="flex gap-10">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="nav-link transition-colors hover:text-portfolio-blue"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <button
        type="button"
        className="btn-nav group cursor-pointer"
        onClick={handleThemeToggle}
        aria-label={
          theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
        }
      >
        {theme === "dark" ? (
          <Sun
            className="size-5 text-yellow-500 transition-transform group-hover:rotate-45 group-hover:text-portfolio-blue"
            aria-hidden="true"
          />
        ) : (
          <Moon
            className="size-5 text-yellow-500 transition-transform group-hover:rotate-14 group-hover:text-portfolio-blue"
            aria-hidden="true"
          />
        )}
      </button>

      {showModal && (
        <div
          className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm transition-opacity md:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
          onClick={closeMenu}
        >
          <nav
            className="mx-auto mt-8 flex w-[85%] animate-in flex-col gap-3 rounded-2xl bg-portfolio-secondary px-6 py-5 shadow-xl duration-200 zoom-in-95 fade-in"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex justify-end">
              <button
                type="button"
                className="cursor-pointer p-1 text-portfolio-subtitle transition-all duration-300 hover:rotate-180 hover:text-red-600"
                onClick={closeMenu}
                aria-label="Close navigation menu"
              >
                <X className="size-5" aria-hidden="true" />
              </button>
            </div>

            <div className="flex flex-col gap-4">
              {navItems.map((item, index) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={`nav-link pb-3 text-base ${
                    index !== navItems.length - 1
                      ? "border-b border-portfolio-border"
                      : ""
                  }`}
                  onClick={closeMenu}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header
