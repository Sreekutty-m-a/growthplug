import React from "react";
import styled from "styled-components";
import banner from "../../assets/wall.jpg";
import { imageURL } from "../../config/config";
import { PlayCircleFilled } from '@ant-design/icons';
import { Link } from "react-router-dom";

const Container = styled.div``;

const Banner = styled.div`
  height: 262px;
`;
const MoviesContainer = styled.div`
  padding: 60px ;

`;
const ListMovies=styled.div`
display:flex;
flex-wrap:wrap;
gap:15px;
`;
const MovieDetails = styled.div`
  display:flex;
  background-color :#263f61;
  justify-content:space-between;
  padding: 0px 6px;
  .anticon{
    color : #ff5e62
  }
`;

const HomeContainer = (props) => {
  const { movies } = props;
  console.log(movies);
  return (
    <Container>
      <Banner>
        <img
          src={banner}
          width="100%"
          height="100%"
          style={{ objectFit: "cover" }}
        />
      </Banner>
      <MoviesContainer>
        <h2 style={{ color: "white", fontWeight: 400 }}>Trending</h2>
        <ListMovies>
            
            {movies && movies.results && movies.results.map((item)=>{
                return(
                  <Link to ={`/movie/${item.id}`}>
                    <div>
                    
                      <img src={imageURL + item.poster_path} style={{width:230,height:200}} />
                      <MovieDetails>
                      <h6 style={{ color: "white",textAlign:"center"}}>{item.original_title}</h6>
                      < PlayCircleFilled style={{ fontSize:"20px"}}/>
                      </MovieDetails>
                    </div>  </Link>
                ) 
            })}
            
        </ListMovies>
      </MoviesContainer>
    </Container>
  );
};

export default HomeContainer;