import classes from './Cards.module.css';
import Card from './Card/Card';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../store/actions/';
import RndButton from './RndButton/RndButton';
import React, { useCallback, useState } from 'react';
import Modal from '../UI/Modal/Modal';
import FavoriteItem from '../FavoriteItem/FavoriteItem';




const Cards = props => {
    const [imgUrl, setImgUrl] = useState(null);
    const { cards } = props;
    const current = useSelector(state => state.indx.current);
    const dispatch = useDispatch();



    const forward = () => {
          
         dispatch(actions.setForward(current, cards))

    }


    const setGallery = (img) => {
        setImgUrl(img);
    }

    const clearGalllery = () => {
        setImgUrl(null);
    }


    return (
        <div className={classes.Cards}>
            {console.log('Cards- redndering')}
            <Card card={cards[current]} gallery={setGallery} />
            <RndButton click={forward} />
            {imgUrl ? <Modal close={clearGalllery} show={imgUrl}><img src={imgUrl} /></Modal> : null}
        </div>

    );
}


export default Cards;