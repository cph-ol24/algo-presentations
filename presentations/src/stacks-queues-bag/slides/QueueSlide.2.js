import React from "react";
import { ContentSlide, Step } from "react-presents";
import CodeMirror from "react-codemirror";

import * as CodeSamples from "./code/queue-linkedlist.js";

export default () => (
  <ContentSlide>
    <div>
      <h1>Queues <small>Linkedlist</small></h1>

      <Step index={1}>
        <div style={{ marginBottom: 20 }}>
          <h2>dequeue <small>Samme kode som stack's pop()</small></h2>

          <CodeMirror
            value={CodeSamples.dequeue.trim()}
            options={{ mode: "javascript", theme: "neat" }}
          />
        </div>
      </Step>

      <Step index={2}>
        <div style={{ marginBottom: 20 }}>
          <h2>enqueue</h2>
          <ul style={{ marginBottom: 20 }}>
            <li>Vi er nødt til at gemme en reference til last</li>
          </ul>

          <Step index={3}>
            <CodeMirror
              value={CodeSamples.enqueue.trim()}
              options={{ mode: "javascript", theme: "neat" }}
            />
          </Step>
        </div>
      </Step>
    </div>
  </ContentSlide>
);
