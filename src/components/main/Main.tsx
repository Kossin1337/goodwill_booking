import Typewriter from "./TypeWriter";
import { ParticlesBG } from "./ParticlesBG";
import CtaButton from "../cta-button/CtaButton";
import PhoneIcon from "../../icons/PhoneIcon";
import "./Main.scss";

const Main = () => {
  return (
    <section className="main-section" id="home">
      <ParticlesBG />
      {/* <div id="particles-js"></div> */}
      <div className="left-section">
        <h1 className="main-heading">Wojciech D.</h1>
        <h2 className="sub-heading sub-heading-one">Korepetycje z Matematyki</h2>
        <h2 className="sub-heading sub-heading-two">ONLINE & WARSZAWA</h2>
        <CtaButton />
        <div className="phone-box">
          <PhoneIcon />
          <h3 className="subsub-heading">+48 601 359 229</h3>
        </div>
      </div>

      <div className="right-side">
        {/* <h2 className="attribute-title">Wojciech D.</h2> */}
        <img src="bg3.png" alt="Wojciech D. korepetycje matematyka" />
        <Typewriter />
        <div className="attributes">
          <h3 className="attribute">Pasjonat Matematyki</h3>
          <h3 className="attribute">10 lat doświadczenia</h3>
        </div>
      </div>
    </section>
  );
};

export default Main;
