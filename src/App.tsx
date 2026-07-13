import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import CursorGlow from "./components/Navbar/CursorGlow";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Experience from "./components/Experience/Experience";
import Certifications from "./components/Certifications/Certifications";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import CTA from "./components/CTA/CTA";
import ScrollProgress from "./components/UI/ScrollProgress";
import PageLoader from "./components/UI/PageLoader";
import GitHubStats from "./components/GitHub/GitHubStats";
// import Achievements from "./components/Achievements/Achievements";


function App() {
  return (
    <>
    <PageLoader/>
    <ScrollProgress/>
      <CursorGlow />
      <Navbar />

      <main>
        <Hero />
        {/* <Achievements/> */}
        <About />
        <Skills/>
        <Projects/>
        <Experience/>
        <Certifications/>
        <GitHubStats/>
        <Contact/>
        {/* <CTA/> */}
        <Footer/>
      </main>
    </>
  );
}

export default App;