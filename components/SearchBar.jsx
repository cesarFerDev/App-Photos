import lupa from "../assets/lupita.PNG";
import { useDispatch } from 'react-redux';
import { setFilterSearch, clearPhotos } from '../features/photos/PhotosSlice';


export const SearchBar = (props) => {

    const dispatch = useDispatch();
    //let searchString = "";

    const searchSubmitHandler = (event) => {
        event.preventDefault();
        //searchString = event.target.search.value;
        dispatch(clearPhotos());
        dispatch(setFilterSearch(event.target.search.value));
    }

    return (
        <form onSubmit={searchSubmitHandler} className="searchContainer" action="">
            <input name="search" className="searchBar" type="text" placeholder="Search"/>
            <button className="searchBtn" type="submit"><img src={lupa} alt="Search" /></button>
        </form>
    )
}