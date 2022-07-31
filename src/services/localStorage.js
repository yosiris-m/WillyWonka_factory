const favoriteIceCreamsKey = "favoriteIceCreams";

function getFavorites() {
  const localFavorites = localStorage.getItem(favoriteIceCreamsKey);

  if (localFavorites === null) {
    return [];
  }

  return JSON.parse(localFavorites);
}

function saveFavorites(favorites) {
  localStorage.setItem(favoriteIceCreamsKey, JSON.stringify(favorites));
}

let favorites = getFavorites();

export function addToFavorites(idToAdd) {
  favorites.push(idToAdd);
  saveFavorites(favorites);
}

export function removeFromFavorites(idToRemove) {
  favorites = favorites.filter((favoriteId) => favoriteId !== idToRemove);
  saveFavorites(favorites);
}

export function isFavorite(id) {
  return favorites.includes(id);
}
