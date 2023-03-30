import like from '../assets/like.png';
import remove from '../assets/remove.png';

export const Photo = (props) => {
    
    const likeButtonClickHandler = (event) => {
        const photo = props.content;
        const localStorageLikedPhotos = localStorage.getItem("favoritePhotos");
        if (localStorageLikedPhotos == null) {
            const favPhotosArrayToString = JSON.stringify({
                data: [photo]
            });
            localStorage.setItem("favoritePhotos", favPhotosArrayToString);
        } else {
            const favPhotosArray = JSON.parse(localStorageLikedPhotos);
            const incluido = favPhotosArray.data.includes(photo); //Por que no funciona?
            if (incluido == false) {
                favPhotosArray.data.push(photo);
                const updatedFavPhotosArrayToString = JSON.stringify(favPhotosArray);
                localStorage.setItem("favoritePhotos", updatedFavPhotosArrayToString);
            }
        }
            
    }  
    
    return (
        <div className="photo"> 
            <img src={props.content.urls.regular}/>
            {props.section === "Collection" ? <button onClick={likeButtonClickHandler} className="photoLikeBtn"><img src={like} alt="like"/></button> : <button className="photoRemoveBtn"><img src={remove} alt="like"/></button>}
        </div>
    );
};