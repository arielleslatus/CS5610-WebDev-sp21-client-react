import React from 'react'
import {connect} from 'react-redux'

const CounterClear = ({clearTheCounter}) =>
    <button onClick={clearTheCounter}>Clear</button>

const stateToPropertyMapper = (state) => {}

const dispatchToPropertyMapper = (dispatch) => ({
    clearTheCounter: () => dispatch({type: "CLEAR"})
})

export default connect(stateToPropertyMapper, dispatchToPropertyMapper)(CounterClear)