import React from 'react';
import { ContentSlide, Step } from 'react-presents'

import LifoImage from './lifo.png';

export default () => (
  <ContentSlide>
    <h1>Stacks</h1>
    
    <ul>
      <Step index={1}><li>Data struktur til at indsætte og fjerne items</li></Step>
      <Step index={2}><li>Benytter sig LIFI (Last In - First Out) <br /><img alt="" src={LifoImage} /></li></Step>
      <Step index={3}><li>Simpelt interface - <i>push</i> og <i>pop</i></li></Step>
      <Step index={4} maxIndex={5}><li>Kan implementeres med <i>linkedlist</i> og <i>array</i></li></Step>
    </ul>
  </ContentSlide>
)