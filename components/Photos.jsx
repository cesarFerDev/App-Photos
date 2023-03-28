import { useDispatch } from "react-redux";
//import { getPhotos } from "../features/PhotosSlice";
import { Photo } from "./Photo";
import {SearchBar} from "./SearchBar"

export const Photos = (props) => {

    const dispatch = useDispatch();

    
    //const photos = dispatch(getPhotos());
    //console.log(photos);
    

  return (
    <>
      <SearchBar />
      <div className="photosContainer">
        <Photo type={props.sectionName} />
        <Photo type={props.sectionName} />
        <Photo type={props.sectionName} />
      </div>
    </>
  );
};
