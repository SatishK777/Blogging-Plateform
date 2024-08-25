import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPost, fetchPosts, updatePost, clearEditPost } from '../redux/slices/postslice';
import { storage } from '../firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { useNavigate } from 'react-router-dom';
import '../../src/styles/dashboard.css'

const Dashboard = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const editPost = useSelector(state => state.posts.editPost); // Get editPost from state
    const posts = useSelector(state => state.posts.posts);

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [banner, setBanner] = useState(null);
    const [bannerUrl, setBannerUrl] = useState('');
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        dispatch(fetchPosts());
        if (editPost) {
            // Populate form fields when editPost is set
            setTitle(editPost.title);
            setContent(editPost.content);
            setBannerUrl(editPost.bannerUrl || '');
            setIsEditing(true);
        } else {
            // Clear form when not editing
            setTitle('');
            setContent('');
            setBanner(null);
            setBannerUrl('');
            setIsEditing(false);
        }
    }, [editPost, dispatch]);

    const handleBannerChange = (e) => {
        const file = e.target.files[0];
        setBanner(file);

        // Preview the selected banner image immediately
        const reader = new FileReader();
        reader.onloadend = () => {
            setBannerUrl(reader.result);
        };
        if (file) {
            reader.readAsDataURL(file);
        }
    };

    const handleAddOrUpdatePost = async () => {
        let uploadedBannerUrl = bannerUrl;

        if (banner) {
            const bannerRef = ref(storage, `banners/${banner.name}`);
            await uploadBytes(bannerRef, banner);
            uploadedBannerUrl = await getDownloadURL(bannerRef);
        }

        if (isEditing) {
            // Update the existing post
            dispatch(updatePost({ id: editPost.id, title, content, bannerUrl: uploadedBannerUrl }));
            dispatch(clearEditPost()); // Clear the edit state
        } else {
            // Add a new post
            dispatch(addPost({ title, content, bannerUrl: uploadedBannerUrl }));
        }

        setTitle('');
        setContent('');
        setBanner(null);
        setBannerUrl('');
        navigate("/p"); // Navigate to PostList page
    };

    const handledash = () =>{
        navigate("/");
    }

    const handleblog = () =>{
        navigate("/p");
    }

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
                <h1>Admin Dashboard. (Add Data)</h1>
            </div>

            <div className="content-wrapper">
                <div className="form-container">
                    <h2>{isEditing ? 'Edit Your Blog' : 'Add Your Blog'}</h2>
                    <form>
                        <div className="form-group">
                            <label htmlFor="title">Title</label>
                            <input
                                type="text"
                                placeholder="Title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="content">Content</label>
                            <textarea
                                placeholder="Content"
                                value={content}
                                onChange={(e) => setContent(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="file">Banner Image</label>
                            <input
                                type="file"
                                onChange={handleBannerChange}
                            />
                        </div>
                        {bannerUrl && (
                            <div>
                                <img src={bannerUrl} alt="Banner Preview" style={{ width: '100%', height: 'auto', marginTop: '10px' }} />
                            </div>
                        )}
                        <div className="form-group">
                            <button type="button" onClick={handleAddOrUpdatePost} className='addbutton'>
                                {isEditing ? 'Update Post' : 'Add Post'}
                            </button>
                        </div>
                    </form>
                </div>

                {/* Removed PostList component */}
                {/* <PostList /> */}
                {/* <CategoryList /> */}
                {/* <CommentModeration /> */}
            </div>
        </div>
    );
};

export default Dashboard;
