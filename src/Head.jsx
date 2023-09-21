import myImage from "./assets/myImage.jpg";
import Mail from "./assets/Mail.png";
import linkedin from "./assets/linkedin.png";


export default function Head() {
  return (
    <div className="Head-Container">
      <img src={myImage} className="myImage" alt="Owner's Image" />
      <h1>Ebru Yerdelen</h1>
      <h2>Frontend Developer</h2>
      <h3>ebruyerdelen.website</h3>
      <div className="Btns">
        <button className="Mail">
          <a
            href="mailto:namesurname@email.com"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Mail} />
            Email
          </a>
        </button>
        <button className="Linkedin">
          <a
            href="https://www.linkedin.com/in/ebru-yerdelen-aa7866285/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={linkedin} />
            Linkedin
          </a>
        </button>
      </div>
    </div>
  );
}
