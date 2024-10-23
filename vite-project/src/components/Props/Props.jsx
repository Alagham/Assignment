import Profile from "../../components/Reusable/Reuseable"; 
import Hamzah from "../../assets/prop-img.jpg"; 
import Faruk from "../../assets/Fuad-img.jpg";
import Gustavo from "../../assets/Rash-img.jpg";
import "./Props.css"


const Props = () => {
  return (
    <div className="cards">
      <Profile 
        Image={Hamzah} 
        Fullname="Full name: Hamzah Alagbe" 
        Occupation="Occupation: Software Developer"
        Stack="Stack: Frontend Developer"
        Languages="Languages: Html, Css, javascript,React"
        Location="Location: Lagos, Nigeria"
        Styles="Styles1"
      />

      <Profile 
        Image={Faruk} 
        Fullname="Full name: Faruq Adedokun" 
        Occupation="Occupation: Software Developer"
        Stack="Stack: Backend Developer"
        Languages="Languages:  Html, Css, javascript,React"
        Location="Location: Lagos, Nigeria"
        Styles="Styles2"
      />

      <Profile 
        Image={Gustavo} 
        Fullname="Full name: Rasheedah Gustavo" 
        Occupation="Occupation: Software Developer"
        Stack="tack: fullStack Developer"
        Languages="Languages:  Html, Css, javascript,React."
        Location="Location: Lagos, Nigeria"
        Styles="Styles3"
      />
    </div>
  );
};

export default Props;
