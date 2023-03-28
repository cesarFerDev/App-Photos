import { Photos } from "./Photos";
import { UserForm } from "./UserForm";

export const SectionContainer = (props) => {
  if (props.sectionName === "Collection" || props.sectionName === "My Photos") {
    return (
      <div className="sectionContainer">
        <h2 className="title">{props.sectionName}</h2>
        <Photos sectionName={props.sectionName}/>
      </div>
    );
  } else if (props.sectionName === "Profile") {
    return (
      <div className="sectionContainer">
        <h2 className="title">{props.sectionName}</h2>
        <UserForm />
      </div>
    );
  } else {
    return (
      <div className="contact">
        <h1>Jekk0</h1>
        <h2>Ni idea de programar</h2>
        <h4>aiuda</h4>
      </div>
    );
  }
};
