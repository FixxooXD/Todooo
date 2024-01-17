import React, { useRef, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  faCheck,
  faTimes,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { AddUser } from "../../store/todoSlice";
import { Loading } from "../Loading";

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

export const Signup = () => {
//   const userRef = useRef();
//   const errRef = useRef();

  const navigate = useNavigate();

  const [user, setUser] = useState("");
  const [validName, setValidName] = useState(true);
  const [userFocus, setUserFocus] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  const [isLoadingg, setIsLoading] = useState(true);

//   useEffect(() => {
//     userRef.current.focus();
//   }, []);

  useEffect(() => {
    const result = USER_REGEX.test(user);
    // console.log(result);
    console.log(user);
    setValidName(result);
  }, [user]);

  useEffect(() => {
    const result = PWD_REGEX.test(pwd);
    // console.log(result);
    // console.log(pwd);
    setValidPwd(result);
    const match = pwd === matchPwd;
    setValidMatch(match);
  }, [pwd, matchPwd]);



  let isLoading = useSelector((state) => state.user.isLoading);
  let isError = useSelector((state) => state.user.isError);
  let isSuccess = useSelector((state) => state.user.isSuccess);
  let successMSG = useSelector((state) => state.user.successMSG);

  console.log(isSuccess)
  console.log(successMSG)
   
  useEffect(() => {
     isSuccess ? setSuccess(true) : setSuccess(false)
  }, [!isSuccess])
     
//   console.lg(isError)

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(
      AddUser({
        userName: user,
        password: pwd,
      })
    );
    console.log(success)

    setIsLoading(true)

    setTimeout(() => {
        if (success === true) {
            navigate("/auth/login")
            console.log("chalo yaar")
          }else{
           console.log(success)
          }
          setIsLoading(false)
    }, 2000);

  };

  useEffect(() => {
    // Simulate an API call
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  useEffect(() => {
    if(isSuccess && successMSG){
        console.log("success")
        navigate("/todos")
      }else{
        console.log("notSuccess")
      }
  }, [successMSG]);

  return (
    <div className="relative flex flex-col items-center mx-2">
      {isError ? (
        <section className="absolute px-5 h-[2rem] mt-[5rem] border-2">
          <div
            // ref={errRef}
            className="flex justify-center items-center"
            //   Only IF you have something as a CSS class
            //   className={errMsg ? "errmsg" : "offscreen"}
            aria-live="assertive">
            {/* {errMsg} */}
            {console.log(errMsg)}
            <h1>{isError}</h1>
          </div>
        </section>
      ) : null}

      { isLoadingg ? ( <Loading /> ) : (
        <>
          {/* <div>
           <img src={login} alt="image " className="w-[10rem9]" />
        </div> */}
          <form
            onSubmit={handleSubmit}
            className="w-[95%] sm:w-[25rem] mt-[8rem] text-base font-pops">
            <div className="container border-2 flex flex-col p-5 ">
              <h1 className="text-xl">Signup</h1>
              <div className="flex flex-col border rounded-xl mt-4 px-2 py-[0.4rem] ">
                <label className="text-sm">Username : </label>
                {/* <FontAwesomeIcon icon={faCheck} className={validName ? "block" : "none"} />
          <FontAwesomeIcon icon={faTimes} className={validName || !user ? "block" : "none"} /> */}
                <input
                  type="text"
                  id="username"
                //   ref={userRef}
                  autoComplete="off"
                  aria-invalid={validName ? "false" : "true"}
                  onFocus={() => setUserFocus(true)}
                  onBlur={() => setUserFocus(false)}
                  className="outline-none"
                  placeholder="Enter Username..."
                  name="username"
                  aria-describedby="pwdnote"
                  onChange={(e) => setUser(e.target.value)}
                  required
                />
              </div>
              {user && userFocus && !validName ? (
                <p>
                  <FontAwesomeIcon icon={faInfoCircle} />
                  8 to 24 characters.
                  <br />
                  Must include uppercase and lowercase letters, a number and a
                  special character.
                  <br />
                  Allowed special characters:{" "}
                  <span aria-label="exclamation mark">!</span>{" "}
                  <span aria-label="at symbol">@</span>{" "}
                  <span aria-label="hashtag">#</span>{" "}
                  <span aria-label="dollar sign">$</span>{" "}
                  <span aria-label="percent">%</span>
                </p>
              ) : null}

              {/*  PassworD */}
              <div className="flex flex-col border rounded-xl mt-6 px-2 py-[0.4rem]">
                <label className="text-sm">Password : </label>
                <input
                  type="password"
                  className="outline-none"
                  placeholder="Enter Password..."
                  name="password"
                  onChange={(e) => setPwd(e.target.value)}
                  onFocus={() => setPwdFocus(true)}
                  onBlur={() => setPwdFocus(false)}
                  required
                />
              </div>

              {pwd && pwdFocus && !validPwd ? (
                <p>
                  <FontAwesomeIcon icon={faInfoCircle} />
                  8 to 24 characters.
                  <br />
                  Must include uppercase and lowercase letters, a number and a
                  special character.
                  <br />
                  Allowed special characters:{" "}
                  <span aria-label="exclamation mark">!</span>{" "}
                  <span aria-label="at symbol">@</span>{" "}
                  <span aria-label="hashtag">#</span>{" "}
                  <span aria-label="dollar sign">$</span>{" "}
                  <span aria-label="percent">%</span>
                </p>
              ) : null}

              <div className="flex flex-col border rounded-xl mt-6 px-2 py-[0.4rem]">
                <label className="text-sm">Confirm Password: </label>
                <input
                  type="password"
                  className="outline-none"
                  placeholder="Enter Password"
                  name="password"
                  onChange={(e) => setMatchPwd(e.target.value)}
                  onFocus={() => setMatchFocus(true)}
                  onBlur={() => setMatchFocus(false)}
                  required
                />
              </div>

              {matchFocus && !validMatch ? (
                <p>Must match the first password input field.</p>
              ) : null}

              <button
                className="mt-4 text-lg rounded-sm h-10 bg-red-600 text-white"
                disabled={
                  !validName || !validPwd || !validMatch ? true : false
                }>
                Sign Up
              </button>
              {/* <input type="checkbox" checked="checked" /> Remember me */}
              <button
                type="button"
                // onClick={console.log("yo")}
                // disabled={!validName || !validPwd || !validMatch ? true : false}
                className="mt-2">
                {" "}
                Cancel
              </button>
            </div>
          </form>
          <div>Already Have anu account? <Link className="text-blue-900" to='/auth/login'>GetLogin</Link></div>
        </>
      )}
    </div>
  );
};
