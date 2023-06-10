import styled from "styled-components";
import { Link } from "react-router-dom";

export const Div = styled.div`
  padding: 1.5rem;
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const NavLeft = styled(Link)`
  cursor: pointer;
`;

export const SosialIcon = styled.a`
  cursor: pointer;
`;

export const NavRight = styled.div`
  display: flex;

  /* Medya sorguları */
  @media screen and (max-width: 768px) {
    /* Ekran genişliği 768 pikselden küçükse bu stil uygulanır */
    flex-direction: column;
    align-items: center;
  }
`;

export const Icon = styled.img`
  background-color: #744bfc;
  padding: 1px;
  width: 22px;
  height: 20px;
  border-radius: 1.93846px;
  margin-right: 1rem;
`;

export const Menu = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  gap: 2rem;

  @media screen and (max-width: 768px) {
    /* Ekran genişliği 768 pikselden küçükse bu stil uygulanır */
    flex-direction: column;
    align-items: center;
  }
`;

export const Logo = styled.img``;

export const MenuLink = styled(Link)`
  cursor: pointer;
  text-decoration: none;
  color: #272626;
  font-size: 0.8rem;
  font-family: Arial, Helvetica, sans-serif;
  @media screen and (max-width: 400px) {
    /* Ekran genişliği 400 pikselden küçükse bu stil uygulanır */
    font-size: 0.6rem;
  }
`;
