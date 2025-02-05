import { useForm, ValidationError } from '@formspree/react';
import Lottie from 'lottie-react';
import doneAnimation from '../animation/done.json';
import contactAnimation from '../animation/contact.json';

const Contact = () => {
  const [state, handleSubmit] = useForm('mbljoala');

  return (
    <section className="contact-us" id="Contact">
      <h2 className="title mb-4 text-center text-4xl font-bold text-title-light dark:text-title-dark">
        <span className="icon-envelope mr-4 text-subtitle-light dark:text-subtitle-dark"></span>
        Contact us
      </h2>
      <p className="sub-title mb-10 text-center leading-7 text-subtitle-light dark:text-subtitle-dark">
        Contact us for more information and Get notified when I publish
        something new.
      </p>

      <div className="flex items-center justify-around">
        <form onSubmit={handleSubmit} className="flex basis-full flex-col ">
          <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center">
            <label
              className="text-subtitle-light dark:text-subtitle-dark sm:basis-44"
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
              className="text-subtitle-light dark:text-subtitle-dark sm:basis-44"
            >
              Your message:
            </label>
            <textarea
              required
              name="message"
              id="message"
              className="input min-h-[9rem] resize-y"
            ></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>

          <button
            type="submit"
            disabled={state.submitting}
            className="btn-link mt-7 self-center  border border-[#3F3F46] py-3 text-base hover:scale-95 hover:dark:border-[#2DD4BF] sm:self-start"
          >
            {state.submitting ? 'Submitting...' : 'Submit'}
          </button>
          {state.succeeded && (
            <p className="mt-5 flex items-center text-lg text-subtitle-light dark:text-subtitle-dark ">
              <Lottie
                loop={false}
                style={{ height: 65 }}
                animationData={doneAnimation}
              />
              Your message has been sent successfully 👌
            </p>
          )}
        </form>
        <div className="animation hidden -translate-y-7 lg:block">
          <Lottie style={{ width: 400 }} animationData={contactAnimation} />
        </div>
      </div>
    </section>
  );
};
export default Contact;
