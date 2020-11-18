
import Like from './Like/Like';
import classes from './SocialButtons.module.css';
import Website from './Website/Website';


const SocialButtons = props => {


    return (<div className={classes.SocialButtons}>
        <Like />
        <Website url={props.url} />
    </div>)



}


export default SocialButtons;