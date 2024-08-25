// import React, { useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchPostById } from '../redux/slices/postsSlice';
// import CommentSection from '../components/CommentSection';

// const PostDetail = () => {
//   const { postId } = useParams();
//   const dispatch = useDispatch();
//   const post = useSelector(state => state.posts.currentPost);
//   const status = useSelector(state => state.posts.status);
//   const error = useSelector(state => state.posts.error);

//   useEffect(() => {
//     dispatch(fetchPostById(postId));
//   }, [dispatch, postId]);

//   if (status === 'loading') return <p>Loading...</p>;
//   if (status === 'failed') return <p>Error: {error}</p>;

//   const styles = {
//     container: {
//       maxWidth: '800px',
//       margin: '0 auto',
//       padding: '20px',
//       fontFamily: 'Arial, sans-serif',
//     },
//     banner: {
//       width: '100%',
//       borderRadius: '10px',
//       marginBottom: '20px',
//     },
//     title: {
//       fontSize: '2.5em',
//       fontWeight: 'bold',
//       marginBottom: '20px',
//     },
//     content: {
//       fontSize: '1.2em',
//       lineHeight: '1.8',
//       marginBottom: '40px',
//     },
//     commentSection: {
//       marginTop: '50px',
//       paddingTop: '20px',
//       borderTop: '1px solid #ddd',
//     },
//   };

//   return (
    
//     <div style={styles.container}>
//       {post ? (
//         <>
//           {post.bannerUrl && <img src={post.bannerUrl} alt="Banner" style={styles.banner} />}
//           <h1 style={styles.title}>{post.title}</h1>
//           <p style={styles.content}>{post.content}</p>
//           <div style={styles.commentSection}>
//             <CommentSection postId={postId} />
//           </div>
//         </>
//       ) : (
//         <p>Post not found</p>
//       )}
//     </div>
//   );
// };

// export default PostDetail;

import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPostById } from '../redux/slices/postsSlice';
import CommentSection from '../components/CommentSection';
import '../../src/style/postdetail.css';
import { Link } from 'react-router-dom';

const PostDetail = () => {
  const { postId } = useParams();
  const dispatch = useDispatch();
  const post = useSelector(state => state.posts.currentPost);
  const status = useSelector(state => state.posts.status);
  const error = useSelector(state => state.posts.error);

  useEffect(() => {
    dispatch(fetchPostById(postId));
  }, [dispatch, postId]);

  if (status === 'loading') return <p>Loading...</p>;
  if (status === 'failed') return <p>Error: {error}</p>;

  return (
    <>
    <Link to={'/'} className='blognavigate'>Back To All Blogs</Link>
    <h2 className='h2'>Blog Detail..</h2>
    <div className="post-container">
      {post ? (
        <>
          {post.bannerUrl && <img src={post.bannerUrl} alt="Banner" className="post-banner" />}
          <h1 className="post-title">{post.title}</h1>
          <p className="post-content">{post.content}</p>
          <div className="comment-section">
            <CommentSection postId={postId} />
          </div>
        </>
      ) : (
        <p>Post not found</p>
      )}
    </div>
    </>
  );
};

export default PostDetail;
