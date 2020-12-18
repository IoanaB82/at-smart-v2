import { TextField, Button, Snackbar, SnackbarOrigin } from "@material-ui/core";
import MuiAlert, { AlertProps } from "@material-ui/lab/Alert";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { useContext, useState } from "react";
import { AppContext } from "../utils/AppContext";

const OwnRecipeForm = (props) => {
  const [error, setError] = useState(false);
  const [open, setOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { state, dispatch } = useContext(AppContext);

  //initial state of input fields is empty
  const initState = {
    title: "",
    servings: "",
    cooking_time: "",
    ingredient: "",
    unit: "",
    quantity: "",
    description: "",
  };
  const [values, setValues] = useState(initState);

  //css for textfield
  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        "& .MuiTextField-root": {
          margin: "1rem",
        },
      },
    })
  );
  const classes = useStyles();

  //modify information in input fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    //let errors = validateInfo(values);

    setValues({
      ...values,
      [name]: value,
    });
    //return errors;
  };

  // close alert on form submit
  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  //submit form
  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSubmitting(true);
    //const errorTitle = validateInfo(values.title);
    console.log(values.title);
    if (!values.title.trim()) {
      setError(true);
      setOpen(true);
    } else {
      dispatch({
        type: "add_own",
        title: values.title.trim(),
        servings: Number(values.servings),
        cooking_time: Number(values.cooking_time),
        ingredient: values.ingredient.trim(),
        unit: values.unit.trim(),
        quantity: Number(values.quantity),
        description: values.description.trim(),
      });
      setError(false);
      setOpen(true);
      setValues(initState);
      props.handleClick();
    }
  };

  return (
    <>
      <form
        {...props}
        className={classes.root}
        autoComplete="off"
        onSubmit={handleSubmit}
        noValidate
      >
        <h3>Add new recipe</h3>

        <TextField
          required
          label="Recipe title"
          placeholder="Recipe title"
          variant="outlined"
          onChange={handleChange}
          value={values.title}
          name="title"
          error={error}
          helperText="Title is required."
          onError={(e) => {
            e.preventDefault();
            // setOpen(true);
          }}
        />

        <TextField
          id="outlined-required"
          label="Servings"
          placeholder="Servings"
          variant="outlined"
          type="number"
          onChange={handleChange}
          value={values.servings}
          name="servings"
          InputProps={{ inputProps: { min: 1, step: 1 } }}
        />

        <TextField
          id="outlined-required"
          label="Cooking time"
          placeholder="Cooking time"
          variant="outlined"
          type="number"
          onChange={handleChange}
          value={values.cooking_time}
          name="cooking_time"
          InputProps={{ inputProps: { min: 1, step: 1 } }}
        />

        <TextField
          id="outlined-required"
          label="Ingredient"
          placeholder="Ingredient description or name"
          variant="outlined"
          onChange={handleChange}
          value={values.ingredient}
          name="ingredient"
        />

        <TextField
          id="outlined-required"
          label="Ingredient quantity"
          //placeholder="Ingredient quantity"
          variant="outlined"
          onChange={handleChange}
          value={values.quantity}
          name="quantity"
          type="number"
          InputProps={{ inputProps: { min: 0.1, step: 0.1 } }}
        />
        <TextField
          id="outlined-required"
          label="Ingredient unit"
          //placeholder="Ingredient unit"
          variant="outlined"
          onChange={handleChange}
          value={values.unit}
          name="unit"
        />

        <TextField
          id="outlined-required"
          label="Recipe description"
          placeholder="add a description"
          variant="outlined"
          multiline
          rows={4}
          onChange={handleChange}
          value={values.description}
          name="description"
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          style={{ justifySelf: "center" }}
        >
          Add
        </Button>
      </form>

      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        open={open}
        autoHideDuration={2000}
        onClose={handleClose}
        message="title is required"
      >
        {error ? (
          <MuiAlert onClose={handleClose} severity="error">
            Add a title!
          </MuiAlert>
        ) : (
          <MuiAlert onClose={handleClose} severity="success">
            Recipe added!
          </MuiAlert>
        )}
      </Snackbar>

      <style jsx>{`
        form {
          width: auto;

          display: grid;
          grid-template-columns: minmax(10rem, 34rem);
          max-width: 34rem;
          background-color: #f9f5f3;
          margin: 0 auto;
          padding: 2rem;
        }
      `}</style>
    </>
  );
};

export default OwnRecipeForm;
