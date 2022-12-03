import React from "react";
import { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";
import { toast } from "react-toastify";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase.config";

function Subscribe() {
  const [email, setEmail] = useState("");
  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email === "") {
      toast.error("Enter your email");
    } else {
      const emailCopy = {
        email,
        timesStamp: serverTimestamp(),
      };
      await addDoc(collection(db, "newsLetterEmails"), emailCopy);
      toast.success("Added to Newsletter");
      setEmail("");
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="subscribe-form">
        <div className="form-group">
          <div className="relative">
            <input
              type="email"
              className="w-full input"
              placeholder="Enter your email"
              value={email}
              onChange={handleChange}
            />
            <button
              type="submit"
              className="absolute top-0 right-0 rounded-l-none w-36 btn-primary h-full button"
            >
              <FaPaperPlane className="text-3xl" />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Subscribe;
