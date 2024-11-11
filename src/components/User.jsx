import ToggleSwitch from "./ToggleSwitch";
import Search from "./Search";
import UserDetails from "../features/UserDetails";
import Role from "../features/Role";
import getRoleColor from "../constants/roleColors";
import { useState, useEffect } from "react";
import NoData from "./NoData";

const User = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("users")) || [];
    setUsers(data);
  }, []);

  return (
    <>
      <Search
        description={"View all registered users"}
        title={"List of Users"}
      />
      <div className="bg-card w-[90%] lg:w-2/3 flex flex-col m-auto py-4 justify-start rounded">
        {users.length < 1 ? (
          <NoData />
        ) : (
          users.map((item) => (
            <div
              key={item.index}
              className="w-[95%] bg-background rounded m-auto mt-1 flex flex-row justify-between items-center p-2"
            >
              <UserDetails item={item} />
              <Role item={item} getRoleColor={getRoleColor} />
              <ToggleSwitch />
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default User;
