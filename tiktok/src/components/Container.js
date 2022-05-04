import React, { useEffect, useState } from "react";

import "./FloatingSquares.scss";

const FloatingSquares = () => {
  const [pageHeight, setPageHeight] = useState(0);

  useEffect(() => {
    setPageHeight(document.body.clientHeight);
  }, []);

  return (
    <ul className="circles" style={{ height: `${pageHeight}px` }}>
      {[...Array(10)].map((_, i) => (
        <li key={i}></li>
      ))}
    </ul>
  );
};

export const Container = ({ children }) => (
  <div className="container mx-auto">
    {children}
    <FloatingSquares />
  </div>
);
