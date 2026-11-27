import styled from "styled-components";

export const Container = styled.article`
    min-width: 0;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    border: 1px solid var(--color-border);
    border-radius: 1rem;
    background: var(--color-surface);
    transition: border-color 180ms ease, transform 180ms ease;

    &:hover {
        transform: translateY(-3px);
        border-color: var(--color-border-strong);
    }

    .preview-link {
        display: block;
        overflow: hidden;
        text-decoration: none;
    }

    .project-details {
        display: flex;
        flex: 1;
        flex-direction: column;
        align-items: flex-start;
        padding: 1.15rem 1.2rem 1.25rem;
    }

    .project-links {
        display: flex;
        flex-wrap: wrap;
        gap: 0.6rem;
        margin-top: auto;
    }
`

export const ContainerImage = styled.div`
    width: 100%;
    aspect-ratio: 16 / 9;
    overflow: hidden;
    background: var(--color-surface-raised);
`

export const ImageS = styled.img`
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    transition: transform 250ms ease;

    ${Container}:hover & {
        transform: scale(1.035);
    }
`

export const Title = styled.h3`
    color: var(--color-text);
    font-size: 1.1rem;
    font-weight: 600;
    letter-spacing: -0.02em;
    margin: 0;
`

export const Description = styled.p`
    color: var(--color-muted);
    font-size: 0.85rem;
    line-height: 1.65;
    margin: 0.65rem 0 0;
`

export const Tech = styled.p`
    color: var(--color-accent);
    font-size: 0.72rem;
    font-weight: 500;
    line-height: 1.5;
    margin: 1rem 0 1.1rem;
`

export const Buttons = styled.a`
    min-height: 2.5rem;
    display: inline-flex;
    align-items: center;
    gap: 0.55rem;
    margin-top: auto;
    padding: 0.6rem 0.85rem;
    border: 1px solid var(--color-border-strong);
    border-radius: 0.6rem;
    color: var(--color-text);
    font-size: 0.8rem;
    font-weight: 600;
    text-decoration: none;
    transition: border-color 180ms ease, background 180ms ease;

    &:hover {
        border-color: var(--color-accent);
        background: var(--color-accent-soft);
    }

    &.repository {
        color: var(--color-muted);
        border-color: var(--color-border);
    }
`

export const ButtonLogo = styled.img`
    width: 0.9rem;
    height: 0.9rem;
`
