import React, { Component } from 'react';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import '../Home.css';

export default class Index extends Component {
    render(){
        const AutoplaySlider = withAutoplay(AwesomeSlider);
        return(
            <>
            <AutoplaySlider
                className="sliderWrapper"
                play={true}
                cancelOnInteraction={false} // should stop playing on user interaction
                interval={6000}>
                <div className="sliderImg" data-src="https://i.pinimg.com/originals/22/ca/83/22ca8370b8a647c47eb2802bc2534a5e.jpg" />
                <div className="sliderImg" data-src="https://www.worldcollectorsnet.com/wp-content/uploads/2012/08/projectrunwaybarbies.jpg" />
                <div className="sliderImg" data-src="https://i.pinimg.com/originals/d7/c2/a5/d7c2a5cb0b3c61581fb68a6e07c30985.jpg" />
                <div className="sliderImg" data-src="https://barbielistholland.files.wordpress.com/2018/11/barbieproudypinkdoll.jpg?w=584" />
                <div className="sliderImg" data-src="https://1.bp.blogspot.com/-RxT7GYo6X9E/UjfM9I31GlI/AAAAAAADB_E/EEfeXz88LbI/s1600/X8249_c_13_CU4_01.jpg" />
                
            </AutoplaySlider>
            </>
        )
    }
}
