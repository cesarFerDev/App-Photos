


export const Modal = (props) => {
    
    return (
        <div className="modal" >
            <div >
                <h2>{props.info.id}</h2>
                <h2>{props.info.width}</h2>
                <h2>{props.info.height}</h2>
            </div>
        </div>
    );
}