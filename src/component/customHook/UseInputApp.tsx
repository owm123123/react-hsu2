import React, { useState } from 'react'
import useInput from './hook/useInput'

export default function UseInputApp() {
    // 原本
    // const [firstName, setFirstName] = useState<string>('');
    // const [lastName, setLastName] = useState<string>('');

    // 加入useInput hook
    const firstNameProps = useInput('lin');
    const lastNameProps = useInput('wilson');

    // 原本
    // const changeFirstName = (element: React.ChangeEvent<HTMLInputElement>) => {
    //     const { target } = element;
    //     console.log(target.value);
    //     setFirstName(target.value)
    // }

    // const changeLastName = (element: React.ChangeEvent<HTMLInputElement>) => {
    //     const { target } = element;
    //     console.log(target);
    //     setLastName(target.value)
    // }

    return (
        <div>
            <label htmlFor='firstName'>firstName: </label>
            {/* 原本 */}
            {/* <input id='firstName' onChange={changeFirstName} /> */}

            {/* add useInput hook */}
            <input id='firstName' {...firstNameProps} />
            <br /><br />
            <label htmlFor='lastName'>lastName: </label>
            {/* 原本 */}
            {/* <input id='lastName' onChange={changeLastName} /> */}

            {/* add useInput hook */}
            <input id='lastName' {...lastNameProps} />
        </div>
    )
}
