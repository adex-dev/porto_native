import { useState,useEffect } from "react";
import Lottie from "lottie-react";
import loadingAnimation from "../assets/loading.json";
export default function LoadingLayout() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
const [darkMode] = useState(() => {
  const saved = localStorage.getItem("theme");
  if (saved) return saved === "dark";
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
});
   useEffect(() => {
    const html = document.documentElement;
    html.classList.toggle("dark", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);
    const style = {
        height: 300,
    };
    return (
        <div className="boxloading">
            <div className="contentloading">
                <Lottie aria-aria-labelledby="Loading Porto" style={style} animationData={loadingAnimation} loop={true} />
            </div>
        </div>
    )
}