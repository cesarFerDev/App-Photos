


export const addPhotoToLocalStorage = (photo) => {
  let photosArrayInLocalStorage = readLocalStorage();
  let photosArrayUpdatedToString = JSON.stringify({
    data: [photo]
  }); //Estado inicial por si hay que crear en local Storage
  if (photosArrayInLocalStorage != null && isContained(photo) === false) {
    photosArrayInLocalStorage.data.push(photo);
    photosArrayUpdatedToString = JSON.stringify(photosArrayInLocalStorage); //Si entra en el if actualizamos el objeto a guardar
  }
  localStorage.setItem("favoritePhotos", photosArrayUpdatedToString);
};

export const readLocalStorage = () => {
  let photosArrayInLocalStorage = localStorage.getItem("favoritePhotos");
  if (photosArrayInLocalStorage != null) {
    let photosArrayToObject = JSON.parse(photosArrayInLocalStorage);
    return photosArrayToObject.data;
  }
  return [];
};

export const isContained = (photoCandidate) => {
    let photosArrayInLocalStorage = readLocalStorage();
    photosArrayInLocalStorage.forEach((photo) => {
        if (photoCandidate.id === photo.id) {
            return true;
        }
    });
    return false;
};

export const deletePhotoFromLocalStorage = (photoToDelete) => {
  let photosArrayInLocalStorage = readLocalStorage();
  if (photosArrayInLocalStorage != null && isContained(photoToDelete)) {
    let photosDataFilterArray = photosArrayInLocalStorage.filter(photo => photo.id != photo.id);
    let photosArrayUpdatedToString = JSON.stringify(photosDataFilterArray);
    localStorage.setItem("favoritePhotos", photosArrayUpdatedToString);
  }
};
