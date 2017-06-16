import React from "react";
import { ContentSlide, Step } from "react-presents";

import FifoImage from './fifo.png';

export default () => (
  <ContentSlide>
    <div>
      <h1>Queues</h1>

      <ul>
        <Step index={1}>
          <li>Data struktur til at indsætte og fjerne items</li>
        </Step>
        <Step index={2}>
          <li>
            Benytter sig FIFO (First In - First Out)
            <br />
            <img alt="" src={FifoImage} />
          </li>
        </Step>
        <Step index={3}>
          <li>Simpelt interface - <i>enqueue</i> og <i>dequeue</i></li>
        </Step>
        <Step index={4} maxIndex={5}>
          <li>Kan implementeres med <i>linkedlist</i> og <i>array</i></li>
        </Step>
      </ul>
    </div>
  </ContentSlide>
);
