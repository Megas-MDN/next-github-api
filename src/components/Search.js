'use client';
import React, { useState } from 'react';

const Search = ({ getSearch }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/projects/search?q=' + query.trim());
    const data = await res.json();
    getSearch(data);
  };
  return (
    <form className='search-form' onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='Pesquise um projeto'
        className='search-input'
        value={query}
        onChange={({ target: { value } }) => setQuery(value)}
        onClick={() => setQuery('')}
        onKeyDown={(e) => e.key === 'Enter' && handleSubmit(e)}
      />
      <button className='search-button' type='submit'>
        Search
      </button>
    </form>
  );
};

export default Search;
