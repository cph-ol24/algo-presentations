import React from "react";
import { ContentSlide } from "react-presents";
import CodeMirror from "react-codemirror";

import * as CodeSamples from "./code/buttomup.js";

export default () => (
  <ContentSlide>
    <h1>Mergesort <small>bottom-up code</small></h1>

    <CodeMirror
      value={CodeSamples.bottomup.trim()}
      options={{ mode: "javascript", theme: "neat" }}
    />
  </ContentSlide>
);
