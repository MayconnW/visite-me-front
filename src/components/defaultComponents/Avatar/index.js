import React from "react";
import PropTypes from "prop-types";

import { Container } from "./style";
import storage from "../../../services/storage";

export default function Avatar({ width, src, setSrc }) {
  async function handleChange(e) {
    const { url } = await storage(e.target.files[0], "avatar");

    setSrc(url);
  }
  return (
    <Container size={width}>
      <label htmlFor="avatar">
        <img src={src} alt="Avatar" />
        <input
          type="file"
          id="avatar"
          accept="image/*"
          onChange={handleChange}
        />
      </label>
    </Container>
  );
}

Avatar.propTypes = {
  width: PropTypes.number,
  src: PropTypes.string.isRequired,
  setSrc: PropTypes.func,
};

Avatar.defaultProps = {
  width: 60,
  setSrc: () => {},
};
