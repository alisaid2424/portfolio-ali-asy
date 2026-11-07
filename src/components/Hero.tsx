import { motion } from "motion/react"
import Lottie from "lottie-react"
import devAnimation from "../animation/dev.json"
import { SocialIcon } from "./SocialIcon"

const socialLinks = [
  { name: "twitter", label: "Twitter", href: "https://twitter.com" },
  { name: "instagram", label: "Instagram", href: "https://instagram.com" },
  { name: "github", label: "GitHub", href: "https://github.com/alisaid2424" },
  {
    name: "linkedin",
    label: "LinkedIn",
    href: "https://linkedin.com/in/ali-asy-579980256",
  },
]

const Hero = () => {
  return (
    <section
      id="about"
      className="flex min-h-[calc(100vh-68px)] items-center justify-between"
    >
      <div className="section-left text-center sm:text-left lg:ps-5">
        <div className="parent-avatar flex min-h-24 items-end justify-center gap-2 sm:justify-start">
          <motion.img
            initial={{ scale: 0 }}
            animate={{ scale: 1.1 }}
            transition={{
              damping: 6,
              type: "spring",
              stiffness: 100,
            }}
            src="/images/img-dev-full.jpeg"
            alt="Ali Asy"
            className="h-24 w-24 rounded-full border-2 border-yellow-500 p-0.5 shadow-inner shadow-gray-300"
          />
          <div
            className="icon-verified text-lg text-portfolio-blue"
            aria-hidden="true"
          />
        </div>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="my-6 max-w-md text-base leading-8 text-portfolio-title sm:text-2xl sm:leading-12 sm:font-bold"
        >
          Building High-Performance Web Apps from UI to Backend Integrations
        </motion.h1>

        <p className="mb-8 max-w-5xl text-sm leading-7 text-portfolio-subtitle">
          Frontend Developer specializing in React.js & Next.js with strong
          full-stack skills. Developer of production-ready platforms like
          LuxeDrive, seamlessly integrating modern UI (Tailwind, Radix, Motion)
          with robust backend services using Prisma, PostgreSQL, Stripe,
          Cloudinary, and Resend.
        </p>

        <div className="flex items-center justify-center gap-6 text-portfolio-subtitle sm:justify-start">
          {socialLinks.map((social) => (
            <SocialIcon key={social.name} {...social} />
          ))}
        </div>
      </div>

      <div className="section-right hidden w-full translate-x-24 translate-y-10 lg:block xl:translate-x-36">
        <Lottie animationData={devAnimation} aria-hidden="true" />
      </div>
    </section>
  )
}

export default Hero
