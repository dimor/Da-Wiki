import classes from './Arrow.module.css';

const Arrow = props => {

    
    
    return (
        <svg className={props.left?classes.Left:classes} xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 24 24"><path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" /></svg>
    );
}

export default Arrow;