import styled from "styled-components";

export const HeaderDiv = styled.header`
    position: sticky;
    top: 0;
    z-index: 10;
    border-bottom: 1px solid rgba(255, 255, 255, 0.07);
    background: rgba(11, 16, 14, 0.86);
    backdrop-filter: blur(16px);
`

export const HeaderContent = styled.div`
    height: 5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const Logo = styled.a`
    color: var(--color-text);
    font-size: 1.25rem;
    font-weight: 700;
    letter-spacing: -0.06em;
    text-decoration: none;

    span {
        color: var(--color-accent);
    }
`

export const Nav = styled.nav``

export const NavList = styled.ul`
    display: flex;
    gap: clamp(1rem, 3vw, 2.5rem);
    list-style: none;
    margin: 0;
    padding: 0;
`

export const NavItem = styled.li``
    
export const NavLink = styled.a`
    color: var(--color-muted);
    font-size: 0.9rem;
    font-weight: 500;
    text-decoration: none;
    transition: color 180ms ease;

    &:hover{
        color: var(--color-accent-hover);
    }

    @media screen and (max-width: 768px) {
        font-size: 0.8rem;
    }
`