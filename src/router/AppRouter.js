import React from "react";
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import Home from "../pages/Home";
import Life from "../pages/Life";
import Mine from "../pages/Mine";
import Shop from "../pages/Shop";
import City from "../pages/City";
import Search from "../pages/Search";
import Detail from "../pages/Detail";
import Login from "../pages/Login";
import Cart from "../pages/Cart";
import NotFound from "../pages/NotFound";
import {initCity} from "../actions/city";
import {connect} from "react-redux";
import storage from "../utils/storage";
import {logged} from "../actions/login";

class AppRouter extends React.Component{

    componentDidMount(){
        if(storage.getItem("city")){
            this.props.initCity({
                cityName:storage.getItem("city")
            })
        }
        if(storage.getItem("username")){
            this.props.logged({
                username:storage.getItem("username")
            })
        }

        // storage.setItem('iwen','123','userinfo')
    }

    render(){
        return(
            <Router>
                <Switch>
                    <Route exact path="/" component={Home}></Route>
                    <Route path="/life" component={Life}></Route>
                    <Route path="/mine" component={Mine}></Route>
                    <Route path="/shop" component={Shop}></Route>
                    <Route path="/city" component={City}></Route>
                    <Route path="/cart" component={Cart}></Route>
                    <Route path="/login" component={Login}></Route>
                    <Route path="/search/:keywords" component={Search}></Route>
                    <Route path="/detail/:id" component={Detail}></Route>
                    <Route component={NotFound}></Route>
                </Switch>
            </Router>
        )
    }
}

export default connect(null,{initCity,logged})(AppRouter);