import "./Reuseable.css";

function Profile({ Image, Fullname, Occupation, Stack,Languages, Location, Styles }) {
  return (
    <div className={`Prof-details ${Styles}`}>
      <img id="cardimg" src={Image} alt={Fullname} />
      <h2>{Fullname}</h2>
      <p>{Occupation}</p>
      <p>{Stack}</p>
      <p>{Languages}</p>
      <p>{Location}</p>
    </div>
  );
}

export default Profile;
