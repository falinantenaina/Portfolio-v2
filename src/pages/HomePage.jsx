import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-dark text-white overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Projects onViewAll={() => setPage("projects")} />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
