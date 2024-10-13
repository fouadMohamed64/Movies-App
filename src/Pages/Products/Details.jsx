import axios from 'axios';
import { useLoaderData, useNavigate } from 'react-router-dom'
import Figure from 'react-bootstrap/Figure';
import { useContext } from 'react';
import { themeContext } from '../../Context/themContext';
import Pagination from 'react-bootstrap/Pagination';
import { useSelector, useDispatch } from 'react-redux';
import { nextPage, prevPage, setPage } from '../../Store/Slices/pageSlice';


export default function Details() {
  const imgURL = 'https://image.tmdb.org/t/p/w500';
  const product = useLoaderData()
  const {theme, setTheme} = useContext(themeContext)

  const page = useSelector((state)=>state.page.page)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  return (
      <>

          <div className="container">
              <Figure  className='d-flex justify-content-evenly' >
                  <Figure.Image width={371} height={180} alt="171x180" src={`${imgURL}${product.poster_path}`}/>
                  <Figure.Caption className={theme=='light' ? 'text-dark':'text-light'}>
                          <h1>Movie Name: {product.title}</h1>
                          <h2>Popularity: {product.popularity}</h2>
                          <h2>Release date: {product.release_date}</h2>
                          <h2>Vote average: {product.vote_average}</h2>
                          <p style={{width: '500px'}}>Overview: {product.overview }</p>
                  </Figure.Caption>
              </Figure>
          </div>

          <Pagination style={{marginLeft: '630px' , paddingTop: '50px'}}>
                <Pagination.First onClick={()=>{dispatch(setPage(1)); navigate(`/details/${533535}`)}} />
                <Pagination.Prev  onClick={()=>{dispatch(prevPage()); navigate(`/details/${page-1}`)}} />
                <Pagination.Item  onClick={()=>{dispatch(setPage(1)); navigate(`/details/${1022789}`)}}>{1}</Pagination.Item>
                <Pagination.Item  onClick={()=>{dispatch(setPage(2)); navigate(`/details/2`)}}>{2}</Pagination.Item>
                <Pagination.Item  onClick={()=>{dispatch(setPage(3)); navigate(`/details/3`)}}>{3}</Pagination.Item>
                <Pagination.Item  onClick={()=>{dispatch(setPage(4)); navigate(`/details/${1032823}`)}}>{4}</Pagination.Item>
                <Pagination.Next  onClick={()=>{dispatch(nextPage()); navigate(`/details/${page+1}`)}}/>  
                <Pagination.Last  onClick={()=>{dispatch(setPage(20)); navigate(`/details/20`)}} />
          </Pagination>
      </>
  )
}




export const loader = async (id) =>{
  console.log(id)
  try{
    const product = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=378cae0e0be76488b1c6da8286253cdb`)
    console.log(product.data);
    return product.data;
  }catch(error){
    return error
  }
}





// const {id} = useParams();

  // const [product, setProduct] = useState({});
// useEffect(()=>{

//   axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=378cae0e0be76488b1c6da8286253cdb`).then((res)=>{

//     setProduct(res.data)
//     console.log(res.data)
//     console.log(product)

//   }).catch((error)=>{

//     console.log(error)

//   })

// })