/**
 * Created by sanjoy on 1/18/16.
 */
import React from 'react'
import {connect} from 'react-redux'
import * as actions from '../actions/dashboard'


export const PureDashboard = React.createClass({
    render: function(){
        return <h4>Dashboard</h4>
    }
});

function mapStateToProps(state){
    return {

    }
}

export const Dashboard = connect(mapStateToProps, actions)(PureDashboard)