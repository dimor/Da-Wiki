import classes from './Cards.module.css';
import Card from './Card/Card';
import Arrow from './Arrow/Arrow';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../store/actions';
import RndButton from './RndButton/RndButton';
import Gallery from './Gallery/Gallery';
import Backdrop from '../UI/Backdrop/Backdrop';
import React,{useState} from 'react';
import Modal from '../UI/Modal/Modal';






const Cards = props => {
    const[imgUrl,setImgUrl] = useState('');
    const { cards } = props;

    const current = useSelector(state => state.current);
    const dispatch = useDispatch();
    const setForward = () => dispatch(actions.setForward(current,cards));
    // const setPreviousCard = () => dispatch(actions.setPreviousCard());


    const forward = () => {
        setForward(current,cards); 
    }

 

    const setGallery =(img)=>{

        setImgUrl(img);
    
    }

    
    const clearGalllery =()=>{

        setImgUrl('');
    
    }



    return (
        <div className={classes.Cards}>
            <Card card={cards[current]} gallery={setGallery} />
            <RndButton click={forward} />
            <Modal clearUrl={clearGalllery} show={imgUrl?true:false}><img src={imgUrl} /></Modal>
        </div>

    );
}


export default Cards;