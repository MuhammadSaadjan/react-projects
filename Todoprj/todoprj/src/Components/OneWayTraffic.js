import React, { Component } from 'react'
import Display from './Display'
export default class OneWayTraffic extends Component {

    render() {
        return (
            <div>
                <Display />
            </div>
        )
    }
}

/**
 * state should be in a parrent because if we create
 * state in a child component then we will be unable to
 * chaange the state cuz only chilf can change the state that's why 
 * it is a One way traffic
 */