import React from "react";
import Button from "./Button"

function Header({video}) {
    return (
        <div>
             <h1>{video.title}</h1>
             <p>{video.views} Views | Uploaded {video.createdAt} </p>
             <Button video={video}/>
      </div>

    )
}

export default Header