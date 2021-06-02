export function partOfTownFilter(restaurants, filters) {
  return restaurants.filter((restaurant) => {
    if (filters.partOfTown?.includes("altstadt")) {
      return restaurant.location.area.includes("altstadt");
    } else if (filters.partOfTown?.includes("st. georg")) {
      return restaurant.location?.area?.includes("saint georg");
    } else if (filters.partOfTown?.includes("uhlenhorst")) {
      return restaurant.location.area.includes("uhlenhorst");
    } else if (filters.partOfTown?.includes("altona")) {
      return restaurant.location.area.includes("altona");
    } else if (filters.partOfTown?.includes("sternschanze")) {
      return restaurant.location.area.includes("sternschanze");
    } else if (filters.partOfTown?.includes("winterhude")) {
      return restaurant.location.area.includes("winterhude");
    } else if (filters.partOfTown?.includes("neustadt")) {
      return restaurant.location.area.includes("neustadt");
    } else if (filters.partOfTown?.includes("rotherbaum")) {
      return restaurant.location.area.includes("rotherbaum");
    } else if (filters.partOfTown?.includes("harbor")) {
      return (
        restaurant.location.area.includes("harbor") ||
        restaurant.location.view.includes("harbor") ||
        restaurant.location.water.includes("harbor")
      );
    } else if (filters.partOfTown?.includes("hafencity")) {
      return restaurant.location.area.includes("hafencity");
    } else if (filters.partOfTown?.includes("st. pauli")) {
      return restaurant.location.area.includes("saint pauli");
    } else if (filters.partOfTown?.includes("eppendorf")) {
      return restaurant.location.area.includes("eppendorf");
    } else if (filters.partOfTown?.includes("michel")) {
      return restaurant.location.area.includes("michel");
    }
    return true;
  });
}
