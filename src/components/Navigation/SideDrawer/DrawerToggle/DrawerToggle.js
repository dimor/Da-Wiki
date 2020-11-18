import classes from './DrawerToggle.module.css';

const DrawerToggle = props => (
        <svg onClick={props.toggle} className={classes.Toggle} viewBox="0 0 100 80" width="40" height="40">
            <rect width="100" height="20" rx="8"></rect>
            <rect y="30" width="100" height="20" rx="8"></rect>
            <rect y="60" width="100" height="20" rx="8"></rect>
        </svg>
    
)

export default DrawerToggle;