import React from 'react';

export default function Search({ query, setQuery }) {
  console.log('QUERY IN SEARCH', { query });
  return (
    <input
      type="text"
      placeholder="search park here"
      value={query}
      onChange={(e) => {
        setQuery(e.target.value);
      }}
    />
  );
}
