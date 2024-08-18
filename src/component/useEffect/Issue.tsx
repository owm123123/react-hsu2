import React, { useEffect, useLayoutEffect, useState } from 'react'

export default function Issue() {
    const [name, setName] = useState<string>('Amy');

    // 1.
    // useEffect:       非同步函式，等 UI 渲染完才會執行
    // useLayoutEffect: 同步函式，UI 會等useLayoutEffect中做的事情結束才會渲染

    // useEffect(() => {
    //     const dataName = window.localStorage.getItem("name") || '';
    //     console.log(dataName)
    //     if (dataName) {
    //         setName(dataName);
    //     }
    // }, [name])

    useLayoutEffect(() => {
        const dataName = window.localStorage.getItem("name") || '';
        console.log(dataName)
        if (dataName) {
            setName(dataName);
        }
    }, [name])

    return (
        <div>
            <input onChange={(e) => setName(e.target.value)} id='name' type='password' />
            <label htmlFor='name'>name: {name}</label>
        </div>
    )
}
