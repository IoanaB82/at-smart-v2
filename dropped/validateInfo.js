export default function validateInfo(values) {
  let errors = {};

  if (!values.title.trim()) {
    errors.title = "Title required";
  }

  if (!values.servings || values.servings === NaN) {
    return (errors.servings = null);
  }
  if (!values.cooking_time || values.cooking_time === NaN) {
    return (errors.cooking_time = null);
  }
  if (!values.quantity || values.quantity === NaN) {
    return (errors.quantity = null);
  }

  return errors;
}
