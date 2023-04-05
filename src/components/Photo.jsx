import like from '../assets/liked-btn.png'
import notLike from '../assets/not-liked-btn.png'
import remove from '../assets/remove.png'
import info from '../assets/info.png'
import {addPhotoToLocalStorage, deletePhotoFromLocalStorage} from '../auxfunctions/localStorage'
import { useDispatch } from 'react-redux';
import { favToggle } from '../features/photos/PhotosSlice'
import { useNavigate } from 'react-router-dom';
import { addPhoto, deletePhoto } from '../features/favPhotos/FavPhotosSlice'


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
    
    const infoButtonClickHandler = (event) => { //Al clicar el icono de info redirijo al "modal" y le paso la info que tiene que renderizar
        nav('/photo-info', {state: props.photoInfo});
    }

    let iconImg = notLike; //Todo esto es para seleccionar que icono renderizo
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
            {props.fav && <button onClick={infoButtonClickHandler} className="infoIcon"><img src={info} alt="Info Icon"/></button>} {/*Esta forma de renderizar de forma condicional me ha parecido muy guay y quería probarla, si vengo de my-photos muestro sino no*/}
        </div>
    );
};

 
    