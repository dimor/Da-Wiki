import classes from "./RndButton.module.css";
import {useSelector} from 'react-redux';
import { Ellipsis } from 'react-spinners-css';
const RndButton = (props) => {

    const loading = useSelector(state => state.indx.loading);

    return (

  

            <button className={classes} onClick={props.click}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                {loading?<Ellipsis size={32} color="#be97e8" />:<p className={classes.Title} > דע</p> }
              
            </button> 
     


    );

}

export default RndButton;