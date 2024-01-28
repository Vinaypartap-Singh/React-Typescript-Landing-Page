import Button from "../../utils/Button";
import "./modules.hero.css";

type propsType = {
  title?: string;
  subtitle?: string;
};

export default function HeroSection({ title, subtitle }: propsType) {
  return (
    <div className="mainContainer">
      <div className="bgoverlay"></div>
      <div className="contentContainer">
        <div className="headingMain">
          <h1>{title ? title : "Award-winning Shawarma Place in Toronto"}</h1>
          <h4>
            {subtitle
              ? subtitle
              : "Taste the Tradition, Feel the Flavors at Shawarma West"}
          </h4>
        </div>

        <Button title="ORDER NOW" fontWeight={500} />
      </div>
    </div>
  );
}
