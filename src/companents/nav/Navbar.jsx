import React from "react";
import {
  Nav,
  Logo,
  Menu,
  MenuLink,
  Div,
  NavLeft,
  NavRight,
  Icon,
  SosialIcon,
} from "./Navbar.style";
import Headerlogo from "../../assest/header.png";
import Youtubelogo from "../../assest/youtube.svg";
import Instagramlogo from "../../assest/instagram.svg";
import Be from "../../assest/behance.svg";
import Linkedin from "../../assest/linkedin.svg";

const Navbar = () => {
  return (
    <Div>
      <Nav>
        <NavLeft to="/">
          <Logo src={Headerlogo} />
        </NavLeft>
        <Menu>
          <MenuLink to="/hakkımızda">Hakkımızda</MenuLink>
          <MenuLink to="/jüriyarışmayazılımı">Jüri - Yarışma Yazılımı</MenuLink>
          <MenuLink to="/wordninja">Word Ninja</MenuLink>
          <MenuLink to="/wordpyramids">Word Pyramids</MenuLink>
        </Menu>
        <NavRight>
          <SosialIcon href="https://www.youtube.com/channel/UC9zhWu89h4AqolHrVspLkVw">
            <Icon src={Youtubelogo} />
          </SosialIcon>
          <SosialIcon href="https://www.instagram.com/mobilerast/ ">
            <Icon src={Instagramlogo} />
          </SosialIcon>
          <SosialIcon href="https://www.behance.net/rastmobile">
            <Icon src={Be} />
          </SosialIcon>
          <SosialIcon href="https://www.linkedin.com/company/rastmobile/">
            <Icon src={Linkedin} />
          </SosialIcon>
        </NavRight>
      </Nav>
    </Div>
  );
};

export default Navbar;
