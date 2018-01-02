import React from "react";

const App = ({ children }) => {
   // console.log( "%c within App", "color : red", children );
   return(
      <div className = "container">
         { children }
      </div>
   );
};

export default App;