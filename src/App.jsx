import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

import { RouterProvider } from 'react-router-dom';
import { Router } from './routerConfig';
import { LangProvider } from './Context/langContext';
import { ThemeProvider } from './Context/themContext';
import { Provider } from 'react-redux';
import { Store } from './Store/store';

function App() {
  // const [count, setCount] = useState(0)

  const [lang, setLang] = useState('en')
  const [theme, setTheme] = useState('light')

  return (
    <>
        <Provider store={Store}>
            <ThemeProvider value={{theme, setTheme}}>
                <LangProvider value={{lang, setLang}}>
                      <RouterProvider router={Router} />
                </LangProvider>
            </ThemeProvider>
        </Provider>
    </>
  )
}

export default App


















// import {NavbarClass } from './Components/Navbar/Navbar';
// import { Login } from './Components/Login/Login';
// import { FormikForm } from './Components/Login/formik';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Home from './Pages/Home/Home';
// import AboutUs from './Pages/AboutUs/AboutUs';
// import ContactUs from './Pages/ContactUs/ContactUs';
// import Products from './Pages/Products/Products';
// import NotFound from './Pages/NotFound/NotFound';
// import Vision from './Pages/AboutUs/Vision/Vision';
// import Values from './Pages/AboutUs/Values/Values';
// import Details from './Pages/Products/Details';


// <BrowserRouter>
// <NavbarClass />
// <Routes>
//     <Route path='/' element={<Home />}  />
//     <Route path='/home' element={<Home />}/>
//     <Route path='/aboutUs' element={<AboutUs />} >
//         <Route index element={<Values />} />
//         <Route path='vision' element={<Vision />} />
//     </Route>
//     <Route path='/contactUs' element={<ContactUs />} />
//     <Route path='/products' element={<Products />} />
//     <Route path='/details/:id' element={<Details />} loader={()=>{}}/>
//     <Route path='*' element={<NotFound />} />
// </Routes>
// </BrowserRouter>