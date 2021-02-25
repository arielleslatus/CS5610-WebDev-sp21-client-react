import React from 'react'
import CounterDisplay from "./counter-display";
import CounterUp from "./counter-up";
import CounterDown from './counter-down'
import {createStore} from "redux";
import {Provider} from "react-redux";
import CounterClear from "./counter-clear";
import CountReducer from "./reducers/count-reducer";


const store = createStore(CountReducer)

export default class CounterRedux extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <div>
                    <CounterDisplay/>
                    <CounterUp/>
                    <CounterDown/>
                    <CounterClear/>
                </div>
            </Provider>

        )
    }
}