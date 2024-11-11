import { RiDeleteBin6Fill } from "react-icons/ri";
import { MdEditSquare } from "react-icons/md";

const ManageUser = ({ deleteuser }) => {
  return (
    <div className="flex flex-row gap-4">
      <div
        className="bg-muted bg-mutedRed p-1 rounded text-background"
        onClick={deleteuser}
      >
        <RiDeleteBin6Fill />
      </div>
    </div>
  );
};

export default ManageUser;
