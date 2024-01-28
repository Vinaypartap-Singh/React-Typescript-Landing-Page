import AnnouncementBar from "./components/Bar/AnnoucementBar";
import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import HomePage from "./pages/HomePage";
import FacebookIcon from "./utils/FacebookIcon";
import Instagram from "./utils/Instagram";
import { theme } from "./utils/theme";

export default function App() {
  const socialIcon = [
    {
      name: <FacebookIcon />,
      url: "#",
    },
    {
      name: <Instagram />,
      url: "#",
    },
  ];
  return (
    <div>
      <AnnouncementBar
        fontWeight={400}
        padding={18}
        backgroundColor={theme.barColor}
        color={theme.light}
        phoneNumber={"657-925-7890"}
        email="developervsandhu@gmail.com"
        socialIcon={socialIcon}
      />
      <Header fontWeight={500} />
      <HomePage />
    </div>
  );
}
