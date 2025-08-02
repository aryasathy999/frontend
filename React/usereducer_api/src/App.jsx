import React, { useReducer } from 'react';

// Initial State
const initialState = {
  post: null,
  loading: false,
  error: null,
};
// Reducer Function
function reducer(state, action) {
  switch (action.type) {
    case 'FETCH_START':
      return {
        post: null,
        loading: true,
        error: null,
      };
    case 'FETCH_SUCCESS':
      return {
        post: action.post,
        loading: false,
        error: null,
      };
    case 'FETCH_ERROR':
      return {
        post: null,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
}
// Component
function DataFetcher() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const fetchData = () => {
    dispatch({ type: 'FETCH_START' });
    fetch('https://randomuser.me/api/')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        return response.json();
      })
      .then((data) => {
        dispatch({
          type: 'FETCH_SUCCESS',
          post: data.results[0], // corrected
        });
      })
      .catch((error) => {
        dispatch({
          type: 'FETCH_ERROR',
          error: error.message,
        });
      });
  };
  return (
    <div>
      <button onClick={fetchData}>
        {state.loading ? 'Loading...' : 'Fetch Random User'}
      </button>
      {state.error && <p style={{ color: 'red' }}>Error: {state.error}</p>}
      {state.post && (
        <div>
          <h3>
            {state.post.name.title}. {state.post.name.first} {state.post.name.last}
          </h3>
          <p>Email: {state.post.email}</p>
          <p>Phone: {state.post.phone}</p>
          <p>Location: {state.post.location.country}</p>
          <img src={state.post.picture.large} alt="Random User" />
        </div>
      )}
    </div>
  );
}

export default DataFetcher;