import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "./style.css";

const UserDetail = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const param = useParams();
  const [isPreviousHovered, setIsPreviousHovered] = useState(false);
  const navigate = useNavigate();

  console.log(param.id);

  useEffect(() => {
    getUserDetail();
  }, []);

  const getUserDetail = () => {
    axios
      .get(`https://reqres.in/api/users/${param.id}`)
      .then((item) => {
        setUser(item.data.data);
      })
      .catch((error) => {
        setError(error.response.data);
      });
  };

  console.log(user);

  const getRandomProfession = () => {
    const storedProfession = localStorage.getItem(`userProfession_${param.id}`);

    if (storedProfession) {
      return storedProfession;
    } else {
      const professions = [
        "UI/UX Designer",
        "Frontend Web Developer",
        "Backend Web Developer",
        "Mobile App Developer",
      ];

      const randomIndex = Math.floor(Math.random() * professions.length);
      const randomProfession = professions[randomIndex];

      // Simpan profession ke localStorage agar persisten
      localStorage.setItem(`userProfession_${param.id}`, randomProfession);

      return randomProfession;
    }
  };

  const handleBack = () => {
    navigate("/");
    console.log("back button clicked");
  };

  return (
    <div>
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
              className="bi bi-arrow-left-circle-fill"
              viewBox="0 0 16 16"
            >
              <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z" />
            </svg>
          ) : (
            // SVG untuk display
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="45"
              height="45"
              fill="currentColor"
              className="bi bi-arrow-left-circle"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"
              />
            </svg>
          )}
        </button>
      </div>

      <div className="user-detail">
        <div className="detail">
          <h2 className="user-individu">
            {user.first_name} {user.last_name}
          </h2>
          <img className="user-image" src={user.avatar} alt={user.first_name} />
          <p className="user-info">Email : {user.email}</p>
          <p className="user-info">Profession : {getRandomProfession()}</p>
        </div>
        {error.length ? <h1 className="error">{error}</h1> : null}
      </div>
    </div>
  );
};

export default UserDetail;
