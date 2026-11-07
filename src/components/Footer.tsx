const Footer = () => {
  return (
    <footer className="flex flex-col items-center gap-8 pb-7 md:flex-row md:justify-between">
      <nav aria-label="Footer navigation">
        <ul className="flex items-center gap-5">
          <li>
            <a href="#about" className="link-footer">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="link-footer">
              Projects
            </a>
          </li>

          <li>
            <a href="#speaking" className="link-footer">
              Speaking
            </a>
          </li>

          <li>
            <a href="#uses" className="link-footer">
              Uses
            </a>
          </li>
        </ul>
      </nav>
      <p className="text-center text-sm text-portfolio-subtitle sm:text-end">
        © {new Date().getFullYear()} Ali Asy. All rights reserved.
      </p>
    </footer>
  )
}

export default Footer
