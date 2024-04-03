
import React from 'react';
import ReactDOM from 'react-dom/client';
import NavBar from './src/common/navbar/navbar';
import Categories from './src/pages/homepage/categories/categories';
import Carousel from './src/pages/homepage/carousel/carousel';
import Body from './src/pages/homepage/body/body';
import Footer from './src/common/footer/footer';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Products from './src/pages/productpage/products';
import ErrorPage from './src/pages/errorpage/errorPage';
import SignUp from './src/pages/signuppage/signUp';

const parent = document.getElementById("root");
const root = ReactDOM.createRoot(parent);

// router config
const App = () => {
    return (
        <>
            <NavBar/>
            <Categories />
            <Carousel/>
            <Body/>
            <Footer/>
        </>
        // <Carousal></Carousal>
        // <Body></Body>
        // <Footer></Footer>
    )
}

const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      errorElement:<ErrorPage/>
      
    },
    {
        path:"/products",
        element:<Products/>
    },
    {
        path:"/signup",
        element:<SignUp/>
    }
  ]);


root.render(
    <RouterProvider router={router}>
        <App/>
    </RouterProvider>
);