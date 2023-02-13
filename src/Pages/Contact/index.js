import AnimatedLetters from "../../Components/AnimatedLetters";
import "./index.scss";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
const ContactPage = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "gmail",
        "template_v41jixp",
        "form.current",
        "1P4MOGAF4xGrxeNLd"
      )
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );
  };
  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={["c", "o", "n", "t", "a", "c", "t", "   ", "m", "e"]}
              idx={15}
            />
          </h1>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input type="text" name="name" placeholder="name" required />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </li>
                <li>
                  <textarea
                    type="text"
                    name="Subject"
                    placeholder="Subject"
                    required
                  ></textarea>
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="map-wrap">
          <MapContainer
            center={[52.245066283983675, 4.829807221567926]}
            zoom={13}
            scrollWheelZoom={false}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[52.245066283983675, 4.829807221567926]}>
              <Popup>Prathima Lives here</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </>
  );
};
export default ContactPage;
