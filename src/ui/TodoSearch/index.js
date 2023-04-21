import React, { useEffect } from "react";
import "./TodoSearch.css";
import { useSearchParams } from "react-router-dom";

function TodoSearch({ searchValue, setSearchValue, loading }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const querySearched = searchParams.get("search");

  useEffect(() => {
    setSearchValue(querySearched || "");
  }, []);

  const onSearchValueChange = (event) => {
    const query = event.target.value;
    setSearchParams({ search: query });
    setSearchValue(query);
  };

  return (
    <input
      className="TodoSearch"
      placeholder="Cebolla"
      value={searchValue}
      onChange={onSearchValueChange}
      disabled={loading}
    />
  );
}

export { TodoSearch };
