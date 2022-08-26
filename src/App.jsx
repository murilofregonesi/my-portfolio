import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import JobExperience from "./pages/JobExperience";
import Projects from "./pages/Projects";
import PageNotFound from "./pages/PageNotFound";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LanguageProvider from "./contexts/LanguageProvider";

function App() {
  return (
    <LanguageProvider>
      <Header />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/carreira" element={<JobExperience />} />
        <Route path="/projetos" element={<Projects />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </LanguageProvider>
  );
}

export default App;
