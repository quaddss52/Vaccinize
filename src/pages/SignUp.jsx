import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import visibilityIcon from "../assets/svg/visibilityIcon.svg";

function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = formData;
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();

    // try {
    //   const auth = getAuth();

    //   const userCredential = await createUserWithEmailAndPassword(
    //     auth,
    //     email,
    //     password
    //   );

    //   const user = userCredential.user;

    //   updateProfile(auth.currentUser, {
    //     displayName: name,
    //   });
    //   const formDataCopy = { ...formData };
    //   delete formDataCopy.password;
    //   formDataCopy.timestamp = serverTimestamp();

    //   await setDoc(doc(db, "users", user.uid), formDataCopy);
    //   navigate("/");
    // } catch (error) {
    //   toast.error("Something went wrong");
  };

  return (
    <>
      <div className="container">
        <header className="page-title text-4xl">Welcome to Vaccinize!</header>

        <form onSubmit={onSubmit}>
          <input
            type="text"
            className="nameInput"
            placeholder="Enter your name."
            id="name"
            value={name}
            onChange={onChange}
          />

          <input
            type="email"
            className="emailInput"
            placeholder="Enter your email."
            id="email"
            value={email}
            onChange={onChange}
          />

          <div className="passwordInputDiv">
            <input
              type={showPassword ? "text" : "password"}
              className="passwordInput"
              placeholder="Password"
              id="password"
              value={password}
              onChange={onChange}
            />
            <img
              src={visibilityIcon}
              alt="Show password"
              className="showPassword"
              onClick={() =>
                setShowPassword((prevState) => {
                  return !prevState;
                })
              }
            />
          </div>
          <Link to="/forgot-password" className="forgotPasswordLink">
            {" "}
            Forgot password?
          </Link>
          <div className="signUpBar">
            <p className="signUpText">Sign Up</p>

            <button className="signUpButton">
              <FaArrowRight fill="#fff" width="34px" height="34px" />
            </button>
          </div>
        </form>
        {/* <Oauth /> */}
        <Link to="/sign-in" className="registerLink">
          Already have an account??
        </Link>
      </div>
    </>
  );
}

export default SignUp;
