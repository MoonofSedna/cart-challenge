import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(1rem);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const CardDetails = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 0.5rem 0;
`;

const CardImage = styled.div`
  width: 100%;
  overflow: hidden;
  img {
    width: 100%;
    aspect-ratio: 1 / 1;
    object-fit: cover;
    transition: transform 0.3s ease-in-out;
  }
`;

const ProductCard = styled.article`
  padding: 1rem 1.2rem;
  display: flex;
  flex-direction: column;
  align-items: start;
  background-color: var(--white);
  border-radius: 0.5rem;
  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.1);
  animation: ${fadeIn} 0.3s ease-in-out;
  &:hover {
    img {
      transform: scale(1.1);
    }
  }
  & > div:first-of-type {
    width: 100%;
    overflow: hidden;
  }

  hr {
    border-top: 1px solid var(--gray--200);
    width: 100%;
    margin: 1rem 0;
  }
  h3 {
    width: 100%;
    font-size: 1.4rem;
    font-weight: 700;
    margin-block: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  span {
    font-size: 0.9rem;
    font-weight: 600;
    background-color: var(--gray-200);
    padding: 0.2rem 0.8rem;
    border-radius: 1rem;
  }
`;

const CardContent = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0 0.5rem 0;
  gap: 0.5rem;
  p {
    font-size: 2rem;
    font-weight: 700;
    margin-block: 0;
    color: var(--dark-gray);
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: start;
    button {
      width: 100%;
      margin-top: 0.5rem;
    }
  }
`;

export { CardDetails, CardImage, ProductCard, CardContent };
