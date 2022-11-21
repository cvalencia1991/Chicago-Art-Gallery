import { BiSearch } from 'react-icons/bi';

function Search() {
  return (
    <form className="styleSearch">
      <input type="text" placeholder="search by name" />
      <button type="button">
        <BiSearch />
      </button>
    </form>
  );
}

export default Search;
