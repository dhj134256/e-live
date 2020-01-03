import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import "./style.less";
import Pagination from "./Pagination";
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

export default class MyComponent extends React.Component {
    constructor(){
        super();
        this.state = {
            index:0
        }
    }

    handleChangeIndex = index =>{
        this.setState({
            index:index
        })
    }

    

    render() {
        const banners = this.props.banners;
        const {index} = this.state;
        return (
            <div className="swiper">
                <AutoPlaySwipeableViews onChangeIndex={this.handleChangeIndex} >
                    {
                        banners.map((element,index) =>{
                            return(
                                <div key={index} className="swiper-view">
                                    <img src={element} alt=""/>
                                </div>
                            )
                        })
                    }
                </AutoPlaySwipeableViews>
                <Pagination dots={banners.length} currentIndex={index} />
            </div>
        )
    }
};