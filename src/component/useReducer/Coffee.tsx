import React, { useReducer, useState } from 'react';

enum ActionType {
  SELL_COFFEE = 'SELL_COFFEE', // 賣咖啡
  SELL_COFFEE_BY_NUM = 'SELL_COFFEE_BY_NUM', // 賣 N 杯咖啡
  MAKE_COFFEE = 'MAKE_COFFEE', // 煮咖啡
  MAKE_COFFEE_BY_NUM = 'MAKE_COFFEE_BY_NUM', // 煮 N 杯咖啡
  REPLENISHMENT = 'REPLENISHMENT', // 補豆子
}

type State = {
  coffeeBeans: number;
  coffee: number;
  revenue: number;
};

type Action = {
  type: ActionType;
  amount: number;
};

function reducer(state: State, action: Action) {
  const { type, amount } = action;
  switch (type) {
    case ActionType.SELL_COFFEE:
      return {
        ...state,
        coffee: state.coffee - 1,
        revenue: state.revenue + 80,
      };
    case ActionType.SELL_COFFEE_BY_NUM:
      return {
        ...state,
        coffee: state.coffee - amount,
        revenue: state.revenue + amount * 80,
      };
    case ActionType.MAKE_COFFEE:
      return {
        ...state,
        coffeeBeans: state.coffeeBeans - 2,
        coffee: state.coffee + 1,
      };
    case ActionType.MAKE_COFFEE_BY_NUM:
      return {
        ...state,
        coffeeBeans: state.coffeeBeans - 2 * amount,
        coffee: state.coffee + amount,
      };
    case ActionType.REPLENISHMENT:
      return {
        ...state,
        coffeeBeans: state.coffeeBeans + 10,
        revenue: state.revenue - 200,
      };
    default:
      return state;
  }
}

export default function Coffee() {
  const initialState: State = {
    coffeeBeans: 10, // 咖啡豆 10 包
    coffee: 3, // 咖啡 3 杯
    revenue: 1000, // 營業資金 1000 元
  };

  const [amount, setAmount] = useState<number>(0);
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>useReducer</h1>
      <div>
        <p>咖啡豆: {state.coffeeBeans} 包</p>
        <p>咖啡: {state.coffee} 杯</p>
        <p>營業額: {state.revenue} 元</p>
        <label>
          預定數量:
          <input type="number" value={amount} onChange={(e) => setAmount(Number(e.target.value))} />
        </label>
      </div>
      <div>
        <button onClick={() => dispatch({ type: ActionType.SELL_COFFEE, amount: 0 })}>賣咖啡</button>
        <button onClick={() => dispatch({ type: ActionType.SELL_COFFEE_BY_NUM, amount: amount })}>賣 N 杯</button>
        <button onClick={() => dispatch({ type: ActionType.MAKE_COFFEE, amount: amount })}>煮咖啡</button>
        <button onClick={() => dispatch({ type: ActionType.MAKE_COFFEE_BY_NUM, amount: amount })}>煮 N 杯</button>
        <button onClick={() => dispatch({ type: ActionType.REPLENISHMENT, amount: 0 })}>補咖啡豆</button>
      </div>
    </div >
  );
}
