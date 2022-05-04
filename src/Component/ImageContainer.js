import React from 'react';
import classes from '../Styles/ImageContainer.module.css'

const ImageContainer = ({image}) => {
    return (
        <div>
            <div className={classes.imgContainer}>
                <div className={classes.img}><img src={image} alt="No Backup" /></div>
                <div>
                    <h2>Course Title</h2>
                    <p>Course short details</p>
                </div>
            </div>
        </div>
    );
};

export default ImageContainer;