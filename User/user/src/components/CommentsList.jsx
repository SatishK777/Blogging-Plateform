import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchComments } from '../redux/slices/commentsSlice';

const CommentsList = () => {
  const dispatch = useDispatch();
  const comments = useSelector(state => state.comments.comments);

  useEffect(() => {
    dispatch(fetchComments());
  }, [dispatch]);

  return (
    <div>
      <h2>Comments</h2>
      {comments.length === 0 ? (
        <p>No comments yet.</p>
      ) : (
        comments.map(comment => (
          <div key={comment.id}>
            <p>{comment.text}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default CommentsList;