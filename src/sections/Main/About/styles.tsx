import styled from "styled-components";

export const Section = styled.section`
    padding-block: 6rem;
    border-block: 1px solid var(--color-border);
    background: rgba(255, 255, 255, 0.018);
    scroll-margin-top: 5rem;

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
    margin: 0 0 2rem;
`

export const Content = styled.div`
    display: grid;
    grid-template-columns: minmax(210px, 0.75fr) minmax(0, 1.5fr);
    align-items: start;
    gap: clamp(2rem, 7vw, 6rem);

    @media (max-width: 700px) {
        grid-template-columns: 1fr;
        gap: 2rem;
    }
`

export const Image = styled.img`
    display: block;
    width: 100%;
    max-width: 310px;
    aspect-ratio: 4 / 5;
    border: 1px solid var(--color-accent-border);
    border-radius: 1.2rem;
    object-fit: cover;
    object-position: center 38%;
    filter: saturate(0.78);

    @media (max-width: 700px) {
        max-width: 190px;
        aspect-ratio: 1;
    }
`

export const AboutText = styled.div`
    min-width: 0;

    .biography p {
        color: var(--color-muted);
        font-size: 0.98rem;
        line-height: 1.85;
        margin: 1rem 0 0;
    }
`

export const AboutTitle = styled.h2`
    max-width: 650px;
    color: var(--color-text);
    font-size: clamp(1.8rem, 4vw, 2.8rem);
    font-weight: 600;
    letter-spacing: -0.05em;
    line-height: 1.15;
    margin: 0;
`

export const City = styled.p`
    color: var(--color-subtle);
    font-size: 0.85rem;
    margin: 0.9rem 0 1.6rem;

    span {
        padding-inline: 0.25rem;
        color: var(--color-accent);
    }
`

export const SkillsLabel = styled.p`
    color: var(--color-text);
    font-size: 0.8rem;
    font-weight: 600;
    margin: 1.8rem 0 0.8rem;
`

export const Skills = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.55rem;
`

export const Skill = styled.span`
    padding: 0.5rem 0.7rem;
    border: 1px solid var(--color-border);
    border-radius: 999px;
    color: #c5cec2;
    background: rgba(255, 255, 255, 0.025);
    font-size: 0.76rem;
`

export const AboutLinks = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
    margin-top: 1.8rem;

    a {
        color: var(--color-accent);
        font-size: 0.85rem;
        font-weight: 600;
        text-decoration: none;
    }

    a:hover {
        color: var(--color-accent-hover);
    }
`
