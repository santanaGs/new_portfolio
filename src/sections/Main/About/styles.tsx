import styled from 'styled-components'

export const Section = styled.section`
    background: #151515;
    padding-block: 6.25rem;
`

export const Content = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const Left = styled.div`
    border-left: .25rem solid #6518B4;
    border-radius: 0.25rem 0rem 0rem 0.25rem;
`

export const Image = styled.img`
    width: 22.9375rem;
    height: 22.9375rem;
    filter: grayscale(100%);
`

export const Right =  styled.div`
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
`

export const AboutTitle = styled.h3`
    color: #FFF;
    font-family: Inter;
    font-size: 1.5rem;
    font-weight: 600;
    text-transform: uppercase;
`

export const DivCityDesc = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.31rem;
`

export const City = styled.p`
    color: #FFF;
    font-size: 1.25rem;
    font-weight: 500;
`

export const Desc = styled.p`
    color: #C4C4C4;
    font-size: 1.125rem;
    font-weight: 300;
    line-height: 2rem; /* 177.778% */
    width: 33.125rem;
`

export const SociaisDiv = styled.div`
    display: flex;
    gap: 1.88rem;
    align-items: center;
`

export const Icon = styled.img`

`

export const DivButtons = styled.div`
    display: flex;
    gap: 3rem;
`

export const Buttons = styled.a`
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

export const ButtonLogo = styled.img`

`