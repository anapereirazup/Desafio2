import React, {useEffect, useState} from 'react';
// import './App.';
import Tmdb from '../features/Tmdb';
import MovieRow from '../components/MoviesRow';
import FeaturedMovie from '../components/FeaturedMovie';
import Header from '../components/Header';

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