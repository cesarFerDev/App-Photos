import { SideBar } from "../components/SideBar";
import { SectionContainer } from "../components/SectionContainer";


export const Page = (props) => {

    return (
        <>
        <SideBar />
        <SectionContainer sectionName={props.name}/>
        </>
    );
};