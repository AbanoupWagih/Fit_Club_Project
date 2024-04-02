import React, { useRef } from "react";
import "./Join.css";
import emailJs from "@emailjs/browser";

const Join = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailJs
      .sendForm("service_xiss3wl", "template_bm3ndo2", form.current, {
        publicKey: "uR6libidj-L4Pq86-",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="join" id="join-us">
      <div className="left-j">
        <hr />
        <div>
          <span className="stroke-text">Ready To</span>
          <span>Level Up</span>
        </div>
        <div>
          <span>Your Body</span>
          <span className="stroke-text">With Us?</span>
        </div>
      </div>
      <div className="right-j">
        <form ref={form} className="email-container" onSubmit={sendEmail}>
          <input
            type="email"
            name="user_email"
            placeholder="Enter Your Email Address"
          />
          <button className="btn btn-j">Join Now</button>
        </form>
      </div>
    </div>
  );
};

export default Join;
