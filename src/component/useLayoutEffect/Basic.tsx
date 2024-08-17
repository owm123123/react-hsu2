import React, { useLayoutEffect, useState, useEffect } from 'react'

export default function Basic() {
    // syntax useLayoutEffect(setup, dependencies?)
    // setup: function return一個cleanup function
    // dependencies?: 放setup裡面的外部變數,根據變數做re-render 
    // (做Object.is()做比較,若有改變會先執行cleanup function在做setup function)

    // 跟useEffect類似,但執行時間是在web repaints之前

    const [count, setCount] = useState<number>(0);

    useLayoutEffect(() => {
        console.log("useLayoutEffect setup function");
        return () => {
            console.log("useLayoutEffect cleanup function")
        }
    })


    useEffect(() => {
        console.log("useEffect setup function");
        return () => {
            console.log("useEffect cleanup function")
        }
    })

    return (
        <div>
            <h1>useLayoutEffect</h1>
            <div>Count: {count}</div>
            <button onClick={() => setCount((prev) => prev + 1)}>add count</button>
        </div>
    )
}
