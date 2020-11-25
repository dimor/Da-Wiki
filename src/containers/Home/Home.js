import React, { useEffect ,useCallback } from 'react';
import classes from './Home.module.css';
import Cards from "../../components/Cards/Cards";
import {useDispatch,useSelector} from 'react-redux';
import * as actions from '../../store/actions/index'
import { Spinner } from 'react-spinners-css';

const Home = props => {
    const loading = useSelector(state => state.indx.loading);
    const cards = useSelector(state=>state.indx.cards);
    const dispatch = useDispatch();
    const onFetchCards = useCallback(()=>dispatch(actions.fetchCards()),[dispatch])

    useEffect(()=>{
        onFetchCards();
    },[onFetchCards]);


    return (
        <div className={classes.Home}>
        {cards.length? <Cards cards={cards} /> :<Spinner />}
        </div>
    )
}


export default Home;