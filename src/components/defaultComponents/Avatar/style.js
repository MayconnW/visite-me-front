import styled from "styled-components";
import { COLORS } from "../../../styles/defaults";

export const Container = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  img {
    border: 2px solid ${COLORS.baseBackground};
    padding: 1px;
    border-radius: 50%;
    width: ${props => (props.size ? `${props.size}px` : "60px")};
    height: ${props => (props.size ? `${props.size}px` : "60px")};
    margin-right: 12px;
  }

  input {
    display: none;
  }
`;
