import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts, deletePost, setEditPost } from '../redux/slices/postslice';
import '../../src/styles/postlist.css';
import { useNavigate } from 'react-router-dom';

const PostList = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const posts = useSelector(state => state.posts.posts);
    const loading = useSelector(state => state.posts.loading);

    const [expandedPosts, setExpandedPosts] = useState({});

    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch]);

    // if (loading) {
    //     return <div>Loading...</div>;
    // }

    const handleDelete = (postId) => {
        dispatch(deletePost(postId));
    };

    const handleEdit = (post) => {
        dispatch(setEditPost(post)); // Dispatch action to set the post for editing
        navigate("/"); // Navigate to the dashboard or edit page
    };

    const toggleReadMore = (postId) => {
        setExpandedPosts(prevState => ({
            ...prevState,
            [postId]: !prevState[postId]
        }));
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
                <h1>Admin Dashboard . (Blog list)</h1>
            </div>

            <div className="content-wrapper">
                <div className="post-list">
                    {posts.map(post => (
                        <div key={post.id} className="post-card">
                            {post.bannerUrl && (
                                <img src={post.bannerUrl} alt="Banner" className="post-banner" />
                            )}
                            <h3 className="post-title">{post.title}</h3>
                            <p className="post-content">
                                {expandedPosts[post.id]
                                    ? post.content
                                    : `${post.content.substring(0, 100)}...`}
                            </p>
                            <center>
                                <button 
                                    className="read-more" 
                                    onClick={() => toggleReadMore(post.id)}
                                >
                                    {expandedPosts[post.id] ? 'Read Less' : 'Read More...'}
                                </button>
                            </center>
                            <div className="post-actions">
                                <button className='edit' onClick={() => handleEdit(post)}>Edit</button> {/* Dispatch edit action */}
                                <button className='delete' onClick={() => handleDelete(post.id)}>Delete</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PostList;



