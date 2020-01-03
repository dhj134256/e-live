import React from "react";

export default class LoadMore extends React.Component{
    /**
     *  触底的事件
     *  监听滚动事件
     *  视口高度 + 滚动高度  > 元素距离顶部的高度  =>  元素出现了
     *  获得元素距离顶部的距离(随着滚动，距离会发生变化) < 视口高度 => 元素出现了
     */

    constructor(){
        super();
        this.divContainer = React.createRef();
        this.state = {
            windowHeight:document.documentElement.clientHeight,
            timer:null
        }
    }

    scrollHandle(){
        // var windowHeight = document.documentElement.clientHeight;
        // let timer = this.state.timer;
        //getBoundingClientRect:left  top  right bottom
        if(this.divContainer.current){
            let currentElementHeight = this.divContainer.current.getBoundingClientRect().top;
            if(this.state.timer){
                clearTimeout(this.state.timer);
            }
            this.state.timer = setTimeout(()=>{
                if(currentElementHeight < this.state.windowHeight){
                    this.props.loadMore();
                }
            },300)
        }else{
            clearTimeout(this.state.timer);
        }
    }

    componentDidMount(){
        window.addEventListener('scroll',this.scrollHandle.bind(this));
    }

    componentWillUnmount(){
        window.removeEventListener('scroll',this.scrollHandle);
    }

    render(){
        return(
            <div ref={this.divContainer}>
                LoadMore
            </div>
        )
    }
}