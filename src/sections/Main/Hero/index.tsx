import { Container } from "../../../Global";
import { ButtonsDiv, HeroContent, HeroCopy, HeroImageFrame, HeroSection, Intro, Label, ProfileImage, SocialLink, SocialLinks, Status, Subtitle, Title } from "./styles";

const linkedInUrl = "https://www.linkedin.com/in/gabriel-santana-mobile-dev/";

export default function Hero() {
    return (
        <HeroSection id="home" aria-labelledby="hero-title">
            <Container>
                <HeroContent>
                    <HeroCopy>
                        <Label>Mobile Developer <span>·</span> React Native &amp; TypeScript</Label>
                        <Intro>Olá, eu sou</Intro>
                        <Title id="hero-title">Gabriel <span>Santana.</span></Title>
                        <Subtitle>
                            Desenvolvedor Mobile Pleno na Catho, construindo experiências para mais de 1 milhão de usuários.
                        </Subtitle>
                        <Status><span aria-hidden="true" /> Atualmente na Catho <span className="divider">·</span> São Paulo, Brasil</Status>
                        <ButtonsDiv>
                            <a className="primary" href="#projects">Conheça meus projetos <span aria-hidden="true">↗</span></a>
                            <a className="secondary" href={linkedInUrl} target="_blank" rel="noopener noreferrer">Vamos conversar</a>
                        </ButtonsDiv>
                        <SocialLinks aria-label="Redes profissionais">
                            <SocialLink href={linkedInUrl} target="_blank" rel="noopener noreferrer">LinkedIn <span aria-hidden="true">↗</span></SocialLink>
                            <SocialLink href="https://github.com/santanaGs" target="_blank" rel="noopener noreferrer">GitHub <span aria-hidden="true">↗</span></SocialLink>
                        </SocialLinks>
                    </HeroCopy>
                    <HeroImageFrame>
                        <ProfileImage src="/gabriel-santana.jpg" alt="Gabriel Santana" />
                        <div className="image-caption">
                            <span className="caption-dot" />
                            <span>Mobile first. Código com propósito.</span>
                        </div>
                    </HeroImageFrame>
                </HeroContent>
            </Container>
        </HeroSection>
    );
}
