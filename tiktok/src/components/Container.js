import React, { useEffect, useState } from "react";

import "./FloatingSquares.scss";

const FloatingSquares = () => {
  const [pageHeight, setPageHeight] = useState(0);

  useEffect(() => {
    const currentPageHeight = window.innerHeight > document.body.clientHeight ? window.innerHeight : document.body.clientHeight;

    setPageHeight(currentPageHeight);

    const handleResize = () => {
      const currentPageHeight = window.innerHeight > document.body.clientHeight ? window.innerHeight : document.body.clientHeight;

      setPageHeight(currentPageHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
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
