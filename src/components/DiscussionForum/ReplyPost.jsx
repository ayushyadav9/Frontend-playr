import React,{useState} from 'react'

const users = ['Sam', 'Jimmy', 'Sunil', 'Ayush', 'joe k'];

const ReplyPost = (props) => {

    const [commentInput, setCommentInput] = useState('');
    const handelReplyInputChange = (e) => {
        console.log(e.target.value);
        setCommentInput(e.target.value);
    }

    const handelSubmitInputChange = (e) => {

          e.preventDefault();
          let user = users[Math.floor(Math.random()*4)];
    
          let commentDetails = {
          postedByUser: user,
          timeStamp : Date.now(),
          commentId : user + Math.floor(Math.random()*1000),
          content : commentInput,
          voteCount:0
          }
          console.log(commentDetails);
          props.addComment(commentDetails);
    }

    return (
        <div>
          <form onSubmit={handelSubmitInputChange}>
            <input className="form-control mt-2 my-2" placeholder="Enter your reply" onChange={handelReplyInputChange } required/>
          </form>
        </div>
      )
}

export default ReplyPost