import React from 'react'
import { useLoaderData } from 'react-router-dom'

export default function Dashboard() {

    const data = useLoaderData();
    console.log(`data: ${data}`)
    return (
        <div>
            Here is dashboard page!
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    )
}
