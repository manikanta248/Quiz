import React, { useContext, useEffect, useState } from 'react'
import { ThemeContext } from '../ThemeContext';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

const Home = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const [quizzes,setQuizzes] = useState([]);
    const navigate = useNavigate()
    const isMobile = useMediaQuery({maxWidth:"768px"})




    useEffect(() => {
        const fetchSkillsData = async () => {
          try {
            const response = await fetch("http://localhost:5000/quiz/quiz-data");
            if (!response.ok) throw new Error("Failed to fetch skills");
            const data = await response.json();
            console.log(data)
            setQuizzes(data)
            
            
          } catch (error) {
            console.error("Error fetching skills:", error);
          } finally {
           
          }
        };
        fetchSkillsData();
      }, []);



    return (
        <div style={{
            backgroundColor: "var(--bg-color)",
            color: "var(--text-color)",
            padding: "20px",
            borderRadius: "10px",
            display:"flex",
            justifyContent:"center",
            alignItems:'center',
            height:'70vh',
            flexWrap:"wrap",
            gap:"20px",
            
            
        }}>
            
            
            {quizzes.map((quiz,i)=>(<div key={i} style={{background:theme==='light'?"#ECECEC":"#181818",display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center",padding:"40px",borderRadius:"22px",minWidth:isMobile?"250px":"400px"}}>
                <h2 >Topic</h2>
                <h2>{quiz.topic}</h2>
                <button style={{cursor:"pointer",background:"#2ECC71",padding:"9px 15px",borderRadius:"7px",color:theme==='light'?"black":"white"}} onClick={()=>{navigate('/quiz', { state: { quiz } })}}   >Start</button>
            </div>))}
        </div>
    )
}

export default Home