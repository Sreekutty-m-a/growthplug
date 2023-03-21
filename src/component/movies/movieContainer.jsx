import React from "react";
import styled from "styled-components";
import { imageURL } from "../../config/config";
import {ArrowLeftOutlined} from '@ant-design/icons';


const MovieWrapper =styled.div`
display : flex;
font-weight : lighter;
`

const DisplayMovie = styled.div`
    height : 100%;
    width :40%;
    padding:100px 30px;
    .anticon svg {
        padding-bottom :30px;
    }
    
`
const ImageContainer = styled.div`
    width : 60%;
`

const MovieContainer = (props) =>{
    const {movie} = props;
    return(
        <MovieWrapper>    
        <DisplayMovie>
            <div style={{ color: "white"}}>
            <ArrowLeftOutlined />
            <h1>{movie.title}</h1>
            <p>Rating : {movie.vote_average/2} / 5</p>
            <p> {movie.overview}</p>
            <p>Release Date : {movie.release_date}</p>
            <p>Original Language : {movie.original_language}</p>
        </div>
        </DisplayMovie>
        <ImageContainer>
            <div>
            <img src={imageURL + movie.poster_path} style={{width:750,height:520}} />
            </div>
        </ImageContainer>
        </MovieWrapper>
        
    )
}
export default MovieContainer;