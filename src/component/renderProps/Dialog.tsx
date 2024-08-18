import React, { ReactElement } from 'react'
import useClickOutside from '../customHook/hook/useClickOutside'

// export default function Dialog({ close, content }: { close: () => void, content: (time: Date) => React.ReactElement }) {
export default function Dialog({ close, children }: { close: () => void, children: (time: Date) => React.ReactElement }) {

    const ref = useClickOutside(close);
    console.log(ref)
    return (
        <div className='dialog'>
            <div ref={ref}>
                <h1>React</h1>
                {/* {content(new Date())} */}
                {children(new Date())}
                <button onClick={close}>Close</button>
            </div>
        </div>
    )
}
