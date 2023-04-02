import { useDispatch } from 'react-redux';
import like from '../assets/liked-btn.png'
import notLike from '../assets/not-liked-btn.png'
import info from '../assets/info.png'
import { Modal } from './Modal';
import {addPhotoToLocalStorage, deletePhotoFromLocalStorage} from '../auxfunctions/localStorage'
import { favToggle } from '../features/photos/PhotosSlice'

export const Photo = (props) => {

    const dispatch = useDispatch();
    let iconImg = notLike;
    if (props.photoInfo.fav) {
        iconImg = like;
    }

    const likeButtonClickHandler = (event) => {
        
        console.log("Click-estado antes del dispatch")
        console.log(props.photoInfo.fav);
        dispatch(favToggle(props.photoInfo));
        console.log("Click-estado despues del dispatch")
        console.log(props.photoInfo.fav);

        if (props.photoInfo.fav) {
            addPhotoToLocalStorage(props.photoInfo);
        } else {
            deletePhotoFromLocalStorage(props.photoInfo);
        }   
    }  

    /*let visible = false;
    let display = "none"
    const infoButtonClickHandler = (event) => {
        visible = !visible;
        console.log(visible)
        if (visible) {
            display = "block"
        } else {
            display = "none"
        }
        console.log(display)
    }*/
    
    return (
        
        <div className="photo"> 
            <img src={props.photoInfo.urlThumb} alt="foto"/>
            <button onClick={likeButtonClickHandler} className="favIcon"><img src={iconImg} alt=":("/></button>
            {/*<button onClick={infoButtonClickHandler} className="infoIcon"><img src={info} alt=":("/></button>*/}
        </div>
        
    );
};