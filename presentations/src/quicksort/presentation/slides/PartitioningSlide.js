import React from "react";
import { ContentSlide, Step } from "react-presents";
import CodeMirror from "react-codemirror";

import * as CodeSamples from "./code/partition.js";

export default () => (
  <ContentSlide>
    <h1>Partitioning</h1>
    <ul style={{ marginBottom: 20 }}>
      <Step index={1}>
        <li>
          Når man arbejder med quicksort, så benytter man sig af partitioning.
        </li>
      </Step>
      <Step index={2}><li>Hvad betyder det?</li></Step>
      <Step index={3}>
        <ul>
          <li>
            <code>entry[j]</code> er på sin position
          </li>
          <li>
            Der er ingen entries højere til venstre for <code>j</code>
          </li>
          <li>
            Der er ingen entries lavere til højre for<code>j</code>
          </li>
        </ul>
      </Step>
    </ul>
    <Step index={4}>
      <CodeMirror
        value={CodeSamples.standard.trim()}
        options={{ mode: "javascript", theme: "neat" }}
      />
    </Step>
  </ContentSlide>
);
