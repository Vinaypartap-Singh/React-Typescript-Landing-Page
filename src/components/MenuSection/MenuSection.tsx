import Button from "../../utils/Button";
import "./modules.menuSection.css";

type MenuListProps = {
  title: string;
  items: string;
};

export default function MenuSection() {
  const menuList: MenuListProps[] = [
    {
      title: "Shawarma Wraps",
      items: "Chicken, Beef, Souvlaki, Falafel",
    },
    {
      title: "Shawarma Plates",
      items: "Chicken, Beef, Souvlaki, Falafel",
    },
    {
      title: "On Fries",
      items: "Chicken, Beef, Souvlaki, Falafel",
    },
    {
      title: "On Poutine",
      items: "Chicken, Beef, Souvlaki, Falafel",
    },
  ];
  return (
    <div className="main_ms_container">
      <div className="bg_content">
        <div className="bg_overlay"></div>
        <h1 className="ms_heading">Explore Our Menu</h1>
        <h3>Taste the Tradition, Feel the Flavors at Shawarma West</h3>
        <Button title="Order Now" fontWeight={500} zIndex={10} />
      </div>
      <div className="ms_content">
        <div className="menulist">
          {menuList.map(({ title, items }, index) => {
            return (
              <div key={index} className="ms_card">
                <h4>{title}</h4>
                <p>{items}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
