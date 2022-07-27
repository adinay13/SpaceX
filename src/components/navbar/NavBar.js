import React from 'react';
import space from "../../image/logo.svg"
import Time from "./Time";



const NavBar = () => {
    return (

          <div className="navik">
                <img src={space} alt="xx"/>
            <div className="shtuki">
            <a href="https://cdn4.vectorstock.com/i/1000x1000/70/53/planets-set-vector-1737053.jpg">Planets</a>
            <a href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBM8vsCNSz2_DicTE8y515rrhvbOLzB_0chg&usqp=CAU">Rocket</a>
                <a href="https://media.npr.org/assets/img/2022/05/27/Sagittarius_A_black_hole_swarm-c6a5f5005e19ef07655efb5ac1ce255a0d69a9d2-s1100-c50.jpg">Space</a>
                <a href="https://cdn.vox-cdn.com/thumbor/DjLxrTA36hYP82ykVJRr4zVK8i8=/0x0:1920x1280/1200x800/filters:focal(843x354:1149x660)/cdn.vox-cdn.com/uploads/chorus_image/image/63061444/KSC_20170726_PH_KLS02_0029_large.0.jpg">NASA</a>
                <a href="https://m.day.kyiv.ua/sites/default/files/main/blogposts/ufo-sightings-feature-1125685802.jpg">NLO</a>
            </div>
              <div className="time">
                 <Time/>
              </div>
          </div>


    );



};

export default NavBar;