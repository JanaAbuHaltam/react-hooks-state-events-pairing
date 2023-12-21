import React, {useState} from "react";

function Comments({video}) {
    const [isShown, setIsShown] = useState(true)

    function toggleComments(){
        setIsShown(()=> setIsShown(!isShown))
    }

    return (
        <>
            <div>
                <button onClick={toggleComments}>{isShown ? "Hide Comments" : "Show Comments"}</button>
            </div>
            {video.comments.map((comment) => {
            if (isShown) { 
                return (
                    <div key={comment.id}>
                        <h4>{comment.user}</h4>
                        <p>{comment.comment}</p>
                    </div> 
                )
            } return null
            })}
        </>
    )
}

export default Comments