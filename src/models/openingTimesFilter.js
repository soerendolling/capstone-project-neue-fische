export function openingTimesFilter(restaurants, filters) {
  return restaurants.filter((restaurant) => {
    if (filters.openingTimes?.includes("now")) {
      // return
    } else if (filters.openingTimes?.includes("today")) {
      // return
    } else if (filters.openingTimes?.includes("mondays")) {
      // return
    } else if (filters.openingTimes?.includes("tuesdays")) {
      // return
    } else if (filters.openingTimes?.includes("wednesdays")) {
      // return
    } else if (filters.openingTimes?.includes("thursdays")) {
      // return
    } else if (filters.openingTimes?.includes("fridays")) {
      // return
    } else if (filters.openingTimes?.includes("saturdays")) {
      // return
    } else if (filters.openingTimes?.includes("sundays")) {
      // return
    }
    return true;
  });
}
