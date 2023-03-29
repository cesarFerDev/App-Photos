import lupa from "../assets/lupita.PNG";

export const SearchBar = (props) => {
    return (
        <form className="searchContainer" action="">
            <input className="searchBar" type="text" placeholder="Search"/>
            <button className="searchBtn" type="submit"><img src={lupa} alt="Search" /></button>
        </form>
    )
}