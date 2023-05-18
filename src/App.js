import "./App.css";
import React, { useState } from "react";
import fireapp from "./Components/Firebase";
import { auth } from "./Components/Firebase";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";

function App() {
  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState("");
  const [confirmObj, setConfirmObj] = useState("");

  const handleInput = (e) => {
    e.preventDefault();
    setMobile(e.target.value);
  };
  const handleOtpInput = (e) => {
    e.preventDefault();
    setOtp(e.target.value);
  };

  const setUpRecaptcha = async (number) => {
    const recaptchaVerifier = new RecaptchaVerifier(
      "recaptcha-container",
      {},
      auth
    );
    recaptchaVerifier.render();
    return signInWithPhoneNumber(auth, number, recaptchaVerifier);
  };

  const onSignInSubmit = async (e) => {
    e.preventDefault();
    const phoneNumber = "+91" + mobile;
    console.log("phoneNumber====>", phoneNumber);
    try {
      const response = await setUpRecaptcha(phoneNumber);
      console.log(response);
      setConfirmObj(response);
    } catch (err) {
      console.log(err);
    }
  };

  const verifyOtp = async (e) => {
    e.preventDefault();
    try {
      await confirmObj.confirm(otp);
      alert("logged in");
      // console.log("otp===>",otp)
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="container mt-5">
        <h1>Mobile Otp Authentication </h1>

        {/* -------------------------------------------------------mobile number part------------------------------------------------------- */}
        <form action="" onSubmit={onSignInSubmit} className="m-3">
          <label
            htmlFor="mobileInput"
            className=""
            style={{ marginLeft: "5px" }}
          >
            <h4>MobileInput</h4>
          </label>
          <input
            type="number"
            name="mobile"
            value={mobile}
            id="mobileInput"
            onChange={(e) => {
              handleInput(e);
            }}
            className="form-control mb-3 mt-3"
            style={{ width: "500px" }}
          />
          <button
            type="submit"
            style={{ marginLeft: "5px" }}
            className="btn btn-primary"
          >
            Send OTP
          </button>
          <div id="recaptcha-container" className="mt-3"></div>
        </form>
        <hr />

        {/* -------------------------------------------------------otp part------------------------------------------------------- */}
        <form action="" onSubmit={verifyOtp} className="m-3">
          <label
            htmlFor="mobileInput"
            className=""
            style={{ marginLeft: "5px" }}
          >
            <h4>Enter OTP</h4>
          </label>
          <input
            type="number"
            name="otp"
            value={otp}
            id="otpInput"
            onChange={(e) => {
              handleOtpInput(e);
            }}
            className="form-control mb-3 mt-3"
            style={{ width: "500px" }}
          />
          <button
            type="submit"
            className="btn btn-primary"
            style={{ marginLeft: "5px" }}
          >
            Verify OTP
          </button>
          <div id="recaptcha-container" className="mt-3"></div>
        </form>
      </div>
    </>
  );
}

export default App;
