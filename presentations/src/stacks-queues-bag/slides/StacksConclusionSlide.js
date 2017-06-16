import React from "react";
import { ContentSlide } from "react-presents";

export default () => (
  <ContentSlide>
    <div>
      <h1>Stacks <small>Konklusion</small></h1>

      <b>Linkedlist</b>
      <ul>
        <li>Større forbrug af memory (N40 bytes)</li>
        <li>Konstant i worst</li>
        <li>Langsommere pga. references</li>
      </ul>

      <b>Resizing array</b>
      <ul>
        <li>Mindre forbrug af bytes (N32 Bytes ved fyldt)</li>
        <li>Hurtigere pga. array lookups</li>
        <li>Har en langsommere worst</li>
      </ul>
    </div>
  </ContentSlide>
);
