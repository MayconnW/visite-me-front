import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  flex: 1;

  .marginLeft {
    margin-left: 40px;
  }
`;

export const Logo = styled.div`
  img {
    width: 300px;
  }
  margin-top: 65px;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  width: 360px;
  height: 252px;
  background-color: #fff;

  .header {
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    background-color: #ea1d2c;
    height: 45px;

    h3 {
      font-size: 16px;
      color: #fff;
    }
  }

  .body {
    border: 1px solid #ea1d2c;
    flex: 1;
    form {
      height: 100%;
      padding: 10px 25px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      > div {
        width: 100%;
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
    }

    input[type="password"] {
      margin-top: 25px;
    }

    span {
      font-size: 12px;
      color: #ea1d2c;
      margin-top: 6px;
      cursor: pointer;
    }
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const Contact = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
  img {
    margin-bottom: 5px;
  }
  span {
    color: #fff;
    line-height: 1.2;
    text-transform: uppercase;
    font-weight: bold;
    i {
      text-decoration: underline;
      color: #fff;
      cursor: pointer;
    }
  }
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: center;
  img {
    color: white;
    width: 60px;
    height: 35px;
  }
`;
