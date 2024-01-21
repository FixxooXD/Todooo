import React, { useRef, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../../store/todoSlice";
import { Loading } from "../Loading";
import Nav from "../Nav";

const Login = () => {
  const [inputUser, setInputUser] = useState("");
  const [inputPwd, setInputPwd] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [isLoadingg, setIsLoading] = useState(true);

  const userRef = useRef();
  const pwdRef = useRef();
  const navigate = useNavigate();

  // useEffect(() => {
  //   userRef.current.focus();
  // }, []);
   console.log(showPassword)
  let isLoading = useSelector((state) => state.user.isLoading);
  let isError = useSelector((state) => state.user.isError);
  let isAuthenticated = useSelector((state) => state.user.isAuthenticated);

  // console.log(isLoading)
  // console.log(isError)
  console.log(isAuthenticated);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputPwd || inputUser === "") {
      //  console.log("anything is empty")
    }
    dispatch(
      loginUser({
        userName: inputUser,
        password: inputPwd,
      })
    );
    setTimeout(() => {
      navigate("/todos");
    }, "1000");
  };

  useEffect(() => {
    // Simulate an API call
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      <Nav />
      <div className="relative flex flex-col mx-2 items-center">
        {isError ? (
          <section className="absolute px-5 h-[2rem] mt-[1rem] border-2">
            <div
              className="flex justify-center items-center"
              //   Only IF you have something as a CSS class
              //   className={errMsg ? "errmsg" : "offscreen"}
              aria-live="assertive">
              {/* {errMsg} */}
              {/* {console.log(errMsg)} */}
              <h1>{isError}</h1>
            </div>
          </section>
        ) : null}

        {isLoadingg ? (
          <Loading />
        ) : (
          <>
            <form
              onSubmit={handleSubmit}
              className="w-[95%] sm:w-[25rem] mt-[5rem] text-base font-pops p-4 border">
              <div className="flex flex-col">
                <h2 className="">Get Login</h2>
                {/* Username */}
                <div
                  className="flex flex-col border rounded-xl mt-4 px-2 py-[0.4rem]"
                  // validUser
                  //   ? "flex flex-col border rounded-xl mt-4 px-2 py-[0.4rem] border-green-600"
                  //   : "flex flex-col border rounded-xl mt-4 px-2 py-[0.4rem]"
                >
                  <label className="text-sm">Username:</label>
                  <input
                    className="outline-none"
                    onChange={(e) => setInputUser(e.target.value)}
                    ref={userRef}
                    type="text"
                    required
                  />
                </div>
                {/* Password */}
                <div
                  className="flex flex-col border rounded-xl mt-4 px-2 py-[0.4rem]"
                  //   validPwd
                  //     ? "flex flex-col border rounded-xl mt-4 px-2 py-[0.4rem] border-green-600"
                  //     : "flex flex-col border rounded-xl mt-4 px-2 py-[0.4rem]"
                  // }
                >
                  <label className="text-sm">Password:</label>
                  <input
                    className="outline-none"
                    onChange={(e) => setInputPwd(e.target.value)}
                    ref={pwdRef}
                    type={
                      showPassword ? "text" : "password"
                  }
                    required
                  />
                </div>
                <div className="flex items-center mt-2 ml-2 gap-2">
                  <input
                    id="check"
                    type="checkbox"
                    value={showPassword}
                    onChange={() => setShowPassword((prev) => !prev)}
                  />
                  <label className="text-xs" htmlFor="check">Show Password</label>
                  </div>
                <button
                  type="submit"
                  className="mt-4 text-lg rounded-sm h-10  bg-red-600 text-white">
                  Login
                </button>
              </div>
            </form>
            <div>
              Don't have an account?{" "}
              <Link className="text-blue-900" to="/auth">
                GetSignUp
              </Link>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Login;
