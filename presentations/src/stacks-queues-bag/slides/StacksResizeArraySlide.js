import React from "react";
import { ContentSlide, Step } from "react-presents";
import CodeMirror from "react-codemirror";

import * as CodeSamples from "./code/array-resize.js";

export default () => (
  <ContentSlide>
    <h1>Resizing array</h1>

    <ul style={{ marginBottom: 20 }}>
      <li>Vi kender som regel ikke capacity fra start</li>
      <Step index={1}>
        <li>Resize når array er fyldt</li>
      </Step>
      <Step index={2}>
        <li>Resize når array er kvart fyldt</li>
      </Step>
    </ul>

    <Step index={3}>
      <div style={{ marginBottom: 20 }}>
        <h2>resize</h2>
        <CodeMirror
          value={CodeSamples.resizer.trim()}
          options={{ mode: "javascript", theme: "neat" }}
        />
      </div>
    </Step>

    <Step index={4}>
      <div style={{ marginBottom: 20 }}>
        <h2>push</h2>

        <CodeMirror
          value={CodeSamples.push.trim()}
          options={{ mode: "javascript", theme: "neat" }}
        />
      </div>
    </Step>

    <Step index={5}>
      <div style={{ marginBottom: 20 }}>
        <h2>pop</h2>

        <CodeMirror
          value={CodeSamples.pop.trim()}
          options={{ mode: "javascript", theme: "neat" }}
        />
      </div>
    </Step>
  </ContentSlide>
);
