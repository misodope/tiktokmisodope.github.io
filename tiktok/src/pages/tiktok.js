import React, { useEffect } from "react"

const RedirectTikTok = () => {
  useEffect(() => {
    window.location.href = "https://tiktok.com/@misodope"
  }, [])

  return (
    <p className="flex justify-center items-center font-bold text-lg animated pulse">
      Redirecting to @MisoDope TikTok...
    </p>
  )
}

export default RedirectTikTok
