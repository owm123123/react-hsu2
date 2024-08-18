import React, { useEffect, useState } from 'react'

export default function Basic() {

    // 1. basic useEffect (只有在render結束後才執行)
    // useEffect(() => {
    //     // render finish execute
    //     alert("render finish")
    // });

    interface Data {
        name: string,
        isCheck: boolean
    }


    const [data, setData] = useState<Data>({
        name: 'John',
        isCheck: false,
    });

    // 2. useEffect & useState not dependencies (只要data這個物件有改動就會執行)
    // useEffect(() => {
    //     // data change state also execute
    //     console.log(`render finish name: ${(JSON.stringify(data))}`)
    // });

    // 3. useEffect & useState add dependencies (只有指定的 dependencies改動才會執行)
    // useEffect(() => {
    //     // data change state also execute
    //     console.log(`render finish name: ${(JSON.stringify(data))}`)
    // }, [data.isCheck]);

    // 4. useEffect & useState add dependencies is [] (只有第一次render才會執行)
    useEffect(() => {
        // init render also execute
        console.log(`render finish name: ${(JSON.stringify(data))}`)
    }, []);


    return (
        <div>
            <label htmlFor='name'>name: </label>
            <input id='name' onChange={(e) => setData({ ...data, name: e.target.value })} />
            <button onClick={() => setData({ ...data, isCheck: !data.isCheck })}>finish</button>
        </div>
    )
}
