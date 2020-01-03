import React from 'react';
import SearchHead from './SearchHead';
import SearchList from "./SearchList";
import { connect } from 'react-redux';

class Search extends React.Component{
    render(){
        return(
            <div>
                <SearchHead keywords={this.props.match.params.keywords}/>
                <SearchList keywords={this.props.match.params.keywords} cityName={this.props.city.cityName} />
            </div>
        )
    }
}

const mapStateToProps = state =>{
    return{
        city:state.city
    }
}

export default connect(mapStateToProps)(Search)