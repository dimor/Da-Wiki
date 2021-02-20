import classes from './About.module.css';
import React from 'react';
import Logo from '../../components/Logo/Logo';
import logo from '../../assets/dawikilogo.png';

const About = () => {

    return (

        <React.Fragment>

            <div className={classes.Wrapper}>
                <div className={classes.About} >
                <img src={logo} />
                    <p> האתר דע-ויקי שואב את המידע מתוך מאות אלפי ערכי ויקדפידה ומציג אותם בצורה ידידותית וקליקה,
                      כך שתוכלו ללמוד כמות גדולה של ערכים בזמן קצר,ובנוסף תוכלו לשמור ערכים שאהבתם</p>
                        <p>   נבנה על ידי: </p>
                            
                         <h4>dimorm@gmail.com</h4>  
                            
                            
                            
                            
                </div>
            </div>

        </React.Fragment>

    )



}

export default About;