const FilterBar = () => {
  return (
    <div>
      <div>
        <label>Search: </label>
        <input type="text" />
      </div>
      <div>
        <label>Filter by: </label>
        <select name="" id="">
          <option value="">Continent</option>
          <option value="">Activity</option>
        </select>
      </div>
      <div>
          <label>Order :</label>
        <select name="" id="">
          <option value="">Asc</option>
          <option value="">Des</option>
        </select>
        <select name="" id="">
          <option value="">A-Z</option>
          <option value="">Population</option>
        </select>
      </div>
      <div>

      </div>
    </div>
  );
};

export default FilterBar;
