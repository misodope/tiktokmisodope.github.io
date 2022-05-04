import * as React from "react";

import "./FloatingSquares.scss";

const FloatingSquares = () => (
  <ul class="circles">
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
  </ul>
);

export const Container = ({ children }) => (
  <div className="container mx-auto">
    {children}
    <FloatingSquares />
  </div>
);
