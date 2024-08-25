// // src/components/CategoryList.js
// import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchCategories, addCategory, deleteCategory } from '../redux/slices/categoriesSlice';
// import { useNavigate } from 'react-router-dom';

// const CategoryList = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const categories = useSelector(state => state.categories.categories);
//   const [newCategory, setNewCategory] = useState('');

//   useEffect(() => {
//     dispatch(fetchCategories());
//   }, [dispatch]);

//   const handleAddCategory = () => {
//     dispatch(addCategory({ name: newCategory }));
//     setNewCategory('');
//   };

//   const handleDeleteCategory = (categoryId) => {
//     dispatch(deleteCategory(categoryId));
//   };

//   const handledash = () => {
//     navigate("/");
//   };

//   const handleblog = () => {
//     navigate("/p");
//   };

//   const handlecomment = () => {
//     navigate("/c");
//   };

//   const handlecate = () => {
//     navigate("/ct");
// };

//   return (
//     <>
//     <div className="admin-dashboard">
//       <div className="sidebar">
//         <h2>SK BLOG BYTES</h2>
//         <ul>
//           <li><a href="#" onClick={handledash}>Add Blog</a></li>
//           <li><a href="#" onClick={handleblog}>Blog List</a></li>
//           <li><a href="#" onClick={handlecomment}>Comments Moderation</a></li>
//           <li><a href="#" onClick={handlecate}>Category</a></li>
//           <li><a href="#">Logout</a></li>
//         </ul>
//       </div>

//       <div className="header">
//         <h1>Admin Dashboard . (Comments Moderation)</h1>
//       </div>

//       <div className="content-wrapper">
//       <div>
//       <h2>Categories</h2>
//       <input
//         type="text"
//         value={newCategory}
//         onChange={(e) => setNewCategory(e.target.value)}
//         placeholder="Add new category"
//       />
//       <button onClick={handleAddCategory}>Add Category</button>
//       <ul>
//         {categories.map(category => (
//           <li key={category.id}>
//             {category.name}
//             <button onClick={() => handleDeleteCategory(category.id)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//       </div>
//     </div>


   
//     </>
//   );
// };

// export default CategoryList;


// src/components/CategoryList.js
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories, addCategory, deleteCategory } from '../redux/slices/categoriesSlice';
import { useNavigate } from 'react-router-dom';
import '../../src/styles/category.css'; // Import your CSS file here

const CategoryList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const categories = useSelector(state => state.categories.categories);
  const [newCategory, setNewCategory] = useState('');

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const handleAddCategory = () => {
    if (newCategory.trim()) {
      dispatch(addCategory({ name: newCategory }));
      setNewCategory('');
    }
  };

  const handleDeleteCategory = (categoryId) => {
    dispatch(deleteCategory(categoryId));
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
        <h1>Admin Dashboard . (Categories)</h1>
      </div>

      <div className="content-wrapper">
        <div className="category-form">
          <h2>Note Category's For Blogs</h2>
          <input
            type="text"
            value={newCategory}
            onChange={(e) => setNewCategory(e.target.value)}
            placeholder="Enter category name"
            className="category-input"
          />
          <button onClick={handleAddCategory} className="add-category-button">Add Category</button>
        </div>

        <div className="category-table">
          <h2>Categories</h2>
          {categories.length === 0 ? (
            <p>No categories available</p>
          ) : (
            <table>
              <thead>
                <tr>
                  <th>Category Name</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {categories.map(category => (
                  <tr key={category.id}>
                    <td>{category.name}</td>
                    <td className='center'>
                      <button onClick={() => handleDeleteCategory(category.id)} className="delete-category-button">Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default CategoryList;
