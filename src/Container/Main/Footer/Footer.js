import React from "react";
import CSS from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faMapMarker,
  faEnvelope,
  faArrowLeft,
  faArrowRight
} from "@fortawesome/free-solid-svg-icons";

const importAll = r => {
  return r.keys().map(r);
};

const images = importAll(
  require.context("../../../Images/", false, /\.(png|jpe?g|svg)$/)
);
const incIdx = (setIdx, idx) => {
  setIdx((idx + 1) % images.length);
};
const decIdx = (setIdx, idx) => {
  idx === 0 ? setIdx(images.length - 1) : setIdx(idx - 1);
};
export default props => {
  let [idx, setIdx] = React.useState(0);
  const timeOut = setTimeout(() => incIdx(setIdx, idx), 10000);
  return (
    <React.Fragment>
      <div className={CSS.main} ref={props.refr}>
        <div>
          <h1 className={CSS.Title}>
            <span>CONTACT US</span>
          </h1>
          <div className={CSS.splitIconText}>
            <FontAwesomeIcon icon={faPhone} />
            <div>
              <h4>Office# 2A, Ghulam Rasool Plaza</h4>
              <h4>Bluearea Islamabad</h4>
            </div>
          </div>

          <div className={CSS.splitIconText}>
            <FontAwesomeIcon icon={faMapMarker} />
            <div>
              <h4>
                <a href="mailto:info@dopment.com" target="_blank">
                  info@dopment.com
                </a>
              </h4>
              <p>We reply within 24 hours</p>
            </div>
          </div>

          <div className={CSS.splitIconText}>
            <FontAwesomeIcon icon={faEnvelope} />
            <div>
              <h4>
                <a href="tel:+923305287014" target="_blank">
                  0330 5287014
                </a>
              </h4>
              <p>
                <a href="https://wa.me/923335282434" target="_blank">
                  WhatsApp: 0333 5282434
                </a>
              </p>
            </div>
          </div>
        </div>

        <div>
          <h1 className={CSS.Title}>
            <span>SERVICES</span>
          </h1>
          <ul className={CSS.bulletList}>
            <li>Website Development</li>
            <li>Application Devleopment</li>
            <li>Branding Design</li>
            <li>Content Management</li>
            <li>Marketing & Digital</li>
          </ul>
        </div>

        <div>
          <h1 className={CSS.Title}>
            <span>CLIENTS</span>
          </h1>
          <div className={CSS.imgdiv}>
            <div className={CSS.buttons}>
              <FontAwesomeIcon
                icon={faArrowLeft}
                onClick={() => decIdx(setIdx, idx)}
              />
              <FontAwesomeIcon
                icon={faArrowRight}
                onClick={() => incIdx(setIdx, idx)}
              />
            </div>
            <img src={images[idx]} className={CSS.image} />
          </div>
        </div>
      </div>
      <div className={CSS.lastRow}>
        <div className={CSS.LastLeft}>
          All Rights Reserved, DOPMENT 2020, Muhammad Hamza 2020
        </div>
        <div className={CSS.LastRight}>
          <a
            href="https://www.facebook.com/dopment"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
          <a
            href="https://www.instagram.com/dopment"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          <a
            href="https://www.twitter.com/dopment"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
          <a
            href="https://www.linkedin.com/dopment"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://mzo9400.github.io"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
    </React.Fragment>
  );
};
