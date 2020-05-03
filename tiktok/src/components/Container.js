import * as React from 'react';
import './Container.scss';

export const Container = ({children}) =>
  <div className="container">
    { children }
  </div>;