export function cuisineFilter(restaurants, filters) {
  return restaurants.filter((restaurant) => {
    if (filters.cuisine?.includes("modern")) {
      return restaurant.cuisine.includes("modern");
    }
    if (filters.cuisine?.includes("classic")) {
      return restaurant.cuisine.includes("classic");
    }
    if (filters.cuisine?.includes("creative")) {
      return restaurant.cuisine.includes("creative");
    }
    if (filters.cuisine?.includes("vegetarian")) {
      return (
        restaurant.cuisine.includes("vegetarian") ||
        restaurant.meatless.vegetarianOptions === true
      );
    }
    if (filters.cuisine?.includes("vegan")) {
      return (
        restaurant.cuisine.includes("vegan") ||
        restaurant.meatless.veganOptions === true
      );
    }
    if (filters.cuisine?.includes("local")) {
      return restaurant.cuisine.includes("local");
    }
    if (filters.cuisine?.includes("german")) {
      return restaurant.cuisine.includes("german");
    }
    if (filters.cuisine?.includes("hanseatic")) {
      return restaurant.cuisine.includes("hanseatic");
    }
    if (filters.cuisine?.includes("fish")) {
      return restaurant.cuisine.includes("fish");
    }
    if (filters.cuisine?.includes("austrian")) {
      return restaurant.cuisine.includes("austrian");
    }
    if (filters.cuisine?.includes("italian")) {
      return restaurant.cuisine.includes("italian");
    }
    if (filters.cuisine?.includes("pizza")) {
      return restaurant.cuisine.includes("pizza");
    }
    if (filters.cuisine?.includes("french")) {
      return restaurant.cuisine.includes("french");
    }
    if (filters.cuisine?.includes("spanish")) {
      return restaurant.cuisine.includes("spanish");
    }
    if (filters.cuisine?.includes("international")) {
      return restaurant.cuisine.includes("international");
    }
    if (filters.cuisine?.includes("vietnamese")) {
      return restaurant.cuisine.includes("vietnamese");
    }
    if (filters.cuisine?.includes("japanese")) {
      return restaurant.cuisine.includes("japanese");
    }
    if (filters.cuisine?.includes("korean")) {
      return restaurant.cuisine.includes("korean");
    }
    if (filters.cuisine?.includes("steak")) {
      return restaurant.cuisine.includes("steak");
    }
    if (filters.cuisine?.includes("syrian")) {
      return restaurant.cuisine.includes("syrian");
    }
    if (filters.cuisine?.includes("middle eastern")) {
      return restaurant.cuisine.includes("middle eastern");
    }
    if (filters.cuisine?.includes("peruvian")) {
      return restaurant.cuisine.includes("peruvian");
    }
    return true;
  });
}
