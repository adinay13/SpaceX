import React from 'react';
import "./news.css"


const News = () => {
    return (
        <div className="news">
            <div className="first">
                <img src="https://hi-news.ru/wp-content/uploads/2021/03/comet_leo.png" alt=""/>
                <div className="comet">
                <h3>Comet</h3>
                <p>Comets appeared with the formation of the solar system four and a half billion years ago.</p>
                </div>
            </div>
            <div className="second">
                <img src="https://n1s1.hsmedia.ru/4c/28/a8/4c28a8c3294b19758a5f45937907cb28/730x730_0xac120003_16829132941615799158.jpg" alt=""/>
                <div className="stars">
                    <h3>Constellations</h3>
                    <p>Constellation - a group of stars located in areas into which the celestial sphere is divided for ease of orientation.</p>
                </div>
            </div>
            <div className="third">
                <img src="https://media.kpfu.ru/sites/default/files/2020-06/ASTEROID.jpg" alt=""/>
                <div className="asteroid">
                    <h3>Asteroid</h3>
                    <p>Asteroids are solid rocky bodies that, like planets, move in elliptical orbits around the sun.</p>
                </div>
            </div>

        </div>
    );
};

export default News;