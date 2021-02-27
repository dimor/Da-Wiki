import classes from './User.module.css';
import {SIDE_DRAWER_USER_COLOR} from '../../constants';


const User = (props) => {

    const { displayName, photoURL } = props.user;

    let design = props.toolbar? classes.Toolbar : classes.User


    return (
        <div style={props.toolbar?null:{backgroundColor:SIDE_DRAWER_USER_COLOR}} className={design}>
            <img alt={'profile'} src={photoURL} />
            <p>{displayName}</p>
            <div onClick={props.toolbar?null:props.toggle}><span className={classes.SignOut} onClick={props.signOut}>(Sign Out)</span></div>
        </div>
    )
}

export default User;