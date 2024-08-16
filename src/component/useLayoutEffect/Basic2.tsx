import { useLayoutEffect, useRef, useState } from 'react'

export default function Basic2() {
    const [isShow, setIsShow] = useState<boolean>(false);
    const [top, setTop] = useState<number>(0);
    const [height, setHeight] = useState<number>(0);
    const divRef = useRef<HTMLDivElement>(null);

    // useEffect(() => {
    //     console.log(divRef.current)
    //     if (isShow && divRef.current) {
    //         setTop(divRef.current.offsetHeight + divRef.current.offsetTop);
    //     }
    // }, [isShow])

    useLayoutEffect(() => {
        console.log(divRef.current)
        if (isShow && divRef.current) {
            setTop(divRef.current.offsetHeight + divRef.current.offsetTop);
        }
    }, [isShow])

    function handleClick() {
        setIsShow((prev) => !prev)
        if (!isShow) {
            setHeight(Math.random() * 50 + 20);
        }
        if (isShow) {
            setTop(0);
        }
    }

    return (
        <div>
            <button onClick={handleClick}>Show Popup</button>
            {isShow && (
                <>
                    <div ref={divRef}
                        style={{
                            height: `${height}px`,
                            border: "solid 1px black"
                        }}
                    >
                    </div>
                    <div style={{ position: "absolute", width: "100%", backgroundColor: "#f00", top: `${top}px`, }} >
                        Popup
                    </div>
                </>
            )
            }

        </div >
    )
}
