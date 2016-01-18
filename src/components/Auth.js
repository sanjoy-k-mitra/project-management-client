/**
 * Created by sanjoy on 1/18/16.
 */
import React from 'react'
import {connect} from 'react-redux'
import * as actions from '../actions/auth'


export const PureAuth = React.createClass({
    valueChanged: function(event){
        let v = {};
        v[event.target.name] = event.target.value;
        this.setState(v)
    },
    tryLogin: function(){
        this.props.performLogin({
            username: this.state.username,
            password: this.state.password
        })
    },
    render: function(){
        return <form role="form" className="col-md-6 col-md-offset-3">
            <div className="form-group">
                <label>username</label>
                <input type="text" name="username" className="form-control" onChange={this.valueChanged}/>
            </div>
            <div className="form-group">
                <label>password</label>
                <input type="password" name="password" className="form-control" onChange={this.valueChanged}/>
            </div>
            <div>
                <button type="button" className="btn btn-default" onClick={this.tryLogin}>Login</button>
            </div>
        </form>
    }
});

function mapStateToProps(state){
    return {

    }
}

export const Auth = connect(mapStateToProps, actions)(PureAuth)