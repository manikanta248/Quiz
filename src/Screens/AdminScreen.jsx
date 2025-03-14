import React, { useEffect, useState, useContext } from "react";
import { ThemeContext } from "../ThemeContext";

const AdminScreen = () => {
    const [quizData,setQuizData] = useState([])
    const { theme } = useContext(ThemeContext);
    const [isLoading,setisLoading] = useState(false);
    useEffect(() => {
            const fetchSkillsData = async () => {
                setisLoading(true)
              try {
                const response = await fetch("https://quizbackend-1k43.onrender.com/get-quiz-data/get-quiz-data");
                if (!response.ok) throw new Error("Failed to fetch quiz data");
                const data = await response.json();
                console.log(data)
                setQuizData(data)
                setisLoading(false)
                
                
              } catch (error) {
                console.error("Error fetching quiz data:", error);
              } finally {
               
              }
            };
            fetchSkillsData();
          }, []);
          const tableStyles = {
            width: "100%",
            borderCollapse: "collapse",
            background: theme === "light" ? "#ffffff" : "#222222",
            color: theme === "light" ? "#000000" : "#ffffff",
        };
    
        const tableHeaderStyle = {
            padding: "10px",
            textAlign: "left",
            borderBottom: `2px solid ${theme === "light" ? "#ddd" : "#444"}`,
            background: theme === "light" ? "#3498db" : "#555",
            color: "white",
        };
    
        const tableCellStyle = {
            padding: "10px",
            borderBottom: `1px solid ${theme === "light" ? "#ddd" : "#444"}`,
        };
    
        const rowEvenStyle = { background: theme === "light" ? "#f2f2f2" : "#333" };
        const rowOddStyle = { background: theme === "light" ? "#ffffff" : "#222" };
    
        return (
            <div style={{ padding: "20px" ,width:"95vw",display:'flex',flexDirection:"column",alignItems:"center"}}>
                <h2>Admin Quiz Data</h2>
                <div style={{ width: "80vw", overflowX: "auto" ,maxHeight:"90vh",overflowY:'scroll',scrollbarWidth:"none"}}>
                    {!isLoading?<table style={tableStyles}>
                        <thead>
                            <tr>
                                <th style={tableHeaderStyle}>S.No</th>
                                <th style={tableHeaderStyle}>User</th>
                                <th style={tableHeaderStyle}>Score</th>
                            </tr>
                        </thead>
                        <tbody>
                            {quizData.length > 0 ? (
                                quizData.map((entry, index) => (
                                    <tr key={entry._id} style={index % 2 === 0 ? rowEvenStyle : rowOddStyle}>
                                        <td style={tableCellStyle}>{index + 1}</td>
                                        <td style={tableCellStyle}>{entry.user}</td>
                                        <td style={tableCellStyle}>{entry.score}</td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="3" style={{ textAlign: "center", padding: "10px" }}>
                                        No quiz data found.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>:"Loading Data..."}
                </div>
            </div>
        );
    };
    
   
export default AdminScreen