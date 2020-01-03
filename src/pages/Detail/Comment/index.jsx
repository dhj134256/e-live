import React from "react";
import CommentView from "../CommentView";
import api from "../../../api";
import LoadMore from "../../../components/LoadMore";

export default class Comment extends React.Component{

    constructor(){
        super();
        this.state = {
            commentData:[],
            hasMore:false
        }
    }

    http(){
        api.getComment({
            id:this.props.id
        }).then(res=>res.json()).then(data=>{
            console.log(data);
            this.setState({
                commentData:this.state.commentData.concat(data.data),
                hasMore:data.hasMore
            })
        })
    }

    componentDidMount(){
        this.http();
    }

    loadMoreHandle = () =>{
        this.http();
    }

    render(){
        return(
            <div>
                {
                    this.state.commentData.length > 0 ?
                    <CommentView data={this.state.commentData}/> :
                    <div>等待数据加载</div>
                }
                {
                    this.state.hasMore ?
                    <LoadMore loadMore={this.loadMoreHandle}/> :
                    <div>已经没有了...</div>
                }
            </div>
        )
    }
}