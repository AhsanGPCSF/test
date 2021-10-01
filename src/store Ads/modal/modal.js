import  M  from "materialize-css";
import { Link } from "react-router-dom";


export function Modal() {
    function m() {
        var elems = document.querySelector('.modal');
        var instances = M.Modal.init(elems, {});
        instances.open();
}
    return <>
    <Link to="/ads" >
    {/* <a className="waves-effect waves-light btn modal-trigger" href="#modal1">
      Modal
    </a> */}
    <div id="modal1" className="modal">
      <div className="modal-content">
        <h4>Do You Want To Delete Ad</h4>
        <p></p>
      </div>
      <div className="modal-footer">
        <a href="#!" className="modal-close waves-effect waves-green btn-flat">
          Yes Delete
        </a>
        <a href="#!" className="modal-close waves-effect waves-green btn-flat">
          No Exit
        </a>
      </div>
    </div>
    <button onClick={m} data-target="modal1" class="btn modal-trigger">Delete Ad</button>
    </Link>
  </>  
}