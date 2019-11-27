import React from "react";
import { Field } from "react-final-form";
import PropTypes from "prop-types";
import formatString from "format-string-by-pattern";
import { numbersOnly as getNumbers } from "../../utils/format";

import { Container, Box } from "./style";

/* {componentValue !== "" ? componentValue : value} */
export default function Input({
  id,
  label,
  name,
  type,
  className,
  placeholder,
  mask,
  numbersOnly,
  onChange,
  onBlur,
  value: componentValue,
}) {
  return (
    <Field
      name={name}
      format={value => {
        return mask
          ? formatString(mask, numbersOnly ? getNumbers(value) : value)
          : value;
      }}
    >
      {({ input, meta }) => {
        const {
          onBlur: defaultOnBlur,
          onFocus,
          onChange: defaultOnChange,
          value,
        } = input;
        return (
          <Container className={className}>
            <label htmlFor={id}>{label}</label>
            <input
              placeholder={placeholder}
              name={name}
              value={componentValue || value}
              onBlur={
                onBlur
                  ? e => {
                      defaultOnBlur(e);
                      onBlur(e);
                    }
                  : defaultOnBlur
              }
              onChange={
                onChange
                  ? e => {
                      defaultOnChange(e);
                      onChange(e);
                    }
                  : defaultOnChange
              }
              onFocus={onFocus}
              id={id}
              type={type}
              className={meta.error && meta.touched ? "invalid" : "valid"}
            />
            {meta.error && meta.touched && <span>{meta.error}</span>}
          </Container>
        );
      }}
    </Field>
  );
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string,
  label: PropTypes.string,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  mask: PropTypes.string,
  numbersOnly: PropTypes.bool,
};

Input.defaultProps = {
  label: "",
  id: null,
  className: "",
  placeholder: "",
  numbersOnly: false,
  mask: "",
};
