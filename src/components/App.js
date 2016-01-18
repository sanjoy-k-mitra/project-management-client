/**
 * Created by sanjoy on 1/18/16.
 */
import React from 'react';
import {List, Map} from 'immutable';

export default React.createClass({
    render:function(){
        return <div className="container-fluid">
            {this.props.children}
        </div>
    }
})