import React, {useState} from "react"
import axios from 'axios';


const CommentForm = (props) => {

    const [comment, setComment] = useState({
        body: ""
    })

    const handleChanges = e => {
        setComment({ 
            ...comment, 
            [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
            axios
                .post("/comments/create", {
                    comment: comment.body, 
                    post_id: props.id,
                })
                .then(res => {
                    console.log(res)
                    setComment({body: ""})
                })
                .catch(err => console.log(err))
    }

    return (
        <div>
            
            <form onSubmit={handleSubmit}>
                <input
                type="text"
                name="body"
                value={comment.body}
                placeholder="type your comment here!"
                onChange={handleChanges}
                />
                {props.edit ? (
                <div>
                    <button>Edit Comment</button>
                    <button>Delete Comment</button>
                </div>
                ) : (
                    <button type="submit">Add Comment</button>
              )}
            </form>
            
        </div>
    )
}

export default CommentForm;