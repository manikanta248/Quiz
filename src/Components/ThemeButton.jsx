import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";

const ThemeToggle = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <button style={{
            backgroundColor: "var(--bg-color)",
            color: "var(--text-color)",
            height:'30px',
            borderRadius: "10px",
            cursor:"pointer",
            padding:"20px",
            textAlign:"center",
            display:"flex",
            alignItems:"center",
            border:(theme==='light')?'0.1px solid black':"0.1px solid white",
            fontSize:"18px"
        }} onClick={toggleTheme}>
            {theme === "light" ? "🌙 " : "☀️"}
        </button>
    );
};

export default ThemeToggle;
