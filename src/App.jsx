import { Route, Routes } from "react-router-dom";
import SiteLayout from "./layouts/SiteLayout.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import FacultyGuide from "./pages/FacultyGuide.jsx";
import StudentGuide from "./pages/StudentGuide.jsx";
import VideoTutorials from "./pages/VideoTutorials.jsx";
import InstallationGuide from "./pages/InstallationGuide.jsx";
import FAQ from "./pages/FAQ.jsx";

export default function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route index element={<Home />} />
        <Route path="about-seap" element={<About />} />
        <Route path="faculty-guide" element={<FacultyGuide />} />
        <Route path="student-guide" element={<StudentGuide />} />
        <Route path="video-tutorials" element={<VideoTutorials />} />
        <Route path="installation-guide" element={<InstallationGuide />} />
        <Route path="faq" element={<FAQ />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
}
