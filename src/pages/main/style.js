import styled from "styled-components";
import Fab from "@material-ui/core/Fab";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 22px;

  .content {
    display: flex;
    width: 100%;
    max-width: 1200px;
    justify-content: space-between;
    align-items: center;

    > img {
      width: 170px;
      height: 92px;
    }

    .avatarBox {
      display: flex;
      flex-direction: column;

      > img {
        background-color: rgba(255, 255, 255, 0.9);
        border-radius: 50%;
        width: 90px;
        height: 90px;
        object-fit: cover;
      }

      > span {
        margin-top: 6px;
        font-size: 14px;
        i {
          font-weight: bold;
          text-decoration: underline;
        }
        b {
          margin-left: 3px;
          text-transform: uppercase;
          font-size: 18px;
        }
      }
    }

    .rightSide {
      button {
        border: none;
        background: transparent;
        cursor: pointer;
        &:hover {
          text-decoration: underline;
        }
      }

      display: flex;
      height: 100%;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-end;

      .balance {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
      }
    }
  }
`;

export const Menu = styled.div``;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 15px;
  width: 100%;
  max-width: 1200px;

  .leftSide {
    a {
      color: #fff;
      margin-right: 25px;
    }
  }

  > img {
    width: 60px;
    height: 40px;
    color: #fff;
  }

  .rightSide {
    span {
      color: #fff;
    }
  }
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;

export const BannersBox = styled.div`
  width: 100%;
  max-width: 1200px;
  padding-top: 50px;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
`;

export const MiniBannersBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 48%;
  > div {
    margin-bottom: 12px;
  }
`;

export const TimelineBox = styled.div`
  display: flex;
  justify-content: center;
  width: 48%;
`;

export const Box = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  margin-top: 25px;
`;

export const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  max-width: 1300px;
  padding-top: 50px;
`;

export const NewFab = styled(Fab)`
  svg path {
    color: white;
  }
  span {
    color: white;
    font-size: 12px;
    margin-left: 6px;
    margin-right: 6px;
  }
`;
