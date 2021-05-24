export function viewFilter(restaurants, filters) {
  return restaurants.filter((restaurant) => {
    const alster = filters.view?.includes("alster lake view");
    const habor = filters.view?.includes("habor view");
    const canal = filters.view?.includes("canal view");
    const park = filters.view?.includes("park view");

    const filterAlster = restaurant.location.view.includes("alster");
    const filterHabor = restaurant.location.view.includes("habor");
    const filterCanal = restaurant.location.view.includes("canal");
    const filterPark = restaurant.location.view.includes("park");
    if (alster && habor && canal && park) {
      return filterAlster || filterHabor || filterCanal || filterPark;
    } else if (alster && habor && canal) {
      return filterAlster || filterHabor || filterCanal;
    } else if (alster && habor && park) {
      return filterAlster || filterHabor || filterPark;
    } else if (alster && canal && park) {
      return filterAlster || filterCanal || filterPark;
    } else if (habor && canal && park) {
      return filterHabor || filterCanal || filterPark;
    } else if (alster && habor) {
      return filterAlster || filterHabor;
    } else if (alster && park) {
      return filterAlster || filterPark;
    } else if (canal && park) {
      return filterCanal || filterPark;
    } else if (habor && park) {
      return filterHabor || filterPark;
    } else if (alster && canal) {
      return filterHabor || filterCanal;
    } else if (alster) {
      return filterAlster;
    } else if (habor) {
      return filterHabor;
    } else if (canal) {
      return filterCanal;
    } else if (park) {
      return filterPark;
    }
    return true;
  });
}
