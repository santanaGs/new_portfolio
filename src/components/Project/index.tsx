import { ButtonLogo, Buttons, Container, ContainerImage, Description, ImageS, Tech, Title } from "./styles";

interface ProjectProps {
    image: string;
    title: string;
    description: string;
    tech: string;
    link: string;
    linkLabel?: string;
    repository?: string;
}

export default function Item({ description, image, link, linkLabel = "Ver projeto", repository, tech, title }: ProjectProps) {
    return (
        <Container>
            <a className="preview-link" href={link} target="_blank" rel="noopener noreferrer" aria-label={`Abrir projeto ${title} em nova aba`}>
                <ContainerImage>
                    <ImageS src={image} alt={`Prévia do projeto ${title}`} loading="lazy" />
                </ContainerImage>
            </a>
            <div className="project-details">
                <div>
                    <Title>{title}</Title>
                    <Description>{description}</Description>
                </div>
                <Tech>{tech}</Tech>
                <div className="project-links">
                    <Buttons href={link} target="_blank" rel="noopener noreferrer">
                        {linkLabel}
                        <ButtonLogo src="/link.svg" alt="" aria-hidden="true" />
                    </Buttons>
                    {repository && (
                        <Buttons href={repository} target="_blank" rel="noopener noreferrer" className="repository">
                            Código
                            <ButtonLogo src="/github.svg" alt="" aria-hidden="true" />
                        </Buttons>
                    )}
                </div>
            </div>
        </Container>
    );
}
