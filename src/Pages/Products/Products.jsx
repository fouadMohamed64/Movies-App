import axios from 'axios';
import React, { useEffect, useState } from 'react'

import Row from 'react-bootstrap/Row';
import { useLoaderData } from 'react-router-dom';
import SingleCard from './singleCard';
import { Store } from './../../Store/store';
import { changeLoader } from '../../Store/Slices/loaderSlice';
import { useSelector } from 'react-redux';

import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';

export default function Products() {
  


  const loader = useSelector((state)=>state.loader.isLoad)
  const product = useLoaderData()

            return (
              <>
                  {
                    loader ? 
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
                    <Row xs={1} md={5}  className="g-4">
                          {product.map(({id, poster_path, original_title, popularity, release_date, vote_average, overview , fav}) => (
                            <SingleCard key={id} id={id} poster_path={poster_path} original_title={original_title} popularity={popularity} release_date={release_date} vote_average={vote_average} overview={overview} fav={fav}/> 
                          ))}
                    </Row>
                  }
              </>
            )
}


export const loader = async ()=>{
  try{
    axios.interceptors.request.use((reqConfig)=>{

      // reqConfig.params = {limit: }

      console.log(reqConfig)

      // Store.dispatch(changeLoader(true))
      
      return reqConfig;
    }, (error)=>{
      
      console.log(error)
      
      return Promise.reject(error)
    })

    axios.interceptors.response.use((resConfig)=>{
      
      console.log(resConfig)
      
      if(resConfig.status === 200){
        // Store.dispatch(changeLoader(false))
        resConfig.data.results = resConfig.data.results.map((ele)=>{
          return {...ele, fav: false}
        })
      }
      
      return resConfig; 
    }, (error)=>{
      
      console.log(error)
      
      return Promise.reject(error)
    })
    
    const products = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=378cae0e0be76488b1c6da8286253cdb`);
    console.log(products.data)
    Store.dispatch(changeLoader(false))
    return products.data.results;
  }catch(error){
    Store.dispatch(changeLoader(true))
    return error
  }
}









// const [product, setProduct] = useState([]);

// useEffect(()=>{

//   axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=378cae0e0be76488b1c6da8286253cdb`).then((res)=>{
//     setProduct(res.data.results)
//     // console.log(res.data.results)
//   }).catch((error)=>{
//     console.log(error)
//   })
// }, [])