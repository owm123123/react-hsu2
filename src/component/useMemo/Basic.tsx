import React, { useMemo, useState } from 'react'
// import { Count1 } from './Count1'
import Count1 from './Count1'
import { Count2 } from './Count2'

// 如果props傳的是object or array, React.memo會無效,需要透過useMemo
// <Count1 data={{ value: count1 }} />

// Syntax: const cachedValue = useMemo(calculateValue, dependencies)
//  calculateValue: 是一個function, return處理過的"任何"value,不能接受任何param
//                  function本身必須要是pure不能有side effect,
//                  當dependencies裡面的值沒有變化時,不會執行。
//  dependencies: 是一個array來控制calculateValue是否執行
//  cachedValue: calculateValue計算過後的value,若dependencies的值沒有改變則為原來的值

// 使用時機:
//  1.放在 calculateValue 裡面的計算明顯影響到 re-render 的速度或結果，且 dependencies 裡面的變數不會經常改變。
//  2.當希望減少子元件 re-render 的頻率時，傳到子元件的 props 是 object 或是 array，所以 memo 不會起作用。
//  3.當 useMemo 回傳的 value 是其他 react hook 的 dependencies 為了減少其他 react hook 的執行次數，可以使用 useMemo 處理 value。



// 複雜計算，這裡用費波那契數列為例
function fib(n: number): number {
    if (n < 2) {
        return n;
    }
    return fib(n - 1) + fib(n - 2);
}

export default function Basic() {
    const [count1, setCount1] = useState<number>(0);
    const [count2, setCount2] = useState<number>(0);

    const memoCount1 = useMemo(() => {
        return { value: count1 };
    }, [count1]);
    const memoCount2 = useMemo(() => {
        return { value: count2 };
    }, [count2]);

    // 因為寫在這個位置, 所以Count2變更的時候, 也會導致這邊會re-render
    // 通常是昂貴的計算, 來會需要useMemo來cache (超過成千上萬筆的資料 or console.time())
    console.time("fib");
    const fibCount1 = useMemo(() => fib(count1), [count1]);  // const fibCount1 = fib(count1);
    console.timeEnd("fib");

    // 使用useMemo回傳一個Component(JSX)時,就可以將Component的memo移除
    //  可能會影響可讀性跟維護性
    const memoCount1Component = useMemo(() => {
        return <Count1 data={{ value: count1 }} />
    }, [count1])

    console.log("--------Basic render--------");

    return (
        <div>

            {/* <Count1 data={memoCount1} /> */}
            {memoCount1Component}
            <p>fib Count: {fibCount1}</p>
            <button onClick={() => setCount1((prev) => prev + 1)}>Count 1</button>
            {/* <Count2 count={count2} /> */}
            <Count2 data={memoCount2} />
            <button onClick={() => setCount2((prev) => prev + 1)}>Count 2</button>
        </div>
    )
}
