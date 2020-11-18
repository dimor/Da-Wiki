
import classes from './Backdrop.module.css';

const Backdrop =props=>(
    <div onClick={props.toggle} className={props.isOpen?classes.Backdrop:null}>{props.children}</div>
)

export default Backdrop;