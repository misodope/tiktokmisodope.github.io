import React, { useEffect } from "react";

const RedirectTikTok = () => {
  useEffect(() => {
    window.location.href = "https://tiktok.com/@misodope";
  }, []);

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <p>Oh look I can center a div</p>
      <p className=" font-bold text-lg animated pulse infinite">Redirecting to @MisoDope TikTok...</p>
    </div>
  );
};

export default RedirectTikTok;
