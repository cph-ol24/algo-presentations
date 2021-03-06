import React from "react";
import { Presentation, Slide, DropDownNav } from "react-presents";

import TitleSlide from "./slides/TitleSlide";
import IntroSlide from "./slides/IntroSlide";
import PartitioningSlide from "./slides/PartitioningSlide";
import SortingCodeSlide from "./slides/SortingCodeSlide";
import PerformanceSlide from "./slides/PerformanceSlide";
import ImprovementsSlide from "./slides/ImprovementsSlide";
import BottomUpSlide from "./slides/BottomUpSlide";
import BottomUpCodeSlide from "./slides/BottomUpCodeSlide";
import EndSlide from "./slides/EndSlide";

const slides = [
  TitleSlide,
  IntroSlide,
  PartitioningSlide,
  SortingCodeSlide,
  PerformanceSlide,
  ImprovementsSlide,
  BottomUpSlide,
  BottomUpCodeSlide,
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
