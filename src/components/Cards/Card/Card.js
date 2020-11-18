import Scroll from '../../../containers/Scroll/Scroll';
import { cardsFetchFailed } from '../../../store';
import SocialButtons from '../../SocialButtons/SocialButtons';
import Magnifier from '../Magnifier/Magnifier';
import classes from './Card.module.css';

const Card = props => {

    const { card } = props;

    const title = card.title;
    const extract = card.extract;
    const imageNotFound = 'https://www.thehotelescorts.com/kota/wp-content/themes/escorts/assets/images/no-image.png';
    const fullurl = card.fullurl;
    const thumbnail = card.thumbnail ? card.thumbnail.source : imageNotFound;



    return (
        <div className={classes.Card}>
            <div className={classes.Image}
            style={{ backgroundImage: `url(${thumbnail})`}}
            onClick={() => props.gallery(thumbnail)}
            ><div className={classes.Badge}><Magnifier /></div></div>
            <div className={classes.Container}>
                <h3>{title}</h3>
                <Scroll><p>{extract}</p></Scroll>
            </div>
            <SocialButtons url={fullurl} />
        </div>)
}


export default Card;