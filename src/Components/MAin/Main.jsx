import React, { useContext } from "react";
import "./Main.css";
import { assets } from "../../assets/assets/assets";
import { Context } from "../../Context/Context";

const Main = () => {


   const {onSent, recentPrompt, showResult, loading, resultData, setInput, input} = useContext(Context);


  return (
    <div className="main">
      <div className="Nav">
        <p>Shaolin</p>
        <img src={assets.karate_icon} alt="" />
      </div>
      <div className="main-container">
        {
          !showResult?<>
          <div className="Greet">
          <p>
            <span>Hello, Developer</span>
          </p>
          <p>How can i help you today?</p>
        </div>
        <div className="cards">
          <div className="card">
            <p>Suggest a Beautifull places to see on an upcoming trip</p>
            <img src={assets.compass_icon} alt="" />
          </div>
          <div className="card">
            <p>Briefely Summarize the concept of urban planing</p>
            <img src={assets.bulb_icon} alt="" />
          </div>
          <div className="card">
            <p>Brainstorm teambonding activities for our work retreat</p>
            <img src={assets.message_icon} alt="" />
          </div>
          <div className="card">
            <p>Improve the redability of the following code</p>
            <img src={assets.code_icon} alt="" />
          </div>
        </div>
        
        

          </>:
          <div className="result">
             <div className="result-title">
              {/* <img src={assets.karate_icon} alt = " "/> */}
              <p>{recentPrompt}</p>
             </div>
             <div className="result-data">
              {/* <img src={assets.karate_icon} alt=" " /> */}
              {
                loading?<div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>:
                <p dangerouslySetInnerHTML={{__html:resultData}} />
              }              
             </div>
          </div>

        }

<div className="main-bottom">
          <div className="search-box">
            <input type="text" onChange={(e)=>setInput(e.target.value)} value={input} placeholder="Ask me anything..." />
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              <img src={assets.send_icon} onClick={()=>onSent()}  alt="" />
            </div>
          </div>
          <p className="bottom-info">
            Shaolin can make mistakes. Check important info.
          </p>
        </div>

      </div>
    </div>
  );
};

export default Main;
