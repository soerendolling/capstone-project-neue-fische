export function takeAwayFilter(restaurants, filters) {
  return restaurants.filter((restaurant) => {
    if (filters.takeAway?.includes("delivery")) {
      return restaurant.delivery === true;
    } else if (filters.takeAway?.includes("pre order")) {
      return (
        restaurant.takeAwayDetails === "pre order" ||
        restaurant.deliveryDetails === "pre order"
      );
    } else if (filters.takeAway?.includes("pick up")) {
      return (
        restaurant.takeAwayDetails === "pick up" || restaurant.takeAway === true
      );
    }
    return true;
  });
}
