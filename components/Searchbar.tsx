import SearchIcon from "@material-ui/icons/Search";
import { IconButton } from "@material-ui/core";

const Searchbar = (props) => {
  return (
    <>
      <form onSubmit={props.onSubmit}>
        <input
          type="text"
          placeholder="ex: Chicken"
          id="searchText"
          value={props.value}
          onChange={props.onChange}
        />
        <IconButton type="submit" color="primary" size="small">
          <SearchIcon />
        </IconButton>
      </form>
      <style jsx>{`
        input {
          border-radius: "15px";
        }
      `}</style>
    </>
  );
};

export default Searchbar;
