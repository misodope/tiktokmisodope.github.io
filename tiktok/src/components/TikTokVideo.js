import React, { useEffect, useState } from "react"
import EmbedContainer from "react-oembed-container"
import classNames from "classnames"

import "./TikTokVideo.scss"

const TikTokVideo = ({ showVideo = false }) => {
  const [video, setVideo] = useState({
    __html: `<blockquote class="tiktok-embed" cite="https://www.tiktok.com/@misodope/video/6816488062894312710" data-video-id="6816488062894312710" style="max-width: 605px;min-width: 325px;" > <section> <a target="_blank" title="@misodope" href="https://www.tiktok.com/@misodope">@misodope</a> <p>When the code just doesn’t work <a title="programming" target="_blank" href="https://www.tiktok.com/tag/programming">##programming</a> <a title="programmer" target="_blank" href="https://www.tiktok.com/tag/programmer">##programmer</a> <a title="coding" target="_blank" href="https://www.tiktok.com/tag/coding">##coding</a> <a title="code" target="_blank" href="https://www.tiktok.com/tag/code">##code</a> <a title="softwareengineer" target="_blank" href="https://www.tiktok.com/tag/softwareengineer">##softwareengineer</a> <a title="dev" target="_blank" href="https://www.tiktok.com/tag/dev">##dev</a> <a title="developer" target="_blank" href="https://www.tiktok.com/tag/developer">##developer</a> <a title="coder" target="_blank" href="https://www.tiktok.com/tag/coder">##coder</a> <a title="computerscience" target="_blank" href="https://www.tiktok.com/tag/computerscience">##computerscience</a> <a title="tiktoknerd" target="_blank" href="https://www.tiktok.com/tag/tiktoknerd">##tiktoknerd</a> <a title="techlife" target="_blank" href="https://www.tiktok.com/tag/techlife">##techlife</a></p> <a target="_blank" title="♬ let me show what you're missing - jadejurgenss" href="https://www.tiktok.com/music/let-me-show-what-you're-missing-6720692905440316166">♬ let me show what you're missing - jadejurgenss</a> </section> </blockquote> <script async src="https://www.tiktok.com/embed.js"></script>`,
  })

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://www.tiktok.com/oembed?url=https://www.tiktok.com/@misodope/video/6816488062894312710"
      ).then((data) => data.json())

      setVideo({
        __html: response.html,
      })
    }

    fetchData()
  }, [])

  const videoClass = classNames("tiktok-video", {
    "tiktok-video__show": showVideo,
  })

  return (
    <div className={videoClass}>
      <EmbedContainer markup={video.__html}>
        <div dangerouslySetInnerHTML={video} />
      </EmbedContainer>
    </div>
  )
}

export default TikTokVideo
