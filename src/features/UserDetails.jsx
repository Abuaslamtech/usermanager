const UserDetails = ({ item }) => {
  return (
    <div className="w-[65%] lg:w-[30%] flex flex-row gap-2 ">
      <img
        src={item.picture}
        alt={item.fullName}
        className="w-6 h-6 lg:w-12 lg:h-12 rounded-full"
      />
      <div>
        <div className="text-sm lg:text-lg">{item.fullName}</div>
        <div className="text-gray-400 text-xs lg:text-sm">{item.email}</div>
      </div>
    </div>
  );
};

export default UserDetails;
