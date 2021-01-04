import React from 'react';

import Value from './Value';
import Control from "./Control";

import { connect } from 'react-redux';

import * as actions from '../actions';

function Counter(props) {

    const setRandomColor = () => {
        const color = [
            Math.floor((Math.random() * 55) + 200),
            Math.floor((Math.random() * 55) + 200),
            Math.floor((Math.random() * 55) + 200),
        ]

        props.handleSetColor(color);
    }

    const color = props.color;
    const style = {
        background: `rgb(${color[0]}, ${color[1]}, ${color[2]}`
    }

    return (
        <div style={style}>
            <Value
                number={props.number}
            />
            <Control
                onPlus={props.handleIncrement}
                onSubstrat={props.handleDecrement}
                onSetColor={setRandomColor}
            />
        </div>
    )
}

// mapStateToProps: redux의 State를 component의 state와 연결
// 즉, 파라미터로 넘어온 redux의 state를 Counter 컴포넌트의 State와 Mapping 시키는 것
const mapStateToProps = (reduxState) => {
    return {
        number: reduxState.counter.number,
        color: reduxState.ui.color
    }
}

// mapDispatchToProps: action을 dispatch하는 함수를 props와 연결해주는 것
const mapDispatchToProps = (dispatch) => {
    return {
        handleIncrement: () => { dispatch(actions.increment())}, // handleIncrement를 실행하면 dispatch 작동
        handleDecrement: () => { dispatch(actions.decrement())},
        handleSetColor: (color) => { dispatch(actions.setColor(color))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);