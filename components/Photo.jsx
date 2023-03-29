import like from '../assets/like.png';
import remove from '../assets/remove.png';


export const Photo = (props) => {

    return (
        <div className="photo"> 
            <img src={props.src}/>
            {props.section === "Collection" ? <button className="photoLikeBtn"><img src={like} alt="like"/></button> : <button className="photoRemoveBtn"><img src={remove} alt="like"/></button>}
        </div>
    );
};