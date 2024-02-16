import React from "react";
import Home from "../components/homes/Home";
import Body from "../components/Body";
import Quest from "../components/homes/Quest";

import Ads from "./Ads";
import Review from "./Review";
import Letter from "../components/homes/Letter";
import Footer from "../components/Footer";

const HomePages = () => {
  return (
    <>
      <Home />
      <Body />
      <Quest />

      <Ads />
      <Review />
      <Letter />
      <Footer />
    </>
  );
};

export default HomePages;
