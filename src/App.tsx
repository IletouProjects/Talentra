import { Route, Routes } from "react-router";
import MainLayout from "./layouts/MainLayout";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import ProjectDetails from "./pages/ProjectDetails";
import Projects from "./pages/Projects";
import Talents from "./pages/Talents";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="projects" element={<Projects />} />
        <Route path="projects/:id" element={<ProjectDetails />} />
        <Route path="talents" element={<Talents />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;
