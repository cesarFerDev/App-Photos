


export const Photo = (props) => {

    return (
        <div className="photo"> 
            <img src={props.src}/>
            {props.type === "Collection" ? <button>Coraçao</button> : <button>Remove</button>}
            <button>Descargar</button>
        </div>
    );
};