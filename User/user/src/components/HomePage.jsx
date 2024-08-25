// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchPosts } from '../redux/slices/postsSlice';
// import { useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import SearchBar from './SearchBar';
// import NavigationBar from './NavigationBar';
// import Footer from './Footer';

// const HomePage = () => {
//   const dispatch = useDispatch();
//   const posts = useSelector(state => state.posts.posts);

//   useEffect(() => {
//     dispatch(fetchPosts());
//   }, [dispatch]);

//   return (
//     <div>
      
//       <SearchBar />
//       <h1>Blog Posts</h1>
//       {posts.length > 0 ? (
//                 posts.map((post) => (
//                     <div key={post.id}>
//                         {/* {post.bannerUrl && <img src={post.bannerUrl} alt="Banner" style={{ width: '100%', height: 'auto' }} />} */}
//                         <h2>{post.title}</h2>
//                         {/* <p>{post.content}</p> */}
//                         <Link to={`/post/${post.id}`}>Read More</Link>
//                     </div>
//                 ))
//             ) : (
//                 <p>No posts available</p>
//             )}
//       <Footer />
//     </div>
//   );
// };

// export default HomePage;


// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchPosts } from '../redux/slices/postsSlice';
// import { useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import SearchBar from './SearchBar';
// import NavigationBar from './NavigationBar';
// import Footer from './Footer';
// import '../../src/style/homepage.css'; // Assuming you have a CSS file for styling

// const HomePage = () => {
//   const dispatch = useDispatch();
//   const posts = useSelector(state => state.posts.posts);

//   useEffect(() => {
//     dispatch(fetchPosts());
//   }, [dispatch]);

//   return (
//     <div>
//       <SearchBar />
//       <h1>Blog Posts</h1>
//       <div className="posts-container">
//         {posts.length > 0 ? (
//           posts.map((post) => (
//             <div key={post.id} className="post-card">
//               {post.bannerUrl && <img src={post.bannerUrl} alt="Banner" className="post-banner" />}
//               <div className="post-content">
//                 <h2>{post.title}</h2>
//                 <Link to={`/post/${post.id}`} className="read-more-link">Read More</Link>
//               </div>
//             </div>
//           ))
//         ) : (
//           <p>No posts available</p>
//         )}
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default HomePage;

// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchPosts } from '../redux/slices/postsSlice';
// import { useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import SearchBar from './SearchBar';
// import NavigationBar from './NavigationBar';
// import Footer from './Footer';
// import '../../src/styles/homepage.css'; // Add a CSS file for styling

// const HomePage = () => {
//   const dispatch = useDispatch();
//   const posts = useSelector(state => state.posts.posts);

//   useEffect(() => {
//     dispatch(fetchPosts());
//   }, [dispatch]);

//   return (
//     <div>
//       <SearchBar />
//       <h1>Blog Posts</h1>
//       <div className="posts-container">
//         {posts.length > 0 ? (
//           posts.map((post) => (
//             <div key={post.id} className="post-card">
//               <h2>{post.title}</h2>
//               <p>{post.content.length > 150 ? `${post.content.substring(0, 150)}...` : post.content}</p>
//               <Link to={`/post/${post.id}`} className="read-more-link">Read More</Link>
//             </div>
//           ))
//         ) : (
//           <p>No posts available</p>
//         )}
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default HomePage;

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../redux/slices/postsSlice';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import NavigationBar from './NavigationBar';
import Footer from './Footer';
import '../../src/style/homepage.css';

const HomePage = () => {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.posts.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div>
      <Link to={'/'} className='back'>Back To Home Page</Link>
      <h1 className='h'>Blog Posts</h1>
      <div className='serch-bar'>

      <SearchBar />
      </div>
      <div className="post-grid">
        {posts.length > 0 ? (
          posts.map((post) => (
            <div key={post.id} className="post-card">
              {post.bannerUrl && (
                <img src={post.bannerUrl} alt="Banner" className="post-banner" />
              )}
              <h2 className="post-title">{post.title}</h2>
              <p className="post-content">
                {post.content.substring(0, 300)}...
              </p>
              <Link to={`/post/${post.id}`} className="read-more-link">Read More</Link>
            </div>
          ))
        ) : (
          <p>No posts available</p>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
