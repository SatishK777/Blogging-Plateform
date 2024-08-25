

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchComments, fetchPosts, deleteComment } from '../redux/slices/commentsSlice';
import { useNavigate } from 'react-router-dom';
import '../../src/styles/commentModeration.css';

const CommentModeration = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const comments = useSelector(state => state.comments.comments);
  const posts = useSelector(state => state.comments.posts);
  const commentsStatus = useSelector(state => state.comments.commentsStatus);
  const postsStatus = useSelector(state => state.comments.postsStatus);

  useEffect(() => {
    dispatch(fetchComments());
    dispatch(fetchPosts());
  }, [dispatch]);

  const handleDeleteComment = (commentId) => {
    dispatch(deleteComment(commentId));
  };

  const getPostTitle = (postId) => {
    const post = posts.find(post => post.id === postId);
    return post ? post.title : 'Unknown Post';
  };

  const handledash = () => {
    navigate("/");
  };

  const handleblog = () => {
    navigate("/p");
  };

  const handlecomment = () => {
    navigate("/c");
  };

  const handlecate = () => {
    navigate("/ct");
  };

  // Check if both comments and posts have been loaded
  const isLoading = commentsStatus === 'loading' || postsStatus === 'loading';

  return (
    <div className="admin-dashboard">
      <div className="sidebar">
        <h2>SK BLOG BYTES</h2>
        <ul>
          <li><a href="#" onClick={handledash}>Add Blog</a></li>
          <li><a href="#" onClick={handleblog}>Blog List</a></li>
          <li><a href="#" onClick={handlecomment}>Comments Moderation</a></li>
          <li><a href="#" onClick={handlecate}>Category</a></li>
          <li><a href="#">About</a></li>
        </ul>
      </div>

      <div className="header">
        <h1>Admin Dashboard . (Comments Moderation)</h1>
      </div>

      <div className="content-wrapper">
        <h2>Comments Moderation</h2>
        {isLoading ? (
          <p>Loading comments and posts...</p>
        ) : comments.length === 0 ? (
          <p>No comments available</p>
        ) : (
          comments.map(comment => (
            <div key={comment.id} className="comment-card">
              <h3>{`Blog's Title: ${getPostTitle(comment.postId)}`}</h3>
              <p>{comment.text}</p>
              <button onClick={() => handleDeleteComment(comment.id)}>Delete</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default CommentModeration;
