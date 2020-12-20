import Scroll from '../../../containers/Scroll/Scroll';
import SocialButtons from '../../SocialButtons/SocialButtons';
import Magnifier from '../Magnifier/Magnifier';
import classes from './Card.module.css';
import React, { useEffect, useState, useCallback, useRef } from 'react';
import { Default } from 'react-spinners-css';
import ImageNotFound from '../../../assets/image-not-found.png';
import {LOADER_COLOR} from '../../../constants';

const Card = props => {
    const { card } = props;
    const title = card.title;
    const extract = card.extract;
    const fullurl = card.fullurl;
    const pageid = card.pageid;
    const thumbnail = card.thumbnail ? card.thumbnail.source : ImageNotFound;
    const imageThumbnail = useRef(null);
    const [isImageLoading, setIsImageLoading] = useState(true);
  

    useEffect(() => {
        setIsImageLoading(true);
        imageThumbnail.current.src = thumbnail;
        imageThumbnail.current.onload = (() => {
            setIsImageLoading(false)
        })
    }, [thumbnail])


    return (
        <div className={classes.Card}>
            {console.log('card- rendering')}

            <img className={isImageLoading ? classes.Hide : null} ref={imageThumbnail} alt="thumbnail" />
            {isImageLoading ? <Default color={LOADER_COLOR} /> : null}

            <div className={classes.Container}>
                <h3>{title}</h3>
                <Scroll pageid={pageid} height={180}><p>{extract}</p></Scroll>
            </div>
            <SocialButtons url={fullurl} pageid={pageid} />
        </div>)
}






export default React.memo(Card); 