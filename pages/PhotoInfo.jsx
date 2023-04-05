import { useLocation, useNavigate } from "react-router-dom";
import { changeDescription } from "../features/favPhotos/FavPhotosSlice";
import { useDispatch } from "react-redux";

export const PhotoInfo = (props) => {
    const location = useLocation();
    const photoInfo = location.state;
    const dispatch = useDispatch();
    const nav = useNavigate();
    

    const editDescriptionSubmitHandler = (event) => {
        event.preventDefault();
        const newDescription = event.target.description.value;
        dispatch(changeDescription({id: photoInfo.id, description: newDescription}))
    }

    const returnClickHandler = (event) => {
        nav('/my-photos');
    }

    return (
        <>
        <div className="background-modal">
            <div className="modal-container">
                <button onClick={returnClickHandler} className="return">Go Back</button>
                <img src={photoInfo.urlThumb} alt="Foto" height={300} width={350}/>
                <div className="info-row">
                    <label><h4>Width:</h4></label>
                    <input className="data-field" type="text" value={photoInfo.width} readOnly="readonly" contentEditable={false}/>
                    <label><h4>Height:</h4></label>
                    <input className="data-field" type="text" value={photoInfo.height} readOnly="readonly" contentEditable={false}/>
                </div>
                <div className="info-row">
                    <label><h4>Date Added:</h4></label>
                    <input className="data-field" type="text" value={photoInfo.date.toString().slice(0,10)} readOnly="readonly" contentEditable={false}/>
                    <label><h4>Likes:</h4></label>
                    <input className="data-field" type="text" value={photoInfo.likes} readOnly="readonly" contentEditable={false}/>
                </div>
                <form className="photo-description" onSubmit={editDescriptionSubmitHandler}>
                    <label htmlFor="description"></label><h4>Description:</h4>
                    <input name="description" className="description" type="text" defaultValue={photoInfo.description !== null ? photoInfo.description : "Edit Description"} contentEditable={true}/>
                    <button className="edit-button">Apply Changes</button>
                </form>
            </div>
        </div>
        
        </>
    );
};