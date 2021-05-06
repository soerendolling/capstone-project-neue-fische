export function openingTimesFilter(restaurants, filters) {
  let currentDate = new Date();
  let options = { weekday: "long" };
  const getDay = new Intl.DateTimeFormat("en-US", options).format(currentDate);
  const today = getDay.toLocaleLowerCase();
  const hour = currentDate.getHours();

  return restaurants.filter((restaurant) => {
    if (filters.openingTimes?.includes("now")) {
      // return restaurant.openingTimes.{today}general.open > 0 && restaurant.openingTimes.{today}.lunch.open > 0 === hour;
    } else if (filters.openingTimes?.includes("today")) {
      // return restaurant.openingTimes.${today}.general.open > 0 === today;
    } else if (filters.openingTimes?.includes("monday")) {
      return restaurant.openingTimes.monday.general.open > 0;
    } else if (filters.openingTimes?.includes("tuesday")) {
      return restaurant.openingTimes.tuesday.general.open > 0;
    } else if (filters.openingTimes?.includes("wednesday")) {
      return restaurant.openingTimes.wednesday.general.open > 0;
    } else if (filters.openingTimes?.includes("thursday")) {
      return restaurant.openingTimes.thursday.general.open > 0;
    } else if (filters.openingTimes?.includes("friday")) {
      return restaurant.openingTimes.friday.general.open > 0;
    } else if (filters.openingTimes?.includes("saturday")) {
      return restaurant.openingTimes.saturday.general.open > 0;
    } else if (filters.openingTimes?.includes("sunday")) {
      return restaurant.openingTimes.sunday.general.open > 0;
    }
    return true;
  });
}
