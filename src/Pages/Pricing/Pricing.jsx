import React from "react";
import "../../Pages/Pricing/Pricing.css";
import PriceModel from "../../Components/Pricing/PriceModel/PriceModel";
import "../../Components/Pricing/PricingDetails/PricingDetails.css";
import PricingDetails from "../../Components/Pricing/PricingDetails/PricingDetails";
import PricingBanner from "../../Components/Pricing/PricingBanner/PricingBanner";
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
