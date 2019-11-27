import { setIn } from "final-form";

export const validate = (values, schema) => {
  if (typeof schema === "function") {
    schema = schema();
  }

  try {
    schema.validateSync(values, { abortEarly: false });
    return false;
  } catch (e) {
    return e.inner.reduce((errors, error) => {
      return setIn(errors, error.path, error.message);
    }, {});
  }
};
