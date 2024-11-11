import { ShieldCheck } from "lucide-react";
import { UserRoundCheck } from "lucide-react";
import { ShieldQuestion } from "lucide-react";

const Role = ({ item, getRoleColor }) => {
  return (
    <div
      className={`${getRoleColor(
        item.role
      )} border lg:w-20 p-1 lg:px-2 text-background text-sm text-center font-bold rounded-full`}
    >
      <p className="hidden lg:flex flex-col">{item.role}</p>

      <p className="lg:hidden text-xs">
        {item.role === "Admin" ? (
          <ShieldCheck size={15} />
        ) : item.role === "User" ? (
          <UserRoundCheck size={15} />
        ) : (
          <ShieldQuestion size={15} />
        )}
      </p>
    </div>
  );
};

export default Role;
