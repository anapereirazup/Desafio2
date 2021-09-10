import React from 'react';
import './styles.css';
import styled from 'styled-components'
import ImgSlider from '../ImgSlider/ImgSlider'
export default ({item}) => {

   
    return (
        
        <section className="featured" style={{
            // backgroundSize: 'cover',
            // backgroundPosition: 'center',
            // backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
        }}>
            <Container> <ImgSlider /> </Container>

            {/* <div className="featured--vertical">
                <div className="featured--horizontal">
                    <div className="featured--name">{item.original_name}</div>
                    <div className="featured--info">
                        <div className="featured--points">{item.vote_average} pontos</div>
                        <div className="featured--year">{firstDate.getFullYear()}</div>
                        <div className="featured--seasons">{item.number_of_seasons} temporada{item.number_of_season !== 1 ? 's' : ''}</div>
                    </div>
                        <div className="featured--description">{descr}</div>
                        <div className="featured--buttons">
                            <a href={`/watch/${item.id}`} className="featured--watchbutton">► Assistir</a>
                            <a href={`/list/add/${item.id}`} className="featured--mylistbutton">+ Minha Lista</a>
                        </div>
                        <div className="featured--genres">Gêneros: <strong> {genres.join(', ')} </strong></div>

                </div>
            </div> */}
        </section>
    )
}

const Container = styled.div`
`