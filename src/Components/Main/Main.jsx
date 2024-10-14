import React from "react";
import HomeBanner from "./HomeBanner/HomeBanner";
import HomeCategoryOne from "./HomeCategoryOne/HomeCategoryOne";
import OurServices from "./Our Services/OurServices";
import LiveMovie from "./Live Movie/LiveMovie";
import HomeCategoryTwo from "./HomeCategoryTwo/HomeCategoryTwo";
import PriceModel from "../Pricing/PriceModel/PriceModel";
import Membership from "./Membership/Membership";


const Main = () => {
  return (
    <>
      <HomeBanner />
      <HomeCategoryOne/>
      <OurServices />
      <LiveMovie />
      <HomeCategoryTwo/>
      <PriceModel/>
      <Membership />
    </>
  );
};

export default Main
