import styled from "styled-components";
// images
import heroImg from "@/assets/images/banner.webp";
import heroImgMb from "@/assets/images/banner-mb.webp";

const CartIcon = styled.div`
  display: flex;
  position: relative;
  & > svg {
    cursor: pointer;
    height: 30px;
    width: 30px;
  }
  & .animation {
    position: absolute;
    top: -10px;
    right: -10px;
    height: 18px;
    width: 18px;
    border-radius: 50%;
    background-color: var(--secondary);
    opacity: 0.75;
    animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;

    @keyframes ping {
      75%,
      100% {
        transform: scale(2);
        opacity: 0;
      }
    }
  }
`;

const CartQuantity = styled.span`
  position: absolute;
  top: -10px;
  right: -10px;
  border-radius: 50%;
  height: 18px;
  width: 18px;
  background-color: var(--secondary);
  color: var(--white);
  font-size: 0.7rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Header = styled.header`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 100%;
  height: 350px;
  @media (max-width: 768px) {
    height: 300px;
  }
`;

const HeroImg = styled.div`
  height: 100%;
  width: 100%;
  background-color: var(--hero-bg);
  background-image: url(${heroImg});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;

  @media (max-width: 1024px) {
    background-image: url(${heroImgMb});
  }

  @media (max-width: 570px) {
    background-size: cover;
  }
`;

const Navbar = styled.nav`
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  position: sticky;
  top: 0;
  z-index: 2;
  background-color: var(--white);
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  width: 100%;
  height: 5rem;
`;

const NavbarContent = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 2.5rem 1.5rem 2.5rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavbarLogo = styled.img`
  width: 8rem;
  height: 3.2rem;
`;

export {
  CartIcon,
  CartQuantity,
  Header,
  HeroImg,
  Navbar,
  NavbarContent,
  NavbarLogo,
};
