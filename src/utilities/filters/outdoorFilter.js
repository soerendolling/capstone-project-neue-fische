export function outdoorFilter(restaurants, filters) {
  return restaurants.filter((restaurant) => {
    const terrace = filters.outdoor?.includes("terrace");
    const backyard = filters.outdoor?.includes("backyard");
    const rooftop = filters.outdoor?.includes("rooftop");
    const park = filters.outdoor?.includes("park");

    const filterTerrace =
      (restaurant.location?.restaurantOutdoor === true &&
        restaurant.location?.restaurantOutdoorDetail.includes("terrace")) ||
      (restaurant.location?.barOutdoor === true &&
        restaurant.location?.barOutdoorDetail.includes("terrace"));
    const filterBackyard =
      restaurant.location?.restaurantOutdoorDetail.includes("backyard");
    const filterRooftop =
      restaurant.location?.view.includes("rooftop") ||
      restaurant.location?.restaurantOutdoorDetail.includes("rooftop") ||
      restaurant.location?.barOutdoorDetail.includes("rooftop");
    const filterPark =
      restaurant.location?.restaurantOutdoorDetail.includes("park") ||
      restaurant.location?.barOutdoorDetail.includes("park");

    if (terrace && backyard && rooftop && park) {
      return filterTerrace || filterBackyard || filterRooftop || filterPark;
    } else if (terrace && backyard && rooftop) {
      return filterTerrace || filterBackyard || filterRooftop;
    } else if (terrace && rooftop && park) {
      return filterTerrace || filterRooftop || filterPark;
    } else if (backyard && rooftop && park) {
      return filterBackyard || filterRooftop || filterPark;
    } else if (terrace && backyard) {
      return filterTerrace || filterBackyard;
    } else if (terrace && park) {
      return filterTerrace || filterPark;
    } else if (rooftop && park) {
      return filterRooftop || filterPark;
    } else if (backyard && rooftop) {
      return filterBackyard || filterRooftop;
    } else if (backyard && park) {
      return filterBackyard || filterPark;
    } else if (terrace && rooftop) {
      return filterTerrace || filterRooftop;
    } else if (terrace) {
      return filterTerrace;
    } else if (backyard) {
      return filterBackyard;
    } else if (rooftop) {
      return filterRooftop;
    } else if (park) {
      return filterPark;
    }
    return true;
  });
}
