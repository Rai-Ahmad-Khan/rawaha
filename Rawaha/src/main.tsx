import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './layout'
import Home from './components/Home/Home'
import Product from './components/Products/Product'
import ItemDetail from './components/ItemDetail/ItemDetail';
import User from './components/Users/User'
// import App from './App'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// const router = createBrowserRouter([
//   {
//     path:"/",
//     element: <Layout/>,
//     children: [
//       { 
//         path:'',
//         element: <Home/>
//       },
//       { 
//         path:'Products',
//         element: <Product/>
//       },
//       { 
//         path:'ItemDetail',
//         element: <ItemDetail/>
//       }
//     ]
//   }
// ])
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='products' element={<Product/>}/>
      <Route path='itemDetails/:id' element={<ItemDetail/>}/>
      <Route path='user/:id' element={<User/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
    {/* <App/> */}
  </React.StrictMode>,
)


