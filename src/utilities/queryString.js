import * as queryString from "query-string";

const options = {
  arrayFormat: "bracket-separator",
  arrayFormatSeparator: ",",
};

export function parse(searchString) {
  return queryString.parse(searchString, options);
}

export function stringify(obj) {
  return queryString.stringify(obj, options);
}
