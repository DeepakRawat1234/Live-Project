import React from 'react'
import "../styles/Verification.css"
import india from "../../assets/Uploder/india.png"
import  id from "../../assets/Uploder/id.png"
import  dl from "../../assets/Uploder/dl.png"
import  passport from "../../assets/Uploder/passport.png"


const Idselect = () => {
  return (
    <div className='id-box'>
        <h2>Select ID type</h2>
        <label htmlFor="">
           <h3> Document Issuing Country/Region</h3>
            <div className='country-box'>
                <img src={india} alt="" />
            <select name="Country" id="">
                
                <option value="India">INDIA</option>
                 <option value="USA">USA</option>
                  <option value="RUSSIA">RUSSIA</option>
                  <option value="CHINA">CHINA</option>
                   <option value="NEPAL">NEPAL</option> 
            </select></div>
        </label>
   <div className="idtype">
    <h3>What method would you prefer to use?</h3>
    <div className="id-option">
        <div><img src={id} alt="" /></div>
        <div className='id-text'>
            <h5>ID Proof</h5>
        </div>
        <div>
            <input type="radio" />
        </div>
    </div>
     <div className="id-option">
        <div><img src={passport} alt="" /></div>
        <div className='id-text'>
            <h5>Passport</h5>
        </div>
        <div>
            <input type="radio" />
        </div>
    </div>
     <div className="id-option">
        <div><img src={dl} alt="" /></div>
        <div className='id-text'>
            <h5>Driving License</h5>
        </div>
        <div>
            <input type="radio" />
        </div>
    </div>

   </div>    <button className='cont-btn'>Continue</button>
</div>
 
   
  )
}

export default Idselect