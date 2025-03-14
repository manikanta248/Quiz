import React from 'react'
import ThemeToggle from './ThemeButton'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
  
  return (
    <div style={{display:"flex",justifyContent:"space-between",padding:"5px 20px",alignItems:"center",width:"90vw",position:"fixed",top:'0'}} >
        <h1>QuizQuest </h1>
        <div style={{display:"flex",justifyContent:"center",alignItems:"center",gap:"20px",}}>
          <Link style={{textDecoration:"none",}} to='/'>Home</Link>
          <Link style={{textDecoration:"none",}} to='/admin'>Admin</Link>
          <ThemeToggle/>
        </div>
    </div>
  )
}

export default Navbar