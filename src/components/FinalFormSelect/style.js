import styled from "styled-components";
import { COLORS } from "../../styles/defaults";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  label {
    color: #797979;
    font-weight: normal;
    font-size: 14px;
  }

  select {
    width: 100%;
    height: 35px;
    border-radius: 0;
    background: transparent;
    border: none;
    border-bottom: 1px solid #ccc;
    box-shadow: none;
    color: #464646;
    padding: 0;
  }

  span {
    color: red;
    font-weight: bold;
    font-size: 14px;
  }
`;
