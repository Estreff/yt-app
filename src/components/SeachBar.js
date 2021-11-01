import React, { useState } from 'react';

const SearchBar = ({ onFormSubmit, label }) => {
  const [term, setTerm] = useState('');

  const onInputChange = (e) => {
    setTerm(e.target.value);
  };

  const onInputSubmit = (e) => {
    e.preventDefault();
    onFormSubmit(term);
  };

  return (
    <div className="search-bar ui segment">
      <form className="ui form" onSubmit={onInputSubmit}>
        <div className="field">
          <label>{label}</label>
          <input onChange={onInputChange} type="text" value={term} />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
