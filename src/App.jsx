import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Layout from "./components/Layout";

import Home from "./pages/Home";
import About from "./pages/About";
import Scope from "./pages/Scope";
import Project from "./pages/Project";
import Resources from "./pages/Resources";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Layout />}>

          {/* HOME */}
          <Route index element={<Home />} />

          {/* ABOUT */}
          <Route path="about" element={<About />} />

          {/* SCOPE */}
          <Route path="scope" element={<Scope />} />

          {/* PROJECTS */}
          <Route path="projects" element={<Project />} />

          {/* RESOURCES */}
          <Route path="resources" element={<Resources />} />

          {/* CONTACT */}
          <Route path="contact" element={<ContactPage />} />

        </Route>

      </Routes>

    </BrowserRouter>
  );
}

export default App;
