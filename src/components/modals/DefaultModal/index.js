import React from "react";
import Popup from "reactjs-popup";
import PropTypes from "prop-types";

import { Container, PopupBox, Header } from "./style";

export default function DefaultModal({
  opened,
  children,
  onClose,
  closeOnDocumentClick,
  title,
  width,
  className,
}) {
  return (
    <PopupBox className={className}>
      <Popup
        contentStyle={{ background: "#f3f3f5", border: 0, padding: 0, width }}
        open={opened}
        modal
        closeOnDocumentClick={closeOnDocumentClick}
        onClose={onClose}
      >
        <>
          {title && (
            <Header>
              <h2>{title}</h2>
            </Header>
          )}
          <Container>{children}</Container>
        </>
      </Popup>
    </PopupBox>
  );
}

DefaultModal.propTypes = {
  opened: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
  onClose: PropTypes.func.isRequired,
  closeOnDocumentClick: PropTypes.bool,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  className: PropTypes.string,
};

DefaultModal.defaultProps = {
  opened: false,
  closeOnDocumentClick: true,
  title: false,
  width: "50%",
  className: "",
};
