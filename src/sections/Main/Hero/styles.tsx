import styled from 'styled-components'

export const Section = styled.section`
    height: 35rem;  
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 3.75rem;
`

export const TitleDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: .75rem;
`

export const SubTitle = styled.p`
    color: #FFF;
    font-size: 1.5rem;
    font-weight: 600;
    text-transform: uppercase;
`

export const Title = styled.h1`
    color: #6518B4;
    font-size: 4rem;
    font-weight: 600;
    text-transform: uppercase;
`

export const ButtonsDiv = styled.div`
    display: flex;
    align-items: center;
    gap: 1.5rem;
`

export const LinkedIn = styled.a`
    border: 3px solid #6518B4;
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 10rem;
    height: 2.8125rem;
    border-radius: .7rem;
    gap: 1rem;
    cursor: pointer;
    text-decoration: none;
    color: #fff;
    font-size: 1rem;
    font-weight: 600;
    transition: .3s;


    &:hover{
        border: 3px solid #D24074;
    }
`

export const GitHub = styled.a`
    border: 3px solid #6518B4;
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 10rem;
    height: 2.8125rem;
    border-radius: .7rem;
    gap: 1rem;
    cursor: pointer;
    text-decoration: none;
    color: #fff;
    font-size: 1rem;
    font-weight: 600;
    transition: .3s;

    &:hover{
        border: 3px solid #D24074;
    }
`

export const LinkedInLogo = styled.img`

`