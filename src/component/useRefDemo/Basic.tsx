import React, { useRef, useState } from 'react'

export default function Basic() {
    const [count, setCount] = useState<number>(0);
    const numberRef = useRef<number>(0);

    const addCount = () => {
        setCount(count + 1);
        // 不會即時更新(非同步)
        console.log(`count: ${count}`)
    }

    const addNumber = () => {
        numberRef.current += 1;
        // 即時更新(同步)
        console.log(`numberRef: ${numberRef.current}`)
    }
    // useStart的value改變時,會重新render
    // useRef的value改變時,不會重新render
    console.log("component render");

    return (
        <>
            <h1>Count: {count}</h1>
            <button onClick={addCount}>add count</button>
            <button onClick={addNumber}>add number</button>
        </>
    )
}
