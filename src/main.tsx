import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Link, Route, RouterProvider } from 'react-router-dom'
import Contact from './component/router-official/Contact'
import Dashboard from './component/router-official/Dashboard'
import { users } from './LoaderApi.ts'
import Root from './component/router-official/Root.tsx'
import AuthLayout from './component/router-official/AuthLayout.tsx'
import Login from './component/router-official/Login.tsx'
// jsx寫法
// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' element={<Route />}>
//       <Route path='contact' element={<Contact />} />
//       <Route path='dashBoard'
//         element={<Dashboard />}
//         loader={users}
//       />
//       <Route element={<AuthLayout />}>
//         <Route
//           path="login"
//           element={<Login />}
//         />
//         {/* <Route path="logout" action={logoutUser} /> */}
//       </Route>
//     </Route>
//   )
// )


// js寫法
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
        loader: users,
      },
      {
        element: <AuthLayout />,
        children: [
          {
            path: "login",
            element: <Login />,
            // loader: redirectIfUser,
          },
          {
            path: "logout",
            // action: logoutUser,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  <RouterProvider router={router} />
)
