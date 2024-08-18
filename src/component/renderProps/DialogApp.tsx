import React, { useState } from 'react'
import Dialog from './Dialog';

export default function DialogApp() {
    const [open, setOpen] = useState<boolean>(false);

    return (
        <div>
            <button onClick={() => setOpen(true)}>Open</button>
            {/* 寫法 1 */}
            {/* {open && (
                <Dialog
                    close={() => setOpen(false)}
                    content={(time) =>
                        <div>
                            <p>這是一個Dialog</p>
                            <p>現在時間: {time.getHours()}:{time.getMinutes()}:{time.getSeconds()}</p>
                        </div>
                    }
                />)
            } */}
            {/* 寫法 2 */}
            {open &&
                <Dialog close={() => setOpen(false)}>
                    {(time: Date) =>
                        <div>
                            <p>這是一個Dialog</p>
                            <p>現在時間: {time.getHours()}:{time.getMinutes()}:{time.getSeconds()}</p>
                        </div>
                    }
                </Dialog>
            }
        </div>
    )
}
