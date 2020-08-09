import React, { useRef, useState } from 'react';
import './Navigation.scss';
const Navigation = ({ onSearchHandler }) => {
  const searchInput = useRef('');
  const [hasValue, setHasValue] = useState('');
  const onSubmitHandler = (event) => {
    console.log(event);
    event.preventDefault();
    onSearchHandler(searchInput.current.value);
    searchInput.current.blur();
    searchInput.current.value = '';
    setHasValue('');
  };

  const onCancelHandler = () => {
    searchInput.current.value = '';
    setHasValue('');
  };

  return (
    <nav className='Nav'>
      <h1>Weather Forecast</h1>
      <form onSubmit={onSubmitHandler} className='Nav__form'>
        <div className='Nav__control'>
          <input
            id={'search'}
            className='Nav__input'
            type='text'
            required={true}
            ref={searchInput}
            autoComplete='off'
            onChange={() => {
              setHasValue(searchInput.current.value);
            }}
          />
          <label htmlFor={'search'} className='Nav__label'>
            Search
          </label>
          <img
            onClick={onSubmitHandler}
            src='../../assets/icons/input/search.svg'
            alt='search'
            className='Nav__search'
          />
          {hasValue && (
            <img
              onClick={onCancelHandler}
              src='../../assets/icons/input/cancel.svg'
              alt='cancel'
              className='Nav__cancel'
            />
          )}
        </div>
      </form>
    </nav>
  );
};

export default Navigation;
