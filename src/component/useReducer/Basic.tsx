import React from "react";

// Syntax
// const [state, dispatch] = useReducer(reducer, initialArg, init?)
// reducer:function(當下最新的state, dispatch function傳進去的參數)
// initialArg:初始資料
// init?:function(initialArg) 如果initialArg需要精算或處理會使用(處理完initialArg放到state裡)

import { useReducer } from "react";

// reducer 有哪一些 action
const enum ActionType {
    INCREASE = "INCREASE",
    DECREASE = "DECREASE",
}

// dispatch 接收哪些參數
type CountAction = {
    type: ActionType;
}


function countReducer(state: number, action: CountAction) {
    console.log(state);
    console.log(action);
    switch (action.type) {
        case ActionType.INCREASE: {
            return state + 1;
        }
        case ActionType.DECREASE: {
            return state - 1
        }
        default:
            return state;
    }
}

export default function Basic() {
    // const [count, setCount] = useState();

    // useReducer是當狀態變化方式太多的時候可以考慮(搭配switch/case)
    // useReducer(更改狀態function(state, dispatch), initialArg(initData), 處理initData的function(initialArg)(可選))
    // 小技巧
    // 1. dispatch是變更方式,所以可以用enum去定義,在reducer function就可以用switch/case的方式去寫 
    const [count, dispatch] = useReducer(countReducer, 0);

    return (
        <>
            <h1>Count:{count}</h1>
            <button onClick={() => dispatch({ type: ActionType.INCREASE })}>inCrease</button >
            <button onClick={() => dispatch({ type: ActionType.DECREASE })}>deCrease</button >
        </>
    )
}
