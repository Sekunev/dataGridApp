import styled from "styled-components";

export const Cont = styled.div`
  /* margin-left: 1rem; */
`;

export const Button = styled.button`
  margin-top: 0.5rem;
  border-radius: 39px;
  color: white;
  background-color: #744bfc;
  border: none;
  width: 29.5%;
  height: 30px;
  margin-bottom: 0.5rem;
  /* Medya sorguları */
  @media screen and (max-width: 480px) {
    /* Ekran genişliği 768 pikselden küçükse bu stil uygulanır */
    font-size: 11px;
  }
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 0.6rem;
  margin-left: 0.5rem;
`;

export const Input = styled.input`
  margin-top: 0.2rem;
  border-radius: 39px;
  border-width: 0.1px;
  width: 80%;
  padding: 0.3rem;
`;
