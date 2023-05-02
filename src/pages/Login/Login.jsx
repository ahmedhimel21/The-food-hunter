import React, { useContext, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { sendPasswordResetEmail } from "firebase/auth";
import { AuthContext } from "../../Provider/Authproviders";

const Login = () => {
  const {signInWithGoogle, signIn, auth} = useContext(AuthContext);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [show, setShow] = useState(false);
  const emailRef = useRef();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const handleSignIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password)
      .then((r) => {
        const loggedUser = r.user;
        console.log(loggedUser);
        navigate(from, { replace: true });
        setError("");
        form.reset();
        setSuccess("Login Successfully");
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
        setSuccess("");
      });
  };
  //social login
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleResetPassword = (e) => {
    const email = emailRef.current.value;
    if (!email) {
      alert("please provide your email address to reset password");
      return;
    }
    sendPasswordResetEmail(auth, email)
      .then(() => {
        alert("Please check your email");
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  };
  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSignIn} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  name="email"
                  ref={emailRef}
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type={show ? "text" : "password"}
                  placeholder="password"
                  className="input input-bordered"
                  name="password"
                />
                <p
                  className="mt-5 font-semibold text-md"
                  onClick={() => setShow(!show)}
                >
                  {show ? (
                    <span className="cursor-pointer	">Hide password!</span>
                  ) : (
                    <span className="cursor-pointer	">Show password!</span>
                  )}
                </p>
                <label className="label">
                  <a
                    onClick={handleResetPassword}
                    className="label-text-alt link link-hover text-md font-bold"
                  >
                    Forgot password?
                  </a>
                </label>
                <p className="text-red-600">{error}</p>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
              <p>
                New to food Hunter?{" "}
                <Link
                  className="text-purple-600 text-md font-bold"
                  to="/register"
                >
                  Create New Account
                </Link>
              </p>
            </form>
            <div className="border-2 border-purple-500 text-center rounded bg-purple-200 mb-5 mx-5">
              <button onClick={handleGoogleSignIn}>Continue With Google</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
