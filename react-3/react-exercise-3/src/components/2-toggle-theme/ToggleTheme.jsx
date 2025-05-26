import { useState } from "react";
import "./app.css";
export default function ToggleTheme() {
  const [theme, setTheme] = useState(false);

  const toggleTheme = () => {
    setTheme(!theme);
  };

  return (
    <body className={theme ? "dark-theme" : "light-theme"}>
      <p>{theme ? "it's DARK" : "It's LIGHTE"}</p>
      <button onClick={toggleTheme}>change theme</button>
    </body>
  );
}
