import React from "react";
import { ContentSlide, Step } from "react-presents";
import CodeMirror from "react-codemirror";

import * as CodeSamples from "./code/linkedlist.js";

export default () => (
  <ContentSlide>
    <h1>Stacks <small>Linkedlist</small></h1>

    <Step index={1}>
      <div style={{marginBottom: 20}}>Simpel at implementere</div>
    </Step>

    <Step index={2}>
      <div>
        <h2>push</h2>
        <CodeMirror
          value={CodeSamples.push.trim()}
          options={{ mode: "javascript", theme: "neat" }}
        />
      </div>
    </Step>

    <Step index={3} maxIndex={4}>
      <div>
        <h2>pop</h2>

        <CodeMirror
          value={CodeSamples.pop.trim()}
          options={{ mode: "javascript", theme: "neat" }}
        />
      </div>
    </Step>
  </ContentSlide>
);
