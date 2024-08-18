import React, { memo } from 'react'

export const Count2 = memo(function Count2({ count }: { count: number }) {
    console.log("Count2 render");
    return (
        <p>Count2: {count}</p>
    )
});
