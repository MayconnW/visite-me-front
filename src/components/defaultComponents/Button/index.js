import styled from "styled-components";

export const Button = styled.input`
  height: 33px;
  background: #fff;
  border: 1px solid #000;
  text-transform: uppercase;
  cursor: pointer;
  padding: 0 15px;
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

export const PrimaryButton = styled.input`
  text-align: center;
  background: #fff;
  margin-right: 5px;
  font-size: 13px;
  letter-spacing: 1px;
  font-weight: bold;
  padding: 5px 15px;
  height: 30px;
  cursor: pointer;
  color: #00bcbb;
  border: 1px solid #00bcbb;
  transition: all 0.4s ease 0s;
  &:hover {
    transition: all 0.4s ease 0s;
    background-color: #00bcbb;
    color: #fff;
  }
`;
