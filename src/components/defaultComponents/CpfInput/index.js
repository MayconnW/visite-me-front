import React, { useState } from "react";
import PropTypes from "prop-types";
import { InputText } from "../InputText";
import { validateCpf } from "../../../utils/validations/cpf";

import { Error } from "./style";

export default function CpfInput({ name, value, onChange }) {
  const [error, setError] = useState("");
  function handleErrors(input) {
    if (!validateCpf(input)) {
      setError("Cpf inválido");
    }
  }
  return (
    <>
      <InputText
        name={name}
        placeholder="Digite aqui seu cpf"
        type="text"
        value={value}
        onChange={onChange}
        onBlur={handleErrors}
      />
      <Error>{error}</Error>
    </>
  );
}

CpfInput.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

CpfInput.defaultProps = {
  name: "",
  value: "",
  onChange: () => {},
};
