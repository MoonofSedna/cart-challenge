import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const CartItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--gray-200);
  animation: ${fadeIn} 0.3s ease-in-out;
  svg {
    cursor: pointer;
    width: 1.5rem;
    height: 1.5rem;
  }
  & > div {
    display: flex;
    align-items: center;
    img {
      width: 4rem;
      height: 4rem;
      object-fit: cover;
      margin-right: 1rem;
      border-radius: 0.5rem;
    }
    div {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      h4 {
        margin: 0;
      }
      span {
        font-size: 1rem;
        font-weight: var(--bold);
        color: var(--dark-gray);
      }

      select {
        width: 100%;
        max-width: 5rem;
        padding: 0.5rem;
        border-radius: 0.3rem;
        outline: none;
        border: 1px solid var(--gray-300);
      }

      option {
        padding: 1rem;
      }
    }
  }
  & > button {
    background-color: transparent;
    border: none;
    color: var(--primary);
  }
`;
