import classes from "./Gallery.module.css";



const Gallery =(props)=>{

    const {img} = props;

    return(<div className={classes.Gallery}>
            <img src={img} alt='gallery picture'/>
    </div>);



}

export default Gallery;