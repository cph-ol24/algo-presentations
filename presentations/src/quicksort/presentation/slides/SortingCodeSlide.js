import React from "react";
import { ContentSlide } from "react-presents";
import CodeMirror from "react-codemirror";

import * as CodeSamples from "./code/sorting.js";

export default () => (
  <ContentSlide>
    <h1>Sorting <small>code</small></h1>

    <CodeMirror
      value={CodeSamples.sorting.trim()}
      options={{ mode: "javascript", theme: "neat" }}
    />

  </ContentSlide>
);
