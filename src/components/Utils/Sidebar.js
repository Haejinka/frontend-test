import { useState } from "react";

const dropDownList = [
  { id: 1, name: "All Products" },
  { id: 2, name: "Cat" },
  { id: 3, name: "Dog" },
  { id: 4, name: "Subscription" },
  { id: 5, name: "Price" },
];

const Sidebar = ({ handleFilter }) => {
  const [selectedFilter, setSelectedFilter] = useState("All Products");
  const [filterValue, setFilterValue] = useState("");

  const handleFilterChange = (filterName) => {
    setSelectedFilter(filterName);
    setFilterValue("");

    const toEmit = {
      type: filterName,
      search: "",
      subscription: filterName === "Subscription" ? "" : null,
    };
    handleFilter(toEmit);
  };

  const handleValueChange = (value) => {
    setFilterValue(value);

    const toEmit = {
      type: selectedFilter,
      search: value,
      subscription: selectedFilter === "Subscription" ? value : null,
    };
    handleFilter(toEmit);
  };

  return (
    <aside
      id="default-sidebar"
      className="fixed top-0 left-0 z-40 w-72 h-screen transition-transform -translate-x-full sm:translate-x-0"
      aria-label="Sidebar"
      style={{ backgroundColor: "#ffffff", borderRight: "1px solid #e5e7eb" }}
    >
      <div className="h-full p-6 overflow-y-auto">
        <h3 className="text-xl font-bold mb-6" style={{ color: "#081c74" }}>Filter By</h3>
        <div className="mb-6">
          {dropDownList.map((item) => (
            <div key={item.id} className="flex items-center mb-4">
              <input
                type="radio"
                id={item.name}
                name="filter"
                value={item.name}
                checked={selectedFilter === item.name}
                onChange={() => handleFilterChange(item.name)}
                className="mr-3"
                style={{ accentColor: "#3d4ca8", width: "1.5em", height: "1.5em" }}
              />
              <label htmlFor={item.name} style={{ color: "#081c74", fontSize: "1.125em" }}>{item.name}</label>
            </div>
          ))}
        </div>
        {selectedFilter === "Subscription" && (
          <div className="mb-6">
            <select
              name="subscription"
              value={filterValue}
              onChange={(e) => handleValueChange(e.target.value)}
              className="w-full p-3 rounded-lg border"
              style={{
                backgroundColor: "#3d4ca8",
                borderColor: "#6a79d8",
                color: "#ffffff",
                fontSize: "1.125em",
              }}
            >
              <option value="" disabled>Select Subscription</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
        )}
        {selectedFilter === "Price" && (
          <div className="mb-6">
            <input
              type="number"
              name="price"
              value={filterValue}
              onChange={(e) => handleValueChange(e.target.value)}
              placeholder="Enter price"
              className="w-full p-3 rounded-lg border"
              style={{
                backgroundColor: "#3d4ca8",
                borderColor: "#6a79d8",
                color: "#ffffff",
                fontSize: "1.125em",
              }}
            />
          </div>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;
