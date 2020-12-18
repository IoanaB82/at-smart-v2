import Checkbox from "@material-ui/core/Checkbox";

const CheckboxC = (props) => {
  return (
    <Checkbox
      checked={props.isSelected}
      onChange={props.handleChange}
      color="primary"
    />
  );
};

export default CheckboxC;
