import Search from "../components/Search";
import Header from "../components/Header";
import UserDetails from "../features/UserDetails";
import ManageUser from "../features/ManageUser";
import { useState, useEffect } from "react";
import NoData from "../components/NoData";

const Manage = () => {
  const [users, setUsers] = useState([]);

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

  return (
    <>
      <Header />
      <Search
        title={"Manage Users"}
        description={"View and Manage Existing Users"}
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
              <ManageUser deleteuser={() => deleteUser(item.email)} />
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default Manage;
