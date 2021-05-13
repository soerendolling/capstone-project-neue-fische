export function getDataFromLocalStorage() {
  const data = JSON.parse(localStorage.getItem("restaurant")) || [];

  return data;
}

export function sendDataToLocalStorage(items) {
  const data = getDataFromLocalStorage();

  data.push(items);
  localStorage.setItem("restaurant", JSON.stringify(data));
}

export function removeDataFromLocalStorageById(restaurantId) {
  const data = getDataFromLocalStorage();

  const newData = data.filter((item) => {
    return item.restaurantId !== restaurantId;
  });

  localStorage.setItem("restaurant", JSON.stringify(newData));
}
