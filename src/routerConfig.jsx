import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layout/mainLayout";
import Home from "./Pages/Home/Home";
import AboutUs from "./Pages/AboutUs/AboutUs";
import ContactUs from "./Pages/ContactUs/ContactUs";
import NotFound from './Pages/NotFound/NotFound';
import Products, { loader as productsLoader } from './Pages/Products/Products';
import Details, { loader as productsDetailsLoader } from './Pages/Products/Details';
import Values from "./Pages/AboutUs/Values/Values";
import Vision from "./Pages/AboutUs/Vision/Vision";
import LoaderErrors from "./Errors/LoaderErrors";


export const Router = createBrowserRouter([
    {path: '/', element: <MainLayout /> , children:[
        {index:true, element:< Home/>},
        {path: 'home', element: <Home />},
        {path: 'aboutUs', element: <AboutUs />, children: [
            {index: true, element: <Values />},
            {path: 'vision', element: <Vision />}
        ]},
        {path: 'contactUs', element: <ContactUs />},
        {path: 'products', element: <Products /> , loader:productsLoader , errorElement: <LoaderErrors />},
        {path: 'details/:id', element: <Details /> , loader: async ({params})=>{const p = productsDetailsLoader(params.id) 
            return p;}, errorElement: <LoaderErrors />},
        {path: '*', element: <NotFound />},
    ]},
])