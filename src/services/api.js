const baseUrl = "https://heytrade-ww-icecreams.herokuapp.com";

function getPictureUrl(iceCream) {
  return `${baseUrl}/${iceCream.picture}`;
}

export function fetchList(search) {
  let url = `${baseUrl}/icecreams`;
  if (search) {
    url += `?q=${encodeURIComponent(search)}`;
  }
  return fetch(url)
    .then((response) => response.json())
    .then((data) => {
      return data.map((iceCream) => {
        return {
          id: iceCream.id,
          flavor: iceCream.flavor,
          pictureUrl: getPictureUrl(iceCream),
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
      };
    });
}
