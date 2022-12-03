import { useState } from "react";
import { Link } from "react-router-dom";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { toast } from "react-toastify";
// import {ReactComponent as ArrowRightIcon} from '../assets/svg/keyboardArrowRightIcon.svg'
function ForgotPassword() {
  const [email, setEmail] = useState("");

  const onChange = (e) => {
    setEmail(e.target.value);
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const auth = getAuth();
      await sendPasswordResetEmail(auth, email);

      toast.success("Email Sent!");
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="forgot-password">
      <div className="container h-full">
        <div className="forgotPassword-content">
          <div className="card px-12 py-20">
            <header>
              <p className="page-title  text-2xl">Forgot Password?</p>
            </header>
            <main>
              <form onSubmit={onSubmit}>
                <input
                  type="email"
                  className="emailInput"
                  placeholder="email"
                  id="email"
                  value={email}
                  onChange={onChange}
                />

                <button className="btn-primary">
                  <p>Send reset link</p>
                </button>

                {/* <Link className="btn-primary" to="/sign-in">
                Sign in
              </Link> */}
              </form>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
