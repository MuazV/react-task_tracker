import React, { useState } from "react";
const Header = () => {
  const [btnToggle, setBtnToggle] = useState(true);


  return (
    <div>
      <h2>Task Tracker</h2>
      <button style={{ backgroundColor: "red" }} onClick={() => setBtnToggle(!btnToggle)}>
        {btnToggle ? "Close Add Task Bar" : "Show Add Task Bar"}
        
      </button>
    </div>
  );
};

export default Header;
