
import "./header.css";

const Header = () => {
  return (<>
  <header className="header">
  <p className="tagline">DMoon Dashboard</p>
  <nav>
  
      <ul className="nav-list">
        <li className="nav-item">By Status</li>
        <li className="nav-item">By Total Tasks</li>
        <li className="nav-item">Tasks Due</li>
        <li className="nav-item">Tasks Completed</li>
      </ul>
      </nav>
      </header>
    
    
    </>
  )
}

export default Header