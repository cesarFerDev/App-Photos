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
    const getFavPhotosFromLocalStorage = () => { //Función para obtener en forma de objeto los datos de localStorage
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
    dispatch(loadFavPhotos(getFavPhotosFromLocalStorage())); //Cargo los datos de localStorage en el estado de fotos favoritas
    const favPhotosState = useSelector(state => state.favPhotos);
    const description = favPhotosState.filter;
    const [favPhotosData, setFavPhotosData] = useState(favPhotosState.favData); //Al final vimos con Héctor una forma de tener datos de forma
                                                                                //inmediata, estado local del componente(página) my-photos 

    useEffect(() => {
        let localStorageData = getFavPhotosFromLocalStorage();
        setFavPhotosData(localStorageData);
    },[favPhotosState.favData]);  //Cada vez que cambia el estado se re-renderizan las favoritas

    const changeSelectHandler = (event) => { //Creo una copia, la filtro y la vuelvo a setear con la copia
        if (event.target.value !== "Sort by") {
            const filterBy = event.target.value;
            const sortedArray = [...favPhotosData];
            sortedArray.sort((a, b) => b[filterBy] - a[filterBy]); //Esto lo vi por internet: como ordenar un array
            setFavPhotosData(sortedArray);
        }
    }

    let content = [];
    favPhotosData.forEach((photo) => { //Aquí creo que la he liado, quiero mejorar esto, la intención es sólo renderizar
                                       //las que coincidan por descripción, pero creo que si modifico descripción y luego
                                       //busco me crea dos veces porque misma foto pero diferente descripción.
                                       //Tengo que darle una vuelta a esto, no llego a la entrega lo siento.
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
                <FormControl className="select"> {/*Llegué muy tarde a descubrir cómo importar componentes de MUI, aún así no sé como controlarlos
                                                    seguramente sustituiré por select normal o intentaré sacar su potencial*/}
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