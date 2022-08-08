import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import JobExperience from "./pages/JobExperience";
import Projects from "./pages/Projects";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<About />} />
      <Route path="/carreira" element={<JobExperience />} />
      <Route path="/projetos" element={<Projects />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
