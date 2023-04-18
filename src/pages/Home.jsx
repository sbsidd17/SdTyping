import React from 'react'
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <Link to="/english">English Typing</Link>
      <br />
      <Link to="/hindi">Hindi Typing</Link>
    </>
    
  )
}

export default Home