import React, { useContext, useState } from "react";
import "./Sidebar.css";
import { assets } from "../../assets/assets/assets";
import { Context } from "../../Context/Context";

const Sidebar = () => {
  const [extended, setExtended] = useState(true);
  const {onSent, previousPrompt, setRecentPrompts} = useContext(Context)

  return (
    <div className="Sidebar">
      <div className="top">
        <img className="Menu" onClick={()=>setExtended(prev =>! prev)} src={assets.menu_icon} alt="" />
        <div className="new-chat">
          <img src={assets.plus_icon} alt="" />
          {extended ? <p>New Chat</p> : null}
        </div>
        {extended ? (
          <div className="recent">
            <p className="recent-title">Recent</p>
            {
             previousPrompt.map((item, index)=>{
                return(
                  <div className="recect-entry">
                  <img src={assets.message_icon} alt="" />
                  <p> {item.slice(0, 18)}...</p>
                </div>
                )
              })
            }
        
          </div>
        ) : null}
      </div>

      <div className="bottom">
        <div className="bottom-item recect-entry">
          <img src={assets.question_icon} alt="" />
          {extended ? <p>Help</p> : null}
          
        </div>
        <div className="bottom-item recect-entry">
          <img src={assets.history_icon} alt="" />
          {extended ? <p>Activity</p> : null}
        </div>
        <div className="bottom-item recect-entry">
          <img src={assets.setting_icon} alt="" />
          {extended ? <p>Settings</p> : null}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
