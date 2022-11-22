import { useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import { useDispatch } from 'react-redux';
import { SearchArt } from '../Redux/ArtGallery/ArtGallery';

function Search() {
  const dispatch = useDispatch();
  const [title, setName] = useState({
    title: '',
  });
  const handleChange = (e) => {
    setName(
      e.target.value,
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(SearchArt(title));
  };

  return (
    <form onSubmit={handleSubmit} className="styleSearch">
      <input name="title" type="text" className="styleinputsearch" onChange={handleChange} placeholder="search by name" required />
      <button className="stylesearchbutton" type="submit">
        <BiSearch />
      </button>
    </form>
  );
}

export default Search;
