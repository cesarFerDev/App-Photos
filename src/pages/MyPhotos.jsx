import { useEffect, useState } from "react";
import { Footer } from "../components/Footer";
import { NavBar } from "../components/NavBar";
import { Photo } from "../components/Photo";
import { SearchBar } from "../components/SearchBar";
import { useDispatch, useSelector } from "react-redux";
import { clearFavPhotos, loadFavPhotos} from "../features/favPhotos/FavPhotosSlice";
import { FormControl, InputLabel, MenuItem  } from "@mui/material";
import Select from '@mui/material/Select';


export const MyPhotos = (props) => {
    const getFavPhotosFromLocalStorage = () => { 
        let localStorageData = localStorage.getItem("favoritePhotos");
        let result = [];
        if (localStorageData !== null) {
            let localStorageDataToObj = JSON.parse(localStorageData);
            localStorageDataToObj.data.forEach(photo => {
                result.push(photo);
            });   
        }
        return result;
    };
    const dispatch = useDispatch();
    dispatch(loadFavPhotos(getFavPhotosFromLocalStorage())); 
    const favPhotosState = useSelector(state => state.favPhotos);
    const description = favPhotosState.filter;
    const [favPhotosData, setFavPhotosData] = useState(favPhotosState.favData); 

    useEffect(() => {
        let localStorageData = getFavPhotosFromLocalStorage();
        setFavPhotosData(localStorageData);
    },[favPhotosState.favData]);  

    const changeSelectHandler = (event) => { 
        if (event.target.value !== "Sort by") {
            const filterBy = event.target.value;
            const sortedArray = [...favPhotosData];
            sortedArray.sort((a, b) => b[filterBy] - a[filterBy]); 
            setFavPhotosData(sortedArray);
        }
    }

    let content = [];
    favPhotosData.forEach((photo) => {
        if (description === "") {
            content.push(
                <>
                <Photo photoInfo={photo} fav={true}/>
                </>
            );
        } else if (photo.description !== null && photo.description.includes(description)) {
            content.push(
                <>
                <Photo photoInfo={photo} fav={true}/>
                </>
            );
        }
    });

    
    

    return (
        <>
        <NavBar />
        <div className="sectionContainer">
            <div className="filterFav">
                <SearchBar fav={true}/>
                <FormControl className="select">
                    <InputLabel id="filterSelect">Sort by</InputLabel>
                    <Select
                        labelId="filterSelect"
                        id="filterSelect"
                        value=""
                        label="Age"
                        onChange={changeSelectHandler}
                    >
                        <MenuItem value={"date"}>Date</MenuItem>
                        <MenuItem value={"width"}>Width</MenuItem>
                        <MenuItem value={"height"}>Height</MenuItem>
                        <MenuItem value={"likes"}>Likes</MenuItem>
                    </Select>
                </FormControl>
            </div>
            
            <div className="photosContainer">
                {content}
            </div>
        </div>
        
        <Footer />
        </>
    );
};