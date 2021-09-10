import React, { useState } from 'react'
import {Link} from 'react-router-dom';
import {Container, Logo, NavMenu, CampoBusca} from "./Header";
// import App from '../../App'
/* Flow de serviços*/
// import { flowService } from "../../helpers/flow";


const Header = () => {
    // const [search, setSearch] = useState('');
    // function handleSearch(e){
    //     console.log(e.target.value)
    // }
    // const handleLogout = () => {
    //     localStorage.removeItem("@isAutenticate"); // removo o token do localStorage
    //     flowService.goTo(ROUTES.LOGIN); // redireciono para a pagina de login
    //   };
    return (
        
        <Container>
            <Logo src="/images/logo.png"/>
            <NavMenu >
               {/* <a href="#/"><span>Início</span></a> */}
               <span><Link to="/">Inicio</Link></span>
               <span><Link to="/series">Séries</Link></span>
               <span><Link to="/filmes">Filmes</Link></span>
               <span><Link to="/infantil">Infantil</Link></span>
            
            </NavMenu>
            <CampoBusca >
                 <input type='text' name="search" placeholder='Busca' id="search" ></input> {/*onChange={handleSearch} */}
                {/* <input type="image" src="images/pessoa.svg" options={['sair']}></input> */}
                 <img src='images/pessoa.svg' alt="" /> 
            </CampoBusca>
            
        </Container>
    )
}

// let seatch_input = document.querySelector('#search_input')
// seatch_input.addEventListener('keyup', function(e){
//     console.log(e.target.value.toLowerCase())
//     let search_item = e.target.value.toLowerCase()
//     let name = document.querySelectorAll('.title')

//     name.forEach((item) => {
//         if (item.textContent.toLowerCase().indexOf(search_item) != -1) {
//             item.closest("tr").style.display = 'table-row';
//         } else {
//             item.closest("tr").style.display = 'none'
//         }
//     })
// })
export default Header

