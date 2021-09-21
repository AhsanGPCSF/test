import './home.css';
import { Link } from "react-router-dom";
export default function Header() {
    return(
        
      <nav>
        <div className="main">
          
            <Link className= "btn1" to="/createUser" >Create Users</Link> &nbsp;&nbsp;
            <Link className=  "btn1" to = "/showUser">Show Users</Link>
            
        
        </div>
      </nav>
    )
}