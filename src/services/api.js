import { isFavorite } from "./localStorage";

const baseUrl = "https://heytrade-ww-icecreams.herokuapp.com";

function getPictureUrl(iceCream) {
  return `${baseUrl}/${iceCream.picture}`;
}

export function fetchList(sortOrder, search) {
  let url = `${baseUrl}/icecreams?_sort=flavor&_order=${sortOrder}`;
  if (search) {
    url += `&q=${encodeURIComponent(search)}`;
  }
  return fetch(url)
    .then((response) => response.json())
    .then((data) => {
      return data.map((iceCream) => {
        return {
          id: iceCream.id,
          flavor: iceCream.flavor,
          pictureUrl: getPictureUrl(iceCream),
          isFavorite: isFavorite(iceCream.id),
        };
      });
    });
}

export function fetchDetails(id) {
  return fetch(`${baseUrl}/icecreams/${id}`)
    .then((response) => response.json())
    .then((data) => {
      return {
        ...data,
        pictureUrl: getPictureUrl(data),
        isFavorite: isFavorite(data.id),
      };
    });
}
