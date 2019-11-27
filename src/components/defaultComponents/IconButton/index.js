import React from "react";
import PropTypes from "prop-types";

import { Button, Icon, Tooltip } from "@material-ui/core";

export default function IconButton({ value, icon, label, onClick }) {
  return (
    <>
      {value ? (
        <Button
          variant="outlined"
          color="light"
          startIcon={icon}
          onClick={onClick}
        >
          {value}
        </Button>
      ) : label ? (
        <Tooltip title={label}>
          <Icon aria-label={label} onClick={onClick}>
            {icon}
          </Icon>
        </Tooltip>
      ) : (
        <Icon aria-label={label}>{icon}</Icon>
      )}
    </>
  );
}

IconButton.propTypes = {
  value: PropTypes.string,
  label: PropTypes.string,
  icon: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};

IconButton.defaultProps = {
  value: "",
  label: "",
  onClick: () => {},
};
