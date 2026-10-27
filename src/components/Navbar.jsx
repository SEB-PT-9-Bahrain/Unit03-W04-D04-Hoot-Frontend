import { Link } from 'react-router'

function Navbar({ user, handleLogout }) {
  return (
    <nav>
      <Link to='/'>Homepage</Link>
      {user 
      ? 
      (<>
        <Link to='/dashboard'>Dashboard</Link>
        <Link to='/hoots'>All Hoots</Link>
        <Link to='/hoots/create'>Create Hoots</Link>
      <button onClick={handleLogout}>Sign Out</button>
      </>) : 
      (<>
        <Link to='/sign-up'>Sign Up</Link>
        <Link to='/sign-in'>Sign In</Link>
      </>)}
    </nav>
  )
}

export default Navbar