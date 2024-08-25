// // src/components/AddComment.js
// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { addComment } from '../redux/slices/commentsSlice';

// const AddComment = ({ postId }) => {
//   const dispatch = useDispatch();
//   const [commentText, setCommentText] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     dispatch(addComment({ postId, text: commentText }));
//     setCommentText('');
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <textarea
//         value={commentText}
//         onChange={(e) => setCommentText(e.target.value)}
//         placeholder="Add a comment..."
        
//       />
//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default AddComment;


import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addComment } from '../redux/slices/commentsSlice';
import '../../src/style/comment.css'; // Import the CSS file

const AddComment = ({ postId }) => {
  const dispatch = useDispatch();
  const [commentText, setCommentText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addComment({ postId, text: commentText }));
    setCommentText('');
  };

  return (
    <form onSubmit={handleSubmit} className="add-comment-form">
      <textarea
        value={commentText}
        onChange={(e) => setCommentText(e.target.value)}
        placeholder="Add a comment..."
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default AddComment;
