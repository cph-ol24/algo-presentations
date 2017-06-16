import React from "react";
import { ContentSlide, Step } from "react-presents";

export default () => (
  <ContentSlide>
    <h1>Quicksort <small>performance</small></h1>

    <div>
      <table className="table">
        <thead>
          <tr>
            <td />
            <td>Insertionsort</td>
            <td>Mergesort</td>
            <td>Quicksort</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1.000</td>
            <td>instant</td>
            <td>instant</td>
            <td>instant</td>
          </tr>
          <tr>
            <td>1.000.000</td>
            <td>2.8 timer</td>
            <td>1 sekund</td>
            <td>0.65 sekunder</td>
          </tr>
          <tr>
            <td>1.000.000.000</td>
            <td>317 år</td>
            <td>18 minutter</td>
            <td>12 minutter</td>
          </tr>
        </tbody>
      </table>
    </div>

    <Step index={1}>
      <ul>
        <li>Bestcase: <code>N*lg(N)</code></li>
        <li>Worstcase: <code>0.5N^2</code></li>
        <li>
          Average: <code>1.39N*lg(N)</code><br />
          <small>Hvilket er højere end mergesort, men stadig hurtigere</small>
        </li>
      </ul>
    </Step>

  </ContentSlide>
);
