const getRoleColor = (role) => {
  switch (role) {
    case "Admin":
      return "bg-admin";
    case "User":
      return "bg-user";
    case "Guest":
      return "bg-guest";
  }
};
export default getRoleColor;
