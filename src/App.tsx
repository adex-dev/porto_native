import { Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import MainLayout from "./layouts/MainLayout";
import Home from "./screen/Home.tsx";
import CaseStudies from "./screen/CaseStudies.tsx";
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
            {/* <Route path="/about" element={<About />} /> */}
          </Route>
        </Routes>
    </Suspense>
  );
}

export default App;
