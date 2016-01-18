/**
 * Created by sanjoy on 1/18/16.
 */
import fetch from 'isomorphic-fetch'


import config from '../config.json'

export const REQUEST_LOGIN = "REQUEST_LOGIN";
export const REQUEST_TOKEN = "REQUEST_TOKEN";
export const RECEIVE_TOKEN = "RECEIVE_TOKEN";


function requestLogin(credentials){
    return{
        type: REQUEST_LOGIN,
        credentials: credentials
    }
}

function requestToken(token){

}

function receiveToken(response){
    return {
        type: RECEIVE_TOKEN,
        token: response
    }
}

var serialize = function (data) {
    return Object.keys(data).map(function (keyName) {
        return encodeURIComponent(keyName) + '=' + encodeURIComponent(data[keyName])
    }).join('&');
};

export function performLogin(action){
    return dispatch=>{
        dispatch(requestLogin(action))
        let data = {
            clientId: config.clientId,
            clientSecret: config.clientSecret,
            username: action.username,
            password: action.password,
            grant_type: "password",
            scope: "read write"
        };

        let headers = new Headers({
            'Content-Type': 'application/x-www-form-urlencoded'
        })

        return fetch(config.server + "/oauth/token", {
            method: "POST",
            body: serialize(data),
            headers: headers
        }).then(response=>response.json())
        .then(json=>dispatch(receiveToken(json)))
    }
}
