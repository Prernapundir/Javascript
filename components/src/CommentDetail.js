import React from 'react';

// Create a react component
const CommentDetail= (props) =>{

  return(
    <div className = "comment">
     <a href="/" className="avatar">
      <img alt="avatar" src={props.avatar}/>
     </a>
     <div className ="content">
      <a href="/" className="author">
       {props.author}
      </a>
      <div className ="metadata">
       <span className="date">{props.date}</span>
      </div>
      <div className="text">{props.text}</div>
     </div>
    </div>
  )
};

// Export the CommentDetail
export default CommentDetail;
