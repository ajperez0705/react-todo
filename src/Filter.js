import styles from "./Filter.module.css";

const Filter = (props) => {
  const filterHandler = function (e) {
    props.setStatus(e.target.value);
    props.renderFilter();
  };

  return (
    <select
      className={styles.select}
      onChange={filterHandler}
      name="filtered-todos"
      id=""
      value={props.status}
    >
      <option value="Incomplete">Incomplete</option>
      <option value="Completed">Completed</option>
      <option value="All">All</option>
    </select>
  );
};

export default Filter;
