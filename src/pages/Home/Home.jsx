import React from "react";
import Features from "../../components/Home/Features";
import Footer from "../../components/Home/Footer";
import Header from "../../components/Home/Header";
import Landing from "../../components/Home/Landing";
import Pricing from "../../components/Home/Pricing";
import "./Home.css";

const Home = () => {
  return (
    <main className="main">
      <Header/>
      <Landing/>
      <Features/>
      <Pricing/>
      <Footer/>
    </main>
  );
};

export default Home;
