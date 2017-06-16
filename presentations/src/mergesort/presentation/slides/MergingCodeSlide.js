import React from "react";
import { ContentSlide } from "react-presents";
import CodeMirror from "react-codemirror";

import * as CodeSamples from "./code/merging.js";

export default () => (
  <ContentSlide>
    <h1>Merge <small>code</small></h1>

    <CodeMirror
      value={CodeSamples.merge.trim()}
      options={{ mode: "javascript", theme: "neat" }}
    />

  </ContentSlide>
);
