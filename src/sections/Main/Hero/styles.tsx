import styled from "styled-components";

export const HeroSection = styled.section`
    min-height: min(760px, calc(100svh - 5rem));
    display: flex;
    align-items: center;
    padding-block: 5rem;

    @media (max-width: 700px) {
        min-height: auto;
        padding-block: 4.5rem 5rem;
    }
`

export const HeroContent = styled.div`
    display: grid;
    grid-template-columns: minmax(0, 1fr) 330px;
    align-items: center;
    gap: clamp(2rem, 8vw, 7rem);

    @media (max-width: 700px) {
        grid-template-columns: 1fr;
        gap: 3rem;
    }
`

export const HeroCopy = styled.div`
    min-width: 0;
`

export const Label = styled.p`
    display: flex;
    align-items: center;
    gap: 0.6rem;
    color: var(--color-accent);
    font-size: 0.8rem;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    margin: 0 0 1.8rem;

    span {
        color: var(--color-subtle);
    }

    @media (max-width: 480px) {
        font-size: 0.68rem;
        letter-spacing: 0.08em;
    }
`

export const Intro = styled.p`
    color: var(--color-muted);
    font-size: 1.1rem;
    margin: 0 0 0.35rem;
`

export const Title = styled.h1`
    color: var(--color-text);
    font-size: clamp(3.2rem, 8vw, 6.4rem);
    font-weight: 700;
    letter-spacing: -0.075em;
    line-height: 0.98;
    margin: 0;

    span {
        color: var(--color-accent);
    }

    @media (max-width: 480px) {
        font-size: clamp(3rem, 16vw, 4.5rem);
    }
`

export const Subtitle = styled.p`
    max-width: 560px;
    color: var(--color-muted);
    font-size: clamp(1rem, 2vw, 1.2rem);
    line-height: 1.8;
    margin: 1.6rem 0 1rem;
`

export const Status = styled.p`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.55rem;
    color: var(--color-subtle);
    font-size: 0.82rem;
    margin: 0 0 2rem;

    > span:first-child {
        width: 0.5rem;
        height: 0.5rem;
        border-radius: 50%;
        background: var(--color-accent);
        box-shadow: 0 0 12px rgba(143, 215, 166, 0.45);
    }

    .divider {
        color: var(--color-border-strong);
    }
`

export const ButtonsDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.8rem;

    a {
        min-height: 3rem;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 0.65rem;
        padding: 0.8rem 1.2rem;
        border: 1px solid transparent;
        border-radius: 0.7rem;
        font-size: 0.88rem;
        font-weight: 600;
        text-decoration: none;
        transition: transform 180ms ease, background 180ms ease, border-color 180ms ease;
    }

    a:hover {
        transform: translateY(-2px);
    }

    .primary {
        color: var(--color-accent-foreground);
        background: var(--color-accent);
    }

    .primary:hover {
        background: var(--color-accent-hover);
    }

    .secondary {
        color: var(--color-text);
        border-color: var(--color-border);
        background: rgba(255, 255, 255, 0.02);
    }

    .secondary:hover {
        border-color: var(--color-accent);
    }
`

export const SocialLinks = styled.div`
    display: flex;
    gap: 1.4rem;
    margin-top: 2rem;
`

export const SocialLink = styled.a`
    color: var(--color-subtle);
    font-size: 0.82rem;
    text-decoration: none;
    transition: color 180ms ease;

    span {
        color: var(--color-accent);
    }

    &:hover {
        color: var(--color-text);
    }
`

export const HeroImageFrame = styled.div`
    position: relative;
    width: 100%;
    max-width: 330px;
    justify-self: end;
    padding: 0.75rem;
    border: 1px solid var(--color-accent-border);
    border-radius: 1.5rem;
    background: linear-gradient(145deg, rgba(143, 215, 166, 0.13), rgba(255, 255, 255, 0.015));

    &::before {
        position: absolute;
        top: -1rem;
        right: -1rem;
        width: 5rem;
        height: 5rem;
        border: 1px solid rgba(143, 215, 166, 0.3);
        border-radius: 1.2rem;
        content: "";
        z-index: -1;
    }

    .image-caption {
        display: flex;
        align-items: center;
        gap: 0.55rem;
        padding: 0.85rem 0.35rem 0.15rem;
        color: var(--color-muted);
        font-size: 0.72rem;
    }

    .caption-dot {
        width: 0.4rem;
        height: 0.4rem;
        border-radius: 50%;
        background: var(--color-accent);
    }

    @media (max-width: 700px) {
        max-width: 250px;
        justify-self: start;
    }
`

export const ProfileImage = styled.img`
    display: block;
    width: 100%;
    aspect-ratio: 1;
    border-radius: 1rem;
    object-fit: cover;
    object-position: center 38%;
    filter: saturate(0.82);
`
