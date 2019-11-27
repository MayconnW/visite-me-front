import styled from "styled-components";
import { COLORS } from "../../../styles/defaults";

export const PopupBox = styled.div`
  .popup-content {
    max-width: 700px;
    border-radius: 0px 0px 12px 12px;
  }
`;

export const Header = styled.div`
  width: 100%;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${COLORS.baseBackground};
  > h2 {
    text-transform: uppercase;
    color: white;
    font-size: 16px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 35px 30px;
  align-items: center;

  i {
    font-size: 36px;
    color: ${COLORS.$lightGreen};
  }

  h2 {
    color: ${COLORS.$darkBlue};
    font-size: 26px;
    font-weight: 500;
    text-align: center;
    margin: 8px 60px 0px 60px;
    line-height: 25px;
  }

  p {
    margin-top: 25px;
    text-align: center;
    line-height: 18px;
  }

  ul {
    margin: 25px 15px 0 15px;
    li {
      font-size: 14px;
      margin-top: 6px;
      line-height: 18px;
    }
  }

  h3 {
    color: ${COLORS.$darkBlue};
    margin-top: 35px;
    font-weight: 400;
  }
`;

export const LinksBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 15px;

  .primary {
    text-align: center;
    background: ${COLORS.$primaryButton};
    margin-left: 5px;
    font-size: 13px;
    letter-spacing: 1px;
    font-weight: bold;
    padding: 10px 15px;
    height: 40px;
    color: ${COLORS.$fontButton};
  }

  .second {
    text-align: center;
    background: ${COLORS.$dangerButton};
    margin-right: 5px;
    font-size: 13px;
    letter-spacing: 1px;
    font-weight: bold;
    padding: 10px 15px;
    height: 40px;
    color: ${COLORS.$fontButton};
  }
`;
