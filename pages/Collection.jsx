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

    const dispatch = useDispatch();

    useEffect(() => {
        if (photosState.status === "idle") {
          dispatch(loadPhotos());
        }
      }, [photosState.status]);

      let content;
      if (photosState.status === "loading") {
        content = "Loading";
      } else if (photosState.status === "fulfilled") {
        
        if (photosState.data !== undefined) {
          content = [];
          photosState.data[0].forEach((photo) => { //EL array tiene un elemento [0] con todos los objetos de la llamada
            content.push(
              <>
                <Photo section="Collection" src={photo.urls.regular} />
              </>
            );
          });
        }
      } else {
        content = "Error";
      }

    return (
        <>
        <NavBar />
        <div className="sectionContainer">
            <SearchBar/>
            <div className="photosContainer">
                {content}
            </div>
        </div>
        <Paginator/>
        <Footer/>
        </>
    );
};