
import logo from '../../assets/logo.png';

//import logoDrawer from '../../assets/logo-drawer.png';


import logoDrawer from '../../assets/logo_transparent.png';



import classes from './Logo.module.css';

const Logo = props=>{

    const {toolbar} = props;

    let logoClasses  = [];

    toolbar?logoClasses.push(classes.Logo):logoClasses.push(classes.LogoSide)


    return <img className={logoClasses} src={toolbar?logo:logoDrawer} alt="logo" />
}
;

export default Logo;