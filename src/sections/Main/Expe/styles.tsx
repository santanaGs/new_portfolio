import styled from "styled-components";

interface SelectProps {
    active: boolean;
}

export const Title = styled.h2`
    color: var(--color-text);
    font-size: clamp(1.8rem, 4vw, 2.8rem);
    font-weight: 600;
    letter-spacing: -0.05em;
    margin: 0;
`

export const OptionsDiv = styled.div`
    display: grid;
    grid-template-columns: minmax(190px, 0.65fr) minmax(0, 1.8fr);
    gap: clamp(2rem, 6vw, 5rem);
    margin-top: 2.5rem;

    @media (max-width: 700px) {
        grid-template-columns: 1fr;
        gap: 1.5rem;
    }
`

export const OptionsSelects = styled.div`
    display: flex;
    flex-direction: column;
    align-items: stretch;

    @media (max-width: 700px) {
        flex-direction: row;
        overflow-x: auto;
        padding-bottom: 0.3rem;
    }
`

export const Options = styled.button<SelectProps>`
    min-height: 3.4rem;
    flex-shrink: 0;
    padding: 0.8rem 1rem;
    border: 0;
    border-left: 2px solid ${props => props.active ? "var(--color-accent)" : "transparent"};
    background: ${props => props.active ? "var(--color-accent-soft)" : "transparent"};
    color: ${props => props.active ? "var(--color-text)" : "var(--color-subtle)"};
    cursor: pointer;
    text-align: left;
    transition: color 180ms ease, background 180ms ease;

    &:hover {
        color: var(--color-text);
        background: var(--color-accent-soft);
    }

    @media (max-width: 700px) {
        min-height: 2.8rem;
        border-left: 0;
        border-bottom: 2px solid ${props => props.active ? "var(--color-accent)" : "transparent"};
    }
`

export const OptionTitle = styled.span`
    display: block;
    font-size: 0.82rem;
    font-weight: 500;
    white-space: nowrap;
`
