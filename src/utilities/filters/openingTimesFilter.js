export function openingTimesFilter(restaurants, filters) {
  let currentDate = new Date();
  let options = { weekday: "long" };
  const getDay = new Intl.DateTimeFormat("en-US", options).format(currentDate);
  const todayOpen = getDay.toLowerCase();
  const hour = currentDate.getHours();

  return restaurants.filter((restaurant) => {
    const now = filters.openingTimes?.includes("now");
    const today = filters.openingTimes?.includes("today");
    const monday = filters.openingTimes?.includes("monday");
    const tuesday = filters.openingTimes?.includes("tuesday");
    const wednesday = filters.openingTimes?.includes("wednesday");
    const thursday = filters.openingTimes?.includes("thursday");
    const friday = filters.openingTimes?.includes("friday");
    const saturday = filters.openingTimes?.includes("saturday");
    const sunday = filters.openingTimes?.includes("sunday");

    const filterNow =
      (restaurant.openingTimes[todayOpen]?.general.open < hour &&
        restaurant.openingTimes[todayOpen]?.general.close > hour) ||
      (restaurant.openingTimes[todayOpen]?.lunch.open < hour &&
        restaurant.openingTimes[todayOpen]?.lunch.close > hour);
    const filterToday = restaurant.openingTimes[todayOpen]?.general.open > 0;
    const filterMonday = restaurant.openingTimes?.monday.general.open > 0;
    const filterTuesday = restaurant.openingTimes?.tuesday.general.open > 0;
    const filterWednesday = restaurant.openingTimes?.wednesday.general.open > 0;
    const filterThursday = restaurant.openingTimes?.thursday.general.open > 0;
    const filterFriday = restaurant.openingTimes?.friday.general.open > 0;
    const filterSaturday = restaurant.openingTimes?.saturday.general.open > 0;
    const filterSunday = restaurant.openingTimes?.sunday.general.open > 0;

    if (
      now &&
      today &&
      monday &&
      tuesday &&
      wednesday &&
      thursday &&
      friday &&
      saturday &&
      sunday
    ) {
      return restaurant;
    } else if (
      now &&
      today &&
      monday &&
      tuesday &&
      wednesday &&
      thursday &&
      friday &&
      saturday
    ) {
      return (
        filterNow ||
        filterToday ||
        filterMonday ||
        filterTuesday ||
        filterWednesday ||
        filterThursday ||
        filterFriday ||
        filterSaturday
      );
    } else if (
      now &&
      today &&
      monday &&
      tuesday &&
      wednesday &&
      thursday &&
      friday &&
      sunday
    ) {
      return (
        filterNow ||
        filterToday ||
        filterMonday ||
        filterTuesday ||
        filterWednesday ||
        filterThursday ||
        filterFriday ||
        filterSunday
      );
    } else if (
      now &&
      today &&
      monday &&
      tuesday &&
      wednesday &&
      thursday &&
      saturday &&
      sunday
    ) {
      return (
        filterNow ||
        filterToday ||
        filterMonday ||
        filterTuesday ||
        filterWednesday ||
        filterThursday ||
        filterSaturday ||
        filterSunday
      );
    } else if (
      now &&
      today &&
      monday &&
      tuesday &&
      wednesday &&
      friday &&
      saturday &&
      sunday
    ) {
      return (
        filterNow ||
        filterToday ||
        filterMonday ||
        filterTuesday ||
        filterWednesday ||
        filterFriday ||
        filterSaturday ||
        filterSunday
      );
    } else if (
      now &&
      today &&
      monday &&
      tuesday &&
      thursday &&
      friday &&
      saturday &&
      sunday
    ) {
      return (
        filterNow ||
        filterToday ||
        filterMonday ||
        filterTuesday ||
        filterThursday ||
        filterFriday ||
        filterSaturday ||
        filterSunday
      );
    } else if (
      now &&
      today &&
      monday &&
      wednesday &&
      thursday &&
      friday &&
      saturday &&
      sunday
    ) {
      return (
        filterNow ||
        filterToday ||
        filterMonday ||
        filterWednesday ||
        filterThursday ||
        filterFriday ||
        filterSaturday ||
        filterSunday
      );
    } else if (
      now &&
      today &&
      tuesday &&
      wednesday &&
      thursday &&
      friday &&
      saturday &&
      sunday
    ) {
      return (
        filterNow ||
        filterToday ||
        filterTuesday ||
        filterWednesday ||
        filterThursday ||
        filterFriday ||
        filterSaturday ||
        filterSunday
      );
    } else if (
      now &&
      monday &&
      tuesday &&
      wednesday &&
      thursday &&
      friday &&
      saturday &&
      sunday
    ) {
      return (
        filterNow ||
        filterMonday ||
        filterTuesday ||
        filterWednesday ||
        filterThursday ||
        filterFriday ||
        filterSaturday ||
        filterSunday
      );
    } else if (
      today &&
      monday &&
      tuesday &&
      wednesday &&
      thursday &&
      friday &&
      saturday &&
      sunday
    ) {
      return (
        filterToday ||
        filterMonday ||
        filterTuesday ||
        filterWednesday ||
        filterThursday ||
        filterFriday ||
        filterSaturday ||
        filterSunday
      );
    } else if (
      now &&
      today &&
      monday &&
      tuesday &&
      wednesday &&
      thursday &&
      friday
    ) {
      return (
        now || today || monday || tuesday || wednesday || thursday || friday
      );
    } else if (
      now &&
      today &&
      monday &&
      tuesday &&
      wednesday &&
      thursday &&
      sunday
    ) {
      return (
        filterNow ||
        filterToday ||
        filterMonday ||
        filterTuesday ||
        filterWednesday ||
        filterThursday ||
        filterSunday
      );
    } else if (
      now &&
      today &&
      monday &&
      tuesday &&
      wednesday &&
      saturday &&
      sunday
    ) {
      return (
        filterNow ||
        filterToday ||
        filterMonday ||
        filterTuesday ||
        filterWednesday ||
        filterSaturday ||
        filterSunday
      );
    } else if (
      now &&
      today &&
      monday &&
      tuesday &&
      friday &&
      saturday &&
      sunday
    ) {
      return (
        filterNow ||
        filterToday ||
        filterMonday ||
        filterTuesday ||
        filterFriday ||
        filterSaturday ||
        filterSunday
      );
    } else if (
      now &&
      today &&
      monday &&
      thursday &&
      friday &&
      saturday &&
      sunday
    ) {
      return (
        filterNow ||
        filterToday ||
        filterMonday ||
        filterThursday ||
        filterFriday ||
        filterSaturday ||
        filterSunday
      );
    } else if (
      now &&
      today &&
      wednesday &&
      thursday &&
      friday &&
      saturday &&
      sunday
    ) {
      return (
        filterNow ||
        filterToday ||
        filterWednesday ||
        filterThursday ||
        filterFriday ||
        filterSaturday ||
        filterSunday
      );
    } else if (
      now &&
      tuesday &&
      wednesday &&
      thursday &&
      friday &&
      saturday &&
      sunday
    ) {
      return (
        filterNow ||
        filterTuesday ||
        filterWednesday ||
        filterThursday ||
        filterFriday ||
        filterSaturday ||
        filterSunday
      );
    } else if (
      monday &&
      tuesday &&
      wednesday &&
      thursday &&
      friday &&
      saturday &&
      sunday
    ) {
      return (
        filterMonday ||
        filterTuesday ||
        filterWednesday ||
        filterThursday ||
        filterFriday ||
        filterSaturday ||
        filterSunday
      );
    } else if (
      today &&
      monday &&
      tuesday &&
      wednesday &&
      thursday &&
      friday &&
      saturday
    ) {
      return (
        filterToday ||
        filterMonday ||
        filterTuesday ||
        filterWednesday ||
        filterThursday ||
        filterFriday ||
        filterSaturday
      );
    } else if (now) {
      return filterNow;
    } else if (today) {
      return filterToday;
    } else if (monday) {
      return filterMonday;
    } else if (tuesday) {
      return filterTuesday;
    } else if (wednesday) {
      return filterWednesday;
    } else if (thursday) {
      return filterThursday;
    } else if (friday) {
      return filterFriday;
    } else if (saturday) {
      return filterSaturday;
    } else if (sunday) {
      return filterSunday;
    }
    return true;
  });
}
