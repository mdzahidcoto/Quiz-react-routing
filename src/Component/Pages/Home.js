import React from 'react';
import { Link } from 'react-router-dom';
import classes from '../../Styles/Home.module.css';
import ImageContainer from '../ImageContainer'; 
import '../../Styles/Global.css';
import image from '../Images/_MG_3478.JPG';

const Home = () => {
    return (
        <div>
            <header className="logoHeader">
                <div className={classes.navDiv}>
                    <nav className={classes.navBar}>
                        <ul className={classes.homeUl}>
                            <li>
                                <div className="logo">
                                    <p><Link to="/">Qz</Link></p>
                                </div>
                            </li>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/quiz">Quiz</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><button className={classes.right}><Link to="/signup">Sign up</Link></button></li>
                            <li><button className={classes.right}><Link to="/login">Login</Link></button></li>
                        </ul>
                    </nav>
                </div>
            </header>
            <main>
                <ImageContainer image={image}/>
                <ImageContainer image={image}/>
                <ImageContainer image={image}/>
                <ImageContainer image={image}/>
                <ImageContainer image={image}/>
                <ImageContainer image={image}/>
                <ImageContainer image={image}/>
                <ImageContainer image={image}/>
                <ImageContainer image={image}/>
                <ImageContainer image={image}/>
                <ImageContainer image={image}/>
                <ImageContainer image={image}/>
            </main>
        </div>
    );
};

export default Home;