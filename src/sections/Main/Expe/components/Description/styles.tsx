import styled from "styled-components";

export const DivS = styled.div`
    width: 70%;
    display: flex;
    flex-direction: column;
    gap: 1.62rem;

    @media screen and (max-width: 768px) {
        margin-top: 3rem;
        width: 100%;
    }
`

export const HeaderDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media screen and (max-width: 768px) {
        width: max-content;
        flex-direction: column;
        align-items: flex-start;
    }

`

export const Title = styled.h3`
    color: #FFF;
    font-size: 1.5rem;
    font-weight: 500;

    @media screen and (max-width: 768px) {
        font-size: 1rem;
    }
`

export const Date = styled.p`
    color: #FFF;
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.5rem; /* 150% */
`

export const SubTitle = styled.p`
    color: #6518B4;
    font-family: Inter;
    font-size: 1rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1.5rem; /* 150% */
`

export const DescriptionS = styled.p`
    color: #C4C4C4;
    font-family: Inter;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 300;
    line-height: 1.75rem; /* 155.556% */
    width: 39.75rem;

    @media screen and (max-width: 768px) {
        color: #C4C4C4;
        font-size: 0.875rem;
        line-height: 1.5rem; /* 171.429% */
        width: 100%;
        text-align: justify;
    }
`