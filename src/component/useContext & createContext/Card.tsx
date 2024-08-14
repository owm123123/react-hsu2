import React, { useContext } from 'react'
// import LightContext from './LightContext';
import { LightContext } from '../../App';


// type Props = {
//     isLight: boolean;
// }

export default function Card() {
    const value = useContext(LightContext);
    return (
        <>
            <div style={{ backgroundColor: value ? "#ccc" : "#333" }}>
                <p style={{ color: value ? "#333" : "#ccc" }}>My Card</p>
            </div>
        </>
    )
}
