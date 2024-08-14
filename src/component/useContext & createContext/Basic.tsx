import React from 'react'
import Card from './Card'
import { LightContext } from '../../App'

// type Props = {
//     isLight: boolean;
// }

export default function Basic() {


    return (
        <>
            <div style={{ margin: "10px" }}>
                <p>Board</p>
                <Card />
                {/* 測試抓最近的context value */}
                <LightContext.Provider value={true}>
                    <Card />
                </LightContext.Provider>
            </div>
        </>
    )
}
