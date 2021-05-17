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

export function getNameFromLocalStorage() {
  const data = JSON.parse(localStorage.getItem("name")) || [];

  return data;
}

export function sendNameToLocalStorage(items) {
  const data = getDataFromLocalStorage();

  data.push(items);
  localStorage.setItem("name", JSON.stringify(data));
}
