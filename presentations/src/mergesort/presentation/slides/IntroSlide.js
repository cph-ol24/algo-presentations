import React from "react";
import { ContentSlide, Step } from "react-presents";

import MergesortImage from "./mergesort.png";

export default () => (
  <ContentSlide>
    <h1>Mergesort</h1>

    <ul style={{marginBottom:20}}>
      <Step index={1}>
        <li>En hurtig sorteringsalgoritme der gør brug af rekursion</li>
      </Step>
      <Step index={2}><li>Hvordan virker den?</li></Step>
      <Step index={3}>
        <ul>
          <li>Del array op i 2 dele</li>
          <Step index={4}>
            <li>Sorter hver del</li>
          </Step>
          <Step index={5}>
            <li>Merge de 2 dele sammen</li>
          </Step>
        </ul>
      </Step>
    </ul>

    <Step index={6}>
      <img alt="" src={MergesortImage} />
    </Step>
  </ContentSlide>
);
