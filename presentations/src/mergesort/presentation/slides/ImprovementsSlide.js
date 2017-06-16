import React from "react";
import { ContentSlide, Step } from "react-presents";

export default () => (
  <ContentSlide>
    <h1>Mergesort <small>improvements</small></h1>

    <Step index={1}>
      <div style={{ marginBottom: 20 }}>
        <h2>Cutoff</h2>

        <ul>
          <li>Insertionsort er hurtigere end mergesort ved mindre arrays</li>
          <li>Skift til insertionsort ved mindre arrays</li>
        </ul>
      </div>
    </Step>

    <Step index={2}>
      <div style={{ marginBottom: 20 }}>
        <h2>Tjek om allerede sorteret</h2>

        <ul>
          <li>Man behøver ikke at sortere hvis det allerede er sorteret</li>
          <li><code>{`if (result[mid-1] < result[mid]) return`}</code></li>
        </ul>
      </div>
    </Step>
  </ContentSlide>
);
