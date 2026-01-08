import brand from "../assets/logo_akmad.svg";
import { Navigation } from "../component/Navigation.tsx";
export default function Headers() {
  return (
    <header>
      <img src={brand} alt="logo" className="logosvg" />
      <div className="headerboxs">
        <h1 className="brands">
          Naulian Hamsyani
        </h1>
        <Navigation/>
      </div>
    </header>
  );
}
