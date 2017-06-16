import React from "react";
import { ContentSlide } from "react-presents";

import BottomUpImage from "./bottomup.png";

export default () => (
  <ContentSlide>
    <h1>Mergesort <small>bottom-up</small></h1>

    <ul>
      <li>Anden implementation som ikke bruger rekursion</li>
      <li>
        Stadig samme memory som standard
        <br />
        <small>
          Ifølge
          {" "}
          <a
            target="_blank"
            href="https://stackoverflow.com/a/17417822/1514875"
            rel="noopener noreferrer"
          >
            https://stackoverflow.com/a/17417822/1514875
          </a>
          {" "}
          langsommere
        </small>
      </li>
    </ul>

    <img style={{ marginTop: 20 }} src={BottomUpImage} alt="" />F

  </ContentSlide>
);
