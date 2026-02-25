import brand from "../assets/logo_akmad.svg";
import { Navigation } from "../component/Navigation.tsx";
import ButtonDarkmode from "../component/Buttondarkmode.tsx";

import { useEffect, useState } from "react";
export default function Headers() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("theme");
    if (saved) return saved === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    const html = document.documentElement;

    html.classList.toggle("dark", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const darkModeClick = () => {
    setDarkMode((prev) => !prev);
  };


  return (
    <header className="mainheader">
      <img src={brand} alt="logo" className="logosvg" onClick={() => (window.location.href = "/")} />
      <div className="headerboxs">
        <div className="logo">
          <h1 className="brands">Naulian Hamsyani</h1>
          <ButtonDarkmode
            title="Toggle dark mode"
            className="darkmode"
            onClick={darkModeClick}
          />
        </div>
        <Navigation />
      </div>
    </header>
  );
}
