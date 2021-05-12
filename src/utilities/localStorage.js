export function getDataFromLocalStorage() {
  const data = JSON.parse(localStorage.getItem("restaurant")) || [];

  return data;
}

export function sendDataToLocalStorage(items) {
  const data = getDataFromLocalStorage();

  data.push(items);
  localStorage.setItem("restaurant", JSON.stringify(data));
}
