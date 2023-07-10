import styled from "styled-components";
import { Button as ButtonComponent } from "../Button/styles";

const Button = styled(ButtonComponent)`
  padding: 0.6rem 1.2rem;
  border-radius: 2rem;
  font-size: 0.8rem;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 1px solid var(--gray-200);
  padding-top: 1rem;
`;

const Field = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const Input = styled.input`
  font-size: 1rem;
  padding: 0.6rem;
  outline: none;
  border: 1px solid var(--gray-300);
  border-radius: 0.3rem;
`;

const Message = styled.p`
  font-size: 0.9rem;
  font-weight: 600;
  &.error {
    color: var(--red);
  }
  &.success {
    color: var(--primary);
  }
`;

const Label = styled.span`
  font-size: 1rem;
  font-weight: 700;
  color: var(--dark-gray);
  margin-bottom: 0.5rem;
`;

export { Button, Container, Field, Input, Message, Label };
