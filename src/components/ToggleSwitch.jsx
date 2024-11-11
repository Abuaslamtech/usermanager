import { useState } from "react";

const ToggleSwitch = () => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div className="w-[20%] flex flex-row gap-2 justify-center items-center">
      <div className="flex items-center">
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="sr-only"
            checked={isToggled}
            onChange={handleToggle}
          />
          <div
            className={`w-8 h-4 rounded-full shadow bg-green-background"
          } transition-colors duration-300`}
          >
            <span
              className={`absolute left-0 w-5 h-4 rounded-full transition-transform duration-300 ${
                isToggled
                  ? "bg-header translate-x-3"
                  : " bg-gray-400 translate-x-0"
              }`}
            ></span>
          </div>
        </label>
        <span className="hidden lg:flex ml-3 text-gray-700">
          {isToggled ? "Active" : "Inactive"}
        </span>
      </div>
    </div>
  );
};

export default ToggleSwitch;
