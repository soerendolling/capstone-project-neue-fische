export function takeAwayFilter(restaurants, filters) {
  return restaurants.filter((restaurant) => {
    if (
      filters.takeAway?.includes("delivery") &&
      filters.takeAway?.includes("take away")
    ) {
      return restaurant.delivery === true || restaurant.takeAway === true;
    } else if (filters.takeAway?.includes("take away")) {
      return restaurant.takeAway === true;
    } else if (filters.takeAway?.includes("delivery")) {
      return restaurant.delivery === true;
    }
    return true;
  });
}
