export function ambienceFilter(restaurants, filters) {
  return restaurants.filter((restaurant) => {
    if (filters.ambience?.includes("elegant")) {
      return restaurant.ambience.includes("elegant") === true;
    } else if (filters.ambience?.includes("cosy")) {
      return restaurant.ambience.includes("cosy");
    } else if (filters.ambience?.includes("modern")) {
      return restaurant.ambience.includes("modern");
    } else if (filters.ambience?.includes("busy")) {
      return restaurant.ambience.includes("busy");
    } else if (filters.ambience?.includes("traditional")) {
      return restaurant.ambience.includes("trendy");
    } else if (filters.ambience?.includes("rustic")) {
      return restaurant.ambience.includes("alternative");
    } else if (filters.ambience?.includes("warm")) {
      return restaurant.ambience.includes("hanseatic");
    }
    return true;
  });
}
