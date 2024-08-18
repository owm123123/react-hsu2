import React, { useState } from 'react'
import Dialog from './Dialog';

export default function DialogApp() {
    const [open, setOpen] = useState<boolean>(false);

    return (
        <div>
            <button onClick={() => setOpen(true)}>Open</button>
            {open && <Dialog close={() => setOpen(false)} />}
        </div>
    )
}
