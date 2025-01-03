import styled from "styled-components";

interface SelectProps{
    active : boolean;
}

export const Title = styled.h3`
    color: #FFF;
    font-size: 1.5rem;
    font-weight: 600;
    text-transform: uppercase;
`

export const OptionsDiv = styled.div`
    display: flex;
    margin-top: 3rem;

    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
`

export const OptionsSelects = styled.div`
    width: 30%;
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 768px) {
        flex-direction: row;
        overflow-x: scroll;
        width: 100%;
    }
`

export const Options = styled.button<SelectProps>`
    width: 13.0625rem;
    height: 3.4375rem;
    flex-shrink: 0;
    border: none;
    padding: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    
    border-left: 0.25rem solid ${props => props.active ? '#6518B4' : 'transparent'};
    background-color: ${props => props.active ? '#282828' : 'transparent'};

    @media screen and (max-width: 768px) {
        border-left: none;
        border-bottom: 0.25rem solid ${props => props.active ? '#6518B4' : '#151515'};
    }

    
`

export const OptionTitle = styled.p`
    color: #C4C4C4;
    font-family: Inter;
    font-size: 1rem;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
`

export const ExperienceDiv = styled.div`
width: 100%;
background-color: yellow;
height: 5rem;
`