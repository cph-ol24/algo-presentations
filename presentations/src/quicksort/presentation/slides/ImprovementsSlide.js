import React from "react";
import { ContentSlide, Step } from "react-presents";

export default () => (
  <ContentSlide>
    <h1>Quicksort <small>improvements</small></h1>

    <Step index={1}>
      <div style={{ marginBottom: 20 }}>
        <h2>Cutoff</h2>

        <ul>
          <li>Insertionsort er hurtigere end quicksort ved mindre arrays</li>
          <li>Skift til insertionsort ved mindre arrays</li>
        </ul>
      </div>
    </Step>
  </ContentSlide>
);
