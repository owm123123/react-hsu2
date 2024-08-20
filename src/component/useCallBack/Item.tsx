import React, { memo } from 'react'

type Data = {
    name: string,
    value: number,
    onClick: () => void,
}

export const Item = memo(function Item({ name, value, onClick }: Data) {
    console.log(`Item ${name} render`)
    return (
        <div>
            <p>
                {name} : {value}
            </p>
            <button onClick={onClick}>add {name}</button>
        </div>
    )
});
