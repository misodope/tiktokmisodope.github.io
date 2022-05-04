import * as React from "react";

import "./FloatingSquares.scss";

const FloatingSquares = () => (
  <ul className="circles">
    {[...Array(10)].map((_, i) => (
      <li key={i}></li>
    ))}
  </ul>
);

export const Container = ({ children }) => (
  <div className="container mx-auto">
    {children}
    <FloatingSquares />
  </div>
);
