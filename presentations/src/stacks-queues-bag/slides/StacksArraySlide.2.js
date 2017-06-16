import React from "react";
import { ContentSlide, Step } from "react-presents";

export default () => (
  <ContentSlide>
    <h1>Stacks <small>Resizing Array</small></h1>

    <Step index={1}>
      <div>
        <table className="table">
          <thead>
            <tr>
              <td />
              <td>Best</td>
              <td>Worst</td>
              <td>Amortized</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>construct</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
            </tr>
            <tr>
              <td>push</td>
              <td>1</td>
              <td>N</td>
              <td>1</td>
            </tr>
            <tr>
              <td>pop</td>
              <td>1</td>
              <td>N</td>
              <td>1</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Step>

    <Step index={2}>
      <ul>
        <li>push og pop er næsten altid rigtig hurtige</li>
        <li>
          linked list er altid hurtig, men har et overhead på memory og references
        </li>
      </ul>
    </Step>
  </ContentSlide>
);
