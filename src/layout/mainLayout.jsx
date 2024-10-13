import React, { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Components/Footer/Footer'
import NavbarComponent from './../Components/Navbar/Navbar';
import { langContext } from './../Context/langContext';
import { themeContext } from '../Context/themContext';

export default function MainLayout() {

    const {lang } = useContext(langContext)
    const {theme, setTheme} = useContext(themeContext)


return (
    <div dir={lang == 'ar' ? 'rtl': 'ltr'} className={theme=='light'? 'bg-light text-dark':'bg-dark text-light'}>
        <NavbarComponent />
        <div className="container">
            <Outlet />
        </div>
        <Footer />
    </div>
)
}
