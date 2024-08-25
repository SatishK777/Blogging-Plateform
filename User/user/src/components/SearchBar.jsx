import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchPosts } from '../redux/slices/postsSlice';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(fetchPosts(query));
  };

  const styles = {
    form: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      margin: '20px 0',
    },
    input: {
      padding: '10px',
      borderRadius: '25px',
      border: '1px solid #ddd',
      width: '250px',
      outline: 'none',
      fontSize: '16px',
      marginRight: '10px',
      transition: 'all 0.3s ease',
    },
    inputFocus: {
      borderColor: '#007BFF',
    },
    button: {
      padding: '10px 20px',
      backgroundColor: '#007BFF',
      color: '#fff',
      borderRadius: '25px',
      border: 'none',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      fontSize: '16px',
    },
    buttonHover: {
      backgroundColor: '#0056b3',
    },
  };

  return (
    <form onSubmit={handleSearch} style={styles.form}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search posts..."
        style={styles.input}
      />
      <button
        type="submit"
        style={styles.button}
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
