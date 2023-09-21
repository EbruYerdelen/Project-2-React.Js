import TwitterIcon from "./assets/TwitterIcon.png";
import FacebookIcon from "./assets/FacebookIcon.png";
import InstagramIcon from "./assets/InstagramIcon.png";
import GitHubIcon from "./assets/GitHubIcon.png";

export default function Last() {
  return (
    <div className="Icons">
      <div>
        <a
          href="https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoidHIifQ%3D%3D%22%7D"
          target="_blank" rel="noreferrer"
        >
          <img src={TwitterIcon}></img>
        </a>
      </div>
      <div>
        <a href="https://tr-tr.facebook.com/" target="_blank" rel="noreferrer">
          <img src={FacebookIcon}></img>
        </a>
      </div>
      <div>
        <a href="https://www.instagram.com/ebru.yerd/" target="_blank" rel="noreferrer">
          <img src={InstagramIcon}></img>
        </a>
      </div>
      <div>
        <a href="https://github.com/EbruYerdelen" target="_blank" rel="noreferrer">
          <img src={GitHubIcon}></img>
        </a>
      </div>
    </div>
  );
}
