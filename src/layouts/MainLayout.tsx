import { Outlet } from "react-router-dom";
import Footer from "../screen/Footer.tsx";
import Headers from "../screen/Headers.tsx";
export default function MainLayout() {
  return (
    <div className="boxmain">
      <Headers />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
