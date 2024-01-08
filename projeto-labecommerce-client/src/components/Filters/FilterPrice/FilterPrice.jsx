import { useContext } from "react";
import { FiltersContext } from "../../../common/context/filters-context";
export default function FilterPrice() {
  const { setMinValue, setMaxValue, minValue, maxValue, handleFilterPrice, handleMinPriceChange, handleMaxPriceChange } = useContext(
    FiltersContext
  );


  return (
    <div>
      <label>
        Min Price:
        <input type="number" onChange={handleMinPriceChange} />
      </label>
      <label>
        Max Price:
        <input type="number" onChange={handleMaxPriceChange} />
      </label>
      <button onClick={handleFilterPrice}>Apply Filters</button>
    </div>
  );
};
