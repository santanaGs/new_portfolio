import styled from "styled-components";

export const HeaderDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
    justify-content: space-between;
    gap: 0.6rem 1rem;
`

export const Title = styled.h3`
    color: var(--color-text);
    font-size: clamp(1.05rem, 2.4vw, 1.35rem);
    font-weight: 600;
    letter-spacing: -0.025em;
    margin: 0;
`

export const Date = styled.p`
    color: var(--color-subtle);
    font-size: 0.8rem;
    margin: 0;
`

export const Company = styled.p`
    color: var(--color-accent);
    font-size: 0.85rem;
    font-weight: 500;
    margin: 0.7rem 0 1.3rem;
`

export const DescriptionS = styled.div`
    display: grid;
    gap: 0.9rem;

    p {
        color: var(--color-muted);
        font-size: 0.92rem;
        line-height: 1.8;
        margin: 0;
    }
`
