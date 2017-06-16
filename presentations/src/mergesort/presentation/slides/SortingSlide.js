import React from "react";
import { ContentSlide, Step } from "react-presents";

export default () => (
  <ContentSlide>
    <h1>Mergesort <small>sorting</small></h1>

    <ul style={{ marginBottom: 20 }}>
      <Step index={1}>
        <li>Mergesort der gør brug af rekursion</li>
      </Step>
      <Step index={2}><li>Hvordan foregår sorteringen?</li></Step>
      <Step index={3}>
        <ul>
          <li>
            <code>
              sort(Comparable[] result, Comparable[] auxiliary, int low, int high)
            </code>
          </li>
          <Step index={4}>
            <li>
              Find midten af vores array
            </li>
          </Step>
          <Step index={5}>
            <li>
              Sortere del 1 (low-mid) og del 2 (mid+1-high)
            </li>
          </Step>
          <Step index={6}>
            <li>
              Merge del 1 og del 2
            </li>
          </Step>
        </ul>
      </Step>
    </ul>
  </ContentSlide>
);
