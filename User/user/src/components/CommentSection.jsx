// src/components/CommentSection.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchComments } from '../redux/slices/commentsSlice';
import AddComment from './AddComment';
import '../../src/style/comment.css'

const CommentSection = ({ postId }) => {
  const dispatch = useDispatch();
  const comments = useSelector(state => state.comments.comments);

  useEffect(() => {
    dispatch(fetchComments(postId));
  }, [dispatch, postId]);

  return (
    <div className='cmt'>
      <h2>Comments</h2>
      <AddComment postId={postId} />
      <ul>
        {comments.map(comment => (
          <li key={comment.id}>
            {comment.text}
          </li>
        ))}
      </ul>
      
    </div>
  );
};

export default CommentSection;
