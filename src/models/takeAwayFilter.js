export function takeAwayFilter(restaurants, filters) {
  return restaurants.filter((restaurant) => {
    if (filters.takeAway?.includes("delivery")) {
      return restaurant.delivery === true;
    } else if (filters.takeAway?.includes("take away")) {
      return restaurant.takeAway === true;
    }
    return true;
  });
}
