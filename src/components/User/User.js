import classes from './User.module.css';
import {SIDE_DRAWER_USER_COLOR} from '../../constants';


const User = (props) => {

    const { displayName, photoURL } = props.user;




    return (
        <div style={{backgroundColor:SIDE_DRAWER_USER_COLOR}} className={classes.User}>
            <img alt={'profile'} src={photoURL} />
            <p>{displayName}</p>
            <div onClick={props.toggle}><span onClick={props.signOut}>(Sign Out)</span></div>
        </div>
    )
}

export default User;