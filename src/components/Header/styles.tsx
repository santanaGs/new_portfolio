import styled from "styled-components";

export const HeaderDiv = styled.div`
    height: 5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 768px) {
        flex-direction: column;
        margin-top: 3rem;
    }
`

export const Logo = styled.p`
    color: #6518B4;
    font-family: Inter;
    font-size: 1.5rem;
    font-weight: 500;
`

export const Nav = styled.nav``

export const NavList = styled.ul`
    display: flex;
    gap: 3.88rem;
    list-style: none;

    @media screen and (max-width: 768px) {
        gap: .88rem;
    }
`

export const NavItem = styled.li``
    
export const NavLink = styled.a`
    color: #C4C4C4;
    font-size: 1.125rem;
    font-weight: 500;
    text-decoration: none;

    border-bottom: 2px solid transparent;

    transition: .3s;

    &:hover{
        border-bottom: 2px solid #6518B4;
    }

    @media screen and (max-width: 768px) {
        font-size: .9rem;
    }
`