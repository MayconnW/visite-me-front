import React, { useState } from "react";
import PropTypes from "prop-types";
import { InputText } from "../InputText";

import { Error } from "./style";

export default function NameInput({ name, value, onChange }) {
  const [error, setError] = useState("");
  return (
    <>
      <InputText
        name={name}
        placeholder="Digite aqui seu Usuário"
        type="text"
        value={value}
        onChange={onChange}
      />
      <Error>{error}</Error>
    </>
  );
}

NameInput.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

NameInput.defaultProps = {
  name: "",
  value: "",
  onChange: () => {},
};
