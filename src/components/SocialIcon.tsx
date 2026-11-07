type SocialIconProps = {
  name: string
  label: string
  href: string
}

export const SocialIcon = ({ name, label, href }: SocialIconProps) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-portfolio-subtitle transition-all duration-300 hover:scale-110 hover:text-portfolio-icon-hover"
    aria-label={label}
  >
    <span
      className="block size-5 bg-current"
      style={{
        mask: `url("/icons/${name}.svg") no-repeat center / contain`,
        WebkitMask: `url("/icons/${name}.svg") no-repeat center / contain`,
      }}
    />
  </a>
)
