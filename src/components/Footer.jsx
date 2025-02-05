const Footer = () => {
  return (
    <footer className="flex flex-col items-center gap-8 pb-7 md:flex-row md:justify-between">
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

      <p className="text-center text-[#71717A] sm:text-end">
        © {new Date().getFullYear()} Spencer Sharp. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
