import like from '../assets/liked-btn.png'
import notLike from '../assets/not-liked-btn.png'
import remove from '../assets/remove.png'
import info from '../assets/info.png'
import download from '../assets/download.png'
import {addPhotoToLocalStorage, deletePhotoFromLocalStorage} from '../auxfunctions/localStorage'
import { useDispatch } from 'react-redux';
import { favToggle } from '../features/photos/PhotosSlice'
import { useNavigate } from 'react-router-dom';
import { addPhoto, deletePhoto } from '../features/favPhotos/FavPhotosSlice'
import { saveAs } from "file-saver";


export const Photo = (props) => {

    const dispatch = useDispatch();
    const nav = useNavigate();
    
    const likeButtonClickHandler = (event) => {

        dispatch(favToggle(props.photoInfo)); //Cambio de fav por cada click

        let localFav = !props.photoInfo.fav; //Lectura del valor actualizado (de forma local porque al realizar la acción con dispatch no puedo
                                             //leer el dato de forma inmediata ni usar useSelector dentro de una función)
        
        if (props.fav) { //Esta prop es mi forma de reconocer si la foto viene de la sección my-photos
            localFav = false;
        }

        if (localFav) { //Si la foto es fav, añado a localStorage y al estado de las fotos favoritas
            addPhotoToLocalStorage(props.photoInfo);
            dispatch(addPhoto(props.photoInfo));
        } else { //Si no, borro de localStorage y del estado
            deletePhotoFromLocalStorage(props.photoInfo); 
            dispatch(deletePhoto(props.photoInfo));
        }
    };
    
    const infoButtonClickHandler = (event) => {
        nav('/photo-info', {state: props.photoInfo});
    }

    const downloadClickHandler = (event) => {
        saveAs(props.photoInfo.urlFull, props.photoInfo.id);
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
            <button onClick={likeButtonClickHandler} className="favIcon"><img src={iconImg} alt="Add/Remove Icon"/></button>
            {props.fav && <button onClick={infoButtonClickHandler} className="infoIcon"><img src={info} alt="Info Icon"/></button>}
            {props.fav && <button onClick={downloadClickHandler} className="downloadIcon"><img src={download} alt="Download Icon"/></button>}
        </div>
    );
};

 
    