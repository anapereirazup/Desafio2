import React, {useEffect, useState} from 'react';
// import './App.css';
import Tmdb from '../../features/Tmdb';
import MovieRow from '../MoviesRow';
// import FeaturedMovie from './components/FeaturedMovie';
import FeaturedMovie from '../FeaturedMovie/index';
import Header from '../Header';
// import { BrowserRouter } from 'react-router-dom';
// import Routes from './Routes';

export default  ({Home}) => {
  
  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData]= useState(null);
  const [blackHeader, setblackHeader]= useState(false);

  useEffect(()=>{
    const loadAll = async () => {
        //Pegando a lista total
      let list = await Tmdb.getHomeList();
      setMovieList(list);

      let originals = list.filter(i=> i.slug === 'originals');
      let randonChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));
      let chosen = originals[0].items.results[randonChosen]
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');
      setFeaturedData(chosenInfo);
    }

    loadAll();
  }, []);

  useEffect(()=>{
    const scrollListener = () =>{
        if(window.scrollY > 10){
          setblackHeader(true);
        }else{
          setblackHeader(false);
        }
    }

    window.addEventListener('scroll', scrollListener);

    return () =>{
      window.removeEventListener('scroll', scrollListener);
    }
  }, []);

  return(//AQUI O HEADER TA COMPILANDO CERTINHO, SE TIRAR ELE SOME
          //MAS OS OUTROS NÃO ESTA RENDERIZANDO
    <div className="page">
      
       {/* <Routes /> */}
      <Header black={blackHeader}/>  
      
       {featuredData && 
        <FeaturedMovie item ={featuredData}/>
      }  
      
       
      <section className="lists">
        {movieList.map((item, key) =>(
          <MovieRow key={key} title={item.title} items={item.items}></MovieRow>
        ))

        }
      </section>
      


    {movieList.length <= 0 &&
      <div className="loading">
        {/* <img src="https://cdn.lowgif.com/small/0534e2a412eeb281-the-counterintuitive-tech-behind-netflix-s-worldwide.gif" alt="loading"></img> */}
      </div>
    }
    </div>
  )
  
}





// import React from 'react';
// import styled from "styled-components";
// import Header from '../Header';
// import ImgSlider from '../ImgSlider/ImgSlider';


// function Infantil() {

//     return (
//         <Container>
//             <Header />
//             <ImgSlider />
//             <h1>Ana</h1>
//         </Container>
//     )
// }

//  export default Infantil;

//  const Container = styled.div`
 
//  `