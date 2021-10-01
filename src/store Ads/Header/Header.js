
import { Link } from "react-router-dom";

export default function Header() {
    return(
        
      <nav>
        <div className="nav-wrapper">
          
            <Link className= "nav-wrapper" to="/create" >Create Ad...</Link> &nbsp;&nbsp;
            <Link className=  "nav-wrapper" to = "/ads">Show Ads</Link>
            
        
        </div>
      </nav>
    )
}