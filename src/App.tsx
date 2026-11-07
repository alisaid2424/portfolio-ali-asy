import Contact from "./components/Contact"
import Divider from "./components/Divider"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Hero from "./components/Hero"
import ScrollToTop from "./components/ScrollToTop"
import SectionProjects from "./components/SectionProjects"

const App = () => {
  return (
    <main className="container mx-auto border-x-2 border-portfolio-border bg-portfolio-secondary px-8 lg:max-w-6xl">
      <Header />

      <Hero />

      <Divider />

      <SectionProjects />

      <Divider />

      <Contact />

      <Divider />

      <Footer />

      <ScrollToTop />
    </main>
  )
}

export default App
