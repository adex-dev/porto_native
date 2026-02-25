import { Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import MainLayout from "./layouts/MainLayout";
import Home from "./screen/Home.tsx";
import CaseStudies from "./screen/CaseStudies.tsx";
import Projects from "./screen/Projects.tsx";
import CaseStudiesDetail from "./screen/CaseStudiesDetail.tsx";
import ProjectsDetail from "./screen/ProjectsDetail.tsx";
import ExperienceScreen from "./screen/ExperienceScreen.tsx";
import AboutScreen from "./screen/About.tsx";
import LoadingLayout from "./layouts/LoadingLayout";
function App() {
  // const [loading] = useState(true)
  // if (loading) {
  //   return 
  // }
  return (
    <Suspense fallback={<LoadingLayout/>}>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/studies" element={<CaseStudies />} />
            <Route path="/case-studies/:slug" element={<CaseStudiesDetail />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:slug" element={<ProjectsDetail />} />
            <Route path="/experience" element={<ExperienceScreen />} />
            <Route path="/about" element={<AboutScreen />} />
          </Route>
        </Routes>
    </Suspense>
  );
}

export default App;
