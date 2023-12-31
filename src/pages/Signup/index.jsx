import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [isPreviousHovered, setIsPreviousHovered] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [signupError, setSignupError] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    console.log("token", accessToken);
  }, []);

  useEffect(() => {
    let fadeTimeout;

    if (signupError) {
      fadeTimeout = setTimeout(() => {
        setSignupError(false);
      }, 2000);
    }

    return () => {
      // Membersihkan timeout jika komponen dibongkar (unmounted)
      clearTimeout(fadeTimeout);
    };
  }, [signupError]);

  const handleBack = () => {
    navigate("/");
  };

  const onChangeUsername = (event) => {
    setUsername(event.target.value);
    setError("");
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
    setError("");
  };

  const handleSignup = () => {
    setLoading(true);

    //   bikin alert bahwa login gagal
    setSignupError(true);

    // fade out alert
    const timeout = setTimeout(() => {
      setFadeOut(true);
    }, 2000);

    //  simpan ID timeout ke dalam state
    setFadeOut(timeout);

    const payload = {
      username: username,
      password: password,
    };

    axios
      .post(`https://reqres.in/api/register`, payload)
      .then((res) => {
        console.log("Login Success:", res);

        const token = res.data.token;
        localStorage.setItem("accessToken", token);

        setLoading(false);

        navigate("/");
      })
      .catch((err) => {
        console.log(err.respone);

        setError(err.response.data.error);
        setLoading(false);
      });
  };

  console.log(loading);

  return (
    <div className="signup-wrapper">
      <div className="back-button">
        <button
          className={`paging-button ${
            isPreviousHovered ? "previous-hover" : ""
          }`}
          onMouseEnter={() => setIsPreviousHovered(true)}
          onMouseLeave={() => setIsPreviousHovered(false)}
          onClick={handleBack}
        >
          {isPreviousHovered ? (
            // SVG untuk hover
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="45"
              height="45"
              fill="currentColor"
              className="bi bi-house-fill"
              viewBox="0 0 16 16"
            >
              <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293z" />
              <path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6Z" />
            </svg>
          ) : (
            // SVG untuk display
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="45"
              height="45"
              fill="currentColor"
              className="bi bi-house"
              viewBox="0 0 16 16"
            >
              <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z" />
            </svg>
          )}
        </button>
      </div>

      <div className="signup-form">
        <h1 className="form-title">Sign Up</h1>

        {/* Input Username and Password */}
        <div className="input-wrapper">
          {/* Username */}
          <div className="username">
            <div className="label-form">
              <label className="label">Email</label>
            </div>
            <div className="border-form">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                className="form-icon bi bi-envelope-fill"
                viewBox="0 0 16 16"
              >
                <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
              </svg>

              <div className="vertical-line"></div>

              <input
                className="input-text"
                placeholder="example@regres.in"
                type="text"
                onChange={onChangeUsername}
              />
            </div>
          </div>

          {/* Password */}
          <div className="password">
            <div className="label-form">
              <label className="label">Password</label>
            </div>
            <div className="border-form">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                className="form-icon bi bi-lock-fill"
                viewBox="0 0 16 16"
              >
                <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2m3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2" />
              </svg>

              <div className="vertical-line"></div>

              <input
                className="input-text"
                placeholder="********"
                type="password"
                onChange={onChangePassword}
              />
            </div>
          </div>

          {/* Sign Up Button */}
          {signupError && (
            <div className={`alert-overlay ${fadeOut ? "fade-out" : ""}`}>
              {error && <p className="alert-box">{error}</p>}
            </div>
          )}

          <div
            className="signup-button2"
            disabled={loading ? true : false}
            onClick={handleSignup}
          >
            <button className="signup-btn2">
              {loading ? "Loading..." : "Sign Up"}
            </button>
          </div>
        </div>

        {/* Sign Up With */}
        <div className="signup-with">
          <div className="line">
            <div className="hori-line"></div>
            <p>Or</p>
            <div className="hori-line"></div>
          </div>

          <div className="signup-with-links">
            <div className="signup-logo google">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="45"
                height="45"
                viewBox="0 0 48 48"
                fill="none"
              >
                <path
                  d="M0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24Z"
                  fill="white"
                />
                <path
                  d="M24.0001 17.6213C25.953 17.6213 27.2704 18.4649 28.0215 19.1698L30.9566 16.304C29.1539 14.6285 26.8081 13.6 24.0001 13.6C19.9326 13.6 16.4197 15.9342 14.7095 19.3316L18.0721 21.9431C18.9157 19.4356 21.2499 17.6213 24.0001 17.6213Z"
                  fill="#EA4335"
                />
                <path
                  d="M33.984 24.2311C33.984 23.376 33.9147 22.752 33.7644 22.1049H24V25.9644H29.7316C29.616 26.9236 28.992 28.368 27.6053 29.3387L30.8871 31.8809C32.8516 30.0667 33.984 27.3973 33.984 24.2311Z"
                  fill="#4285F4"
                />
                <path
                  d="M18.0837 26.0569C17.8641 25.4098 17.737 24.7164 17.737 24C17.737 23.2836 17.8641 22.5902 18.0721 21.9431L14.7094 19.3316C14.0045 20.7413 13.6001 22.3244 13.6001 24C13.6001 25.6756 14.0045 27.2587 14.7094 28.6684L18.0837 26.0569Z"
                  fill="#FBBC05"
                />
                <path
                  d="M24.0003 34.4C26.8083 34.4 29.1656 33.4756 30.8874 31.8809L27.6056 29.3387C26.7274 29.9511 25.5487 30.3787 24.0003 30.3787C21.2501 30.3787 18.9159 28.5645 18.0839 26.0569L14.7212 28.6685C16.4314 32.0658 19.9327 34.4 24.0003 34.4Z"
                  fill="#34A853"
                />
              </svg>
            </div>
            <div className="signup-logo facebook">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="45"
                height="45"
                viewBox="0 0 48 48"
                fill="none"
              >
                <path
                  d="M48 24C48 10.7438 37.2562 0 24 0C10.7438 0 0 10.7438 0 24C0 35.9813 8.775 45.9094 20.25 47.7094V30.9375H14.1562V24H20.25V18.7125C20.25 12.6984 23.8313 9.375 29.3156 9.375C31.9406 9.375 34.6875 9.84375 34.6875 9.84375V15.75H31.6594C28.6781 15.75 27.75 17.6016 27.75 19.5V24H34.4062L33.3422 30.9375H27.75V47.7094C39.225 45.9094 48 35.9813 48 24Z"
                  fill="#1877F2"
                />
                <path
                  d="M33.3423 30.9375L34.4062 24H27.75V19.5C27.75 17.6016 28.6782 15.75 31.6595 15.75H34.6875V9.84375C34.6875 9.84375 31.9407 9.375 29.3156 9.375C23.8314 9.375 20.2501 12.6984 20.2501 18.7125V24H14.1562V30.9375H20.2501V47.7094C21.4735 47.9016 22.725 48 24 48C25.275 48 26.5266 47.9016 27.75 47.7094V30.9375H33.3423Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="signup-logo appleId">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="45"
                height="45"
                viewBox="0 0 48 48"
                fill="none"
              >
                <path
                  d="M0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24Z"
                  fill="white"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M29.2669 9.60001C29.5182 11.3066 28.8235 12.9786 27.9072 14.1615C26.9268 15.4303 25.2369 16.4116 23.5996 16.3604C23.3007 14.7265 24.066 13.043 24.9972 11.9113C26.0186 10.6623 27.7692 9.70409 29.2669 9.60001ZM34.1854 33.6216C35.0295 32.328 35.3448 31.6754 36 30.215C31.2343 28.4026 30.4707 21.6273 35.1871 19.0269C33.7485 17.2228 31.727 16.177 29.8187 16.177C28.4437 16.177 27.5016 16.5359 26.6452 16.8621C25.9315 17.1339 25.2772 17.3831 24.4815 17.3831C23.6216 17.3831 22.8601 17.11 22.0628 16.8242C21.1866 16.51 20.2672 16.1803 19.1262 16.1803C16.9848 16.1803 14.7054 17.4888 13.2602 19.7258C11.2288 22.8763 11.5753 28.7991 14.8696 33.8447C16.0471 35.6504 17.6203 37.6792 19.678 37.6974C20.5318 37.7058 21.1 37.451 21.7148 37.1752C22.4186 36.8596 23.1834 36.5166 24.5078 36.5095C25.8399 36.5015 26.5927 36.8487 27.2871 37.169C27.8862 37.4453 28.4417 37.7016 29.2883 37.6924C31.3476 37.6759 33.0079 35.4274 34.1854 33.6216Z"
                  fill="#0B0B0A"
                />
              </svg>
            </div>
          </div>

          <div className="login-button2">
            <p>
              Already have an account?
              <Link to="/login">
                <button className="login-btn2">Login</button>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
