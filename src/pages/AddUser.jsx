import Header from "../components/Header";
import { FaUsers } from "react-icons/fa";
import { BsFillSendFill } from "react-icons/bs";
import FileUpload from "../features/FileUpload";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// add new user
const AddUser = () => {
  const [user, setUser] = useState({
    fullName: "",
    email: "",
    role: "Guest",
    status: true,
    picture: "",
  });
  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    role: "",
    status: "",
  });
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const { fullName, email } = user;
    let isValid = true;

    // Validate full name
    if (!fullName.trim()) {
      setErrors((prev) => ({ ...prev, fullName: "Full name is required" }));
      isValid = false;
    } else {
      setErrors((prev) => ({ ...prev, fullName: "" }));
    }

    // Validate email
    if (!email.trim()) {
      setErrors((prev) => ({ ...prev, email: "Email is required" }));
      isValid = false;
    } else {
      setErrors((prev) => ({ ...prev, email: "" }));
    }

    if (isValid) {
      const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
      const updatedUsers = [...existingUsers, user];
      localStorage.setItem("users", JSON.stringify(updatedUsers));
      setShowSuccessModal(true);
      setTimeout(() => {
        setShowSuccessModal(false);
        navigate("/");
      }, 2000);
    }
  };

  return (
    <div>
      <Header />
      <div className=" flex flex-row justify-center items-center gap-2 text-4xl p-2 my-4 text-header font-bold">
        <FaUsers />
        <h1>Add New User</h1>
      </div>
      <div className="bg-card w-[90%] lg:w-1/3 h-full flex flex-col m-auto py-4 justify-start rounded">
        <form
          onSubmit={handleSubmit}
          className="w-full rounded m-auto mt-1 flex flex-col justify-between items-center p-2 gap-4"
        >
          <div className="w-[80%] flex flex-col">
            <label htmlFor="name" className="text-header font-bold">
              Full Name:
            </label>
            <input
              type="text"
              placeholder="e.g Abdullahi Ismail"
              className={`p-2 border w-full rounded ${
                errors.fullName ? "border-red-500" : ""
              }`}
              onChange={(e) => {
                setUser((prevUser) => ({
                  ...prevUser,
                  fullName: e.target.value,
                }));
              }}
            />
            {errors.fullName && (
              <div className="text-red-500 text-sm">{errors.fullName}</div>
            )}
          </div>
          <div className="w-[80%] flex flex-col">
            <label htmlFor="name" className="text-header font-bold">
              Email Address:
            </label>
            <input
              type="email"
              placeholder=" e.g myname@example.com"
              className="p-2 border w-full rounded "
              onChange={(e) =>
                setUser((prevUser) => ({
                  ...prevUser,
                  email: e.target.value,
                }))
              }
            />
            {errors.email && (
              <div className="text-red-500 text-sm">{errors.email}</div>
            )}
          </div>
          <div className="w-[80%] flex flex-col lg:flex-row justify-between gap-4">
            <select
              className="p-2 border w-full lg:w-1/2 rounded "
              onChange={(e) =>
                setUser((prevUser) => ({
                  ...prevUser,
                  role: e.target.value,
                }))
              }
            >
              <option value="default">Choose Role</option>
              <option value="Admin">Admin</option>
              <option value="User">User</option>
              <option value="Guest">Guest</option>
            </select>
            <select
              className="p-2 border w-full lg:w-1/2  rounded "
              onChange={(e) =>
                setUser((prevUser) => ({
                  ...prevUser,
                  status: e.target.value,
                }))
              }
            >
              <option value="default">Choose Status</option>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>
          <FileUpload
            onImageChange={(picture) =>
              setUser((prevUser) => ({
                ...prevUser,
                picture: picture,
              }))
            }
          />
          <button className="p-2 border w-[80%] hover:bg-primary hover:text-header bg-header text-background rounded flex flex-row justify-center items-center gap-2">
            Submit
            <BsFillSendFill />
          </button>
        </form>
      </div>
      {showSuccessModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">
              User Registered Successfully
            </h2>
            <p>You will be redirected to the homepage in a moment.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddUser;
