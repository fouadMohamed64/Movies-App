
import React, { useContext } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { langContext } from '../../Context/langContext';
import { StringManeger } from '../../../StringManeger';
import { themeContext } from './../../Context/themContext';
import { IoIosMoon } from "react-icons/io";
import { MdOutlineLanguage } from "react-icons/md";



export default function NavbarComponent() {

    const {lang , setLang} = useContext(langContext)
    const {theme, setTheme} = useContext(themeContext)

return (
            <>
                {/* <Navbar expand="lg" className="bg-body-tertiary mb-5" > */}
                <Navbar style={{marginBottom: '40px' , paddingTop: '30px'}} expand="lg" className={theme=='light'? 'bg-light text-dark' : 'bg-dark text-light'} >
                    <Container className=''>
                        <Navbar.Brand href="#home" className={theme=='light'? 'btn btn-outline-danger' : 'btn btn-outline-info text-light'}>Movies</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto d-flex justify-content-between">
                                <NavLink style={{marginLeft: '50px', textDecoration: 'none'}} to='/' className={({isActive, isPending})=>(isActive && theme=='light')? 'text-danger': (isActive &&theme=='dark')?'text-info': theme=='dark'? 'text-light':'text-dark'}>{lang=='en'? StringManeger.home.en: StringManeger.home.ar }</NavLink>
                                <NavLink style={{marginLeft: '50px', textDecoration: 'none'}} to='/aboutUs' className={({isActive, isPending})=>(isActive && theme=='light')? 'text-danger': (isActive &&theme=='dark')?'text-info':theme=='dark'? 'text-light':'text-dark'}>{lang=='en'? StringManeger.about.en: StringManeger.about.ar }</NavLink>
                                <NavLink style={{marginLeft: '50px', textDecoration: 'none'}} to='/contactUs' className={({isActive, isPending})=>(isActive && theme=='light')? 'text-danger': (isActive &&theme=='dark')?'text-info':theme=='dark'? 'text-light':'text-dark'}>{lang=='en'? StringManeger.contact.en: StringManeger.contact.ar }</NavLink>
                                <NavLink style={{marginLeft: '50px', textDecoration: 'none'}} to='/products' className={({isActive, isPending})=>(isActive && theme=='light')? 'text-danger': (isActive &&theme=='dark')?'text-info':theme=='dark'? 'text-light':'text-dark'}>{lang=='en'? StringManeger.products.en: StringManeger.products.ar }</NavLink>
                            </Nav>
                        </Navbar.Collapse>
                        <button style={{marginLeft: '20px'}} className={theme=='light'? 'btn btn-outline-danger' : 'btn btn-outline-info'} onClick={()=>{setLang(lang=='en' ? 'ar': 'en')}}><MdOutlineLanguage /></button>
                        <button style={{marginLeft: '20px'}} className={theme=='light'? 'btn btn-outline-danger' : 'btn btn-outline-info'} onClick={()=>{setTheme(theme=='light' ? 'dark': 'light')}}><IoIosMoon /></button>
                    </Container>
                </Navbar>
            </>
)
}





