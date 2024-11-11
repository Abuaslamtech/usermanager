import { Link } from "react-router-dom";
import image from "../data/nodata.svg";

const NoData = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <img
        src={image}
        alt="no data image"
        className="w-1/3 h-1/3 flex flex-col justify-center items-center m-auto"
      />
      <p className="text-header">
        There is no data available, please &nbsp;
        <Link to={"/add-user"} className="text-primary font-bold">
          Add new user
        </Link>
      </p>
    </div>
  );
};

export default NoData;
