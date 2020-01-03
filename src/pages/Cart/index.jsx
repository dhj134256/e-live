import React from "react";
import {connect} from "react-redux";
import CartInfo from "./CartInfo";
import CartHead from "../../components/HeadTitle";
import OrderList from "./OrderList";
import storage from "../../utils/storage";
import {logged} from "../../actions/login";

class Cart extends React.Component{

    componentWillMount(){
        console.log(storage.getItem("username"));
        const loggedUsername = storage.getItem("username");
        if(loggedUsername){
            this.props.logged({
                username:loggedUsername
            })
        }
        console.log(loggedUsername);
        
        
        
        if(!this.props.login.username){
            this.props.history.push("/login")
        }
    }

    render(){
        return(
            <div>
                <CartHead title={'购物车'}/>
                <CartInfo username={ this.props.login.username } cityName={ this.props.city.cityName } />
                <OrderList username={ this.props.login.username }/>
            </div>
        )
    }
}

const mapStateToProps = state =>{
    return{
        login:state.login,
        city:state.city
    }
}

export default connect(mapStateToProps,{logged})(Cart)