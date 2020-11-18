import classes from "./Scroll.module.css";


const Scroll =(props)=>{

    return(
        <div className={classes.Scroll}>
            {props.children}
        </div>
    )


}

export default Scroll;