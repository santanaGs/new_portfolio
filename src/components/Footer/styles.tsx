import styled from "styled-components";

export const Content = styled.footer`
    height: 6.25rem;
    display: flex;
    justify-content: space-between; 
    align-items: center;

    @media screen and (max-width: 768px) {
        flex-direction: column;   
        height: 3rem;
        margin-block: 2rem;
    }
`

export const Text = styled.p`
    color: #C4C4C4;
    font-family: Inter;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`