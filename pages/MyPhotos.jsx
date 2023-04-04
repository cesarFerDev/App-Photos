import { useEffect } from "react";
import { Footer } from "../components/Footer";
import { NavBar } from "../components/NavBar";
import { Paginator } from "../components/Paginator";
import { Photo } from "../components/Photo";
import { SearchBar } from "../components/SearchBar";
import { useDispatch, useSelector } from "react-redux";
import { loadFavPhotos } from "../features/favPhotos/FavPhotosSlice";
import { FormControl, InputLabel, MenuItem  } from "@mui/material";
import Select from '@mui/material/Select';

export const MyPhotos = (props) => {

    const dispatch = useDispatch();
    const favPhotosState = useSelector(state => state.favPhotos);
    //let favPhotosArray = favPhotosState.favData;

    const getFavPhotos = () => {
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

    let localStorageData = getFavPhotos();

    useEffect(() => {
        dispatch(loadFavPhotos(localStorageData));
    },[favPhotosState.favData, dispatch, localStorageData]);

    const changeSelectHandler = (event) => {
        if (event.target.value !== "Sort by") {
            const filterBy = event.target.value;
            const sortedArray = [...favPhotosState.favData];
            sortedArray.sort((a, b) => b[filterBy] - a[filterBy]);
            const sortedArrayData = {data: sortedArray};
            const sortedArrayToString = JSON.stringify(sortedArrayData);
            localStorage.setItem("favoritePhotos", sortedArrayToString);
            window.location.reload();
        }
    }

    let content = [];
    console.log(favPhotosState.favData)
    favPhotosState.favData.forEach((photo) => {
        content.push(
            <>
            <Photo photoInfo={photo} fav={true}/>
            </>
        );
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