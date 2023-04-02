


export const addPhotoToLocalStorage = (photo) => {
  let photosArrayInLocalStorage = localStorage.getItem("favoritePhotos");

  if (photosArrayInLocalStorage === null) {
    
    let initialState = JSON.stringify({
      data: [photo]
    });
    localStorage.setItem("favoritePhotos", initialState);

  } else if (isContained(photo) === false) {
    
    let localStorageDataToObj = JSON.parse(photosArrayInLocalStorage);
    localStorageDataToObj.data.push(photo);
    let photosArrayUpdatedToString = JSON.stringify(localStorageDataToObj);
    localStorage.setItem("favoritePhotos", photosArrayUpdatedToString);
  }
};

/*export const readLocalStorage = () => {
  let photosArrayInLocalStorage = localStorage.getItem("favoritePhotos");
  if (photosArrayInLocalStorage != null) {
    let photosArrayToObject = JSON.parse(photosArrayInLocalStorage);
    return photosArrayToObject.data;
  } else {
    let initialState = JSON.stringify({
      data: []
    });
    localStorage.setItem("favoritePhotos", initialState);
    return [];
  };
};*/

export const isContained = (photoCandidate) => {
    let photosArrayInLocalStorage = localStorage.getItem("favoritePhotos");
    let contained = false;
    if (photosArrayInLocalStorage !== null) {
      let localStorageDataToObj = JSON.parse(photosArrayInLocalStorage);
      localStorageDataToObj.data.forEach((photo) => {
        if (photoCandidate.id === photo.id) {
          contained = true;
        }
      });
    }
    return contained;
};

export const deletePhotoFromLocalStorage = (photoToDelete) => {
  let photosArrayInLocalStorage = localStorage.getItem("favoritePhotos");

  if (photosArrayInLocalStorage !== null) {
    if (isContained(photoToDelete)) {
      let localStorageDataToObj = JSON.parse(photosArrayInLocalStorage);
      let updatedInfoAfterRemove = {data: []};
      for (let i=0; i < localStorageDataToObj.data.length; i++) {
        if (localStorageDataToObj.data[i].id !== photoToDelete.id) {
          updatedInfoAfterRemove.data.push(localStorageDataToObj.data[i]);
        }
      };
      let photosArrayUpdatedToString = JSON.stringify(updatedInfoAfterRemove);
      localStorage.setItem("favoritePhotos", photosArrayUpdatedToString);
    }
  }


  
};
