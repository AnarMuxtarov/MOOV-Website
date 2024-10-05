import React from "react";
import "../../Pages/Pricing/Pricing.css";
import PriceModel from "../../Components/PriceModel/PriceModel";
import "../../Components/PricingDetails/PricingDetails.css";
import PricingDetails from "../../Components/PricingDetails/PricingDetails";
import PricingBanner from "../../Components/PricingBanner/PricingBanner";
import Membership from "../../Components/Main/Membership/Membership";

const Pricing = () => {
  return (
    <>
<PricingBanner/> 
<PriceModel/>
<PricingDetails/>
<Membership/>
 </>
  );
};

export default Pricing;
