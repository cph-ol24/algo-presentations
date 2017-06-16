import React from "react";
import { Presentation, Slide, DropDownNav } from "react-presents";

import TitleSlide from "./slides/TitleSlide";
import EndSlide from "./slides/EndSlide";
import StacksSlide from "./slides/StacksSlide";
import StacksLinkedListSlide from "./slides/StacksLinkedListSlide";
import StacksArraySlide from "./slides/StacksArraySlide";
import StacksResizeArraySlide from "./slides/StacksResizeArraySlide";
import StacksArraySlide2 from "./slides/StacksArraySlide.2";
import StacksConclusionSlide from "./slides/StacksConclusionSlide";
import BagsSlide from "./slides/BagsSlide";
import QueueSlide from "./slides/QueueSlide";
import QueueSlide2 from "./slides/QueueSlide.2";

const slides = [
  TitleSlide,
  StacksSlide,
  StacksLinkedListSlide,
  StacksArraySlide,
  StacksResizeArraySlide,
  StacksArraySlide2,
  StacksConclusionSlide,
  BagsSlide,
  QueueSlide,
  QueueSlide2,
  EndSlide
];

const options = slides
  .map((slide, index) => ({
    label: slide.title,
    value: index
  }))
  .filter(option => option.label);

export default () => (
  <Presentation>
    {slides
      .map((Component, index) => <Slide component={Component} key={index} />)
      .concat(<DropDownNav key="DropDownNav" options={options} />)}
  </Presentation>
);
