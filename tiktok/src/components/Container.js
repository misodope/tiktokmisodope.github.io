import * as React from 'react';
import './Container.scss';
import bgImg from '../images/jerry@3x.png';

export const Container = ({children}) =>
  <div className="container">
    { children }
  </div>;