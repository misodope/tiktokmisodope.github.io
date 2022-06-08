import React, { useEffect } from "react";

const RedirectTikTok = () => {
  useEffect(() => {
    window.location.href = "https://docs.google.com/spreadsheets/d/1ipEvKRYzXIS3ERa9FE5Iw7appsNLAfJpelDEE4r9nus";
  }, []);

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <p>Oh look I can center a div</p>
      <p className=" font-bold text-lg animated pulse infinite">Loading Job Search Template...</p>
    </div>
  );
};

export default RedirectTikTok;
