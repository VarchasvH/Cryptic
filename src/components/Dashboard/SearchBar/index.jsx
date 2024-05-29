/* eslint-disable react/prop-types */
import "./styles.css";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

const SearchBar = ({ search, onSearchChange }) => {
  return (
    <div className='search-flex'>
      <SearchRoundedIcon />
      <input
        placeholder='Search'
        type='text'
        value={search}
        onChange={(e) => onSearchChange(e)}
      />
    </div>
  );
};

export default SearchBar;
