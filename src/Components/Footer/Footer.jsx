import React, { useContext } from 'react'

import { MDBFooter, MDBContainer } from 'mdb-react-ui-kit';
import { themeContext } from '../../Context/themContext';

export default function Footer() {

    const {theme, setTheme} = useContext(themeContext)

return (
    <>
        {/* <MDBFooter className='text-center text-dark mt-5' style={{ backgroundColor: '#ddd' }}> */}
        <MDBFooter className={theme=='light'? 'bg-light text-dark':'bg-dark text-light'} style={{paddingBottom: '40px' , paddingTop: '0px'}}>
                <MDBContainer className='p-4'></MDBContainer>

                {/* <div className='text-center p-3' style={{ backgroundColor: '#ddd'  , color: 'black'}}> */}
                <div className={theme=='light'? 'bg-light text-dark text-center p-3':'bg-dark text-info text-center p-3'}>
                    Copyright © 2020 : 
                    <a className={theme=='light'? 'bg-light text-dark':'bg-dark text-info'} style={{textDecoration: 'none', marginLeft: '10px'}} href='https://github.com/fouadMohamed64'>
                    FouadMohamedFouad
                    </a>
                </div>
        </MDBFooter>
    </>
)
}
