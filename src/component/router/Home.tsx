import React from 'react'
import { Link, Outlet } from "react-router-dom";

export default function Home() {
    return (
        <>
            <ul>
                <Link to="/">
                    <li>home</li>
                </Link>
                <Link to="/products">
                    <li>products</li>
                </Link>
                <Link to="/user">
                    <li>user</li>
                </Link>
                <Link to="/..">
                    <li>上一層</li>
                </Link>
            </ul>
            <div>Here is home page!</div>
            <Outlet />
        </>
    )
}
