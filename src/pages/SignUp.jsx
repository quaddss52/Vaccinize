import { useState } from "react";
import phoneOne from "../assets/svg/phoneOne.svg";
import { Link, useNavigate } from "react-router-dom";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase.config";
import { toast } from "react-toastify";
import Oauth from "../components/Oauth";

function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();

    if ((password.length && password2.length) < 6) {
      toast.error("Password needs to be at least 6 characters");
    }

    if (password !== password2) {
      toast.error("Ensure Passwords match");
    } else {
      try {
        const auth = getAuth();

        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );

        const user = userCredential.user;

        updateProfile(auth.currentUser, {
          displayName: name,
        });
        const formDataCopy = { ...formData };
        delete formDataCopy.password;
        formDataCopy.timestamp = serverTimestamp();

        await setDoc(doc(db, "users", user.uid), formDataCopy);
        navigate("/");
      } catch (error) {
        toast.error("Something went wrong");
        console.log(error);
      }
    }
  };

  return (
    <>
      <div className="sign-up  mb-3">
        <div className="container">
          <div className="signup-content">
            <div className="flex-column">
              <div className="column">
                <div className="column-1 ">
                  <img src={phoneOne} alt="" className="mt-20" />
                </div>
              </div>
              <div className="column">
                <div className="column-2">
                  <p className="page-title text-4xl text-center w-full mt-6 ">
                    Welcome to Vaccinize!
                  </p>
                  <div className="card">
                    <div className="card-content px-6 py-12">
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
                            type="password"
                            className="passwordInput"
                            placeholder="Password"
                            id="password"
                            value={password}
                            onChange={onChange}
                          />
                        </div>
                        <div className="passwordInputDiv">
                          <input
                            type="password"
                            className="passwordInput"
                            placeholder=" Confirm Password"
                            id="password2"
                            value={password2}
                            onChange={onChange}
                          />
                        </div>
                        <button className="btn-primary w-4/5 text-center mx-auto mb-12">
                          {" "}
                          Sign Up
                        </button>
                      </form>
                      <Oauth />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
