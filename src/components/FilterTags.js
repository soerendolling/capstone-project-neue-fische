import { useHistory, useLocation } from "react-router-dom";
import { stringify, parse } from "../utilities/queryString";
import { toggleValueInArray } from "../models/toggleValueInArray";
import FilterTag from "./FilterTag";

export default function FilterTags({ filterPage, filterTags }) {
  const location = useLocation();
  const history = useHistory();
  const parsedQueryString = parse(location.search);
  const selectedFilters = parsedQueryString[filterPage] || [];

  function handleFilterClick(name) {
    const newFilters = toggleValueInArray(selectedFilters, name);
    const parsedOldQueryString = parse(location.search);
    const newQueryString = stringify({
      ...parsedOldQueryString,
      [filterPage]: newFilters,
    });
    history.replace({
      ...location,
      search: newQueryString,
    });
  }

  function isTagToogled(tagName) {
    return selectedFilters.includes(tagName);
  }

  return filterTags.map((tag) => (
    <FilterTag
      text={tag}
      onClick={handleFilterClick}
      isToggled={isTagToogled(tag)}
    />
  ));
}
