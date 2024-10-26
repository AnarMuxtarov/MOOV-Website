import React from 'react'

import Img from "../../src/assets/Images/NotFoundImages/icon-404.webp"
import "../Components/NotFound.css"

const NotFound = () => {
  return (
    <>
    <div id='NotFound'>
       <div className="container">
      <div className="notFound-Left">
<img src={Img} alt="NotFound-logo"   />
      </div>
      <div className="notFound-Center">
      <h2>404</h2>
      <p>
      The content you are looking for is currently unavailable.
        Don't leave now, would you like to browse the following?
                          </p>
  <a href="/">Return to Home page</a>

      </div>
      <div className="notFound-Right">
      <img src={Img} alt="NotFound-logo"   /> 
      </div>

       </div>
    </div>
    
    </>
  )
}

export default NotFound
