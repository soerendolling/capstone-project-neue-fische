export function cuisineFilter(restaurants, filters) {
  return restaurants.filter((restaurant) => {
    if (filters.cuisine?.includes("modern")) {
      return restaurant.cuisine.includes("modern");
    } else if (filters.cuisine?.includes("classic")) {
      return restaurant.cuisine.includes("classic");
    } else if (filters.cuisine?.includes("creative")) {
      return restaurant.cuisine.includes("creative");
    } else if (filters.cuisine?.includes("vegetarian")) {
      return (
        restaurant.cuisine.includes("vegetarian") ||
        restaurant.meatless.vegetarianOptions === true
      );
    } else if (filters.cuisine?.includes("vegan")) {
      return (
        restaurant.cuisine.includes("vegan") ||
        restaurant.meatless.veganOptions === true
      );
    } else if (filters.cuisine?.includes("local")) {
      return restaurant.cuisine.includes("local");
    } else if (filters.cuisine?.includes("german")) {
      return restaurant.cuisine.includes("german");
    } else if (filters.cuisine?.includes("fish")) {
      return restaurant.cuisine.includes("fish");
    } else if (filters.cuisine?.includes("austrian")) {
      return restaurant.cuisine.includes("austrian");
    } else if (filters.cuisine?.includes("italian")) {
      return restaurant.cuisine.includes("italian");
    } else if (filters.cuisine?.includes("pizza")) {
      return restaurant.cuisine.includes("pizza");
    } else if (filters.cuisine?.includes("french")) {
      return restaurant.cuisine.includes("french");
    } else if (filters.cuisine?.includes("spanish")) {
      return restaurant.cuisine.includes("spanish");
    } else if (filters.cuisine?.includes("international")) {
      return restaurant.cuisine.includes("international");
    } else if (filters.cuisine?.includes("vietnamese")) {
      return restaurant.cuisine.includes("vietnamese");
    } else if (filters.cuisine?.includes("japanese")) {
      return restaurant.cuisine.includes("japanese");
    } else if (filters.cuisine?.includes("korean")) {
      return restaurant.cuisine.includes("korean");
    } else if (filters.cuisine?.includes("steak")) {
      return restaurant.cuisine.includes("steak");
    } else if (filters.cuisine?.includes("syrian")) {
      return restaurant.cuisine.includes("syrian");
    } else if (filters.cuisine?.includes("middle eastern")) {
      return restaurant.cuisine.includes("middle eastern");
    } else if (filters.cuisine?.includes("peruvian")) {
      return restaurant.cuisine.includes("peruvian");
    }
    return true;
  });
}
