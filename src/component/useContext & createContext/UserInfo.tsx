import { useState } from 'react'
import ComponentA from './ComponentA';
import { nameContext } from './Context';


export default function UserInfo() {

    const [name, setName] = useState<string | undefined>();

    return (
        <div className='box'>
            <h1>UserInfo</h1>
            {/* <h1>{name}</h1> */}
            <label htmlFor='name'>使用者名稱: </label>
            <input onChange={(e) => setName(e.target.value)} name="name" id='name' value={name} />
            <nameContext.Provider value={name}>
                <ComponentA />
            </nameContext.Provider>
        </div>
    )
}
