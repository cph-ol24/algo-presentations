import React from "react";
import { ContentSlide, Step } from "react-presents";

import PartitioningImage from "./partition.png";

export default () => (
  <ContentSlide>
    <h1>Quicksort</h1>

    <ul style={{ marginBottom: 20 }}>
      <Step index={1}>
        <li>En hurtig sorteringsalgoritme der gør brug af rekursion</li>
      </Step>
      <Step index={1}>
        <li>Del hurtigste sorteringsalgoritme til dato</li>
      </Step>
      <Step index={2}>
        <li>Den benytter sig også af rekursion ligesom mergesort</li>
      </Step>
      <Step index={2}>
        <li>Den benytter bruger partitioning</li>
      </Step>
    </ul>

    <Step index={3}>
      <img alt="" src={PartitioningImage} />
    </Step>
  </ContentSlide>
);
