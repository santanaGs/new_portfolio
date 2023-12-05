import styled from "styled-components";

export const Container = styled.div`

`

export const ContainerImage = styled.div`
    border-left:  0.25rem solid #6518B4;
    width: 33.125rem;
    max-height: 12.5rem;
    border-radius: 0.25rem 0rem 0rem 0.25rem;
`

export const ImageS = styled.img`
    width: 33.125rem;
    min-height: 12.5rem;
    max-height: 12.5rem;
    object-fit: cover;
    object-position: center center;
    filter: grayscale(1);
    transition: .3s;

    &:hover{
        filter: grayscale(0);
    }
`

export const Title = styled.p`
    color: #FFF;
    font-family: Inter;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-block: 2rem;
`

export const Description = styled.p`
    width: 27.375rem;
    color: #C4C4C4;
    font-family: Inter;
    font-size: 1rem;
    font-style: normal;
    font-weight: 300;
    line-height: 1.625rem; /* 162.5% */
    margin-bottom: 1.63rem;
`

export const Tech = styled.p`
    color: #6518B4;
    font-family: Inter;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1.5rem; /* 171.429% */
    margin-bottom: 2rem;
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