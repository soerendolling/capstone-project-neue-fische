import { useHistory, useLocation } from "react-router-dom";
import { stringify, parse } from "../utilities/queryString";
import { toggleValueInArray } from "../utilities/toggleValueInArray";
import FilterTag from "./FilterTag";

import PropTypes from "prop-types";

FilterTagsGroup.propTypes = {
  filterPage: PropTypes.string.isRequired,
  filterTags: PropTypes.array.isRequired,
};

export default function FilterTagsGroup({ filterPage, filterTags }) {
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

  function isTagToggled(tagName) {
    return selectedFilters.includes(tagName);
  }

  return filterTags.map((tag) => (
    <FilterTag
      key={tag}
      text={tag}
      onClick={handleFilterClick}
      isToggled={isTagToggled(tag)}
    />
  ));
}
