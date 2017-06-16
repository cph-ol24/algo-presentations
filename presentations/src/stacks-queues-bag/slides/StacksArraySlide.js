import React from "react";
import { ContentSlide, Step } from "react-presents";
import CodeMirror from "react-codemirror";

import * as CodeSamples from "./code/array.js";

export default () => (
  <ContentSlide>
    <h1>Stacks <small>Array</small></h1>

    <Step index={1}>
      <div style={{marginBottom: 20}}>Capacity er nødt til at være kendt</div>
    </Step>

    <Step index={2}>
      <div style={{marginBottom: 20}}>
        <h2>constructor</h2>
        <CodeMirror
          value={CodeSamples.construct.trim()}
          options={{ mode: "javascript", theme: "neat" }}
        />
      </div>
    </Step>

    <Step index={3}>
      <div style={{marginBottom: 20}}>
        <h2>push</h2>
        <CodeMirror
          value={CodeSamples.push.trim()}
          options={{ mode: "javascript", theme: "neat" }}
        />
      </div>
    </Step>

    <Step index={4}>
      <div style={{marginBottom: 20}}>
        <h2>pop</h2>

        <CodeMirror
          value={CodeSamples.pop.trim()}
          options={{ mode: "javascript", theme: "neat" }}
        />
      </div>
    </Step>

    <Step index={5} maxIndex={6}>
      <div style={{marginBottom: 20}}>
        <h2>Fjern reference til string</h2>

        <CodeMirror
          value={CodeSamples.popNullClear.trim()}
          options={{ mode: "javascript", theme: "neat" }}
        />
      </div>
    </Step>
  </ContentSlide>
);
