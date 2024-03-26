import React, { useState } from "react";
import "./App.css";
import Callback from "./components/callback";

function App() {
  const [UIcolor, setUIcolor] = useState(null);

  const getColor = (color) => {
    setUIcolor(color);
  };

  return (
    <div className={`bg-${UIcolor} min-h-screen`}>
      <Callback getColor={getColor} />
    </div>
  );
}

export default App;
