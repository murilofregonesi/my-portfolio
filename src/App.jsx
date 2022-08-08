import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import JobExperience from "./pages/JobExperience";
import Projects from "./pages/Projects";
import PageNotFound from "./pages/PageNotFound";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/carreira" element={<JobExperience />} />
        <Route path="/projetos" element={<Projects />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
