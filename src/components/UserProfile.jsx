import React, {useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import { Loading } from "./Loading";
import { logOut } from "../store/todoSlice";

const UserProfile = ({ user }) => {
   const dispatch = useDispatch();
   const loading = useSelector(state => state.user.isLoading)
  const [isLoadingg, setIsLoading] = useState(true);
  console.log(user);

  setTimeout(() => {
   setIsLoading(false) 
 }, 1000);
   
 const handleClick = () => {
    dispatch(logOut())
 }

  return (
    <>
      {isLoadingg ? (
        <Loading />
      ) : (
        <div onClick={handleClick}>
          <p className="text-sm">
            <FontAwesomeIcon icon={faUser} />
            <span className="mx-2">{user.userName}</span>
          </p>
        </div>
      )}
    </>
  );
};

export default UserProfile;
