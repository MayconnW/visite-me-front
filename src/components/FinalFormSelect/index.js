import React from "react";
import { Field } from "react-final-form";
import PropTypes from "prop-types";
import formatString from "format-string-by-pattern";
import { numbersOnly as getNumbers } from "../../utils/format";

import { Container, Box } from "./style";

/* {componentValue !== "" ? componentValue : value} */
export default function Select({
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
  options,
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
            <select
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
            >
              {options.map(option => (
                <option key={option.id} value={option.id}>
                  {option.value}
                </option>
              ))}
            </select>
            {meta.error && meta.touched && <span>{meta.error}</span>}
          </Container>
        );
      }}
    </Field>
  );
}

Select.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string,
  label: PropTypes.string,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  mask: PropTypes.string,
  numbersOnly: PropTypes.bool,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      value: PropTypes.string,
    })
  ).isRequired,
};

Select.defaultProps = {
  label: "",
  id: null,
  className: "",
  placeholder: "",
  numbersOnly: false,
  mask: "",
};
