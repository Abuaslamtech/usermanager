import { MdGroupAdd } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { FaUsers } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const Search = ({ description, title, initialSearchTerm = "", onSearch }) => {
  const [searchTerm, setSearchTerm] = useState(initialSearchTerm);
  const navigate = useNavigate();

  // Update local search term when prop changes
  useEffect(() => {
    setSearchTerm(initialSearchTerm);
  }, [initialSearchTerm]);

  const handleSearch = () => {
    navigate(`/search?q=${encodeURIComponent(searchTerm.trim())}`);
    if (onSearch) {
      onSearch(searchTerm);
    }
  };

  return (
    <div className="w-[90%] lg:w-2/3 m-auto flex flex-col lg:flex-row items-center lg:justify-between lg:gap-2">
      <div className="flex flex-col mt-4">
        <h2 className="font-bold text-2xl text-header flex flex-row items-center gap-2">
          <FaUsers />
          {title}
        </h2>
        <p className="text-gray-400 text-sm lg:text-lg lg:ml-8">
          {description}
        </p>
      </div>
      <div className="flex flex-row justify-evenly items-center gap-2">
        <div className="relative my-11">
          <input
            type="search"
            placeholder="Search user"
            className="w-full rounded border p-2 pl-10"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              if (e.target.value === "") {
                onSearch("");
              }
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSearch();
              }
            }}
          />
          <CiSearch className="absolute left-3 top-2.5 w-5 h-5 text-gray-500" />
        </div>
        <Link
          to="/add-user"
          className="bg-primary rounded p-2 px-4 flex flex-row justify-center items-center gap-2 text-header font-bold shadow-md"
        >
          <MdGroupAdd className="text-2xl" />
          <span className="hidden lg:flex">Add User</span>
        </Link>
      </div>
    </div>
  );
};

export default Search;
