import styled from "styled-components";

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 8rem 0 8rem 0;
  &.cart {
    padding: 8rem 1.5rem 8rem 0;
    & svg {
      stroke: var(--primary);
    }
  }
`;

const Icon = styled.div`
  & svg {
    width: 4rem;
    height: 4rem;
  }
`;

const Message = styled.h3`
  width: 100%;
  max-width: 20rem;
  text-align: center;
  font-size: 1.5rem;
  font-weight: 700;
  margin-top: 0.8rem;
  color: var(--dark-gray);
`;

export { Container, Icon, Message };
