import { useContext } from 'react'
import { nameContext } from './Context';

export default function ComponentD() {

    const nameName = useContext(nameContext);

    return (
        <div className='box'>
            <h1>ComponentD</h1>
            {nameName !== undefined ? <h2>Hello {nameName}</h2> : null}
            {/* {if(nameName !== undefined){<h2>`Hello ${nameName}`</h2>}} */}
        </div>
    )
}
