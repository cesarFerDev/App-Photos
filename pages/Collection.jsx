import { NavBar } from "../components/NavBar";
import { Paginator } from "../components/Paginator";
import { Photo } from "../components/Photo";
import { SearchBar } from "../components/SearchBar";


export const Collection = (props) => {

    const renderPhotos = () => {

    };

    return (
        <>
        <NavBar />
        <div className="sectionContainer">
            <SearchBar/>
            {renderPhotos}
            <div className="photosContainer">
                <Photo section="Collection"/>
                <Photo section="Collection"/>
                <Photo section="Collection"/>
                <Photo section="Collection"/>
                <Photo section="Collection"/>
                <Photo section="Collection"/>
                <Photo section="Collection"/>
                <Photo section="Collection"/>
                <Photo section="Collection"/>
            </div>
        </div>
        <Paginator/>
        <footer className="footer">
            <h4>@Jekk0 2023</h4>
        </footer>
        </>
    );
};