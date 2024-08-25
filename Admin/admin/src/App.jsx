import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Sidebar from './components/Sidebar';
import PostList from './components/PostList';
import CommentModeration from './components/CommentModeration';
import CategoryList from './components/CategoryList';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/s" element={<Sidebar />} />
        <Route path="/p" element={<PostList />} />
        <Route path="/c" element={<CommentModeration />} />
        <Route path="/ct" element={<CategoryList />} />
      </Routes>
    </Router>
  );
}

export default App;
