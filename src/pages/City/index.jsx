import React from "react";
import CityHead from "../../components/HeadTitle";
import CurrentCity from "./CurrentCity";
import CityList from "./CityList";
import {connect} from "react-redux";
import {initCity,changeCity} from "../../actions/city";

class City extends React.Component{
    render(){
        return(
            <div>
                <CityHead title={'城市选择'}/>
                <CurrentCity cityName={this.props.city.cityName}/>
                <CityList changeCity={this.props.changeCity}/>
            </div>
        )
    }
}

const mapStateToProps = state =>{
    // console.log(state);
    
    return{
        city:state.city
    }
}

export default connect(mapStateToProps,{initCity,changeCity})(City);