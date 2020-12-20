import classes from './FavoriteItem.module.css';
import SocialButtons from '../../components/SocialButtons/SocialButtons';
import LinesEllipsis from 'react-lines-ellipsis'



const FavoriteItem = (props) => {

    const { card } = props;
    const title = card.title;
    const extract = card.extract;
    const imageNotFound = 'https://www.thehotelescorts.com/kota/wp-content/themes/escorts/assets/images/no-image.png';
    const fullurl = card.fullurl;
    const pageid = card.pageid;
    const thumbnail = card.thumbnail ? card.thumbnail.source : imageNotFound;

    return (
        <div className={classes.FavoriteItem}>
            <img src={thumbnail} alt="thumbnail" />
            <div className={classes.Information}>
                <h4>{title}</h4>
                <LinesEllipsis
                    text={extract}
                    maxLine='2'
                    ellipsis='...'
                    trimRight
                    basedOn='letters'
                />
            </div>
            <SocialButtons item={true} url={fullurl} pageid={pageid}/>
        </div>
    )
}

export default FavoriteItem;