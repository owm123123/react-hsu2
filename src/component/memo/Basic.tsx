import React, { useState } from 'react'
import { Count1 } from './Count1'
import { Count2 } from './Count2'

export default function Basic() {
    const [count1, setCount1] = useState<number>(0);
    const [count2, setCount2] = useState<number>(0);
    console.log("--------Basic render--------");
    return (
        <div>
            <Count1 count={count1} />
            <button onClick={() => setCount1((prev) => prev + 1)}>Count 1</button>
            <Count2 count={count2} />
            <button onClick={() => setCount2((prev) => prev + 1)}>Count 2</button>
        </div>
    )
}
