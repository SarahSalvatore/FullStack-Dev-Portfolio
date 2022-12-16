// Validates form input fields before allowing submission
export const formValidation = (formValues) => {
  let errors = {};

  if (!formValues.name || formValues.name === undefined) {
    errors.name = "*required";
  } else if (formValues.name.length <= 1) {
    errors.name = "*name must be more than 1 character";
  } else if (formValues.name.length > 70) {
    errors.name = "*name must be less than 70 characters";
  }

  if (!formValues.email) {
    errors.email = "*required";
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formValues.email)
  ) {
    errors.email = "*please enter a valid email address";
  }

  if (!formValues.message) {
    errors.message = "*required";
  } else if (formValues.message.length < 5) {
    errors.message = "*message must be at least 5 characters";
  } else if (formValues.message.length > 1000) {
    errors.message = "*maximum message length exceeded";
  }

  return errors;
};
