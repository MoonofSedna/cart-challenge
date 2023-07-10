import styled from "styled-components";

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.7rem 1.6rem;
  border: none;
  border-radius: 2rem;
  font-size: 1rem;
  font-weight: var(--bold);
  text-transform: uppercase;
  cursor: pointer;
  color: var(--white);
  background-color: var(--primary);
  transition: background-color 0.2s ease-in-out;
  & svg {
    height: 1.2rem;
    width: 1.2rem;
  }
  &:hover {
    background-color: var(--dark-pink);
  }
`;

const Container = styled.div`
  &.showCart {
    display: block;
  }
  &.hideCart {
    display: none;
  }
  position: relative;
`;

const CartContent = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  width: 400px;
  height: 100vh;
  overflow: hidden;
  padding: 5rem 0 6rem 1.5rem;
  background-color: var(--white);
  box-shadow: 0 10px 10px 0 rgba(0, 0, 0, 0.2);
  transform: translateX(100%);
  transition: transform 0.3s ease-in-out;
  &.animate {
    transform: translateX(0);
  }
  @media (max-width: 768px) {
    width: 100%;
    min-width: 300px;
    max-width: 400px;
  }
`;
const CartIconContainer = styled.div`
  position: relative;
  display: flex;
  width: 2rem;
  height: 2rem;
  svg {
    cursor: pointer;
  }
`;

const CartGrid = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-y: auto;
  padding: 0 1.5rem 3rem 0;
  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    background: var(--gray-200);
    border-radius: 5px;
  }

  &::-webkit-scrollbar-thumb {
    background: var(--gray-300);
    border-radius: 5px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: var(--primary);
  }
`;

const Header = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 1rem;
  background-color: var(--white);
  padding: 1.5rem 0 2rem 0;

  svg {
    cursor: pointer;
    width: 1.5rem;
    height: 1.5rem;
    position: relative;
    top: 0.2rem;
    left: -0.2rem;
    stroke: var(--secondary);
  }
`;

const Message = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 1.5rem 8rem 0;
  & svg {
    width: 5rem;
    height: 5rem;
    stroke: var(--primary);
    cursor: auto;
  }
  p {
    font-size: 1.5rem;
    font-weight: var(--bold);
    margin: 0;
  }
`;

const Title = styled.h3`
  font-size: 1.5rem;
  font-weight: var(--bold);
  margin: 0;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    width: 100%;
    flex: 1;
    height: 2px;
    bottom: 0;
    left: 0;
    background-image: var(--line-gradient);
  }
  svg {
    stroke: var(--primary);
  }
`;

export {
  Button,
  CartContent,
  CartGrid,
  CartIconContainer,
  Container,
  Header,
  Message,
  Title,
};
