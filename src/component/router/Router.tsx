import React from 'react'
import { createBrowserRouter, Link, Outlet, RouterProvider } from 'react-router-dom'
import Home from './Home'
import Products from './Products'
import User from './User'

// npm: npm install react -router -dom

// 引入兩個重要的東西
// createBrowserRouter: method(建立router路徑), 第一個參數(array所有路徑的資料), 第二個參數(選填參數, 設定跟路徑相關內容)
// RouterProvider: component(react - router提供), 兩個常用到的props(router, fallbackElement)
//  router: 放著使用 createBrowserRouter 所建立出來的 router 物件。
//  fallbackElement: Suspense裡用到的fallback一樣，是當router還在載入的過程時用來顯示的備用元素。

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        children: [
            { path: "products", element: <Products /> },
            { path: "user", element: <User /> }
        ]
    }
    ,
    {
        path: "/products",
        element: <Products />
    },
    {
        path: "/user",
        element: <User />
    }
])

export default function Router() {
    // return <RouterProvider router={router}></RouterProvider>
    return <RouterProvider router={router} />;
}
