const Filter = (props) => {
  const filterHandler = function (e) {
    props.setStatus(e.target.value);
    props.renderFilter();
  };

  return (
    <select onChange={filterHandler} name="filtered-todos" id="">
      <option value="All">All</option>
      <option value="Completed">Completed</option>
      <option value="Incomplete">Incomplete</option>
    </select>
  );
};

export default Filter;