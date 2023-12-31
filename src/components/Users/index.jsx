import React from "react";
import "./style.css";
import image from "./images/team-workplace.png";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [paging, setPaging] = useState({
    previousPage: 0,
    currentPage: 1,
    nextPage: 2,
  });
  const [isPreviousHovered, setIsPreviousHovered] = useState(false);
  const [isNextHovered, setIsNextHovered] = useState(false);

  useEffect(() => {
    getUsers();
  }, [paging.currentPage]);

  const getUsers = () => {
    const apiUrl = `https://reqres.in/api/users?perPage=&page=${paging.currentPage}`;

    axios
      .get(apiUrl)
      .then((res) => {
        console.log(res);
        setUsers(res.data.data);
        setPaging({
          previousPage: res.data.page - 1,
          currentPage: res.data.page,
          nextPage:
            res.data.page < res.data.total_pages ? res.data.page + 1 : null,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  console.log(users);

  const handleNext = () => {
    setPaging({
      ...paging,
      currentPage: paging.currentPage + 1,
    });
  };

  const handleBack = () => {
    setPaging({
      ...paging,
      currentPage: paging.currentPage - 1,
    });
  };

  return (
    <div id="users">
      <div className="container">
        {/* About Us */}
        <div className="about-us-container">
          {/* About Us - Left Side */}
          <div className="about-ls">
            <div className="para">
              <div className="deco-line"></div>
              <h1 className="about-us-h1">
                Leading companies trust us{" "}
                <span className="span-h1">to develop software</span>
              </h1>
              <p className="about-us-p">
                We <span className="span-p">add development capacity</span> to
                tech teams. Our value isn’t limited to building teams but is
                equally distributed across the project lifecycle. We are a
                custom software development company that guarantees the
                successful delivery of your project.
              </p>
            </div>

            <button className="about-us-button">See more Informations →</button>
          </div>

          {/* About Us - Right Side */}
          <div className="about-rs">
            <img
              className="about-us-image"
              src={image}
              alt="about us content"
            />
            <svg
              className="play-button"
              xmlns="http://www.w3.org/2000/svg"
              width="58"
              height="58"
              viewBox="0 0 58 58"
              fill="none"
            >
              <path
                d="M25.2052 19.6755C24.9476 19.6629 24.6913 19.7184 24.4622 19.8363H24.0154L24.2339 19.9819C24.0914 20.0925 23.9699 20.229 23.8762 20.3849C23.7396 20.6122 23.6671 20.8724 23.6666 21.1377V21.1386V36.8615V36.8624C23.6671 37.1277 23.7396 37.3878 23.8762 37.6152L24.3048 37.3576L23.8762 37.6152C24.0129 37.8426 24.2087 38.0286 24.4427 38.1536C24.6767 38.2785 24.9402 38.3376 25.2052 38.3246L25.1807 37.8252L25.2052 38.3246C25.4702 38.3116 25.7266 38.2269 25.9473 38.0797L37.7377 30.221C37.9389 30.0872 38.1039 29.9056 38.218 29.6926C38.3321 29.4796 38.3918 29.2417 38.3918 29C38.3918 28.7584 38.3321 28.5205 38.218 28.3075C38.1039 28.0944 37.9389 27.9129 37.7377 27.779L27.3194 20.8363H27.3201L25.9473 19.9204C25.7266 19.7731 25.4702 19.6885 25.2052 19.6755ZM29 52.6667C15.9289 52.6667 5.33331 42.0711 5.33331 29C5.33331 15.9289 15.9289 5.33337 29 5.33337C42.0711 5.33337 52.6666 15.9289 52.6666 29C52.6666 42.0711 42.0711 52.6667 29 52.6667Z"
                fill="#57007B"
                stroke="white"
              />
            </svg>
          </div>
        </div>

        {/* Users */}
        <div className="users-wrapper">
          <div className="users-content">
            <div className="deco-line"></div>
            <h1 className="about-us-h1">
              Meet Our <span className="span-h1">Team</span>
            </h1>

            {/* Users List */}
            <div className="users-list">
              {users.map((user) => (
                <div className="user" key={user.id}>
                  <img className="user-image" src={user.avatar} alt="user" />
                  <h2 className="user-individu">
                    {user.first_name} {user.last_name}
                  </h2>
                  <Link className="user-link" to={`/user/${user.id}`}>
                    <button className="user-button">View Profile</button>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Pagination */}
          <div className="paging">
            <div className="previous-button">
              <button
                className={`paging-button ${
                  isPreviousHovered ? "previous-hover" : ""
                }`}
                onClick={handleBack}
                disabled={!paging.previousPage}
                onMouseEnter={() => setIsPreviousHovered(true)}
                onMouseLeave={() => setIsPreviousHovered(false)}
              >
                {isPreviousHovered ? (
                  // SVG untuk hover
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="45"
                    height="45"
                    fill="currentColor"
                    class="bi bi-arrow-left-circle-fill"
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

            <p className="paging-text">page {paging.currentPage}</p>

            <div className="next-button">
              <button
                className={`paging-button ${isNextHovered ? "next-hover" : ""}`}
                onClick={handleNext}
                disabled={!paging.nextPage}
                onMouseEnter={() => setIsNextHovered(true)}
                onMouseLeave={() => setIsNextHovered(false)}
              >
                {isNextHovered ? (
                  // SVG untuk hover
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="45"
                    height="45"
                    fill="currentColor"
                    class="bi bi-arrow-right-circle-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
                  </svg>
                ) : (
                  // SVG untuk display
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="45"
                    height="45"
                    fill="currentColor"
                    className="bi bi-arrow-right-circle"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
