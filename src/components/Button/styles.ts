import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.7rem 1.6rem;
  border: none;
  border-radius: 2rem;
  font-size: clamp(0.9rem, 1vw + 0.5rem, 1rem);
  font-weight: var(--bold);
  text-transform: uppercase;
  cursor: pointer;
  color: var(--white);
  background-image: var(--gradient);
  transition: all 0.3s ease-in;
  background-size: 150% auto;
  background-position: 0 0;
  & svg {
    height: 1.5rem;
    width: 1.5rem;
  }
  &:hover {
    background-position: 100% 0;
  }
  &:disabled {
    background-image: none;
    background-color: var(--gray-300);
    cursor: auto;
  }
`;
