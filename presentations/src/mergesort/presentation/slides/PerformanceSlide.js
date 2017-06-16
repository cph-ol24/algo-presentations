import React from "react";
import { ContentSlide, Step } from "react-presents";

export default () => (
  <ContentSlide>
    <h1>Mergesort <small>performance</small></h1>

    <div>
      <table className="table">
        <thead>
          <tr>
            <td />
            <td>Insertionsort</td>
            <td>Mergesort</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1.000</td>
            <td>instant</td>
            <td>instant</td>
          </tr>
          <tr>
            <td>1.000.000</td>
            <td>2.8 timer</td>
            <td>1 sekund</td>
          </tr>
          <tr>
            <td>1.000.000.000</td>
            <td>317 år</td>
            <td>18 minutter</td>
          </tr>
        </tbody>
      </table>
    </div>

    <Step index={1}>
      <ul>
        <li>Mergesort bruger <code>N*lg(N)</code> compares</li>
        <li>Mergesort bruger <code>6N*lg(N)</code> array access</li>
        <Step index={2}>
          <li>Hvilket giver <code>O(N*lg(N))</code></li>
        </Step>
      </ul>
    </Step>

  </ContentSlide>
);
