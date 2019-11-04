import React from "react";
import styles from "./SearchInput.module.scss";
import { useStoreState, useStoreActions } from "easy-peasy";

function SearchInput() {
  const search = useStoreState(state => state.search);
  const setSearch = useStoreActions(actions => actions.setSearch);

  return (
    <div className={styles.SearchInput}>
      <label htmlFor="search-input">
        <i className="fas fa-search"></i>
      </label>
      <input
        id="search-input"
        type="text"
        placeholder="Search..."
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
    </div>
  );
}

export default SearchInput;
