import classes from './User.module.css';



const User = (props) => {

    const { displayName, photoURL } = props.user;




    return (
        <div className={classes.User}>
            <img alt={'profile'} src={photoURL} />
            <p>{displayName}</p>
            <div onClick={props.toggle}><span onClick={props.signOut}>(Sign Out)</span></div>
        </div>
    )
}

export default User;