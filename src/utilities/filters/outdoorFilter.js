export function outdoorFilter(restaurants, filters) {
  return restaurants.filter((restaurant) => {
    if (filters.outdoor?.includes("terrace")) {
      return (
        (restaurant.location.restaurantOutdoor === true &&
          restaurant.location.restaurantOutdoorDetail.includes("terrace")) ||
        (restaurant.location.barOutdoor === true &&
          restaurant.location.barOutdoorDetail.includes("terrace"))
      );
    } else if (filters.outdoor?.includes("backyard")) {
      return restaurant.location.restaurantOutdoorDetail.includes("backyard");
    } else if (filters.outdoor?.includes("rooftop")) {
      return (
        restaurant.location.view.includes("rooftop") ||
        restaurant.location.restaurantOutdoorDetail.includes("rooftop") ||
        restaurant.location.barOutdoorDetail.includes("rooftop")
      );
    } else if (filters.outdoor?.includes("park")) {
      return (
        restaurant.location.restaurantOutdoorDetail.includes("park") ||
        restaurant.location.barOutdoorDetail.includes("park")
      );
    }
    return true;
  });
}
