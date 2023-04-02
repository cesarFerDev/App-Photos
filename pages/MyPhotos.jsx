import { useEffect } from "react";
import { Footer } from "../components/Footer";
import { NavBar } from "../components/NavBar";
import { Paginator } from "../components/Paginator";
import { Photo } from "../components/Photo";
import { SearchBar } from "../components/SearchBar";

export const MyPhotos = (props) => {

    const loadFavPhotos = () => {
        const localStorageData = localStorage.getItem("favoritePhotos");
        if (localStorageData !== null) {
            let result = [];
            let localStorageDataToObj = JSON.parse(localStorageData);
            localStorageDataToObj.data.forEach(photo => {
                result.push(photo);
            });
            return result;
        } else {
            return [];
        }
    };
    let dataToRender = loadFavPhotos();
    useEffect(() => {
        dataToRender = loadFavPhotos();
    });

    let content = [];
    console.log(dataToRender)
    dataToRender.forEach((photo) => {
        content.push(
            <>
            <Photo photoInfo={photo} />
            </>
        );
    });

    return (
        <>
        <NavBar />
        <div className="sectionContainer">
            <SearchBar />
            <div className="photosContainer">
                {content}
            </div>
        </div>
        <Paginator />
        <Footer />
        </>
    );
};