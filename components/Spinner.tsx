const Spinner = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <img src="spinner.gif" alt="rotating apple while loading data"></img>
      <p style={{ fontSize: "0.8rem" }}>Recipe loading...</p>
    </div>
  );
};

export default Spinner;
