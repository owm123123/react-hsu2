import React, { memo } from 'react'

type Data = { data: { value: number } }

export const Count2 = memo(function Count2({ data }: Data) {
    console.log("Count2 render");
    return (
        <p>Count2: {data.value}</p>
    )
});
