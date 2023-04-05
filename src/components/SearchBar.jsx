import lupa from "../assets/lupita.PNG";
import { useDispatch } from 'react-redux';
import { setFilterSearch, clearPhotos } from '../features/photos/PhotosSlice';
import { clearFavPhotos, setFavFilterSearch } from '../features/favPhotos/FavPhotosSlice';

export const SearchBar = (props) => {

    const dispatch = useDispatch();

    const searchSubmitHandler = (event) => {
        event.preventDefault();
        const filterString = event.target.search.value;
        if (props.fav) { //Elijo que acciones realizar dependiendo de la sección
            dispatch(clearFavPhotos());
            dispatch(setFavFilterSearch(filterString));
        } else {
            dispatch(clearPhotos());
            dispatch(setFilterSearch(filterString));
        }
    }

    return (
        <form onSubmit={searchSubmitHandler} className="searchContainer" action="">
            <input name="search" className="searchBar" type="text" placeholder="Search"/>
            <button className="searchBtn" type="submit"><img src={lupa} alt="Search" /></button>
        </form>
    )
}