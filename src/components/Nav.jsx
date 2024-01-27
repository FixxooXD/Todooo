import React from "react";
import { useSelector } from "react-redux";
import UserProfile from "./UserProfile";
import { Link } from "react-router-dom";

const Nav = ({ user }) => {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  console.log(isAuthenticated);
  // const user = useSelector((state) => state.user.userData[0]);

  const userrrr = () => {
    setTimeout(() => {
      return <UserProfile />;
      console.log("hoo");
    }, 500);
  };

  return (
    <div className="p-2 text-xl font-pops border-b-2 w-full flex items-center justify-between">
      <h1>Todooo</h1>

      {isAuthenticated ? (
        <UserProfile user={user} />
      ) : (
        <Link className="text-lg" to="/auth/login">
          Sign in
        </Link>
      )}
    </div>
  );
};

export default Nav;
