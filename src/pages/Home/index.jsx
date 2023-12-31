import React from "react";
import "./style.css";
import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import Cards from "../../components/Cards";
import Users from "../../components/Users";
import Footer from "../../components/Footer";

const Home = () => {
  return (
    <div className="wrapper">
      <Navbar />
      <Hero />
      <Cards id="cards" />
      <Users id="users" />
      <Footer />
    </div>
  );
};

export default Home;
