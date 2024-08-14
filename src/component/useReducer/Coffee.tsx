import React, { useReducer } from 'react'

enum ActionType {
  SELL_COFFEE = "SELL_COFFEE", // 賣咖啡
  SELL_COFFEE_BY_NUM = "SELL_COFFEE_BY_NUM", // 賣 N 杯咖啡
  MAKE_COFFEE = "MAKE_COFFEE", // 煮咖啡
  MAKE_COFFEE_BY_NUM = "MAKE_COFFEE_BY_NUM", // 煮 N 杯咖啡
  REPLENISHMENT = "REPLENISHMENT", // 補豆子
}

type State = {
  coffeeBeans: number,
  coffee: number,
  revenue: number,
}



function reducer(state: State, action: ActionType) {
  switch (action.valueOf)
}


  export default function Coffee() {

    const initialState: State = {
      coffeeBeans: 10, // 咖啡豆 10 包
      coffee: 3, // 咖啡 3 杯
      revenue: 1000, // 營業資金 1000 元
    };

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
      <div>Coffee</div>
    )
  }

