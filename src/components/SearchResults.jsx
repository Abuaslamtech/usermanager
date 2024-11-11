// SearchResults.js
import Header from "./Header";
import Search from "./Search";
import { useState, useEffect } from "react";
import ManageUser from "../features/ManageUser";
import UserDetails from "../features/UserDetails";
import { useSearchParams } from "react-router-dom";
import ToggleSwitch from "./ToggleSwitch";

const SearchResults = () => {
  const [users, setUsers] = useState([]);
  const [searchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState(searchParams.get("q") || "");

  // Update searchTerm when URL parameter changes
  useEffect(() => {
    setSearchTerm(searchParams.get("q") || "");
  }, [searchParams]);

  useEffect(() => {
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
    setUsers(existingUsers);
  }, []);

  const deleteUser = (emailToDelete) => {
    const existingUsers = JSON.parse(localStorage.getItem("users"));
    const userIndex = existingUsers.findIndex(
      (user) => user.email === emailToDelete
    );
    if (userIndex !== -1) {
      existingUsers.splice(userIndex, 1);
      localStorage.setItem("users", JSON.stringify(existingUsers));
      setUsers(existingUsers);
      console.log("user deleted", emailToDelete);
    } else {
      console.log("User not found");
    }
  };

  const filteredUsers = users.filter((user) => {
    if (!searchTerm) return true; // Show all users if no search term

    const { fullName, email, role } = user;
    const searchTermLower = searchTerm.toLowerCase().trim();
    return (
      fullName?.toLowerCase().includes(searchTermLower) ||
      email?.toLowerCase().includes(searchTermLower) ||
      role?.toLowerCase().includes(searchTermLower)
    );
  });

  return (
    <>
      <Header />
      <Search
        title={"Search Result"}
        description={`Results found for the term: ${searchTerm}`}
        initialSearchTerm={searchTerm} // Pass initial search term
        onSearch={(term) => setSearchTerm(term)} // Handle search updates
      />
      <div className="bg-card w-[90%] lg:w-2/3 flex flex-col m-auto py-4 justify-start rounded">
        {filteredUsers.length > 0 ? (
          filteredUsers.map((item, index) => (
            <div
              key={item.email || index}
              className="w-[95%] bg-background rounded m-auto mt-1 flex flex-row justify-between items-center p-2"
            >
              <UserDetails item={item} />
              <div className="w-[20%] flex flex-row gap-2 justify-center items-center">
                <ToggleSwitch />
              </div>
              <ManageUser deleteuser={() => deleteUser(item.email)} />
            </div>
          ))
        ) : (
          <div className="text-center py-4 text-gray-500">
            No results found for "{searchTerm}"
          </div>
        )}
      </div>
    </>
  );
};

export default SearchResults;
