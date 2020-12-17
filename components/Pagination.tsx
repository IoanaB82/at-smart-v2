import Pagination from "@material-ui/lab/Pagination";

const SearchPagination = (props) => {
  return (
    <Pagination
      count={props.count}
      color="primary"
      siblingCount={0}
      boundaryCount={1}
      onChange={props.onChange}
    />
  );
};

export default SearchPagination;
