export default function Header(){
    return(
      <>
      <header className="header">
      <img className="nav-logo" src="Images/zoro.jpg" alt="Zoro" width="100" />
        <nav>
          <ul className="nav-list">
            <li className="nav-list-item">Price</li>
            <li className="nav-list-item">About</li>
            <li className="nav-list-item">Contact</li>
          </ul>
        </nav>
      </header>
      </>
    )
  }