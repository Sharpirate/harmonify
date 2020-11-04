import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Results from './Results';
import SearchField from './SearchField';

const SearchWrap = styled.div``;

function Search() {
  const [fieldValue, setFieldValue] = useState('');
  const [results, setResults] = useState([]);
  const [resultsVisible, setResultsVisible] = useState(false);

  function handleInput(e) {
    setFieldValue(e.target.value);
  }

  function handleFocus() {
    setResultsVisible(true);
  }
  
  function handleBlur() {
    setResultsVisible(false);
    setFieldValue('');
  }

  useEffect(() => {
    if (fieldValue) {
      fetch(`/api/search/${fieldValue}`)
        .then(res => res.json())
        .then(data => {
          console.log(fieldValue)
          console.log(data);
          setResults(data);
        });
    }
  }, [fieldValue]);

  return (
    <SearchWrap>
      <SearchField
        value={fieldValue}
        handleInput={handleInput}
        handleFocus={handleFocus}
        handleBlur={handleBlur}
      />
      <Results results={results} visible={resultsVisible} />
    </SearchWrap>
  );
}

export default Search;