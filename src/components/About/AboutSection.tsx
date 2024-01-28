import Button from "../../utils/Button";
import "./modules.aboutSection.css";

export default function AboutSection() {
  return (
    <div className="main_container_about">
      <div className="main_holder_about">
        <div className="content_container">
          <h3 className="main_hightlight">Best Shawarma in Toronto!</h3>
          <h2 className="main_heading">Who We Are</h2>
          <p className="about_para">
            At Shawarma West, we’re on a flavorful journey to bring the best of
            the Middle East to Toronto’s bustling Queen Street West. Our passion
            for shawarma goes beyond the pita – it’s a family tradition, a
            cultural love, and a commitment to serving mouthwatering, authentic
            shawarma that keeps our customers coming back for more.
          </p>
          <Button title="Order Now" fontWeight={500} />
        </div>
        <div className="img_container">
          <div className="img_1_container">
            <img
              className="img_1"
              src="https://shawarmawest.ca/wp-content/uploads/2023/11/Untitled-design-1-1.png"
            />
          </div>

          <div className="img_2_container">
            <img
              className="img_2"
              src="https://shawarmawest.ca/wp-content/uploads/2023/11/Untitled-design-2.png"
            />
            <img
              className="img_2"
              src="https://shawarmawest.ca/wp-content/uploads/2023/11/Untitled-design-3.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
