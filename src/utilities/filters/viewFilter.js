export function viewFilter(restaurants, filters) {
  return restaurants.filter((restaurant) => {
    if (filters.view?.includes("alster lake view")) {
      return restaurant.location.view.includes("alster");
    } else if (filters.view?.includes("habor view")) {
      return restaurant.location.view.includes("habor");
    } else if (filters.view?.includes("canal view")) {
      return restaurant.location.view.includes("canal");
    } else if (filters.view?.includes("park view")) {
      return restaurant.location.view.includes("park");
    }
    return true;
  });
}
