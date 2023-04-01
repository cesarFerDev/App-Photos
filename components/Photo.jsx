import { useDispatch } from 'react-redux';
import likedBtn from '../assets/liked-btn.png';
import notLikedBtn from '../assets/not-liked-btn.png';
import {addPhotoToLocalStorage, deletePhotoFromLocalStorage} from '../auxfunctions/localStorage'
import { favToggle } from '../features/photos/PhotosSlice'

export const Photo = (props) => {

    const dispatch = useDispatch();

    let likeIcon = notLikedBtn;
    const likeButtonClickHandler = (event) => {
        likeIcon = likedBtn;
        console.log("Click-estado antes del dispatch")
        console.log(props.photo.fav)
        dispatch(favToggle(props.photo));
        console.log("Click-estado despues del dispatch")
        console.log(props.photo.fav)

        if (props.photo.fav) {
            addPhotoToLocalStorage(props.photo);
            likeIcon = likedBtn;
        } else {
            deletePhotoFromLocalStorage(props.photo);
            //likeIcon = notLikedBtn;
        }   
    }  
    
    return (
        <div className="photo"> 
            <img src={props.photo.urls.regular}/>
            <button onClick={likeButtonClickHandler} className="photoLikeBtn"><img src={likeIcon} alt="like"/></button>
        </div>
    );
};