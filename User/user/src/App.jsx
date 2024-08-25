import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { monitorAuthState } from './redux/slices/authSlice';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import SignOut from './components/SignOut';
import PostDetail from './components/PostDetails';
import HomePage from './components/HomePage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import MainDash from './components/MainDash';
import TB1 from './components/TB1';
import TB2 from './components/TB2';
import TB3 from './components/TB3';


const App = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    dispatch(monitorAuthState());
  }, [dispatch]);

  return (
    <Router>
      <div>
        {user ? (
          <>
            <SignOut />
            <Routes>
              <Route path="/h" element={<HomePage />} />
              <Route path="/" element={<MainDash />} />
              <Route path="/post/:postId" element={<PostDetail />} />
              <Route path="/tb1" element={<TB1 />} />
              <Route path="/tb2" element={<TB2 />} />
              <Route path="/tb3" element={<TB3 />} />
            </Routes>
          </>
        ) : (
          <>
            <SignUp />
          </>
        )}
      </div>
    </Router>
  );
};

export default App;
