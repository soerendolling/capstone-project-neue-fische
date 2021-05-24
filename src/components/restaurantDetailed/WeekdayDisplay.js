import "./WeekdayDisplay.css";

export default function WeekdayDisplay({ singleRestaurant }) {
  let classForMonday;
  let classForTuesday;
  let classForWednesday;
  let classForThursday;
  let classForFriday;
  let classForSaturday;
  let classForSunday;

  singleRestaurant?.openingTimes?.monday?.general?.open > 0
    ? (classForMonday = " open")
    : (classForMonday = " closed");

  singleRestaurant?.openingTimes?.tuesday?.general?.open > 0
    ? (classForTuesday = " open")
    : (classForTuesday = " closed");

  singleRestaurant?.openingTimes?.wednesday?.general?.open > 0
    ? (classForWednesday = " open")
    : (classForWednesday = " closed");

  singleRestaurant?.openingTimes?.thursday?.general?.open > 0
    ? (classForThursday = " open")
    : (classForThursday = " closed");

  singleRestaurant?.openingTimes?.friday?.general?.open > 0
    ? (classForFriday = " open")
    : (classForFriday = " closed");

  singleRestaurant?.openingTimes?.saturday?.general?.open > 0
    ? (classForSaturday = " open")
    : (classForSaturday = " closed");

  singleRestaurant?.openingTimes?.sunday?.general?.open > 0
    ? (classForSunday = " open")
    : (classForSunday = " closed");

  return (
    <div className="weekday__layout">
      <div className={`weekday__day${classForMonday}`}>M</div>
      <div className={`weekday__day${classForTuesday}`}>T</div>
      <div className={`weekday__day${classForWednesday}`}>W</div>
      <div className={`weekday__day${classForThursday}`}>T</div>
      <div className={`weekday__day${classForFriday}`}>F</div>
      <div className={`weekday__day${classForSaturday}`}>S</div>
      <div className={`weekday__day${classForSunday}`}>S</div>
    </div>
  );
}
