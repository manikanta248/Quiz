import React, { useContext } from "react";
import ThemeToggle from "./ThemeButton";
import { Link, useMatch } from "react-router-dom";
import { ThemeContext } from "../ThemeContext";
import { useMediaQuery } from "react-responsive";

const Navbar = () => {
  const { theme } = useContext(ThemeContext);
  const isMobile = useMediaQuery({maxWidth:"768px"})

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "10px 20px",
        alignItems: "center",
        width:!isMobile? "97vw":"95vw",
        position: "fixed",
        top: "0",
        backgroundColor: theme === "light" ? "#ffffff" : "#1e1e1e",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        zIndex: "1000",
      }}
    >
 
      <h1
        style={{
          fontSize: "24px",
          fontWeight: "bold",
          background: "linear-gradient(45deg, #ffcc00, #ff5733)",
          WebkitBackgroundClip: "text",
          color: "transparent",
          textTransform: "uppercase",
          letterSpacing: "2px",
        }}
      >
        QuizQuest
      </h1>

     
      <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
        <Link style={navLinkStyle} to="/">Home</Link>
        <Link style={navLinkStyle} to="/admin">Admin</Link>
        <ThemeToggle />
      </div>
    </div>
  );
};

const navLinkStyle = {
  textDecoration: "none",
  fontSize: "16px",
  fontWeight: "600",
  color: "#3498db",
  transition: "color 0.3s",
};

export default Navbar;
