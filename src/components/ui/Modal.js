import classes from './Modal.module.css'
function Modal(props){
    function confirmHandler()
    {
        props.onConfirm();
    }
    function cancelHandler()
    {
        props.onCancel();
    }
   return( <div className={classes.modal}>
        <p> Are you Sure?!</p>
        <button className={classes.btnalt} onClick={props.onConfirm}>yes</button>
        <button className={classes.btn} onClick={props.onCancel}>No</button>
    </div>);
}
export default Modal;