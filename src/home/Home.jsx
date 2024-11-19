import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Clothes from '../components/Clothes';


function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <Clothes />
      <Footer />
    </>
  );
}

export default Home;
