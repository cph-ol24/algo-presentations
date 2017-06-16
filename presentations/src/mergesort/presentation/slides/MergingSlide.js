import React from "react";
import { ContentSlide, Step } from "react-presents";

import MergingImage from './merging.png'

export default () => (
  <ContentSlide>
    <h1>Merge <small>in-place</small></h1>

    <ul style={{ marginBottom: 20 }}>
      <Step index={1}>
        <li>Merging sætter 2 arrays sammen til et sorteret array</li>
      </Step>
      <Step index={2}><li>Hvordan foregår en merge?</li></Step>
      <Step index={3}>
        <ul>
          <li>
            <code>merge(Comparable[] result, Comparable[] auxiliary, int low, int mid, int high)</code>
          </li>
          <Step index={4}>
            <li>
              Vi har brug for 3 indexes
              <ul>
                <li><code>i</code> = index for del 1</li>
                <li><code>j</code> = index for del 2</li>
                <li><code>k</code> = index for positionen i <var>result</var></li>
              </ul>
            </li>
          </Step>
          <Step index={5}>
            <li>
              Loop over auxiliary arrayet
              <ul>
                <li>Compare <code>auxiliary[i]</code> og <code>auxiliary[j]</code> og flyt den laveste op i <code>result[k]</code>.</li>
                <li>Increment <code>i</code> eller <code>j</code> og <code>k</code></li>
                <li>
                  Hvis en af dele er brugt op, så kopir resten fra den anden del
                </li>
              </ul>
            </li>
          </Step>
        </ul>
      </Step>
    </ul>

    <Step index={6}>
      <img alt="" src={MergingImage} />
    </Step>
  </ContentSlide>
);
