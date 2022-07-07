import Navbar from "./components/Navbar";
import { useState } from "react";
import Countries from "./containers/Countries";
import "./css/style.css";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <div className={`App ${isDarkMode ? "dark" : "light"}`}>
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <Countries />
    </div>
  );
}

export default App;
