import React, { Component } from "react";
import image1 from "../png/img1.png";
import image2 from "../png/img2.jpg";
import image3 from "../png/img3.jpg";
import image4 from "../png/img4.jpg";
import image5 from "../png/img5.jpg";
import image6 from "../png/image6.jpg";
import image7 from "../png/image7.jpg";
import image8 from "../png/image8.jpg";
import image9 from "../png/image9.jpg";
import image10 from "../png/image10.jpg";
import "./InstPage.css";



export default class Inst extends Component {
    render() {
        return(
            <div >
                <div className="inst-container">
                    <figure className="inmst-item">
                    <img src={image1} alt=""/>
                    </figure>
                    <figure className="inmst-item">
                    <img src={image2} alt=""/>
                    </figure>
                    <figure className="inmst-item">
                    <img src={image3} alt=""/>
                    </figure>
                    <figure className="inmst-item">
                    <img src={image4} alt=""/>
                    </figure>
                    <figure className="inmst-item">
                    <img src={image5} alt=""/>
                    </figure>
                    <figure className="inmst-item">
                    <img src={image6} alt=""/>
                    </figure>
                    <figure className="inmst-item">
                    <img src={image7} alt=""/>
                    </figure>
                    <figure className="inmst-item">
                    <img src={image8} alt=""/>
                    </figure>
                    <figure className="inmst-item">
                    <img src={image9} alt=""/>
                    </figure>
                    <figure className="inmst-item">
                    <img src={image10} alt=""/>
                    </figure>

                </div>
           </div>
        )
    }
}