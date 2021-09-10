import styled from "styled-components";


export const Container = styled.nav`

    height: 70px;
    width: 100%;
    background: #19222d;
    display: flex;
    align-items: center;
    padding: 0 1.6rem;

` 
export const Logo = styled.img`
    width: 8rem;

` 

export const NavMenu = styled.div`
    display: flex;
    flex: 1;
    align-items: center;
    margin-left: 25px;
    a {
        display: flex;
        align-items: center;
        padding: 0 12px;
        cursor: pointer;
        text-decoration:none; 
        color: white;
    
    span {
        font-size: 13px;
        letter-spacing: 1.42px;
        position: relative;
        color: white;

         &:after {
            content: "";
            height: 2px;
            background: white;
            position: absolute;
            left: 0;
            right: 0;
            bottom: -6px;
            opacity: 0;
            transform-origin: left center;
            transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
            transform: scaleX(0);
        }
    }

    &:hover {
        span:after {
            transform: scaleX(1);
            opacity: 1;
        }
    }
}
` 

export const CampoBusca = styled.div`

    /* background: red;  */
     
    display: flex;
    margin-left: auto;
    margin-right: 2%; 
    input {background-image: url("/images/search-icon.svg");
    background-repeat: no-repeat;
    padding-left: 35px;
    background-position: 8px;
    background-color: #19222d;  
    color: white;
    margin-right: 10px;
    display: flex;
    align-items: center;
    border-color: #d3d3d3;
    border-radius: 2px;
    margin-left: 40px;
    font-size: 1rem;
    
}
      img {
        width: 2rem;
             padding: 0rem;
             margin-left: 0rem;
             background-color: #d3d3d3;
      }


      
` 

