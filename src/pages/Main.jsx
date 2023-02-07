import Header from "../components/layout/Header";
import Skills from "../components/layout/Skills";
import AboutMe from "../components/layout/AboutMe";
import AboutDocs from "../components/layout/AboutDocs";
import Projects from "../components/layout/Projects";
import Contact from "../components/layout/Contact";

const Main = () => {
  return (
    <div>
      <Header />
      <Skills />
      <div className="background">
        <AboutMe />
        <AboutDocs />
        <Projects />
        <Contact />
      </div>
    </div>
  );
};

export default Main;
