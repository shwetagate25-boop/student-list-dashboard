function SearchFilter({ search, setSearch, status, setStatus }) {
  return (
    <div className="search-filter">
      <input
        type="text"
        placeholder="Search by student name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="filter-buttons">
        <button
          className={status === "All" ? "active" : ""}
          onClick={() => setStatus("All")}
        >
          All
        </button>

        <button
          className={status === "Passing" ? "active" : ""}
          onClick={() => setStatus("Passing")}
        >
          Passing
        </button>

        <button
          className={status === "Failing" ? "active" : ""}
          onClick={() => setStatus("Failing")}
        >
          Failing
        </button>
      </div>
    </div>
  );
}

export default SearchFilter;