import { useState } from "react";
import Button from "../../utils/Button";
import HamBurgerIcon from "../../utils/HamBurgerIcon";
import "./module.header.css";

type linkProps = {
  fontWeight: number | string;
};

type NavLinks = {
  title: string;
  url: string;
};

export default function Header({ fontWeight }: linkProps) {
  const [openNav, setOpenNav] = useState<boolean>(false);

  const navLink: NavLinks[] = [
    {
      title: "Home",
      url: "/",
    },
    {
      title: "Our Menu",
      url: "/",
    },
    {
      title: "Catering",
      url: "/",
    },
    {
      title: "Franchising",
      url: "/",
    },
    {
      title: "Contact Us",
      url: "/",
    },
  ];
  return (
    <div>
      <div className="header">
        <div className="brandContainer">
          <img
            className="logo"
            src="https://shawarmawest.ca/wp-content/uploads/2023/11/3ba45810-b7db-4f5a-87af-584f5a64d2f5.png"
          />
        </div>

        {/* NavLinks */}

        <div
          className={` ${
            openNav ? "showNav navLinksContainer" : "navLinksContainer"
          } `}
        >
          <div className="closeButton">
            <HamBurgerIcon
              clickEvent={() => setOpenNav(false)}
              iconSize={35}
              icon={<i style={{ fontSize: 28 }} className="fa-solid fa-x"></i>}
            />
          </div>
          <ul className="navLinks">
            {navLink.map(({ title, url }, index) => {
              return (
                <li key={index}>
                  <a
                    style={{ fontWeight: fontWeight ? fontWeight : 600 }}
                    href={url}
                  >
                    {title}
                  </a>
                </li>
              );
            })}
          </ul>

          <Button title="Order Online" fontWeight={500} />
        </div>

        <div className="burger">
          <HamBurgerIcon clickEvent={() => setOpenNav(true)} iconSize={22} />
        </div>
      </div>
    </div>
  );
}
