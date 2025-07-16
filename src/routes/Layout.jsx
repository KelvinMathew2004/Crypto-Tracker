import { Outlet, Link } from "react-router-dom"

function Layout(){
  return (
    <div>
        <nav>
            <ul style={{ padding: 0, margin: 0}}>
                <li className="home-link" key="home-button">
                    <Link style={{ color: "white", textDecoration: "none" }} to="/">
                        Home
                    </Link>
                </li>
            </ul>
        </nav>
        <Outlet />
    </div>
  )
}

export default Layout