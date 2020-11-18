
import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigatiomItem';

const NavigationItems = props =>

    (<ul onClick={props.toggle} className={classes.NavigationItems}>

        <NavigationItem link={'/'}>בית</NavigationItem>
        <NavigationItem link={'/'}>קטגוריות</NavigationItem>
        <NavigationItem link={'/'}>אודות</NavigationItem>

    </ul>)


export default NavigationItems;