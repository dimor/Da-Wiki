import Scroll from '../../../containers/Scroll/Scroll';
import SocialButtons from '../../SocialButtons/SocialButtons';
import Magnifier from '../Magnifier/Magnifier';
import classes from './Card.module.css';
import React, { useEffect, useState, useCallback, useRef } from 'react';
import { Default } from 'react-spinners-css';

const Card = props => {
    const { card } = props;
    const title = card.title;
    const extract = card.extract;
    const imageNotFound = 'https://www.thehotelescorts.com/kota/wp-content/themes/escorts/assets/images/no-image.png';
    const fullurl = card.fullurl;
    const thumbnail = card.thumbnail ? card.thumbnail.source : imageNotFound;

    const [loaded, setLoaded] = useState(false);


    useEffect(() => {
        let img = new Image();
        img.src = thumbnail;

        img.onload = ((e) => {
            setLoaded(true)
        })

        return (() => {
            img = null;
            setLoaded(false)
        })

    }, [thumbnail])

    return (
        <div className={classes.Card}>
            {!loaded ? <Default color="lightblue" /> :
                <div className={classes.Image}
                    style={{ backgroundImage: `url(${thumbnail})` }}
                    onClick={() => props.gallery(thumbnail)}
                ><div className={classes.Badge}><Magnifier />
                    </div></div>}

            <div className={classes.Container}>
                <h3>{title}</h3>
                <Scroll><p>{extract}</p></Scroll>
            </div>
            <SocialButtons url={fullurl} />
        </div>)
}


export default Card; 