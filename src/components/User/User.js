import classes from './User.module.css';



const User = (props) => {

    const { displayName, photoURL } = props.userData;
    return (
        <div className={classes.User}>
            <img alt={'profile'} src={photoURL} />
            <p>{displayName}</p>
            <span>(Sign Out)</span>
        </div>
    )
}

export default User;