import React, { memo } from 'react'

type Data = { data: { value: number } }

export default function Count1({ data }: Data) {
    console.log("Count1 render");
    return (
        <p>Count1: {data.value}</p>
    )
}
