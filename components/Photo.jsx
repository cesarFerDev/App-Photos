import like from '../assets/liked-btn.png'
import notLike from '../assets/not-liked-btn.png'
import remove from '../assets/remove.png'
import info from '../assets/info.png'
import { Modal } from './Modal';
import {addPhotoToLocalStorage, deletePhotoFromLocalStorage} from '../auxfunctions/localStorage'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { favToggle } from '../features/photos/PhotosSlice'
import { useNavigate } from 'react-router-dom';


export const Photo = (props) => {

    const dispatch = useDispatch();
    const nav = useNavigate();
    //const photoState = useSelector(state => state.photos);
    
    
    const likeButtonClickHandler = (event) => {
        // console.log("ESTADO ANTES DEL DISPATCH")
        // console.log(props.photoInfo.fav)
        dispatch(favToggle(props.photoInfo));
        // console.log("ESTADO DESPUÉS DEL DISPATCH")
        // console.log(props.photoInfo.fav)
        let localFav = !props.photoInfo.fav;
        
        if (props.fav) {
            localFav = false;
        }

        if (localFav) {
            addPhotoToLocalStorage(props.photoInfo);
        } else {
            deletePhotoFromLocalStorage(props.photoInfo);
            if (props.fav) {
                window.location.reload();
            }   
        }
        
    };
    
    const infoButtonClickHandler = (event) => {
        nav('/photo-info', {state: props.photoInfo});
    }

    let iconImg = notLike;
    if (props.photoInfo.fav) {
        iconImg = like;
    }
    if (props.fav) {
        iconImg = remove;
    }

    return (
        <div className="photo"> 
            <img src={props.photoInfo.urlRegular} alt="foto"/>
            <button onClick={likeButtonClickHandler} className="favIcon"><img src={iconImg} alt=":("/></button>
            {props.fav && <button onClick={infoButtonClickHandler} className="infoIcon"><img src={info} alt=":("/></button>}
        </div>
    );
};

 
    