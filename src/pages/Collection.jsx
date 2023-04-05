import { NavBar } from "../components/NavBar";
import { Paginator } from "../components/Paginator";
import { Photo } from "../components/Photo";
import { SearchBar } from "../components/SearchBar";
import { Footer } from "../components/Footer";
import { useEffect } from "react";
import { loadPhotos } from "../features/photos/PhotosSlice";
import { useDispatch, useSelector } from "react-redux";



export const Collection = (props) => {

    const photosState = useSelector(state => state.photos);
    const filterPhotosString = useSelector(state => state.photos.filter);
    const dispatch = useDispatch();

    useEffect(() => { //Sólo llamar a la API si el status del estado es inactivo
        if (photosState.status === "idle") {
          dispatch(loadPhotos(filterPhotosString));
        };
      }, [photosState.status, photosState.filter, dispatch]);

      let content;
      if (photosState.status === "loading") {
        content = "Loading";
      } else if (photosState.status === "fulfilled") { //Cuando tengamos los datos
        const photosArray = photosState.data;
        if (photosArray) {
          content = [];
          photosArray.forEach((photo) => { //Guardamos en content los datos de la API pasados a jsx con componente foto
                                           //y sus datos pasados como prop (esta Mickey herramienta nos servirá en el futuro)
            content.push(
              <>
                <Photo photoInfo={photo}/> 
              </>
            );
          });
        }
      } else {
        content = "Error";
      }

    const loadClickHandler = (event) => {  //Cutrada, para cargar más fotos random puedes entrar cadena vacía en search y clicar un botón
      window.location.reload();
    }

    return (
        <>
        <NavBar />
        <div className="sectionContainer">
            <SearchBar/>
            <div className="photosContainer">
                {content}
            </div>
            <button className="load-button" onClick={loadClickHandler}>Load More Photos</button>
        </div>
        
        <Footer/>
        </>
    );
};