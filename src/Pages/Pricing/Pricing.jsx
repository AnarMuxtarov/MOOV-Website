import React from "react";
import PricingBanner from "../../Components/Pricing/PricingBanner/PricingBanner";
import PriceModel from "../../Components/Pricing/PriceModel/PriceModel";
import PricingDetails from "../../Components/Pricing/PricingDetails/PricingDetails";
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
