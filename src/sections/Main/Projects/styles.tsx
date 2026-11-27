import styled from "styled-components";

export const Section = styled.section`
    padding-block: 6rem;
    scroll-margin-top: 5rem;

    .section-description {
        max-width: 580px;
        color: var(--color-subtle);
        font-size: 0.95rem;
        line-height: 1.7;
        margin: 0.8rem 0 0;
    }

    @media (max-width: 700px) {
        padding-block: 4.5rem;
    }
`

export const SectionEyebrow = styled.p`
    color: var(--color-accent);
    font-size: 0.75rem;
    font-weight: 600;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    margin: 0 0 0.8rem;
`

export const SectionTitle = styled.h2`
    color: var(--color-text);
    font-size: clamp(1.8rem, 4vw, 2.8rem);
    font-weight: 600;
    letter-spacing: -0.05em;
    margin: 0;
`

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1.2rem;
    margin-top: 2.5rem;

    @media (max-width: 700px) {
        grid-template-columns: 1fr;
        gap: 1rem;
        margin-top: 2rem;
    }
`
