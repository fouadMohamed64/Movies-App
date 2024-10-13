import React, { useContext } from 'react'

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { useNavigate } from 'react-router-dom';
import { FaHeart } from "react-icons/fa";
import { themeContext } from '../../Context/themContext';
import { useDispatch } from 'react-redux';
import { setPage } from '../../Store/Slices/pageSlice';


export default function SingleCard(props) {

  const {theme, setTheme} = useContext(themeContext)

  const dispatch = useDispatch()


    const imgURL = 'https://image.tmdb.org/t/p/w500';
    const navigate = useNavigate()
    const showDetails = (id)=>{
      // console.log(props.id)
      dispatch(setPage(props.id))
      navigate(`/details/${id}`)
    }

    const changeColor = (e)=>{
        e.target.style.color='#dc3545'  
    }


  return (
    <>
        <Col>
            <Card style={{height: '1100px' , marginBottom: '20px'}} className={theme=='light'? 'bg-light text-dark':'bg-dark text-light border border-secondary'}>
                <Card.Img variant="top" src={`${imgURL}${props.poster_path}`} />
                <Card.Body>
                <Card.Title>Movie Name: {props.original_title}</Card.Title>
                <Card.Text>Popularity: {props.popularity}</Card.Text>
                <Card.Text>Release date: {props.release_date}</Card.Text>
                <Card.Text>Vote average: {props.vote_average}</Card.Text>
                <Card.Text>Overview: {props.overview }</Card.Text>
                </Card.Body>
                <h1 style={{textAlign: 'center'}}><FaHeart onClick={(e)=>{changeColor(e)}}   className={(props.fav && theme=='light')? 'text-danger ': (props.fav && theme=='dark')? 'text-danger': (props.fav==false && theme=='light')? 'text-dark': (props.fav==false && theme=='dark')? 'text-light':'text-dark' }/> </h1>
                <button  className={theme=='light'? 'btn btn-danger':'btn btn-info text-light'} onClick={()=>{showDetails(props.id )}}>ShowDetails</button>
            </Card>
        </Col>
    </>
  )
}

