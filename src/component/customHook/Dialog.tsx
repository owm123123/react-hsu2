import React from 'react'
import useClickOutside from './hook/useClickOutside'

export default function Dialog({ close }: { close: () => void }) {

    const ref = useClickOutside(close);
    console.log(ref)
    return (
        <div>
            <div ref={ref}>
                <h1>Hello</h1>
                <button onClick={close}>Close</button>
            </div>
        </div>
    )
}
