import { M } from "materialize-css";
export function Modal() {


    function m() {
            var elems = document.querySelector('.modal');
            var instances = M.Modal.init(elems, {});
            instances.open();
    }

    return <>
    <a className="waves-effect waves-light btn modal-trigger" href="#modal1">
      Modal
    </a>
    <div id="modal1" className="modal">
      <div className="modal-content">
        <h4>Modal Header</h4>
        <p>A bunch of text</p>
      </div>
      <div className="modal-footer">
        <a href="#!" className="modal-close waves-effect waves-green btn-flat">
          Agree
        </a>
      </div>
    </div>
    <button onClick={m} data-target="modal1" class="btn modal-trigger">Modal</button>
  </>  
}