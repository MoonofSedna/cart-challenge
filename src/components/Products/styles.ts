import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  margin-top: 1.5rem;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  position: relative;
  padding-bottom: 6rem;
  & > span {
    position: absolute;
    display: flex;
    align-items: center;
    gap: 5px;
    top: -2rem;
    right: 0;
    font-size: 1.2rem;
  }
  & > hr {
    width: 100%;
    border: none;
    margin: 0;
    margin-bottom: 1.5rem;
    border-bottom: 1px solid var(--gray-200);
  }
`;

const Field = styled.div`
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 1.5rem;
  margin-bottom: 1rem;
  padding: 0 1rem;
`;

const Label = styled.label`
  font-size: 1rem;
  font-weight: 700;
  color: var(--dark-gray);
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  align-items: center;
  cursor: pointer;
  img {
    transition: transform 0.3s ease-in-out;
  }
  &:after {
    content: "";
    transition: all 0.3s ease;
    margin-top: 0.5rem;
    width: 0;
  }
  &.active:after {
    content: "";
    width: 100%;
    height: 2px;
    background-image: var(--line-gradient);
  }
  &:hover {
    img {
      transform: scale(1.1);
    }
  }
`;

const Input = styled.input`
  display: none;
`;

const CardGrid = styled.div<{
  isLoading?: boolean;
}>`
  display: grid;
  position: relative;
  gap: 1rem;
  width: 100%;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  opacity: ${({ isLoading }) => (isLoading ? "0.5" : "1")};
  @media (max-width: 986px) {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  }
`;

export { Container, Field, Label, Input, CardGrid };
