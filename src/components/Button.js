import React, {useState} from "react";
import Comments from "./Comments"

function Button({video}) {

    const [upvote, setUpvote] = useState(video.upvotes)
    const [downvote, setDownvote] = useState(video.downvotes)

    function handleUpvote(e){
        setUpvote(parseInt(e.target.value) + 1)
    }

    function handleDownvote(e){
        setDownvote(parseInt(e.target.value) + 1)
    }

    return (
        <>
            <div>
                <button onClick={handleUpvote} value={upvote}> {upvote} 👍</button>
                <button onClick={handleDownvote} value={downvote}>{downvote} 👎</button>
            </div>
            <Comments video={video}/> 
        </>
    )
}

export default Button