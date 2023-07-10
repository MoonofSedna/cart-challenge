import { styled } from "styled-components";

const Container = styled.main`
  display: flex;
  justify-content: center;
`;

const Main = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 1rem;
  overflow-y: auto;
`;

const Section = styled.div`
  display: flex;
  flex: 1;
  padding: 1rem;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  max-width: 1200px;
`;

export { Container, Main, Section };
