import { ButtonLogo, Buttons, Container, ContainerImage, Description, ImageS, Tech, Title } from "./styles";

interface ProjectsProps {
    image: string,
    title: string,
    description: string,
    tech: string,
    link: string,
}

// image
import linkImage from '../../../public/link.svg'

export default function Item({ description, image, link, tech, title }: ProjectsProps) {
    return (
        <Container>
            <ContainerImage>
                <a href={link} target="_blank">
                <ImageS src={image} alt="" />
                </a>
            </ContainerImage>
            <Title>{title}</Title>
            <Description>{description}</Description>
            <Tech>{tech}</Tech>
            <Buttons href={link} target="_blank">
                <ButtonLogo src={linkImage}/>
                Visualizar
            </Buttons>
        </Container>
    )
}