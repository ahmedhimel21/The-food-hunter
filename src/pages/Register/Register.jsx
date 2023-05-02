import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import {  updateProfile } from "firebase/auth";
import { AuthContext } from "../../Provider/Authproviders";

const Register = () => {
  const { createUser, signInWithGoogle, user } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [show, setShow] = useState(false);
  const handleCreateUser = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoUrl = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirmPassword.value;
    if (!/(?=.*[A-Z])/.test(password)) {
      setError("Please add at least one uppercase");
      return;
    } else if (!/(?=.*[!@#$&*])/.test(password)) {
      setError("Please add a special characters");
      return;
    } else if (password.length < 6) {
      setError("Please add at least 8 Characters");
      return;
    } else if (password !== confirm) {
      alert("Please make sure your password are same!");
      return;
    }
    createUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        setError("");
        form.reset();
        setSuccess("User has been created successfully");
        // handleEmailVerification(result.user);
        updateUserData(result.user,name,photoUrl);
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
        setSuccess("");
      });
  };
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        setSuccess("User has been created successfully");
        setError("");
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
        setSuccess("");
      });
  };
  // email verification
  // const handleEmailVerification = (user) =>{
  //   sendEmailVerification(user)
  //   .then(r =>{
  //     console.log(r)
  //   })
  //   alert('Please verify your email Address')
  // }
  const updateUserData =(user,name,photoURL) =>{
    updateProfile(user,{
      displayName:name, photoURL: photoURL
    })
    .then(()=>{
      setSuccess('user profile updated')
    })
    .catch(error =>{
      setError(error.message)
    })
  }
  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleCreateUser} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="first and last name"
                  className="input input-bordered"
                  name="name"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo</span>
                </label>
                <input
                  type="text"
                  placeholder="photo URL"
                  className="input input-bordered"
                  name="photoURL"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type={show ? "text" : "password"}
                  name="password"
                  placeholder="one uppercase, special and 6 characters"
                  className="input input-bordered"
                  required
                />
                <p onClick={() => setShow(!show)}>
                  {show ? (
                    <span className="cursor-pointer	">Hide password!</span>
                  ) : (
                    <span className="cursor-pointer	">Show password!</span>
                  )}
                </p>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  type={show ? "text" : "password"}
                  name="confirmPassword"
                  placeholder="one uppercase, special and 6 characters"
                  className="input input-bordered"
                  required
                />
                {show ? (
                  <span className="cursor-pointer	">Hide password!</span>
                ) : (
                  <span className="cursor-pointer	">Show password!</span>
                )}
              </div>
              <p className="text-red-600">{error}</p>
              <p className="text-green-600">{success}</p>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Sign Up</button>
              </div>
              <p>
                Already Have Account?{" "}
                <Link className="text-purple-700 font-bold text-md" to="/login">
                  Login
                </Link>
              </p>
              <hr />
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

export default Register;
