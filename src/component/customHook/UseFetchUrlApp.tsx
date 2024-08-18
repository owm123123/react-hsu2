import React, { useState } from 'react'
import useFetchUrl, { Status } from './hook/useFetchUrl';


export default function UseFetchUrlApp() {
    enum Status {
        Loading = "Loading",
        Success = "Success",
        Error = "Error"
    }

    interface User {
        id: string,
        name: string,
        age: number
    }

    const userUrl: string = "http://localhost:3000/users";
    const { data, status } = useFetchUrl<User[]>(userUrl);
    { console.log(`resp {response}`) }
    return (
        <div>
            {status == Status.Loading && <p style={{ "color": "red" }}>Loading...</p>}
            {status == Status.Error && <p style={{ "color": "red" }}>Error...</p>}
            <table>
                <thead>
                    <tr>
                        <td>代碼</td>
                        <td>姓名</td>
                        <td>年紀</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        status == Status.Success && data ? data.map((user) => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.age}</td>
                            </tr>
                        )) : null
                    }
                </tbody>
            </table>
        </div>
    )
}
