import { useForm, ValidationError } from "@formspree/react"
import { Mail } from "lucide-react"
import Lottie from "lottie-react"
import doneAnimation from "../animation/done.json"
import contactAnimation from "../animation/contact.json"
import { Button } from "./ui/button"

const Contact = () => {
  const [state, handleSubmit] = useForm("mbljoala")

  return (
    <section id="contact" className="contact-us">
      <header className="mb-10 text-center">
        <h2 className="mb-4 flex items-center justify-center text-4xl font-bold text-portfolio-title">
          <Mail
            className="mr-4 size-8 text-portfolio-subtitle"
            aria-hidden="true"
          />
          Contact us
        </h2>

        <p className="mx-auto max-w-md leading-7 text-portfolio-subtitle">
          Contact us for more information and get notified when I publish
          something new.
        </p>
      </header>

      <div className="flex items-center justify-around">
        <form
          onSubmit={handleSubmit}
          className="flex basis-full flex-col lg:basis-1/2"
        >
          <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center">
            <label
              className="text-portfolio-subtitle sm:basis-44"
              htmlFor="email"
            >
              Email Address:
            </label>
            <input
              autoComplete="off"
              required
              type="email"
              name="email"
              id="email"
              className="input"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>

          <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center">
            <label
              htmlFor="message"
              className="text-portfolio-subtitle sm:basis-44"
            >
              Your message:
            </label>
            <textarea
              required
              name="message"
              id="message"
              className="input min-h-36 resize-y"
            ></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>

          <Button
            variant="portfolio"
            type="submit"
            disabled={state.submitting}
            className="mt-7 self-center text-base sm:self-start"
          >
            {state.submitting ? "Submitting..." : "Submit"}
          </Button>

          {state.succeeded && (
            <p className="mt-5 flex items-center text-lg text-portfolio-subtitle">
              <Lottie
                loop={false}
                style={{ height: 65 }}
                animationData={doneAnimation}
              />
              Your message has been sent successfully 👌
            </p>
          )}
        </form>

        <div className="hidden -translate-y-7 lg:block" aria-hidden="true">
          <Lottie style={{ width: 400 }} animationData={contactAnimation} />
        </div>
      </div>
    </section>
  )
}

export default Contact
