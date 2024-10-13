import React, { useContext } from 'react'
import { langContext } from '../../Context/langContext'
import { StringManeger } from '../../../StringManeger'
import { useDispatch, useSelector } from 'react-redux'

import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import { reverceLoader } from '../../Store/Slices/loaderSlice';


export default function Home() {

  const {lang } = useContext(langContext)
  const loader = useSelector((state)=> state.loader.isLoad)
  const dispatch = useDispatch(); 
  return (
      <>
          {
            (loader==true) ?
            // <div onClick={()=>{dispatch(reverceLoader())}} >
            <div>
              <Button variant="danger" disabled>
                  <Spinner
                    as="span"
                    animation="border"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                  />
                  <span className="visually-hidden">Loading...</span>
            </Button>{' '}
            <Button variant="danger" disabled>
                <Spinner
                  as="span"
                  animation="grow"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                />
                Loading...
            </Button>
            </div> 
            :
            <div>{lang=='en'? StringManeger.home.en: StringManeger.home.ar }</div>
          }
      </>
  )
}
