/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import { useDispatch } from 'react-redux';
import { searchArt } from '../Redux/ArtGallery/ArtGallery';

function Search() {
  const dispatch = useDispatch();
  const [title, setName] = useState('');

  const handleChange = (e) => {
    setName(
      e.target.value,
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(searchArt(title));
    setName('');
  };

  return (
    <form onSubmit={handleSubmit} className="styleSearch">
      <label htmlFor="title" className="stylelabelsearch" />
      <input name="title" value={title} type="text" className="styleinputsearch" onChange={handleChange} placeholder="search by name" />
      <button type="submit" className="stylesearchbutton">
        <BiSearch />
      </button>
    </form>
  );
}

export default Search;
