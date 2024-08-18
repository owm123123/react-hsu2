import React, { memo } from 'react'

export const Count1 = memo(function Count1({ count }: { count: number }) {
    console.log("Count1 render");
    return (
        <p>Count1: {count}</p>
    )
});
